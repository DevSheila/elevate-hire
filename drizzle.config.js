/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./src/utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      // url: 'postgresql://accounts:mv4Mx0OdHZQA@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
      url: 'postgresql://ai-mock-interview_owner:27CpYTEhPcMv@ep-curly-cloud-a5ndpwmk.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require'
    }
  };