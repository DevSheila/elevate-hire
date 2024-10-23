import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./components/QuestionsSection";
import RecordAnswerSection from "./components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import SideNavbar from "@/elements/SideNavbar";

function StartInterview() {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const { interviewId } = useParams();
  useEffect(() => {
    console.log("interviewId", interviewId);
  }, [interviewId]);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * Used to Get Interview Details by MockId/Interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };
  return (
    <>
      <SideNavbar />
      <div class="h-screen p-4 sm:ml-64 bg-slate-50">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Questions  */}
            <QuestionsSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
            />

            {/* Video/ Audio Recording  */}
            <RecordAnswerSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
              interviewData={interviewData}
            />
          </div>
          <div className="flex justify-end gap-6">
            {activeQuestionIndex > 0 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
              >
                Previous Question
              </Button>
            )}
            {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
              >
                Next Question
              </Button>
            )}
            {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
              <Link
                to={
                  "/mockinterview/interview/" +
                  interviewData?.mockId +
                  "/feedback"
                }
              >
                <Button>End Interview</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartInterview;
