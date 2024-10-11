import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
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
