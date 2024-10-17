import React from 'react'

function InterestsPerview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:"#9F5BFF"
    }}
    >Interests</h2>
    <hr style={{
        borderColor:"#9F5BFF"
    }} />

    <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.interests.map((interest,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{interest}</h2>

            </div>
        ))}
    </div>
    </div>
  )
}

export default InterestsPerview