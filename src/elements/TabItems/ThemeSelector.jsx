import { LocalData } from "@/constants/LocalData";
import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";

export function ThemeSelector() {
  const [selectedColor, setSelectedColor] = useState();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const dispatch = useDispatch();

  const onColorSelect = (color) => {
    const updatedSettingsData = {
      ...resume.settings, // Spreads the existing settings properties (e.g., themeColor, font)
      themeColor: color, // Updates or adds the textColor property
    };
    console.log("updatedSettingsData", updatedSettingsData);

    setSelectedColor(color); // Update local component state if necessary
    dispatch(updateResume({ settings: updatedSettingsData })); // Dispatch the updated settings
  };

  return (
    <>
      <div className=" bg-neutral-50 px-4 pb-4 rounded-xl">
        <h2 className="mb-2 text-sm font-bold ">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {LocalData.backgroundColors.map((item, index) => (
            <div
              key={index}
              onClick={() => onColorSelect(item)}
              className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor == item && "border border-black"}
             `}
              style={{
                background: item,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
