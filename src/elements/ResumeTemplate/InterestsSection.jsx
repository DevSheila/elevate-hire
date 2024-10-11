import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";

import {
  SlArrowUpCircle,
  SlArrowDownCircle,
  SlTrash,
  SlPlus,
} from "react-icons/sl";

const InterestsSection = ({ currentInterestsData }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [interestsData, setInterestsData] = useState(currentInterestsData);

  const formRef = useRef(null);
  useEffect(() => {
    if (interestsData) {
      dispatch(updateResume({ interestsData: interestsData }));
    }
  }, [interestsData, dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e, index) => {
    const updatedInterests = [...interestsData];
    updatedInterests[index] = e.target.value;
    setInterestsData(updatedInterests);
  };

  const addInterest = () => {
    setInterestsData([...interestsData, ""]);
  };

  const removeInterest = (index) => {
    const updatedInterests = [...interestsData];
    updatedInterests.splice(index, 1);
    setInterestsData(updatedInterests);
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
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="font-bold text-gray-700 text-xl sm:text-2xl leading-7 mb-4 pb-2">
        INTERESTS
      </h2>

      {isEditing ? (
        <div ref={formRef} className="rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestsData.map((interest, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full outline-none px-3 py-2 rounded"
                />
                {interestsData.length > 1 && (
                  <div className="flex flex-row">
                    <div className="m-1 text-base text-gray-700 hover:text-emerald-500 focus:text-emerald-500">
                      <SlArrowUpCircle />
                    </div>

                    <div className="m-1 text-base text-gray-700 hover:text-emerald-500 focus:text-emerald-500 ">
                      <SlArrowDownCircle />
                    </div>

                    <div
                      className="m-1 text-base text-gray-700 hover:text-red-500 focus:text-red-500 "
                      onClick={() => removeInterest(index)}
                    >
                      <SlTrash />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestsData.map((interest, index) => (
              <button
                key={index}
                className="text-gray-900 px-3 py-2 border-2 border-solid rounded w-full truncate"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      )}

      <div onClick={addInterest} className="flex items-center mt-4">
        <div className="text-cyan-600 text-2xl ">
          <SlPlus />
        </div>

        <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
      </div>
    </div>
  );
};

export default InterestsSection;
