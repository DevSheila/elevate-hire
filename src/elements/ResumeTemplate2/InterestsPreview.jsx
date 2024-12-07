import React from 'react'

function InterestsPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:resumeInfo?.settings?.textColor 
    }}
    >Interests</h2>
    <hr style={{
        borderColor:resumeInfo?.settings?.themeColor
    }} />

    <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.interestsData.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{skill}</h2>

            </div>
        ))}
    </div>
    </div>
  )
}

export default InterestsPreview