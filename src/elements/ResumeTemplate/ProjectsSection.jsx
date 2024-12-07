import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redo, undo, updateResume } from "@/store/slices/resumeSlice";
import { SlPlus } from "react-icons/sl";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "../RichTextEditor";
import SectionTabs from "../Tabs/SectionTabs";
import { PROJECT_PROMPT  } from "@/constants/Prompts";

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const projectsData = useSelector(
    (state) => state.resumeDetails.resume.projectsData
  ); // Use Redux state directly
  const [isEditing, setIsEditing] = useState(null);
  const formRef = useRef(null);

  const handleEditClick = (index) => { 
    setIsEditing(index);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projectsData];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };

    dispatch(updateResume({ projectsData: updatedProjects })); // Update Redux state directly
  };

  const handlePresentChange = (index) => {
    const updatedProjects = [...projectsData];
    updatedProjects[index].present = !updatedProjects[index].present;
    dispatch(updateResume({ projectsData: updatedProjects }));
  };

  const addProject = () => {
    const updatedProject = [
      ...projectsData,
      {
        title: "",
        dates: "",
        link: "",
        description: "",
        present: false,
      },
    ];

    dispatch(updateResume({ projectsData: updatedProject }));
    setIsEditing(updatedProject.length - 1); // Set edit mode to the new Project
  };

  const removeProjects = (index) => {
    const updatedProjects = [...projectsData];
    updatedProjects.splice(index, 1);
    dispatch(updateResume({ projectsData: updatedProjects }));
    if (isEditing === index) {
      setIsEditing(null);
    }
  };

  const handleRichTextEditor = (e, name, index) => {
    const updatedProjects = [...projectsData];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: e.target.value,
    };

    dispatch(updateResume({ projectsData: updatedProjects }));
  };

  const moveProjectUp = (index) => {
    if (index > 0) {
      const updatedProjects = [...projectsData];
      const temp = updatedProjects[index - 1];
      updatedProjects[index - 1] = updatedProjects[index];
      updatedProjects[index] = temp;
      dispatch(updateResume({ projectsData: updatedProjects }));
      setIsEditing(index - 1);
    }
  };

  const moveProjectDown = (index) => {
    if (index < projectsData.length - 1) {
      const updatedProjects = [...projectsData];
      const temp = updatedProjects[index + 1];
      updatedProjects[index + 1] = updatedProjects[index];
      updatedProjects[index] = temp;
      dispatch(updateResume({ projectsData: updatedProjects }));
      setIsEditing(index + 1);
    }
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
    <div className="p-4 flex flex-col md:flex-row">
      <div className="flex-grow md:mr-4">
        <h2
          className="font-bold text-gray-700 text-2xl leading-7 mb-2 pb-2"
          style={{ color: resume.settings.textColor }}
        >
          Project
        </h2>

        {projectsData?.map((project, index) => (
          <div key={index} className="mb-4">
            {isEditing === index ? (
              <div ref={formRef}>
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b mb-2 w-full outline-none"
                  placeholder="Title"
                />
                <div className="flex flex-col md:flex-row md:space-x-2">
                  <input
                    type="text"
                    name="dates"
                    value={project.dates}
                    onChange={(e) => handleChange(e, index)}
                    className="border-b mb-2 md:mb-0 w-full md:w-1/2 outline-none"
                    placeholder="Start Date - End Date"
                  />
                  <div className="flex items-center md:ml-2 mt-1">
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
                  name="description"
                  index={index}
                  prompt={PROJECT_PROMPT .replace(
                    "{ProjectTitle}",
                    project.title
                  )} 
                  defaultValue={project.description}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "description", index)
                  }
                />
                <SectionTabs
                  onRemove={() => removeProjects(index)}
                  onMoveUp={() => moveProjectUp(index)}
                  onMoveDown={() => moveProjectDown(index)}
                />
              </div>
            ) : (
              <div
                onClick={() => handleEditClick(index)}
                className={`cursor-pointer pb-2 mb-2 ${
                  !project.title &&
                  !project.dates &&
                  !project.description
                    ? "bg-blue-100 rounded-full p-1"
                    : ""
                }`}
              >
                {project.title ||
                project.dates ||
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
                  <p className="text-gray-500 italic rounded-full p-1">
                    New Project (Click to Edit)
                  </p>
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
    </div>
  );
};

export default ProjectsSection;
