import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";
import { SlPlus } from "react-icons/sl";

const AchievementsSection = ({ currentResumeAchievements }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [achievementsData, setAchievementsData] = useState(
    currentResumeAchievements
  );

  const formRef = useRef(null);

  useEffect(() => {
    if (achievementsData) {
      dispatch(updateResume({ achievementsData: achievementsData }));
    }
  }, [achievementsData, dispatch]);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAchievements = [...achievementsData];
    updatedAchievements[index] = {
      ...updatedAchievements[index],
      [name]: value,
    };

    setAchievementsData(updatedAchievements);
  };

  const handlePresentChange = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements[index].present = !updatedAchievements[index].present;
    setAchievementsData(updatedAchievements);
  };

  const addAchievement = () => {
    const updatedAchievement = [
      ...achievementsData,
      {
        title: "",
        dates: "",
        description: "",
        present: false,
      },
    ];

    setAchievementsData(updatedAchievement);
    setTimeout(() => {
      setIsEditing(updatedAchievement.length - 1); // Set edit mode to the new achievement
    }, 0);
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
      <div className="flex-grow md:mr-4">
        <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2 w-full">
          ACHIEVEMENTS
        </h2>

        {achievementsData?.map((achievement, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              // Edit Mode (form inputs)
              <div ref={formRef} className="">
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
              </div>
            ) : (
              // View Mode (content or "New Achievement" placeholder)
              <div
                onClick={() => handleEditClick(index)}
                className={`cursor-pointer pb-2 mb-2 ${
                  !achievement.title &&
                  !achievement.dates &&
                  !achievement.description
                    ? "bg-blue-100 rounded-full p-1"
                    : ""
                }`}

              >
                {achievement.title || achievement.dates || achievement.description ? (
                  <>
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                    <p className="text-gray-500">{achievement.dates}</p>
                    {achievement.present && (
                      <p className="text-gray-500">Present</p>
                    )}
                    <p className="text-gray-500">{achievement.description}</p>
                  </>
                ) : (
                  <p className="text-gray-500 italic rounded-full p-1">
                    New Achievement (Click to Edit)
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        <div onClick={addAchievement} className="flex items-center mt-4">
          <div className="text-cyan-600 text-2xl ">
            <SlPlus />
          </div>

          <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
