import React, { useContext, useState } from "react";

export function ThemeSelector() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FF7133",
    "#71FF33",
    "#7133FF",
    "#FF3371",
    "#33FF71",
    "#3371FF",
    "#A1FF33",
    "#33A1FF",
    "#FF5733",
    "#5733FF",
    "#33FF5A",
    "#5A33FF",
    "#FF335A",
    "#335AFF",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const onColorSelect = (color) => {
    setSelectedColor(color);
    console.log("theme color", color);
    // setResumeInfo({
    //   ...resumeInfo,
    //   themeColor: color,
    // });
    // const data = {
    //   data: {
    //     themeColor: color,
    //   },
    // };
    // GlobalApi.UpdateResumeDetail(resumeId, data).then((resp) => {
    //   console.log(resp);
    //   toast("Theme Color Updated");
    // });
  };

  return (
    <>
      <div className=" bg-neutral-50 px-4 pb-4 rounded-xl">
        <h2 className="mb-2 text-sm font-bold ">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((item, index) => (
            <div
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
