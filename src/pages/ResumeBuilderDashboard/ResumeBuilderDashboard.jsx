import NavBar from "@/elements/NavBar";
import Sidebar from "@/elements/SideNavbar";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { getResumesByUserId } from "@/database/firebase/service";
import ResumeCardItem3 from "./ResumeCardItem";
import AddResume from "./AddResume";
import { Link } from "react-router-dom";
import SideNavbar from "@/elements/SideNavbar";
import ResumeDashboardLoader from "@/elements/Loaders/SkeletonLoader/ResumeDashboardLoader";
import { Brain, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight, BsPlusLg } from "react-icons/bs";

function ResumeBuilderDashboard() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const userResumes = await getResumesByUserId(user.id);
        setResumes(userResumes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [user]);

  return (
    <>
      <SideNavbar />

      {!loading ? (
        <div class="h-screen p-4 sm:ml-64 bg-slate-50">
          <div class="p-2 md:mt-5 ">
            <div className="mx-auto max-w-screen-xl px-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                <div className="text-center md:text-left">

                  <p className="text-2xl font-bold self-center  whitespace-nowrap dark:text-white">
                    My Resumes<span className="text-blue-600">.</span>
                  </p>


                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Start Creating AI resumes for your next job role
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <Button
                    size="sm"
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 border-primary rounded-full text-white text-base sm:text-sm"
                  >
                    <BsPlusLg className="h-5 w-5" /> Add Resume
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                {resumes?.length > 0
                  ? resumes.map((resume, index) => (
                      <ResumeCardItem3 resume={resume} key={index} />
                    ))
                  : [1, 2, 3, 4].map((item, index) => (
                      <div
                        key={index}
                        className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
                      >
                        Create resumes to get started
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ResumeDashboardLoader />
      )}
    </>
  );
}

export default ResumeBuilderDashboard;
