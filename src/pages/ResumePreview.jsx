

import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'

import PersonalDetailPreview from '@/elements/preview/PersonalDetailPreview';
import SummeryPreview from '@/elements/preview/SummeryPreview';
import ExperiencePreview from '@/elements/preview/ExperiencePreview';
import EducationalPreview from '@/elements/preview/EducationalPreview';
import SkillsPreview from '@/elements/preview/SkillsPreview';

function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [resumeDetails,setResumeDetails]=useState();

    useEffect(()=>{
        if(resumeInfo){
            setResumeDetails(resumeInfo.attributes)
        }
    },[resumeInfo])

    useEffect(()=>{
       
            console.log("resumeDetails",resumeDetails)
        
    },[resumeDetails])

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeDetails?.themeColor
    }}>
        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeDetails} />

        {/* Summery  */}
            <SummeryPreview resumeInfo={resumeDetails} />

        {/* Educational  */}
        {resumeDetails?.education?.length>0&&   <EducationalPreview resumeInfo={resumeDetails} />}

        {/* Professional Experience  */}
           {resumeDetails?.Experience?.length>0&& <ExperiencePreview resumeInfo={resumeDetails} />}

        {/* Skills  */}
        {resumeDetails?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeDetails}/>}
    </div>
  )
}

export default ResumePreview