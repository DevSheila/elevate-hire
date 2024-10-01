import React, { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [projectsData, setProjectsData] = useState([
    {
      title: 'HustleHub',
      dates: '04/2023 - 05/2023',
      link: 'https://github.com/DevSheila/HustleHubClient',
      description:
        'Led a team of 3 developers to create React JS web app that connects skilled artisans to clients in need household services. Implemented user authentication and authorization functionalities, leveraging redux for state management and react router for seamless navigation between different components and routes. I integrated identity verification API (Fal.lu), ensuring a secure and trustworthy platform for both artisans and clients. Employed Redux Thunk middleware to handle asynchronous operations such as API calls, enabling seamless data retrieval and updates.',
      present: false,
    },
    {
      title: 'Restaurant Advisor',
      dates: '04/2022 - 04/2022',
      link: 'https://github.com/DevSheila/restaurants',
      description:
        'Developed a React.js web application with an intuitive user interface, allowing users to search for restaurants based on various criteria, such as location, cuisine, and ratings. Utilized React.js components, state management, and routing to create a smooth and seamless user experience. Integrated external APIs and databases to retrieve and display relevant restaurant data',
      present: false,
    },
    {
      title: 'Movers API',
      dates: '08/2021 - 08/2021',
      link: 'https://github.com/DevSheila/MoversAPI',
      description:
        'Led a team of 6 developers to successfully build an app for an application that allows users to find moving companies around their areas to help with their relocation. Created and managed our API and databases using Java (Java Spark) and Postgres. Integrated our REST API to app frontend.',
      present: false,
    },
  ]);

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleSaveClick = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projectsData];
    updatedProjects[index][name] = value;
    setProjectsData(updatedProjects);
  };

  const handlePresentChange = (index) => {
    const updatedProjects = [...projectsData];
    updatedProjects[index].present = !updatedProjects[index].present;
    setProjectsData(updatedProjects);
  };

  const addProject = () => {
    setProjectsData([
      ...projectsData,
      {
        title: '',
        dates: '',
        link: '',
        description: '',
        present: false,
      },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projectsData];
    updatedProjects.splice(index, 1);
    setProjectsData(updatedProjects);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(null);
      }
    };

    if (isEditing !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4 border-b border-gray-300" >
      <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>

      {projectsData.map((project, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="border p-4">
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none"
                placeholder="Project Title"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="dates"
                  value={project.dates}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-1/2 outline-none"
                  placeholder="Start Date - End Date"
                />
                <input
                  type="checkbox"
                  checked={project.present}
                  onChange={() => handlePresentChange(index)}
                  className="mt-1"
                />
                <label htmlFor="present" className="ml-2">Present</label>
              </div>
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none"
                placeholder="Project Link"
              />
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none"
                placeholder="Project Description"
              />

              <button
                onClick={() => handleSaveClick(index)}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            // View Mode (content)
            <div onClick={() => handleEditClick(index)} className="cursor-pointer">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-500">{project.dates}</p>
              {project.present && <p className="text-gray-500">Present</p>}
              <a href={project.link} className="text-blue-500 hover:underline">
                {project.link}
              </a>
              <p className="text-gray-500">{project.description}</p>
            </div>
          )}
        </div>
      ))}

      <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Project
      </button>
    </div>
  );
};

export default ProjectsSection;