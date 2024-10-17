import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:"#9F5BFF"
    }}
    >Education</h2>
    <hr style={{
        borderColor:"#9F5BFF"
    }} />

    {resumeInfo?.education.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'
                style={{
                    color:"#9F5BFF"
                }}
            >{education.universityName}</h2>
            <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}
            <span>{education?.dates.start} - {education?.dates.start}</span>
            </h2>
        </div>
    ))}

    </div>
  )
}

export default EducationalPreview