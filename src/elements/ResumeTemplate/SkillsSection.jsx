import React, { useState, useEffect, useRef } from "react";

const SkillsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [skillsData, setSkillsData] = useState([
    "React JS",
    "Next.JS",
    "Java",
    "Jenkins",
    "Git",
    "AngularJS",
    "Ajax",
    "Node JS",
    "Next JS",
    "React Native",
    "Mongo DB",
    "Spring-boot",
    "C#",
    ".NET",
    "Tailwind CSS",
    "Laravel",
    "Typescript",
    "MySql",
    "Linux",
    "Jira",
    "Python",
  ]);

  const formRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e, index) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index] = e.target.value;
    setSkillsData(updatedSkills);
  };

  const addSkill = () => {
    setSkillsData([...skillsData, ""]);
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skillsData];
    updatedSkills.splice(index, 1);
    setSkillsData(updatedSkills);
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

  return (
    <div className="p-4">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        SKILLS
      </h2>

      {isEditing ? (
        <div ref={formRef} className="rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full outline-none px-3 py-1 rounded"
                />
                {skillsData.length > 1 && (
                  <button
                    onClick={() => removeSkill(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded mt-2 w-full"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addSkill}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full sm:w-auto"
          >
            Add Skill
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded w-full sm:w-auto"
          >
            Save
          </button>
        </div>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {skillsData.map((skill, index) => (
              <button
                key={index}
                className="text-gray-900 px-3 py-1 border-2 border-solid rounded w-full truncate"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
