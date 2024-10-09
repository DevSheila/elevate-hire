import React, { useState, useEffect, useRef } from "react";
import { SlPlus } from "react-icons/sl";

const EducationSection = () => {
  // State to manage whether we are editing or viewing the content
  const [isEditing, setIsEditing] = useState(false);

  // State to hold the education data
  const [educationData, setEducationData] = useState([
    {
      degree: "Bsc Computer Science",
      university: "Maseno University",
      startDate: "08/2020",
      endDate: "12/2024",
      city: "",
      courses: "",
    },
  ]);

  // Ref for the form container
  const formRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
      [name]: value,
    });
  };

  const addEducation = () => {
    const updatedEducation = [
      ...educationData,
      {
        degree: "",
        university: "",
        startDate: "",
        endDate: "",
        city: "",
        courses: "",
      },
    ];

    setEducationData(updatedEducation);
    setIsEditing(updatedEducation.length - 1);
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when not editing
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4">
      <h2 className=" font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        EDUCATION
      </h2>
      {educationData.map((education, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="rounded-md">
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={handleChange}
                className="border-b mb-2 w-full outline-none"
                placeholder="Degree"
              />
              <input
                type="text"
                name="university"
                value={education.university}
                onChange={handleChange}
                className="border-b mb-2 w-full outline-none"
                placeholder="University"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="startDate"
                  value={education.startDate}
                  onChange={handleChange}
                  className="border-b w-1/2 outline-none"
                  placeholder="Start Date"
                />
                <input
                  type="text"
                  name="endDate"
                  value={education.endDate}
                  onChange={handleChange}
                  className="border-b w-1/2 outline-none"
                  placeholder="End Date"
                />
              </div>
              <input
                type="text"
                name="city"
                value={education.city}
                onChange={handleChange}
                className="border-b mb-2 w-full outline-none"
                placeholder="City, Country or GPA"
              />
              <textarea
                name="courses"
                value={education.courses}
                onChange={handleChange}
                className="border-b mb-2 w-full outline-none"
                placeholder="Courses/Thesis/Project"
              />
            </div>
          ) : (
            // View Mode (content)
            <div onClick={handleEditClick} className="cursor-pointer">
              <h3 className="font-bold text-lg">{education.degree}</h3>
              <p className="text-gray-600">{education.university}</p>
              <p className="font-italic  text-sm leading-5 text-gray-500">{`${education.startDate} - ${education.endDate}`}</p>
              <p className="font-italic  text-sm leading-5 text-gray-500">
                {education.city}
              </p>
              <p className="font-italic  text-sm leading-5 text-gray-500">
                {education.courses}
              </p>
            </div>
          )}
        </div>
      ))}

      <div onClick={addEducation} className="flex items-center mt-4">
        <div className="text-cyan-600 text-2xl ">
          <SlPlus />
        </div>

        <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
      </div>
    </div>
  );
};

export default EducationSection;
