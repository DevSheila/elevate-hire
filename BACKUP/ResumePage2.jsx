import React from 'react';
import WorkExperienceSection from "@/elements/ResumeTemplate/WorkExperienceSection";
import EducationSection from "@/elements/ResumeTemplate/EducationSection";
import AchievementsSection from "@/elements/ResumeTemplate/AchievementsSection";
import SkillsSection from "@/elements/ResumeTemplate/SkillsSection";
import ProjectsSection from "@/elements/ResumeTemplate/ProjectsSection";
import CertificatesSection from "@/elements/ResumeTemplate/CertificatesSection";
import InterestsSection from "@/elements/ResumeTemplate/InterestsSection";

const ResumePage2 = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sheila Sharon.</h1>
        <h2 className="text-lg font-semibold">Full Stack Engineer</h2>
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <ul className="list-none">
            <li>
              <a href="mailto:sheilaSharon10@gmail.com" className="text-blue-500 hover:underline">
                sheilaSharon10@gmail.com
              </a>
            </li>
            <li>
              <a href="https://devsheila.github.io/sheilaSite/" className="text-blue-500 hover:underline">
                devsheila.github.io/sheilaSite/
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SheilaWambui0" className="text-blue-500 hover:underline">
                twitter.com/SheilaWambui0
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none">
            <li>
              <a href="tel:+254710617776" className="text-blue-500 hover:underline">
                +254710617776
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/SheilaSharonWambui" className="text-blue-500 hover:underline">
                linkedin.com/in/SheilaSharonWambui
              </a>
            </li>
            <li>
              <a href="https://github.com/DevSheila" className="text-blue-500 hover:underline">
                github.com/DevSheila
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">EDUCATION</h2>
          <EducationSection />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">SKILLS</h2>
          <SkillsSection />
        </div>
      </div>

      <WorkExperienceSection />

      <ProjectsSection />

      <AchievementsSection />

      <CertificatesSection />

      <InterestsSection />

    </div>
  );
};

export default ResumePage2;





