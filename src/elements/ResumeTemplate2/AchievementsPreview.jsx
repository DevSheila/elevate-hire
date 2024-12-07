import React from "react";

function AchievementsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.settings?.textColor,
        }}
      >
        Achievements
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.settings?.themeColor,
        }}
      />

      {resumeInfo?.achievementsData?.map((achievement, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.settings?.textColor,
            }}
          >
            {achievement?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            <span>{achievement?.dates} </span>
          </h2>

          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: achievement?.description }}
          />
        </div>
      ))}
    </div>
  );
}

export default AchievementsPreview;
