import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SlEnvolope,
  SlLink,
  SlPhone,
  SlSocialBehance,
  SlSocialDribbble,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlTag,
  SlUser,
} from "react-icons/sl";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsList } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "@/store/slices/resumeSlice";
import { useUser } from "@clerk/clerk-react";

function EditProfile() {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumeDetails.resume);
  const currentProfileData = useSelector(
    (state) => state.resumeDetails.resume.profileData
  ); 
  const [isFocused, setIsFocused] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();

  const handleSaveChanges = async () => {
    if (user && user.id) {
      try {
        await saveResumeToFirestore(user.id, resume);
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      console.error("User is not signed in or user ID is missing.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProfileData = {
      ...currentProfileData,
      [name]: value,
    };
    dispatch(updateResume({ profileData: updatedProfileData }));
  };
  useEffect(()=>{
    console.log("updatedProfileData", currentProfileData);

  },[dispatch])



  return (
    <>
      <DialogContent className="w-full ">
        {/* <DialogContent className="sm:max-w-[200px]"> */}
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* behance
: 
""
description
: 
"I am passionate about everything that i do. Being a programmer has taught me that if i have to create anything it's up to me and that as long as i am disciplined i can learn and do anything."
email
: 
"sheilasharon10@gmail.com"
github
: 
""
instagram
: 
""
jobTitle
: 
"Mobile applications developer (Kotlin, Java and Flutter ) | Spring boot dev"
linkedin
: 
"linkedin.com/in/samuel-kimani-kenya"
name
: 
"Samuel Kimani"
phone
: 
""
twitter
: 
""
website
: 
"" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Reusable input field component */}
          {[
            {
              id: "name",
              icon: <SlUser />,
              placeholder: "name",
              defaultValue: currentProfileData.name,
            },
            {
              id: "title",
              icon: <SlTag />,
              placeholder: "job title",
              defaultValue: currentProfileData.jobTitle,
            },
            {
              id: "description",
              icon: <BsList />,
              placeholder: "Short description about yourself ...",
              defaultValue: currentProfileData.description,
            },
            {
              id: "email",
              icon: <SlEnvolope />,
              placeholder: "email",
              defaultValue: currentProfileData.email,
            },
            {
              id: "phone",
              icon: <SlPhone />,
              placeholder: "phone",
              defaultValue: currentProfileData.phone,
            },
            {
              id: "twitter",
              icon: <SlSocialTwitter />,
              placeholder: "twitter",
              defaultValue: currentProfileData.twitter,
            },
            {
              id: "linkedin",
              icon: <SlSocialLinkedin />,
              placeholder: "linkedin",
              defaultValue: currentProfileData.linkedin,
            },
            {
              id: "github",
              icon: <SlSocialGithub />,
              placeholder: "github",
              defaultValue: currentProfileData.github,
            },
            {
              id: "website",
              icon: <SlLink />,
              placeholder: "website",
              defaultValue: currentProfileData.website,
            },
            {
              id: "instagram",
              icon: <SlSocialInstagram />,
              placeholder: "instagram",
              defaultValue: currentProfileData.instagram,
            },
            {
              id: "behance",
              icon: <SlSocialBehance />,
              placeholder: "behance",
              defaultValue: currentProfileData.behance,
            },
            {
              id: "dribbble",
              icon: <SlSocialDribbble />,
              placeholder: "dribbble",
              defaultValue: currentProfileData.dribbble,
            },
          ].map(({ id, icon, placeholder, defaultValue }) => (
            <div
              key={id}
              className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4"
            >
              <Label htmlFor={id} className="text-right truncate">
                {icon}
              </Label>
              <Input
                id={id}
                name={id}
                defaultValue={defaultValue}
                className="col-span-3"
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
              />
            </div>
          ))}
        </div>

        <DialogFooter>

          <div className="flex justify-end mt-2 my-2">
            <button
              onClick={handleSaveChanges}
              onMouseEnter={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              className={`relative px-4 py-2 rounded-full font-normal text-white transition-all duration-300 ease-in-out ${
                isFocused ? "bg-gray-500 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {isFocused && (
                <span
                  className="absolute inset-0 bg-gray-700 rounded-full -translate-x-2 -translate-y-2 scale-105 opacity-30"
                  aria-hidden="true"
                ></span>
              )}
              <span className="relative z-10">Save Changes</span>
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </>
  );
}

export default EditProfile;
