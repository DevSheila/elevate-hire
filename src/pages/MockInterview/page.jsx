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
        <div className="p-10">
          <p className="text-2xl font-bold self-center  whitespace-nowrap dark:text-white">
            Mock Interview<span className="text-blue-600">.</span>
          </p>

          <p className="text-gray-500">
            Create and Start your AI Mockup Interview
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5">
            <AddNewInterview />
          </div>

          {/* Previous Interview List  */}
          <InterviewList />
        </div>
      </div>
    </>
  );
}

export default MockInterview;
