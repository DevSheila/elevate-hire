import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionTabs from "../Tabs/SectionTabs";
import { SlPlus } from "react-icons/sl";
import RichTextEditor from "../RichTextEditor";

const WorkExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [workExperienceData, setworkExperienceData] = useState([
    {
      jobTitle: "Software Developer",
      companyName: "Uzapoint Limited",
      dates: "04/2023 - 05/2023",
      location: "Nairobi, Kenya",
      companyDesc:
        "Digital Vision is a company dealing with provision of web/mobile based solutions, content applications and technological innovation.",
      achievements:
        "Collaborated with a team of 3 developers to create a finances budget tracking mobile app.Fixed bugs on a client’s (Chamasoft) investment group mobile app.Created end-to-end Figma designs for a tenant mobile app for the company’s clients.",
      present: false,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Uzapoint Limited",
      dates: "04/2023 - 05/2023",
      location: "Nairobi, Kenya",
      companyDesc:
        "Digital Vision is a company dealing with provision of web/mobile based solutions, content applications and technological innovation.",
      achievements:
        "Collaborated with a team of 3 developers to create a finances budget tracking mobile app.Fixed bugs on a client’s (Chamasoft) investment group mobile app.Created end-to-end Figma designs for a tenant mobile app for the company’s clients.",
      present: false,
    },
  ]);
  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleSaveClick = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience[index][name] = value;
    setworkExperienceData(updatedWorkExperience);
  };

  const handlePresentChange = (index) => {
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience[index].present =
      !updatedWorkExperience[index].present;
    setworkExperienceData(updatedWorkExperience);
  };

  const addWorkExperience = () => {
    setworkExperienceData([
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
    ]);
  };

  const removeWorkExperience = (index) => {
    const updatedWorkExperience = [...workExperienceData];
    updatedWorkExperience.splice(index, 1);
    setworkExperienceData(updatedWorkExperience);
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

  const handleRichTextEditor = (event) => {
    console.log("handleRichTextEditor", event);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        WORK EXPERIENCE
      </h2>

      {workExperienceData.map((experience, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="rounded-md ">
              <input
                type="text"
                name="jobTitle"
                value={experience.jobTitle}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none p-2"
                placeholder="Job Title"
              />
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none p-2"
                placeholder="Company Name"
              />
              <div className="flex flex-col md:flex-row md:space-x-2">
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
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none p-2"
                placeholder="Location"
              />

              <RichTextEditor
                defaultValue={experience.achievements}
                onRichTextEditorChange={(event) => handleRichTextEditor(event)}
              />

              <button
                onClick={() => handleSaveClick(index)}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
              >
                Save
              </button>
              {/* <div onClick={addAchievement} className="flex items-center mt-4">
                <div className="text-cyan-600 text-2xl ">
                  <SlPlus />
                </div>

                <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
              </div> */}
              <SectionTabs />
            </div>
          ) : (
            // View Mode (content)
            <div
              onClick={() => handleEditClick(index)}
              className="cursor-pointer pb-2 mb-2"
            >
              <h3 className="font-bold text-lg">{experience.jobTitle}</h3>
              <p className="text-gray-600 ">{experience.companyName}</p>
              <p className="text-gray-500">{experience.dates} </p>
              {experience.present && <p className="text-gray-500">Present</p>}

              <p className="text-gray-500">{experience.location}</p>
              <p className="text-gray-500 font-normal italic">
                {experience.companyDesc}
              </p>
              <h3 className="text-gray-600 font-normal italic mt-4 mb-2">
                Achievements/Tasks
              </h3>

              <p className="text-gray-500 mb-2">{experience.achievements}</p>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={addWorkExperience}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Add WorkExperience
      </button>
    </div>
  );
};

export default WorkExperienceSection;
