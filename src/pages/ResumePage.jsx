import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// ELEMENTS
import WorkExperienceSection from "@/elements/ResumeTemplate/WorkExperienceSection";
import EducationSection from "@/elements/ResumeTemplate/EducationSection";
import AchievementsSection from "@/elements/ResumeTemplate/AchievementsSection";
import SkillsSection from "@/elements/ResumeTemplate/SkillsSection";
import ProjectsSection from "@/elements/ResumeTemplate/ProjectsSection";
import CertificatesSection from "@/elements/ResumeTemplate/CertificatesSection";
import InterestsSection from "@/elements/ResumeTemplate/InterestsSection";
import ProfileSection from "@/elements/ResumeTemplate/ProfileSection";
import HorizontalToolTabs from "@/elements/Tabs/HorizontalToolTabs";
import Revision from "@/elements/Revision";

// DATA
import { resumeInfo } from "@/database/dummy/sampleResume";
import {
  createResume,
  readResume,
  updateResume,
} from "@/store/slices/resumeSlice";

const ResumePage = () => {
  const [currentResume, setCurrentResume] = useState(resumeInfo);

  const resume = useSelector((state) => state.resumeDetails.resume);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentResume) {
      dispatch(updateResume(currentResume));
    }
  }, [currentResume]);
  return (
    <>
      <HorizontalToolTabs />

      <div className="bg-violet-50 flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="bg-white overflow-hidden shadow-md w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 p-1 sm:p-6 md:p-1 rounded">
          <div className="container p-1 sm:p-1">
            <ProfileSection />

            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* HALF ONE */}
              <div>
                <div className="mt-2">
                  <div className="flex  items-start mb-4">
                    <Revision />
                    <EducationSection currentEducationSection={resume.educationData}/>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <WorkExperienceSection currentWorkExperienceData={resume.workExperienceData}/>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <AchievementsSection currentResumeAchievements={resume.achievementsData}/>
                  </div>
                </div>
              </div>

              {/* HALF TWO */}
              <div>
                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <SkillsSection currentSkillsData={resume.skillsData}/>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <ProjectsSection currentProjectsData={resume.projectsData}/>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-start mb-4">
                    <Revision />
                    <CertificatesSection currentCertificatesData={resume.certificatesData}/>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex  items-start mb-4">
                    <Revision />
                    <InterestsSection currentInterestsData={resume.interestsData}/>
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
