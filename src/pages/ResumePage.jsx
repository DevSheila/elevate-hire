import React from "react";
import WorkExperienceSection from "@/elements/ResumeTemplate/WorkExperienceSection";
import EducationSection from "@/elements/ResumeTemplate/EducationSection";
import AchievementsSection from "@/elements/ResumeTemplate/AchievementsSection";
import SkillsSection from "@/elements/ResumeTemplate/SkillsSection";
import ProjectsSection from "@/elements/ResumeTemplate/ProjectsSection";
import CertificatesSection from "@/elements/ResumeTemplate/CertificatesSection";
import InterestsSection from "@/elements/ResumeTemplate/InterestsSection";
import ProfileSection from "@/elements/ResumeTemplate/ProfileSection";

const ResumePage = () => {
  return (
    <>
      {/* 
      <div className="bg-gray-600 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md mt-8 mb-8 p-8">
          <ResumePage />
        </div>
      </div> 
      */}

      {/* 
      <div className="bg-gray-600 flex justify-center items-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-white bg-white">My Resume</h1>
        //<div className="bg-white rounded-lg shadow-md w-full max-w-4xl mt-8 mb-8 p-8"> 

        <div className="bg-white shadow-md w-full max-w-6xl mt-8 mb-8 p-4">
          <ResumePage />
        </div>
      </div> 
      */}

      <div className="bg-gray-700 flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
        <h1 className="text-xl font-bold text-white">My Resume</h1>

        <div className="bg-white shadow-md w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 p-4 sm:p-6 md:p-8 rounded">
          <div className="container mx-auto p-4 sm:p-8">
            <ProfileSection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HALF ONE */}
              <div>
                <div className="mt-2">
                  <EducationSection />
                </div>

                <div className="mt-2">
                  <WorkExperienceSection />
                </div>

                <div className="mt-2">
                  <AchievementsSection />
                </div>
              </div>

              {/* HALF TWO */}
              <div>
                <div className="mt-2">
                  <SkillsSection />
                </div>

                <div className="mt-2">
                  <ProjectsSection />
                </div>

                <div className="mt-2">
                  <CertificatesSection />
                </div>

                <div className="mt-2">
                  <InterestsSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
