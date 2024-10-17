import React from "react";
import {
  BsEnvelopeFill,
  BsLink45Deg,
  BsTwitter,
  BsFillPhoneFill,
  BsLinkedin,
  BsGithub,
  BsBehance,
  BsInstagram,
  BsDribbble,
  BsFillPersonFill
} from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditProfile from "../EditProfile";

function ProfileSection({ currentProfileData }) {
  const generateHref = (key, label) => {
    switch (key) {
      case "email":
        return `mailto:${label}`;
      case "phone":
        return `tel:${label}`;
      case "twitter":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("twitter.com")) {
          return `https://${label}`;
        } else if (label.startsWith("http") && label.includes("twitter.com")) {
          return label;
        } else {
          return `https://twitter.com/${label}`;
        }
      case "linkedin":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("linkedin.com")) {
          return `https://${label}`;
        } else if (label.startsWith("http") && label.includes("linkedin.com")) {
          return label;
        } else {
          return `https://linkedin.com/in/${label}`;
        }
      case "github":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("github.com")) {
          return `https://${label}`;
        } else if (label.startsWith("http") && label.includes("github.com")) {
          return label;
        } else {
          return `https://github.com/${label}`;
        }
      case "instagram":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("instagram.com")) {
          return `https://${label}`;
        } else if (
          label.startsWith("http") &&
          label.includes("instagram.com")
        ) {
          return label;
        } else {
          return `https://instagram.com/${label}`;
        }

      case "dribble":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("dribbble.com")) {
          return `https://${label}`;
        } else if (label.startsWith("http") && label.includes("dribbble.com")) {
          return label;
        } else {
          return `https://dribbble.com/${label}`;
        }

      case "behance":
        if (label.startsWith("http")) {
          return label;
        } else if (label.includes("behance.net")) {
          return `https://${label}`;
        } else if (label.startsWith("http") && label.includes("behance.net")) {
          return label;
        } else {
          return `https://behance.net/${label}`;
        }
      case "website":
        return label.startsWith("http") ? label : `https://${label}`;
      default:
        return "#";
    }
  };

  const contactInfo = [
    { key: "email", label: currentProfileData.email, icon: <BsEnvelopeFill /> },
    {
      key: "website",
      label: currentProfileData.website,
      icon: <BsLink45Deg />,
    },
    { key: "twitter", label: currentProfileData.twitter, icon: <BsTwitter /> },
    {
      key: "phone",
      label: currentProfileData.phone,
      icon: <BsFillPhoneFill />,
    },
    {
      key: "linkedin",
      label: currentProfileData.linkedin,
      icon: <BsLinkedin />,
    },
    { key: "github", label: currentProfileData.github, icon: <BsGithub /> },
    {
      key: "instagram",
      label: currentProfileData.instagram,
      icon: <BsInstagram />,
    },
    {
      key: "behance",
      label: currentProfileData.behance,
      icon: <BsBehance />,
    },
    {
      key: "dribble",
      label: currentProfileData.behance,
      icon: <BsDribbble />,
    },
  ];

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <div className="flex flex-col items-start mb-8">
              <h1 className="text-3xl font-bold">{currentProfileData.name}</h1>
              <h2 className="text-lg font-semibold">
                {currentProfileData.jobTitle}
              </h2>
              <p className="text-gray-600">{currentProfileData.description}</p>
            </div>
            <div className="mb-8 p-6 md:p-10 bg-gray-800 text-white">
              <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map(
                  (item, index) =>
                    item.label && (
                      <li key={index} className="flex items-center">
                        {item.icon}
                        <a
                          href={generateHref(item.key, item.label)}
                          className="text-white hover:underline truncate ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </DialogTrigger>

        {/* POPUP FORM CONTENT */}
        <EditProfile currentProfileData={currentProfileData} />
      </Dialog>
    </>
  );
}

export default ProfileSection;
