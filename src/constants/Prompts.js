import { LocalData } from "./LocalData";

export const REACT_APP_EXTRACT_IMG_PROMPT = `
Extract the information from the provided resume/CV and organize it into a JSON format. 
Please follow this structure:${LocalData.sampleResumeInfo}`;

export const WORK_EXPERIENCE_PROMPT = `
  Please provide 5-7 bullet points summarizing  experience in  {positionTitle}. 

  -Focus on quantifiable achievements and key responsibilities.
  -Avoid using generic language or stating obvious duties.
  -Use action verbs and strong language to highlight your impact.

  Example:

  -Increased customer satisfaction by 15% through implementation of new customer service protocols.
  -Led a team of 5 engineers to develop and launch a new product feature within 3 months.
`;

export const ACHIEVEMENT_PROMPT = `
  Please provide 5-7 bullet points summarizing your accomplishments and responsibilities in {achievementTitle}.

  - Emphasize quantifiable results and significant contributions.
  - Avoid generic descriptions or listing routine tasks.
  - Use impactful action verbs to showcase your influence and achievements.

  Example:
  - Boosted customer satisfaction by 15% through the introduction of enhanced customer service protocols.
  - Managed and led a team of 5 engineers to successfully launch a new product feature within a 3-month timeframe.
`;



export const PROJECT_PROMPT = `
  Please summarize your key accomplishments and responsibilities in {projectTitle} in 5-7 bullet points:

  - Highlight quantifiable results and your most significant contributions.
  - Avoid generic descriptions or listing routine tasks.
  - Start each point with a strong action verb to emphasize your impact.

  Example:
  - Increased customer satisfaction by 15% by implementing enhanced service protocols.
  - Led a team of 5 engineers to launch a new product feature within 3 months.
`;


