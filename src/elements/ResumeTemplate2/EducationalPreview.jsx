import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color: resumeInfo.settings.textColor
    }}
    >Education</h2>
    <hr style={{
        borderColor: resumeInfo.settings.themeColor
    }} />

    {resumeInfo?.educationData.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'
                style={{ 
                    color: resumeInfo.settings.textColor
                }}
            >{education.university}</h2>
            <h2 className='text-xs flex justify-between'>{education?.degree}
            <span>{education?.dates} </span>
            </h2>
            {/* <p className='text-xs my-2'>
                {education?.description}
            </p> */}
        </div>
    ))}

    </div>
  )
}

export default EducationalPreview