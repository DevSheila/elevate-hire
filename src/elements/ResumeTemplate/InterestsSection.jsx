import React, { useState, useEffect, useRef } from "react";
import { updateResume } from "@/store/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowUpCircle, SlArrowDownCircle, SlTrash, SlPlus } from "react-icons/sl";

const InterestsSection = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const interestsData = useSelector(
    (state) => state.resumeDetails.resume.interestsData
  ); 
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef(null); 

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e, index) => {
    const updatedInterests = [...interestsData];
    updatedInterests[index] = e.target.value;
     dispatch(updateResume({ interestsData: updatedInterests }));
  };

  const addInterest = () => {
    const addedInterests = [...interestsData, ""];  // Add an empty interest

    dispatch(updateResume({ interestsData: addedInterests }));
    setIsEditing(true);  // Ensure edit mode is enabled after adding
  };

  const removeInterest = (index) => {
    const updatedInterests = [...interestsData];
    updatedInterests.splice(index, 1);
     dispatch(updateResume({ interestsData: interestsData }));
  };

  const moveInterestUp = (index) => {
    if (index > 0) {
      const updatedInterests = [...interestsData];
      const temp = updatedInterests[index - 1];
      updatedInterests[index - 1] = updatedInterests[index];
      updatedInterests[index] = temp;
      dispatch(updateResume({ interestsData: updatedInterests }));
      setIsEditing(index - 1);
    }
  };

  const moveInterestDown = (index) => {
    if (index < interestsData.length - 1) {
      const updatedInterests = [...interestsData];
      const temp = updatedInterests[index + 1];
      updatedInterests[index + 1] = updatedInterests[index];
      updatedInterests[index] = temp;
      dispatch(updateResume({ interestsData: updatedInterests }));
      setIsEditing(index + 1);
    }
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
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2" style={{ color: resume.settings.textColor }}>
        INTERESTS
      </h2>

      {isEditing ? (
        <div ref={formRef} className="rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {interestsData?.map((interest, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full outline-none px-3 py-1 rounded"
                  placeholder={interest === "" ? "New Interest (Click to Edit)" : ""}
                />
                {interestsData.length > 1 && (
                  <div className="flex flex-row">
                    <div onClick={() => moveInterestUp(index)} className="m-1 text-base text-gray-700 hover:text-emerald-500 focus:text-emerald-500">
                      <SlArrowUpCircle />
                    </div>

                    <div onClick={() => moveInterestDown(index)} className="m-1 text-base text-gray-700 hover:text-emerald-500 focus:text-emerald-500">
                      <SlArrowDownCircle />
                    </div>

                    <div
                      className="m-1 text-base text-gray-700 hover:text-red-500 focus:text-red-500"
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {interestsData?.map((interest, index) => (
              <button
                key={index}
                className="text-gray-900 px-3 py-1 border-2 border-solid rounded w-full truncate"
              >
                {interest || <span className="italic text-gray-500">New Interest (Click to Edit)</span>}
              </button>
            ))}
          </div>
        </div>
      )} 

      <div onClick={addInterest} className="flex items-center mt-4">
        <div className="text-cyan-600 text-2xl">
          <SlPlus />
        </div>

        <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
      </div>
    </div>
  );
};

export default InterestsSection;
