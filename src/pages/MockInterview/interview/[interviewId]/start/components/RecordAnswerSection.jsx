import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { AIChatSession } from "@/services/AIModal";
// COMPONENTS
import { Button } from "@/components/ui/button";

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true, // Allow continuous recognition
    useLegacyResults: false,
  });

  // Update user answer with results
  useEffect(() => {
    if (results && results.length > 0) {
      const lastResult = results[results.length - 1].transcript;
      setUserAnswer((prevAns) => prevAns + " " + lastResult); // Append the last result
    }
  }, [results]);

  // Update user answer in the database when stopped
  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer();
    }
  }, [isRecording]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      setUserAnswer(""); // Reset answer when starting new recording
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    setLoading(true);
    try {
      const feedbackPrompt =
        "Question:" +
        mockInterviewQuestion[activeQuestionIndex]?.question +
        ", User Answer:" +
        userAnswer +
        ", Depends on question and user answer for give interview question " +
        " please give us rating for answer and feedback as area of improvement if any " +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      const result = await AIChatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");
      const JsonFeedbackResp = JSON.parse(mockJsonResp);
      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-yyyy"),
      });

      if (resp) {
        // handle success
        setAlertMessage("Your answer has been successfully saved!"); // Success message
        setAlertType("success");
        setAlertVisible(true);
        setUserAnswer("");
      } else {
        // handle failure
        setAlertMessage("Failed to save your answer. Please try again."); // Error message
        setAlertType("error");
        setAlertVisible(true);
        setUserAnswer("");
      }
    } catch (error) {
      setAlertMessage("Failed to save your answer. Please try again."); // Error message
      setAlertType("error");
      setAlertVisible(true);
      setUserAnswer("");
    }

    setLoading(false);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  // Automatically close the alert after a few seconds
  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisible(false);
      }, 5000); // Alert will disappear after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount or re-render
    }
  }, [alertVisible]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        {alertVisible  && (
          <div
            className={`flex items-center p-4 mb-4  rounded-lg${
              alertType === "success"
                ? "text-green-800 bg-green-50"
                : "text-red-800 bg-red-50"
            }`}
            role="alert"
          >
            <div
              className={`ms-3 text-sm font-medium ${
                alertType === "success"
                  ? "text-green-800 bg-green-50"
                  : "text-red-800 bg-red-50"
              }`}
            >
              {alertMessage}
            </div>
            <button
              type="button"
              className={`ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${
                alertType === "success"
                  ? "bg-green-50 text-green-500 focus:ring-green-400  hover:bg-green-200"
                  : "bg-red-50 text-red-500 focus:ring-red-400  hover:bg-red-200"
              }  `}
              data-dismiss-target="#alert-3"
              aria-label="Close"
              onClick={closeAlert}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}


        <img
          src={"/webcam.png"}
          width={150}
          height={150}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 400,
            width: 400,
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 animate-pulse flex gap-2 items-center">
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <>
            <h2 className="text-primary flex gap-2 items-center">
              <Mic /> Record Answer
            </h2>
          </>
        )}
      </Button>
      <p className="text-black">{userAnswer}</p>
    </div>
  );
}

export default RecordAnswerSection;
