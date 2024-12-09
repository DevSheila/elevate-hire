import { LocalData } from "@/constants/LocalData";
import React from "react";

function TemplatePreview2() {
  const HandleDownload = () => {
    window.print();
  };
  return (
    <>
      <div className="m-1 p-2 max-w-sm bg-gray-200  rounded-xl overflow-y-auto h-80  scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-300 shadow-sm">
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {LocalData.resumeTemplates?.map((resume, index) => (
            <div
              key={index}
              className="relative flex items-end overflow-hidden rounded-xl hover:border hover:border-cyan-400"
              onClick={HandleDownload}
            >
              <img
                width={250}
                height={250}
                className="rounded-xl object-cover transition-all duration-300"
                src={resume?.source || "/placeholder.png"}
                alt="resume template"
              />

              {resume?.type === "premium" ? (
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-cyan-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ) : (
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-gray-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TemplatePreview2;
