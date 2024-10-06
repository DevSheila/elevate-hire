import React, { useState, useEffect, useRef } from "react";
import SectionTabs from "../Tabs/SectionTabs";
import { SlPlus } from "react-icons/sl";
import RichTextEditor from "../RichTextEditor";

const WorkExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [workExperienceData, setWorkExperienceData] = useState({
    jobTitle: "Software Developer",
    companyName: "Uzapoint Limited",
    startDate: "12/2023",
    endDate: "Ongoing",
    location: "Nairobi, Kenya",
    companyDesc:
      "Digital Vision is a company dealing with provision of web/mobile based solutions, content applications and technological innovation.",
    achievements: [
      "Collaborated with a team of 3 developers to create a finances budget tracking mobile app.",
      "Fixed bugs on a client’s (Chamasoft) investment group mobile app.",
      "Created end-to-end Figma designs for a tenant mobile app for the company’s clients.",
    ],
  });

  const formRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperienceData({
      ...workExperienceData,
      [name]: value,
    });
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...workExperienceData.achievements];
    updatedAchievements[index] = value;
    setWorkExperienceData({
      ...workExperienceData,
      achievements: updatedAchievements,
    });
  };

  const addAchievement = () => {
    setWorkExperienceData({
      ...workExperienceData,
      achievements: [...workExperienceData.achievements, ""],
    });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...workExperienceData.achievements];
    updatedAchievements.splice(index, 1);
    setWorkExperienceData({
      ...workExperienceData,
      achievements: updatedAchievements,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);


  const handleRichTextEditor=(e,name,index)=>{
    console.log("e",e)
}

  return (
    <div className="p-4 ">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        WORK EXPERIENCE
      </h2>

      {isEditing ? (
        <>
          <div ref={formRef} className="rounded-md ">
            <input
              type="text"
              name="jobTitle"
              value={workExperienceData.jobTitle}
              onChange={handleChange}
              className="border-b mb-2 w-full outline-none p-2"
              placeholder="Job Title"
            />
            <input
              type="text"
              name="companyName"
              value={workExperienceData.companyName}
              onChange={handleChange}
              className="border-b mb-2 w-full outline-none p-2"
              placeholder="Company Name"
            />
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                name="startDate"
                value={workExperienceData.startDate}
                onChange={handleChange}
                className="border-b mb-2 w-full md:w-1/2 outline-none p-2"
                placeholder="Start Date"
              />
              <input
                type="text"
                name="endDate"
                value={workExperienceData.endDate}
                onChange={handleChange}
                className="border-b mb-2 w-full md:w-1/2 outline-none p-2"
                placeholder="End Date"
              />
            </div>
            <input
              type="text"
              name="location"
              value={workExperienceData.location}
              onChange={handleChange}
              className="border-b mb-2 w-full outline-none p-2"
              placeholder="Location"
            />

              <RichTextEditor
                defaultValue=""
                onRichTextEditorChange={(event) =>
                  handleRichTextEditor(event)
                }
              />

            <h3 className="font-bold text-lg mt-4 mb-2">Achievements/Tasks</h3>
            <ul>
              {workExperienceData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center mb-2">
                  <textarea
                    value={achievement}
                    onChange={(e) =>
                      handleAchievementChange(index, e.target.value)
                    }
                    className="outline-none border-b w-full mr-2 p-2"
                    placeholder="Achievement"
                  />
                  {workExperienceData.achievements.length > 1 && (
                    <button
                      onClick={() => removeAchievement(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div onClick={addAchievement} className="flex items-center mt-4">
              <div className="text-cyan-600 text-2xl ">
                <SlPlus />
              </div>

              <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
            </div>
            <SectionTabs />
          </div>
        </>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <h3 className="font-bold text-lg">{workExperienceData.jobTitle}</h3>
          <p className="text-gray-600 ">{workExperienceData.companyName}</p>
          <p className="text-gray-500">{`${workExperienceData.startDate} - ${workExperienceData.endDate}`}</p>
          <p className="text-gray-500">{workExperienceData.location}</p>
          <p className="text-gray-500 font-normal italic">
            {workExperienceData.companyDesc}
          </p>
          <h3 className="text-gray-600 font-normal italic mt-4 mb-2">
            Achievements/Tasks
          </h3>
          <ul>
            {workExperienceData.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-500 mb-2">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceSection;
