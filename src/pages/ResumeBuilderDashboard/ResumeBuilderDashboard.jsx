import NavBar from "@/elements/NavBar";
import React, { useEffect, useState } from "react";


import { BsArrowUpRight, BsPen } from "react-icons/bs";
import { useUser } from "@clerk/clerk-react";
import { getResumesByUserId } from "@/database/firebase/service";
import ResumeCardItem from "./ResumeCardItem";
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

      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl">My Resumes</h2>
        <p>Start Creating AI resume to your next Job role</p>
        <div
          className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
        >
          <AddResume />
          {resumes?.length > 0
            ? resumes.map((resume, index) => (
                <ResumeCardItem
                  resume={resume}
                  key={index}
                />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </>
  );
}


export default ResumeBuilderDashboard;
