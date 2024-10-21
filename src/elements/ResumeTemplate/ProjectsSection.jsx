import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";

import { Link } from "react-router-dom";
import { SlPlus } from "react-icons/sl";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "../RichTextEditor";
import SectionTabs from "../Tabs/SectionTabs";
const ProjectsSection = ({ currentProjectsData }) => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  
  const [isEditing, setIsEditing] = useState(false);
  const [projectsData, setProjectsData] = useState(currentProjectsData);

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };
  useEffect(() => {
    if (projectsData) {
      dispatch(updateResume({ projectsData: projectsData }));
    }
  }, [projectsData, dispatch]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projectsData];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };

    // Update the state with the new achievements array
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
    if (isEditing === index) {
      setIsEditing(null);
    }
  };
  const handleRichTextEditor = (e, name, index) => {
    const updatedProjects = [...projectsData];
    updatedProjects[index][name] = e.target.value;
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
      <h2 className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2" style={{ color: resume.settings.textColor }}>
        PROJECTS
      </h2>

      {projectsData?.map((project, index) => (
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

              <RichTextEditor
                index={index}
                defaultValue={project.description}
                onRichTextEditorChange={(event) =>
                  handleRichTextEditor(event, "project", index)
                }
              />
                <SectionTabs onRemove={() => removeProject(index)} />

            </div>
          ) : (
            // View Mode (content)
            <div
              onClick={() => handleEditClick(index)}
              className={`cursor-pointer pb-2 mb-2 ${
                !project.title &&
                !project.dates &&
                !project.link &&
                !project.present &&
                !project.description
                  ? "bg-blue-100 rounded-full p-1"
                  : ""
              }`}
            >
              {project.title ||
              project.dates ||
              project.link ||
              project.present ||
              project.description ? (
                <>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-gray-500">{project.dates}</p>
                  {project.present && <p className="text-gray-500">Present</p>}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-clip overflow-hidden ..."
                  >
                    {project.link}
                  </a>
                  <p className="text-gray-500">{project.description}</p>
                </>
              ) : (
                <div className="text-gray-500 italic rounded-xl p-1">
                  New Project (Click to Edit)
                </div>
              )}
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
