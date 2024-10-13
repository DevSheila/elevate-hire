import React from "react";

function ResumeDashboardLoader() {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 mt-14">
          <div className="mx-auto max-w-screen-xl p-6"></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="h-[280px] rounded-xl bg-slate-200 animate-pulse">
                {/* Top section mimicking the image area */}
                <div className="relative flex items-end overflow-hidden  bg-gray-300 h-[60%] w-full mb-2 rounded-xl"></div>

                {/* Mimicking the title and date */}
                <div className="p-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeDashboardLoader;
