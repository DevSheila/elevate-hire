import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";

import { SlPlus } from "react-icons/sl";
import SectionTabs from "../Tabs/SectionTabs";
const EducationSection = ({ currentEducationSection }) => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);

  const [isEditing, setIsEditing] = useState(false);
  const [educationData, setEducationData] = useState(
    currentEducationSection
  );

  const formRef = useRef(null);
  useEffect(() => {
    if (educationData) {
      dispatch(updateResume({ educationData: educationData }));
    }
  }, [educationData, dispatch]);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...educationData];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    // Update the state with the new certificates array
    setEducationData(updatedEducation);
  };

  const handlePresentChange = (index) => {
    const updatedEducation = [...educationData];
    updatedEducation[index].present = !updatedEducation[index].present;
    setEducationData(updatedEducation);
  };

  const addCertificate = () => {
    const updatedEducation = [
      ...educationData,
      {
        degree: "",
        dates: "",
        present: false,
        university: "",
      },
    ];

    setEducationData(updatedEducation);
    setIsEditing(updatedEducation.length - 1);
  };


  const removeEducation = (index) => {
    const updatedEducation = [...educationData];
    updatedEducation.splice(index, 1);
    setEducationData(updatedEducation);
    if (isEditing === index) {
      setIsEditing(null);
    }
  };

  const moveWorkExperienceUp = (index) => {
    if (index > 0) {
      // Check if the item is not the first one
      const updatedEducation = [...educationData];
      const temp = updatedEducation[index - 1];
      updatedEducation[index - 1] = updatedEducation[index];
      updatedEducation[index] = temp;
      setIsEditing(index - 1);

      setEducationData(updatedEducation);
      dispatch(updateResume({ educationData: updatedEducation }));
    }
  };

  const moveWorkExperienceDown = (index) => {
    if (index < educationData.length - 1) {
      const updatedEducation = [...educationData];
      const temp = updatedEducation[index + 1];
      updatedEducation[index + 1] = updatedEducation[index];
      updatedEducation[index] = temp;
      setIsEditing(index + 1);


      setEducationData(updatedEducation);
      dispatch(updateResume({ educationData: updatedEducation }));
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
    <div className="p-4">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2" style={{ color: resume.settings.textColor }}>
        EDUCATION
      </h2>

      {educationData?.map((education, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="rounded-md">
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Education Title"
              />
              <div className="flex flex-col md:flex-row md:space-x-2">
                <input
                  type="text"
                  name="dates"
                  value={education.dates}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full md:w-1/2 outline-none py-2 mb-2 md:mb-0"
                  placeholder="mm / yyyy - mm / yyyy"
                />
                <div className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    checked={education.present}
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
                value={education.university}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Organization"
              />
                <SectionTabs
                  onRemove={() => removeEducation(index)}
                  onMoveUp={() => moveWorkExperienceUp(index)}
                  onMoveDown={() => moveWorkExperienceDown(index)}
                />

            </div>
          ) : (
            // View Mode (content)
            <div
              onClick={() => handleEditClick(index)}
              className={`cursor-pointer pb-2 mb-2 ${
                !education.degree &&
                !education.dates &&
                !education.link &&
                !education.present &&
                !education.description
                  ? "bg-blue-100 rounded-full p-1"
                  : ""
              }`}
            >
              {education.degree ||
              education.dates ||
              education.link ||
              education.present ||
              education.university ? (
                <>
                  <h3 className="font-bold text-lg">{education.degree}</h3>
                  <p className="text-gray-500">{education.dates}</p>
                  {education.present && (
                    <p className="text-gray-500">Present</p>
                  )}
                  <p className="text-gray-500">{education.university}</p>
                </>
              ) : (
                <div className="text-gray-500 italic rounded-xl p-1">
                  New Education (Click to Edit)
                </div>
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
  );
};

export default EducationSection;
