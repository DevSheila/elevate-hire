import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redo, undo, updateResume } from "@/store/slices/resumeSlice";
import { SlPlus } from "react-icons/sl";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "../RichTextEditor";
import SectionTabs from "../Tabs/SectionTabs";
import { ACHIEVEMENT_PROMPT } from "@/constants/Prompts";

const CertificatesSection = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const certificatesData = useSelector(
    (state) => state.resumeDetails.resume.certificatesData
  ); // Use Redux state directly
  const [isEditing, setIsEditing] = useState(null);
  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index] = {
      ...updatedCertificates[index],
      [name]: value,
    };

    dispatch(updateResume({ certificatesData: updatedCertificates })); // Update Redux state directly
  };

  const handlePresentChange = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index].present = !updatedCertificates[index].present;
    dispatch(updateResume({ certificatesData: updatedCertificates }));
  };

  const addCertificate = () => {
    const updatedCertificate = [
      ...certificatesData,
      {
        title: "",
        dates: "",
        organization: "",
        present: false,
      },
    ];

    dispatch(updateResume({ certificatesData: updatedCertificate }));
    setIsEditing(updatedCertificate.length - 1); // Set edit mode to the new certificate
  };

  const removeCertificates = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates.splice(index, 1);
    dispatch(updateResume({ certificatesData: updatedCertificates }));
    if (isEditing === index) {
      setIsEditing(null);
    }
  };

  const handleRichTextEditor = (e, name, index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index] = {
      ...updatedCertificates[index],
      [name]: e.target.value,
    };

    dispatch(updateResume({ certificatesData: updatedCertificates }));
  };

  const moveCertificateUp = (index) => {
    if (index > 0) {
      const updatedCertificates = [...certificatesData];
      const temp = updatedCertificates[index - 1];
      updatedCertificates[index - 1] = updatedCertificates[index];
      updatedCertificates[index] = temp;
      dispatch(updateResume({ certificatesData: updatedCertificates }));
      setIsEditing(index - 1);
    }
  };

  const moveCertificateDown = (index) => {
    if (index < certificatesData.length - 1) {
      const updatedCertificates = [...certificatesData];
      const temp = updatedCertificates[index + 1];
      updatedCertificates[index + 1] = updatedCertificates[index];
      updatedCertificates[index] = temp;
      dispatch(updateResume({ certificatesData: updatedCertificates }));
      setIsEditing(index + 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(null);
      }
    };

    if (isEditing !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4 flex flex-col md:flex-row">
      <div className="flex-grow md:mr-4">
        <h2
          className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2"
          style={{ color: resume.settings.textColor }}
        >
          CERTIFICATES
        </h2>

        {certificatesData?.map((certificate, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              <div ref={formRef}>
                <input
                  type="text"
                  name="title"
                  value={certificate.title}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none"
                  placeholder="Title"
                />
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <input
                    type="text"
                    name="dates"
                    value={certificate.dates}
                    onChange={(e) => handleChange(e, index)}
                    className="border-b mb-2 md:mb-0 w-full md:w-1/2 outline-none"
                    placeholder="Start Date - End Date"
                  />
                  <div className="flex items-center md:ml-2 mt-1">
                    <input
                      type="checkbox"
                      checked={certificate.present}
                      onChange={() => handlePresentChange(index)}
                      className="mt-1"
                    />
                    <label htmlFor="present" className="ml-2">
                      Present
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  name="university"
                  value={certificate.organization}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none py-2"
                  placeholder="Organization"
                />

                <SectionTabs
                  onRemove={() => removeCertificates(index)}
                  onMoveUp={() => moveCertificateUp(index)}
                  onMoveDown={() => moveCertificateDown(index)}
                />
              </div>
            ) : (
              <div
                onClick={() => handleEditClick(index)}
                className={`cursor-pointer pb-2 mb-2 ${
                  !certificate.title &&
                  !certificate.dates &&
                  !certificate.organization
                    ? "bg-blue-100 rounded-full p-1"
                    : ""
                }`}
              >
                {certificate.title ||
                certificate.dates ||
                certificate.organization ? (
                  <>
                    <h3 className="font-bold text-lg">{certificate.title}</h3>
                    <p className="text-gray-500">{certificate.dates}</p>
                    {certificate.present && (
                      <p className="text-gray-500">Present</p>
                    )}
                    <p className="text-gray-500">{certificate.organization}</p>
                  </>
                ) : (
                  <p className="text-gray-500 italic rounded-full p-1">
                    New Certificate (Click to Edit)
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        <div onClick={addCertificate} className="flex items-center mt-4">
          <div className="text-cyan-600 text-2xl ">
            <SlPlus />
          </div>
          <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
