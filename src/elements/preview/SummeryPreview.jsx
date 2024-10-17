import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs'>
        {resumeInfo?.professional_summary}
    </p>
  )
}

export default SummeryPreview