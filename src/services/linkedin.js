import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getLinkedInProfileData = async (profileLink,resumeTitle) => {
  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_LINKEDIN_API_BASE_URL}/person`,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_LINKEDIN_API_KEY,
      "x-rapidapi-host": "linkedin-data-scraper.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      link: profileLink,
    },
  };

  try {
    const response = await axios.request(options);

    const formattedData = formatLinkedInProfileToTemplate(response.data.data);
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
  
    formattedData.id = uuidv4(); //add id
    formattedData.settings.title = resumeTitle; //add title
    formattedData.settings.updateDate = formattedDate; //add current date

    return formattedData;
  } catch (error) {
    console.error(error);
  }
};

// Template function to format LinkedIn response to Firebase schema
export const formatLinkedInProfileToTemplate = (data) => {
  const formattedProfile = {
    profileData: {
      name: data.fullName || "",
      jobTitle: data.headline || "",
      description: data.about || "",
      email: data.emailRequired || "",
      phone: "", // LinkedIn data doesn't include phone number
      website: data.creatorWebsite || "",
      twitter: "", // Could be added if available
      linkedin: `linkedin.com/in/${data.publicIdentifier}` || "",
      instagram: "", // Could be added if available
      github: "", // Could be added if available
      behance: "", // Could be added if available
    },
    educationData: Array.isArray(data.educations)
      ? data.educations.map((edu) => ({
          degree: edu.subtitle || "",
          university: edu.title || "",
          startDate: "", // No direct date fields, needs manual extraction
          endDate: "", // No direct date fields, needs manual extraction
          city: "",
          courses: "",
        }))
      : [], // Return empty array if `educations` is undefined
    workExperienceData: Array.isArray(data.experiences)
      ? data.experiences.map((exp) => ({
          jobTitle: exp.title || "",
          companyName: exp.subtitle || "",
          dates: exp.caption || "",
          location: exp.metadata || "",
          companyDesc: "", // Not directly provided
          achievements: exp.subComponents
            ? exp.subComponents
                .map((sub) =>
                  sub.description.map((desc) => desc.text).join(". ")
                )
                .join(". ")
            : "",
          present: exp.caption.includes("Present") || false,
        }))
      : [], // Return empty array if `experiences` is undefined
    achievementsData: Array.isArray(data.honorsAndAwards)
      ? data.honorsAndAwards.map((award) => ({
          title: award.title || "",
          dates: award.subtitle || "",
          description: award.subComponents
            ? award.subComponents
                .map((sub) =>
                  sub.description.map((desc) => desc.text).join(". ")
                )
                .join(". ")
            : "",
          present: award.subtitle.includes("Present") || false,
        }))
      : [], // Return empty array if `honorsAndAwards` is undefined
    skillsData: Array.isArray(data.skills)
      ? data.skills.map((skill) => skill.title || "")
      : [], // Return empty array if `skills` is undefined
    projectsData: Array.isArray(data.projects)
      ? data.projects.map((project) => ({
          title: project.title || "",
          dates: project.subtitle || "",
          link: "", // Could be added if available
          description: project.subComponents
            ? project.subComponents
                .map((sub) =>
                  sub.description.map((desc) => desc.text).join(". ")
                )
                .join(". ")
            : "",
          present: project.subtitle.includes("Present") || false,
        }))
      : [], // Return empty array if `projects` is undefined
    certificatesData: Array.isArray(data.licenseAndCertificates)
      ? data.licenseAndCertificates.map((cert) => ({
          title: cert.title || "",
          dates: cert.caption || "",
          present: false,
          organization: cert.subtitle || "",
        }))
      : [], // Return empty array if `licenseAndCertificates` is undefined
    interestsData: Array.isArray(data.interests)
      ? data.interests.map((interest) => interest.section_name)
      : [], // Return empty array if `interests` is undefined
    settings: {
      themeColor: "#374151", // Default theme color, customize as needed
      textColor: "#374151", // Default text color, customize as needed
    },
  };


  return formattedProfile;
};
