import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'
        style={{
            color:"#9F5BFF"
        }}
        >
            {resumeInfo?.name} </h2>
        <h2 className='text-center text-sm font-medium'
       >{resumeInfo?.job_title}</h2>
       <h2 className='text-center font-normal text-xs'
        style={{
            color:"#9F5BFF"
        }}>{resumeInfo?.address}</h2>

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs'
             style={{
                color:"#9F5BFF"
            }}>{resumeInfo?.phone}</h2>
            <h2 className='font-normal text-xs'
             style={{
                color:"#9F5BFF"
            }}>{resumeInfo?.email}</h2>

        </div>
        <hr className='border-[1.5px] my-2'
        style={{
            borderColor:"#9F5BFF"
        }}
        />
    </div>
  )
}

export default PersonalDetailPreview