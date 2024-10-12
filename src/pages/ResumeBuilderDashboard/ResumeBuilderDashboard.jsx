import NavBar from "@/elements/NavBar";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { getResumesByUserId } from "@/database/firebase/service";
import ResumeCardItem3 from "./ResumeCardItem";
import AddResume from "./AddResume";

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

  useEffect(() => {
    if (resumes != []) {
      console.log("resumes", resumes);
    }
  }, [resumes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NavBar />
      <section class="pt-5">
        <div class="mx-auto  max-w-screen-xl p-6">
          <h1 class="px-2 font-sans text-2xl font-bold text-gray-900">
            My Resumes<span class="text-blue-600">.</span>
          </h1>
          <p className="px-2">Start Creating AI resume to your next Job role</p>
          <div class="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
            {resumes?.length > 0
              ? resumes.map((resume, index) => (
                  <ResumeCardItem3 resume={resume} key={index} />
                ))
              : [1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
                  ></div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumeBuilderDashboard;
