import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color: resumeInfo?.settings?.textColor
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor: resumeInfo?.settings?.themeColor
        }} />

        {resumeInfo?.workExperienceData?.map((experience,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color: resumeInfo?.settings?.textColor
                }}>{experience?.jobTitle}</h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span>{experience?.dates} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.achievements}} />
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview