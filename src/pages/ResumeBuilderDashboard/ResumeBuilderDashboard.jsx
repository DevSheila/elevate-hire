import React, { useEffect, useState } from "react";
// CLERK
import { useUser } from "@clerk/clerk-react";

// ELEMENTS
import ResumeDashboardLoader from "@/elements/Loaders/SkeletonLoader/ResumeDashboardLoader";
import SideNavbar from "@/elements/SideNavbar";
import ResumeCardItem3 from "./ResumeCardItem";
import AddResume from "@/elements/AddResume";

// FIREBASE
import { getResumesByUserId } from "@/database/firebase/service";
import { Button } from "@/components/ui/button";

function ResumeBuilderDashboard() {
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch and update resumes
  const fetchResumes = async () => {
    try {
      setLoading(true)
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

      <div class="h-screen p-4 sm:ml-64 bg-slate-50">
        <div class="p-2 md:mt-5 ">
          <div className="mx-auto max-w-screen-xl px-6 bg-slate-50">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold self-center  whitespace-nowrap dark:text-white">
                  My Resumes<span className="text-blue-600">.</span>
                </p>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  Start Creating AI resumes for your next job role
                </p>
              </div>

              {/* ADD RESUME SECTION */}
              <AddResume updateResumes={fetchResumes} />
            </div>
            {!loading ? (
              <div>
                {resumes?.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                    {resumes.map((resume, index) => (
                      <ResumeCardItem3 resume={resume} key={index} updateResumes={fetchResumes} />
                    ))}
                  </div>
                ) : (
                  <div
                    className=" py-20 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                    x-chunk="dashboard-02-chunk-1"
                  >
                    <div className="flex flex-col items-center gap-1 text-center">
                      <h3 className="text-2xl font-bold tracking-tight">
                        You have no resumes
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click below above to create a resume
                      </p>
                      <AddResume updateResumes={fetchResumes} />
                    </div>
                  </div>
                )}
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

export default ResumeBuilderDashboard;
