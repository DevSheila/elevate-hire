import React, { useState, useEffect, useRef } from "react";

const AchievementsSection = () => {
  const [isEditing, setIsEditing] = useState(null);
  const [achievementsData, setAchievementsData] = useState([
    {
      title: "Nairobi Innovation Week Winner (2023)",
      dates: "05/2023 - 05/2023",
      description:
        "Led a team of 3 developers to create a web app that connects skilled artisans to clients in need of household services. The team came in 3rd place in NIW.",
      present: false,
    },
    {
      title: "GDSC Web Developer Lead (Maseno University)",
      dates: "06/2021 - 07/2022",
      description:
        "Mentored and inspired over 120 fellow tech students through consistent weekly sessions.",
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
    const updatedAchievements = [...achievementsData];
    updatedAchievements[index][name] = value;
    setAchievementsData(updatedAchievements);
  };

  const handlePresentChange = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements[index].present = !updatedAchievements[index].present;
    setAchievementsData(updatedAchievements);
  };

  const addAchievement = () => {
    setAchievementsData([
      ...achievementsData,
      {
        title: "",
        dates: "",
        description: "",
        present: false,
      },
    ]);
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements.splice(index, 1);
    setAchievementsData(updatedAchievements);
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
      {/* Achievements section */}
      <div className="flex-grow md:mr-4">
        <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
          ACHIEVEMENTS
        </h2>

        {achievementsData.map((achievement, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              // Edit Mode (form inputs)
              <div ref={formRef} className="rounded-md">
                <input
                  type="text"
                  name="title"
                  value={achievement.title}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none"
                  placeholder="Title"
                />
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <input
                    type="text"
                    name="dates"
                    value={achievement.dates}
                    onChange={(e) => handleChange(e, index)}
                    className="border-b mb-2 md:mb-0 w-full md:w-1/2 outline-none"
                    placeholder="Start Date - End Date"
                  />
                  <div className="flex items-center md:ml-2 mt-1">
                    <input
                      type="checkbox"
                      checked={achievement.present}
                      onChange={() => handlePresentChange(index)}
                      className="mt-1"
                    />
                    <label htmlFor="present" className="ml-2">
                      Present
                    </label>
                  </div>
                </div>
                <textarea
                  name="description"
                  value={achievement.description}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none"
                  placeholder="Description"
                />
                <button
                  onClick={() => handleSaveClick(index)}
                  className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              // View Mode (content)
              <div
                onClick={() => handleEditClick(index)}
                className="cursor-pointer  pb-2 mb-2"
              >
                <h3 className="font-bold text-lg">{achievement.title}</h3>
                <p className="text-gray-500">{achievement.dates}</p>
                {achievement.present && (
                  <p className="text-gray-500">Present</p>
                )}
                <p className="text-gray-500">{achievement.description}</p>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addAchievement}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Achievement
        </button>
      </div>
    </div>
  );
};

export default AchievementsSection;