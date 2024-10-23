import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redo, undo, updateResume } from "@/store/slices/resumeSlice";
import { SlPlus } from "react-icons/sl";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "../RichTextEditor";
import SectionTabs from "../Tabs/SectionTabs";
import { ACHIEVEMENT_PROMPT } from "@/constants/Prompts";

const EducationSection = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const educationData  = useSelector(
    (state) => state.resumeDetails.resume.educationData 
  ); // Use Redux state directly
  const [isEditing, setIsEditing] = useState(null);
  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...educationData ];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    dispatch(updateResume({ educationData : updatedEducation })); // Update Redux state directly
  };

  const handlePresentChange = (index) => {
    const updatedEducation = [...educationData ];
    updatedEducation[index].present = !updatedEducation[index].present;
    dispatch(updateResume({ educationData : updatedEducation }));
  };

  const addEducation = () => {
    const updatedEducation = [
      ...educationData ,
      {
        degree: "",
        dates: "",
        university: "",
        present: false,
      },
    ];

    dispatch(updateResume({ educationData : updatedEducation }));
    setIsEditing(updatedEducation.length - 1); // Set edit mode to the new education
  };

  const removeEducation = (index) => {
    const updatedEducation = [...educationData ];
    updatedEducation.splice(index, 1);
    dispatch(updateResume({ educationData : updatedEducation }));
    if (isEditing === index) {
      setIsEditing(null);
    }
  };

  const handleRichTextEditor = (e, name, index) => {
    const updatedEducation = [...educationData ];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: e.target.value,
    };

    dispatch(updateResume({ educationData : updatedEducation }));
  };

  const moveEducationUp = (index) => {
    if (index > 0) {
      const updatedEducation = [...educationData ];
      const temp = updatedEducation[index - 1];
      updatedEducation[index - 1] = updatedEducation[index];
      updatedEducation[index] = temp;
      dispatch(updateResume({ educationData : updatedEducation }));
      setIsEditing(index - 1);
    }
  };

  const moveEducationDown = (index) => {
    if (index < educationData .length - 1) {
      const updatedEducation = [...educationData ];
      const temp = updatedEducation[index + 1];
      updatedEducation[index + 1] = updatedEducation[index];
      updatedEducation[index] = temp;
      dispatch(updateResume({ educationData : updatedEducation }));
      setIsEditing(index + 1);
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
      <div className="flex-grow md:mr-4">
        <h2
          className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2"
          style={{ color: resume.settings.textColor }}
        >
          EDUCATION
        </h2>

        {educationData ?.map((education, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              <div ref={formRef}>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none"
                  placeholder="Title"
                />
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <input
                    type="text"
                    name="dates"
                    value={education.dates}
                    onChange={(e) => handleChange(e, index)}
                    className="border-b mb-2 md:mb-0 w-full md:w-1/2 outline-none"
                    placeholder="Start Date - End Date"
                  />
                  <div className="flex items-center md:ml-2 mt-1">
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
                  onMoveUp={() => moveEducationUp(index)}
                  onMoveDown={() => moveEducationDown(index)}
                />
              </div>
            ) : (
              <div
                onClick={() => handleEditClick(index)}
                className={`cursor-pointer pb-2 mb-2 ${
                  !education.degree &&
                  !education.dates &&
                  !education.university
                    ? "bg-blue-100 rounded-full p-1"
                    : ""
                }`}
              >
                {education.degree ||
                education.dates ||
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
                  <p className="text-gray-500 italic rounded-full p-1">
                    New Education (Click to Edit)
                  </p>
                )}
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
    </div>
  );
};

export default EducationSection;
