import React from 'react'

function ProjectsPreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:"#9F5BFF"
        }}
        >Projects</h2>
        <hr style={{
            borderColor:"#9F5BFF"
        }} />

        {resumeInfo?.projects?.map((project,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:"#9F5BFF"
                }}>{project?.title}</h2>
                <h2 className='text-xs flex justify-between'>
                <span>{project?.dates.start} To {project?.dates.end} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {projecterience.workSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:project?.description}} />
            </div>
        ))}
    </div>
  )
}

export default ProjectsPreview