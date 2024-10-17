import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";
import { Link } from "react-router-dom";
import SectionTabs from "../Tabs/SectionTabs";
import { SlPlus } from "react-icons/sl";
import RichTextEditor from "../RichTextEditor";

const WorkExperienceSection = ({ currentWorkExperienceData }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null); // Make sure `isEditing` starts as null
  const [workExperienceData, setworkExperienceData] = useState(
    currentWorkExperienceData
  );

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  useEffect(() => {
    if (workExperienceData) {
      dispatch(updateResume({ workExperienceData: workExperienceData }));
    }
  }, [workExperienceData, dispatch]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [name]: value,
    };

    setworkExperienceData(updatedWorkExperience);
    dispatch(updateResume({ workExperienceData: updatedWorkExperience }));
  };

  const handleRichTextEditor = (e, name, index) => {
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience[index][name] = e.target.value;
    setworkExperienceData(updatedWorkExperience);
  };

  const handlePresentChange = (index) => {
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience[index].present =
      !updatedWorkExperience[index].present;
    setworkExperienceData(updatedWorkExperience);
  };

  const addWorkExperience = () => {
    const updatedWorkExperience = [
      ...workExperienceData,
      {
        jobTitle: "",
        companyName: "",
        dates: "",
        location: "",
        companyDesc: "",
        achievements: "",
        present: false,
      },
    ];

    setworkExperienceData(updatedWorkExperience);
    setIsEditing(updatedWorkExperience.length - 1); // Set `isEditing` to the index of the new experience
  };

  const removeWorkExperience = (index) => {
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience.splice(index, 1);
    setworkExperienceData(updatedWorkExperience);
    if (isEditing === index) {
      setIsEditing(null);
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
      {/* Work Experience section */}
      <div className="flex-grow md:mr-4">
        <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
          WORK EXPERIENCE
        </h2>

        {workExperienceData?.map((experience, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              // Edit Mode (form inputs)
              <div ref={formRef} className="rounded-md  ">
                <label className="text-gray-600 font-normal italic mt-4 mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none p-2"
                  placeholder="Job Title"
                />
                <label className="text-gray-600 font-normal italic mt-4 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none p-2"
                  placeholder="Company Name"
                />
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <label className="text-gray-600 font-normal italic mt-4 mb-2">
                    Dates
                  </label>
                  <input
                    type="text"
                    name="dates"
                    value={experience.dates}
                    onChange={(e) => handleChange(e, index)}
                    className="border-b mb-2 md:w-1/2 outline-none py-2"
                    placeholder="Start Date - End Date"
                  />
                  <div className="flex items-center mt-2 md:mt-0">
                    <input
                      type="checkbox"
                      checked={experience.present}
                      onChange={() => handlePresentChange(index)}
                      className="mt-1"
                    />
                    <label htmlFor="present" className="ml-2">
                      Present
                    </label>
                  </div>
                </div>
                <label className="text-gray-600 font-normal italic mt-4 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={experience.location}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none p-2"
                  placeholder="Location"
                />
                <label className="text-gray-600 font-normal italic mt-4 mb-2">
                  Achievements/Tasks
                </label>

                <RichTextEditor
                  index={index}
                  defaultValue={experience.achievements}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "workexperience", index)
                  }
                />

                <SectionTabs />
              </div>
            ) : (
              // View Mode (content)
              <div
                onClick={() => handleEditClick(index)}
                className={`cursor-pointer pb-2 mb-2 ${
                  !experience.jobTitle &&
                  !experience.dates &&
                  !experience.companyName &&
                  !experience.present &&
                  !experience.location &&
                  !experience.companyDesc &&
                  !experience.achievements
                    ? "bg-blue-100 rounded-full p-1"
                    : ""
                }`}
              >
                {experience.jobTitle ||
                experience.dates ||
                experience.companyName ||
                experience.present ||
                experience.location ||
                experience.companyDesc ||
                experience.achievements ? (
                  <>
                    <h3 className="font-bold text-lg">{experience.jobTitle}</h3>
                    <p className="text-gray-600 ">{experience.companyName}</p>
                    <p className="text-gray-500">{experience.dates} </p>
                    {experience.present && (
                      <p className="text-gray-500">Present</p>
                    )}

                    <p className="text-gray-500">{experience.location}</p>
                    <p className="text-gray-500 font-normal italic">
                      {experience.companyDesc}
                    </p>

                    <p
                      className="text-gray-500 mb-2"
                      dangerouslySetInnerHTML={{
                        __html: experience.achievements,
                      }}
                    />
                  </>
                ) : (
                  <div className="text-gray-500 italic rounded-xl p-1">
                    New Work Experience (Click to Edit)
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        <div onClick={addWorkExperience} className="flex items-center mt-4">
          <div className="text-cyan-600 text-2xl ">
            <SlPlus />
          </div>

          <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
