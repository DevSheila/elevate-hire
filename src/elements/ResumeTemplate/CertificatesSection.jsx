import React, { useState, useEffect, useRef } from "react";
import { SlPlus } from "react-icons/sl";
const CertificatesSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [certificatesData, setCertificatesData] = useState([
    {
      title: "Web Applications Development",
      dates: "",
      present: false,
      organization: "Moringa School",
    },
    {
      title: "Android Mobile Applications Development",
      dates: "",
      present: false,
      organization: "Moringa School",
    },
    {
      title: "DevOps Engineering",
      dates: "",
      present: false,
      organization: "Moringa School",
    },
  ]);

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index][name] = value;
    setCertificatesData(updatedCertificates);
  };

  const handlePresentChange = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index].present = !updatedCertificates[index].present;
    setCertificatesData(updatedCertificates);
  };

  const addCertificate = () => {
    setCertificatesData([
      ...certificatesData,
      {
        title: "",
        dates: "",
        present: false,
        organization: "",
      },
    ]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates.splice(index, 1);
    setCertificatesData(updatedCertificates);
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
    <div className="p-4">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        CERTIFICATES
      </h2>

      {certificatesData.map((certificate, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="rounded-md">
              <input
                type="text"
                name="title"
                value={certificate.title}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Certificate Title"
              />
              <div className="flex flex-col md:flex-row md:space-x-2">
                <input
                  type="text"
                  name="dates"
                  value={certificate.dates}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full md:w-1/2 outline-none py-2 mb-2 md:mb-0"
                  placeholder="mm / yyyy - mm / yyyy"
                />
                <div className="flex items-center mt-1">
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
                name="organization"
                value={certificate.organization}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Organization"
              />
            </div>
          ) : (
            // View Mode (content)
            <div
              onClick={() => handleEditClick(index)}
              className="cursor-pointer pb-2 mb-2"
            >
              <h3 className="font-bold text-lg">{certificate.title}</h3>
              <p className="text-gray-500">{certificate.dates}</p>
              {certificate.present && <p className="text-gray-500">Present</p>}
              <p className="text-gray-500">{certificate.organization}</p>
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
  );
};

export default CertificatesSection;
