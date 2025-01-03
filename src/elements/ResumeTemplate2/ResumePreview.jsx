import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//COMPONENTS
import PersonalDetailPreview from "./PersonalDetailPreview";
import SummeryPreview from "./SummeryPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationalPreview from "./EducationalPreview";
import SkillsPreview from "./SkillsPreview";

// USER
import { useUser } from "@clerk/clerk-react"; // Import Clerk's useUser hook

// DATA
import { updateResume } from "@/store/slices/resumeSlice";
import {
  getResumeById,
  saveResumeToFirestore,
} from "@/database/firebase/service";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import ResumePageLoader from "@/elements/Loaders/SkeletonLoader/ResumePageLoader";
import { persistor } from "@/store/store";
import HorizontalToolTabs from "../Tabs/HorizontalToolTabs";
import InterestsPreview from "./InterestsPreview";
import ProjectsPreview from "./ProjectsPreview";
import AchievementsPreview from "./AchievementsPreview";

function ResumePreview() {
  const { id: resumeId } = useParams(); // Use resumeId for clarity
  const { user, isLoaded, isSignedIn } = useUser();
  const [isFocused, setIsFocused] = useState(false);
  const [currentResume, setCurrentResume] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const resume = useSelector((state) => state.resumeDetails.resume);
  const resumeDetails = useSelector((state) => state.resumeDetails);
  const dispatch = useDispatch();

  if (!isLoaded) {
    return <div>Loading user data...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your resume.</div>;
  }

  const handleSaveChanges = async () => {
    if (user && user.id) {
      try {
        await saveResumeToFirestore(user.id, resume);
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      console.error("User is not signed in or user ID is missing.");
    }
  };

  const handleClearPersistedData = () => {
    persistor
      .purge()
      .then(() => {
        console.log("Persisted state has been purged");
      })
      .catch((err) => {
        console.error("Error purging persisted state:", err);
      });
  };
  useEffect(() => {
    const fetchResume = async () => {
      setIsLoading(true);
      if (!resume || resume.id !== resumeId) {
        try {
          const fetchedResume = await getResumeById(resumeId);
          if (fetchedResume) {
            // Dispatch action to save fetched resume to Redux store
            dispatch(updateResume(fetchedResume));
            console.log("resumeDetails", resumeDetails); // Log the fetched resume
            console.log("Fetched Resume:", fetchedResume); // Log the fetched resume
          } else {
            console.log("No resume found with this ID.");
          }
        } catch (error) {
          console.error("Error fetching resume from Firestore: ", error);
        }
      }
      // Set currentResume only if resume has been updated
      setCurrentResume(resume);
      setIsLoading(false);
    };
    fetchResume();
  }, [resumeId, resume, dispatch]);

  useEffect(() => {
    console.log("Current Resume Updated:", currentResume);
  }, [currentResume]);

  useEffect(() => {
    console.log("Redux Resume Updated:", resume);
  }, [resume]);

  return (
    <>
      {!isLoading ? (
        <>
          <HorizontalToolTabs />

          <div className="transition-opacity duration-500 opacity-100 bg-violet-50 flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
            <div className="bg-white overflow-hidden shadow-md w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 p-1 sm:p-6 md:p-1 rounded">
              <div className="container p-1 sm:p-1">
                <div className="flex justify-end mt-2 my-2">
                  <button
                    onClick={handleSaveChanges}
                    onMouseEnter={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(false)}
                    className={`relative px-4 py-2 rounded-full font-normal text-white transition-all duration-300 ease-in-out ${
                      isFocused
                        ? "bg-gray-500 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {isFocused && (
                      <span
                        className="absolute inset-0 bg-gray-700 rounded-full -translate-x-2 -translate-y-2 scale-105 opacity-30"
                        aria-hidden="true"
                      ></span>
                    )}
                    <span className="relative z-10">Save Changes</span>
                  </button>
                </div>
                {/* Personal Detail  */}
                <PersonalDetailPreview resumeInfo={resume} />

                {/* Summery  */}
                <SummeryPreview resumeInfo={resume?.profileData} />

                {/* Educational  */}
                <EducationalPreview resumeInfo={resume} />

                {/* Professional Experience  */}
                <ExperiencePreview resumeInfo={resume} />

                {/* Projects  */}
                <ProjectsPreview resumeInfo={resume} />

                {/* Achievements  */}
                <AchievementsPreview resumeInfo={resume} />

                {/* Skills  */}
                <SkillsPreview resumeInfo={resume} />

                {/* Interests  */}
                <InterestsPreview resumeInfo={resume} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <ResumePageLoader />
      )}
    </>
  );
}

export default ResumePreview;
