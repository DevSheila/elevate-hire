import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs'>
        {resumeInfo?.description}
    </p>
  )
} 

export default SummeryPreview