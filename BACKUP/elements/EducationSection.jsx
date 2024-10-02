import React, { useState, useEffect, useRef } from 'react';

const EducationSection = () => {
  // State to manage whether we are editing or viewing the content
  const [isEditing, setIsEditing] = useState(false);

  // State to hold the education data
  const [educationData, setEducationData] = useState({
    degree: 'Bsc Computer Science',
    university: 'Maseno University',
    startDate: '08/2020',
    endDate: '12/2024',
    city: '',
    courses: '',
  });

  // Ref for the form container
  const formRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);  // Switch back to view mode after saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
      [name]: value,
    });
  };

  // Effect to detect click outside the form to toggle back to view mode
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      // Add the event listener when in editing mode
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when not editing
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="text-lg font-semibold mb-2">EDUCATION</h2>

      {isEditing ? (
        // Edit Mode (form inputs)
        <div ref={formRef} className="border p-4">
          <input
            type="text"
            name="degree"
            value={educationData.degree}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="Degree"
          />
          <input
            type="text"
            name="university"
            value={educationData.university}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="University"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="startDate"
              value={educationData.startDate}
              onChange={handleChange}
              className="border-b w-1/2 outline-none"
              placeholder="Start Date"
            />
            <input
              type="text"
              name="endDate"
              value={educationData.endDate}
              onChange={handleChange}
              className="border-b w-1/2 outline-none"
              placeholder="End Date"
            />
          </div>
          <input
            type="text"
            name="city"
            value={educationData.city}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="City, Country or GPA"
          />
          <textarea
            name="courses"
            value={educationData.courses}
            onChange={handleChange}
            className="border-b mb-2 w-full outline-none"
            placeholder="Courses/Thesis/Project"
          />

          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        // View Mode (content)
        <div onClick={handleEditClick} className="cursor-pointer">
          <h3 className="font-bold text-lg">{educationData.degree}</h3>
          <p className="text-gray-600">{educationData.university}</p>
          <p className="text-gray-500">{`${educationData.startDate} - ${educationData.endDate}`}</p>
          <p className="text-gray-500">{educationData.city}</p>
          <p className="text-gray-500">{educationData.courses}</p>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
