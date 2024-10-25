import React, { useEffect, useState } from "react";
// CLERK
import { useUser } from "@clerk/clerk-react";

// ELEMENTS
import ResumeDashboardLoader from "@/elements/Loaders/SkeletonLoader/ResumeDashboardLoader";
import SideNavbar from "@/elements/SideNavbar";
import AddResume from "@/elements/AddResume";
import { Button } from "@/components/ui/button";

// FIREBASE
import { getResumesByUserId } from "@/database/firebase/service";
import TemplateCardItem from "./TemplateCardItem";
import { LocalData } from "@/constants/LocalData";

function Templates() {
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch and update resumes
  const fetchResumes = async () => {
    try {
      setLoading(true);
      const userResumes = await getResumesByUserId(user.id);
      setResumes(userResumes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, [user]);

  return (
    <>
      <SideNavbar />

      <div class="h-screen  sm:ml-64 bg-slate-50">
        <div class="  bg-slate-50">
          <div className="mx-auto max-w-screen-xl px-6 ">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
              <div className="text-center md:text-left md:mt-5">
                <p className="text-2xl font-bold self-center  whitespace-nowrap dark:text-white">
                  Job Winning Templates <span className="text-blue-600">.</span>
                </p>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  Each resume template is designed to follow the exact rules you
                  need to get hired faster.
                </p>
              </div>
            </div>

            
            {!loading ? (
              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                  {LocalData.resumeTemplates?.map((resume, index) => (
                    <TemplateCardItem resume={resume} key={index} />
                  ))}
                </div>
              </div>
            ) : (
              <ResumeDashboardLoader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Templates;
