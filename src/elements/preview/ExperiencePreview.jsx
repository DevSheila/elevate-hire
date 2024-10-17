import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:"#9F5BFF"
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:"#9F5BFF"
        }} />

        {resumeInfo?.experience?.map((exp,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:"#9F5BFF"
                }}>{exp?.title}</h2>
                <h2 className='text-xs flex justify-between'>{exp?.company}, 
                {exp?.location}
                <span>{exp?.dates.start} To {exp?.dates.end} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:exp?.description}} />
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview