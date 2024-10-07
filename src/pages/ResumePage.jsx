import React from "react";
import WorkExperienceSection from "@/elements/ResumeTemplate/WorkExperienceSection";
import EducationSection from "@/elements/ResumeTemplate/EducationSection";
import AchievementsSection from "@/elements/ResumeTemplate/AchievementsSection";
import SkillsSection from "@/elements/ResumeTemplate/SkillsSection";
import ProjectsSection from "@/elements/ResumeTemplate/ProjectsSection";
import CertificatesSection from "@/elements/ResumeTemplate/CertificatesSection";
import InterestsSection from "@/elements/ResumeTemplate/InterestsSection";
import ProfileSection from "@/elements/ResumeTemplate/ProfileSection";
import HorizontalToolTabs from "@/elements/Tabs/HorizontalToolTabs";
import HorizontalToolTabs1 from "@/elements/Tabs/HorizontalToolTabs1";
import Revision from "@/elements/Revision";

const ResumePage = () => {
  return (
    <>
      <HorizontalToolTabs1 />

      <div className="bg-gray-700 flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="bg-white overflow-hidden shadow-md w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 p-1 sm:p-6 md:p-1 rounded">
          <div className="container p-1 sm:p-1">
            <ProfileSection />

            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* HALF ONE */}
              <div>
                <div className="mt-2">
                  <div className="flex  items-start mb-4">
                    <Revision />
                    <EducationSection />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <WorkExperienceSection />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <AchievementsSection />
                  </div>
                </div>
              </div>

              {/* HALF TWO */}
              <div>
                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <SkillsSection />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <ProjectsSection />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <CertificatesSection />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex  items-start mb-4">
                    <Revision />
                    <InterestsSection />
                  </div>
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
