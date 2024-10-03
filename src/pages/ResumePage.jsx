import React from "react";
import WorkExperienceSection from "@/elements/WorkExperienceSection";
import EducationSection from "@/elements/EducationSection";
import AchievementsSection from "@/elements/AchievementsSection";
import SkillsSection from "@/elements/SkillsSection";
import ProjectsSection from "@/elements/ProjectsSection";
import CertificatesSection from "@/elements/CertificatesSection";
import InterestsSection from "@/elements/InterestsSection";
import ProfileSection from "@/elements/ProfileSection";

const ResumePage = () => {
  return (
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
  );
};

export default ResumePage;




