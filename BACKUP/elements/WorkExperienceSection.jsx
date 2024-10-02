import React, { useState, useEffect, useRef } from 'react';

const WorkExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [workExperienceData, setWorkExperienceData] = useState({
    jobTitle: 'Software Developer',
    companyName: 'Uzapoint Limited',
    startDate: '12/2023',
    endDate: 'Ongoing',
    location: 'Nairobi, Kenya',
    achievements: [
      'Collaborated with a team of 3 developers to create a finances budget tracking mobile app.',
      'Fixed bugs on a client’s (Chamasoft) investment group mobile app.',
      'Created end to end Figma designs for a tenant mobile app for the company’s clients.',
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
      achievements: [...workExperienceData.achievements, ''],
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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="text-lg font-semibold mb-2">WORK EXPERIENCE</h2>

      {isEditing ? (
        <div ref={formRef} className=" p-4">
          <input
            type="text"
            name="jobTitle"
            value={workExperienceData.jobTitle}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="Job Title"
          />
          <input
            type="text"
            name="companyName"
            value={workExperienceData.companyName}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="Company Name"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="startDate"
              value={workExperienceData.startDate}
              onChange={handleChange}
              className="border-b w-1/2 outline-none"
              placeholder="Start Date"
            />
            <input
              type="text"
              name="endDate"
              value={workExperienceData.endDate}
              onChange={handleChange}
              className="border-b w-1/2 outline-none"
              placeholder="End Date"
            />
          </div>
          <input
            type="text"
            name="location"
            value={workExperienceData.location}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="Location"
          />

          <h3 className="font-bold text-lg mt-4 mb-2">Achievements/Tasks</h3>
          <ul>
            {workExperienceData.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center mb-2">
                <textarea
                  value={achievement}
                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                  className=" outline-none border-b w-full  mr-2"
                  placeholder="Achievement"
                />
                {workExperienceData.achievements.length > 1 && (
                  <button onClick={() => removeAchievement(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button onClick={addAchievement} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Achievement
          </button>

          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <h3 className="font-bold text-lg">{workExperienceData.jobTitle}</h3>
          <p className="text-gray-600">{workExperienceData.companyName}</p>
          <p className="text-gray-500">{`${workExperienceData.startDate} - ${workExperienceData.endDate}`}</p>
          <p className="text-gray-500">{workExperienceData.location}</p>
          <h3 className="font-bold text-lg mt-4 mb-2">Achievements/Tasks</h3>
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