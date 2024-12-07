import React from 'react'

function ProjectsPreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color: resumeInfo?.settings?.textColor
        }}
        >Projects</h2>
        <hr style={{
            borderColor: resumeInfo?.settings?.themeColor
        }} />

        {resumeInfo?.projectsData?.map((project,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color: resumeInfo?.settings?.textColor
                }}>{project?.title}</h2>
                <h2 className='text-xs flex justify-between'>{project?.link}
                <span>{project?.dates} </span>
                </h2>

                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:project?.description}} />
            </div>
        ))}
    </div>
  )
}

export default ProjectsPreview