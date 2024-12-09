import React, { useEffect } from "react";

function PersonalDetailPreview({ resumeInfo }) {

  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.settings?.textColor,
        }}
      >
        {resumeInfo?.profileData?.name}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.profileData?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: resumeInfo?.settings?.themeColor,
        }}
      >
        {resumeInfo?.profileData?.linkedin}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeInfo?.settings?.themeColor,
          }}
        >
          {resumeInfo?.profileData?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeInfo?.settings?.themeColor,
          }}
        >
          {resumeInfo?.profileData?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.settings?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
