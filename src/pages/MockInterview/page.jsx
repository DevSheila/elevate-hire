import { UserButton } from "@clerk/clerk-react";
import React from "react";
import AddNewInterview from "./components/AddNewInterview";
import InterviewList from "./components/InterviewList";
import SideNavbar from "@/elements/SideNavbar";

function MockInterview() {
  return (
    <>
      <SideNavbar />

      <div class="h-screen p-4 sm:ml-64 bg-slate-50">
        <div class="p-2 md:mt-5 ">
          <div className="mx-auto max-w-screen-xl px-6 bg-slate-50">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold self-center  whitespace-nowrap dark:text-white">
                  Mock Interview<span className="text-blue-600">.</span>
                </p>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  Create and Start your AI Mockup Interview
                </p>
              </div>
              <AddNewInterview />
            </div> 

            {/* Previous Interview List  */}
            <InterviewList />
          </div>
        </div>
      </div>
    </>
  );
}

export default MockInterview;
