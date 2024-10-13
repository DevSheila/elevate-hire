import React from "react";

const ResumePageLoader = () => {
  return (
    <div className=" animate-pulse bg-violet-50 flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="bg-white overflow-hidden shadow-md w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 p-6 rounded-xl">
        <div className="animate-pulse">
          <div className="flex justify-end mt-2 mb-4">
            <div className="bg-blue-100 h-10 w-32 rounded-xl-md"></div>
          </div>

          {/* Profile Section */}
          <div className="mb-6">
            <div className="h-6 bg-blue-100 rounded-xl mb-2"></div>
            <div className="h-4 bg-blue-100 rounded-xl mb-4 w-3/4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="m-1">
              {/* Education Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                EDUCATION
              </h2>
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <div className="h-6 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2 w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                </div>
              ))}

              {/* Work Experience Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                WORK EXPERIENCE
              </h2>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <div className="h-6 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2 w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                </div>
              ))}

              {/* Work Experience Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                ACHIEVEMENTS
              </h2>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <div className="h-4 bg-blue-100 rounded-xl mb-2 w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                </div>
              ))}
            </div>

            <div className="m-1">
              {/* Skills Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                SKILLS
              </h2>
              <div className="grid grid-cols-2 ">
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
              </div>

              {/* Work Experience Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                PROJECTS
              </h2>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <div className="h-6 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2 w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                </div>
              ))}

              {/* Work Experience Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                CERTIFICATES
              </h2>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <div className="h-4 bg-blue-100 rounded-xl mb-2 w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded-xl mb-2"></div>
                </div>
              ))}

              {/* Skills Section */}
              <h2 className="font-bold text-gray-700 text-lg leading-7 mb-2 pb-2">
                INTERESTS
              </h2>
              <div className="grid grid-cols-2 ">
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
                <div className="h-6 bg-blue-100 rounded-xl m-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ResumePageLoader;
