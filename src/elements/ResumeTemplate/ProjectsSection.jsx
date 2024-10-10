import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SlPlus } from "react-icons/sl";
const ProjectsSection = ({ currentProjectsData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [projectsData, setProjectsData] = useState(currentProjectsData);

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
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
        title: "",
        dates: "",
        link: "",
        description: "",
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4">
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2">
        PROJECTS
      </h2>

      {projectsData.map((project, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="rounded-md">
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Project Title"
              />
              <div className="flex flex-col md:flex-row md:space-x-2">
                <input
                  type="text"
                  name="dates"
                  value={project.dates}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 md:w-1/2 outline-none py-2"
                  placeholder="Start Date - End Date"
                />
                <div className="flex items-center mt-2 md:mt-0">
                  <input
                    type="checkbox"
                    checked={project.present}
                    onChange={() => handlePresentChange(index)}
                    className="mt-1"
                  />
                  <label htmlFor="present" className="ml-2">
                    Present
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2 "
                placeholder="Project Link"
              />
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none py-2"
                placeholder="Project Description"
                rows="4"
              />
            </div>
          ) : (
            // View Mode (content)
            <div
              onClick={() => handleEditClick(index)}
              className="cursor-pointer pb-2 mb-2"
            >
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-500">{project.dates}</p>
              {project.present && <p className="text-gray-500">Present</p>}
              {/* <Link to={project.link}>
              <p className="text-blue-500 hover:underline text-clip overflow-hidden ...">
                {project.link}
              </p>
              </Link> */}
              <a
                href={project.link}
                className="text-blue-500 hover:underline text-clip overflow-hidden ..."
              >
                {project.link}
              </a>
              <p className="text-gray-500">{project.description}</p>
            </div>
          )}
        </div>
      ))}

      <div onClick={addProject} className="flex items-center mt-4">
        <div className="text-cyan-600 text-2xl ">
          <SlPlus />
        </div>

        <div className="border-t-2 border-dotted border-cyan-600 w-full ml-2"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
