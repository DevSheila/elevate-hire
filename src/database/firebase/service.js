import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { firebaseDb } from "./config";

// Function to save or update user data in Firestore
export const saveUserToFirestore = async (user) => {
  const { id, firstName, lastName, emailAddresses, imageUrl } = user;

  try {
    // Reference to Firestore document for the user
    const userRef = doc(firebaseDb, "users", id);

    // Check if user already exists
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      // User exists, update their data
      await setDoc(
        userRef,
        {
          firstName: firstName || "",
          lastName: lastName || "",
          email: emailAddresses[0].emailAddress, // Clerk returns an array of emails
          profileImage: imageUrl || "", // Save profile image URL
        },
        { merge: true }
      ); // Use merge option to update only specified fields

      console.log("User data updated in Firestore!");
    } else {
      // New user, create a new document
      await setDoc(userRef, {
        firstName: firstName || "",
        lastName: lastName || "",
        email: emailAddresses[0].emailAddress,
        profileImage: imageUrl || "", // Save profile image URL
      });

      console.log("New user data saved to Firestore!");
    }
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

// Function to save or update user resume data in Firestore
export const saveResumeToFirestore = async (userId, resume) => {
  const userResumeRef = doc(firebaseDb, "user_resumes", resume.id); // Firestore path

  try {
    // Check if the resume already exists
    const resumeDoc = await getDoc(userResumeRef);

    // Prepare the resume data
    const resumeData = {
      userId: userId,
      profileData: resume.profileData || {},
      educationData: resume.educationData || [],
      workExperienceData: resume.workExperienceData || [],
      achievementsData: resume.achievementsData || [],
      skillsData: resume.skillsData || [],
      projectsData: resume.projectsData || [],
      certificatesData: resume.certificatesData || [],
      interestsData: resume.interestsData || [],
      settings: resume.settings || {},
    };

    console.log("firebase settings",resume.settings)
    // If the document exists, update it; if not, create it
    if (resumeDoc.exists()) {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];

      // Merge the updateDate into a new settings object
      resumeData.settings = {
        ...resumeData.settings,
        updateDate: formattedDate, // Update date to current date
      };
      await setDoc(userResumeRef, resumeData, { merge: true }); // Merge to update only changed fields
      console.log("Resume updated successfully!");
    } else {
      await setDoc(userResumeRef, resumeData);
      console.log("Resume saved successfully!");
    }
  } catch (error) {
    console.error("Error saving or updating resume to Firestore:", error);
  }
};

export const getResumesByUserId = async (userId) => {
  try {
    // Reference to the resumes collection
    const resumesRef = collection(firebaseDb, "user_resumes");

    // Create a query to filter resumes by userId
    const q = query(resumesRef, where("userId", "==", userId));

    // Fetch the documents
    const querySnapshot = await getDocs(q);

    // Map the results to an array
    const resumes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return resumes; // Return the array of resumes
  } catch (error) {
    console.error("Error fetching resumes: ", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Function to get a resume by its specific id
export const getResumeById = async (resumeId) => {
  try {
    // Reference to the specific resume document by id
    const resumeRef = doc(firebaseDb, "user_resumes", resumeId);

    // Fetch the resume document
    const resumeDoc = await getDoc(resumeRef);

    // Check if the document exists
    if (resumeDoc.exists()) {
      // Return the resume data if found
      console.log("resumeDoc.data()", resumeDoc.data());
      return { id: resumeDoc.id, ...resumeDoc.data() };
    } else {
      console.log("No resume found with this ID");
      return null;
    }
  } catch (error) {
    console.error("Error fetching resume by ID: ", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Function to delete a document by its ID
export const deleteDocumentById = async (documentId) => {
  try {
    // Reference to the specific document by collection name and document ID
    const documentRef = doc(firebaseDb, "user_resumes", documentId);

    // Delete the document
    await deleteDoc(documentRef);

    console.log(
      `Document with ID: ${documentId} deleted successfully from collection user_resumes`
    );
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error; // Rethrow error for further handling if needed
  }
};
