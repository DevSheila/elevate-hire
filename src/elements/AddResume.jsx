import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsArrowUpRight, BsPlusLg } from "react-icons/bs";
import { Loader2 } from "lucide-react";
import { getLinkedInProfileData } from "@/services/linkedin";
import { v4 as uuidv4 } from "uuid";
import { saveResumeToFirestore } from "@/database/firebase/service";
import { useUser } from "@clerk/clerk-react";

function AddResume({ updateResumes }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false); // State to manage dialog open/close
  const createResume = async () => {
    try {
      setLoading(true);
      if (profileLink && resumeTitle) {
        let profileData = await getLinkedInProfileData(profileLink,resumeTitle);

        if (profileData && user) {

          await saveResumeToFirestore(user.id, profileData);
        }
      }

      if (!profileLink && resumeTitle) {
        console.log("here")
        const profileData = {
          id: uuidv4(),
          settings: {
            title:`${resumeTitle}`,
          },
        };

        if (profileData && user) {

          await saveResumeToFirestore(user.id, profileData);
        }
      }
      setOpen(false); // Close the dialog after successful resume creation
    } catch (error) {
      console.log("error", error);
    } finally {
      updateResumes();
      setLoading(false);
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="mt-4 md:mt-0">
            <Button
              size="sm"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 border-primary rounded-full text-white text-base sm:text-sm"
            >
              <BsPlusLg className="h-5 w-5" /> Add Resume
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Enter resume name below and choose a quickstart option.
            </DialogDescription>
          </DialogHeader>

          {/* FORM */}
          <Label htmlFor="title">Resume Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Ex. Full Stack resume"
            onChange={(e) => setResumeTitle(e.target.value)}
            className="rounded-full"
            required
          />

          <Label>Select Quickstart Option (Optional)</Label>
          <RadioGroup
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)} // Set selected option
          >
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="linkedin" id="linkedinoption" />
                <Label htmlFor="linkedinoption">LinkedIn Profile URL</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="resume" id="resumeoption" />
                <Label htmlFor="resumeoption">Resume File</Label>
              </div>
            </div>
          </RadioGroup>

          {/* Conditionally render LinkedIn input field */}
          {selectedOption === "linkedin" && (
            <>
              <Label htmlFor="linked">LinkedIn Profile URL</Label>
              <Input
                id="linked"
                placeholder="https://www.linkedin.com/in/your-profile-name/"
                className="rounded-full"
                onChange={(e) => setProfileLink(e.target.value)}
              />
            </>
          )}

          {/* Conditionally render Resume input field */}
          {selectedOption === "resume" && (
            <>
              <Label htmlFor="resume">Upload Resume</Label>
              <Input id="resume" type="file" className="rounded-full" />
            </>
          )}

          <Button
            disabled={!resumeTitle || loading}
            type="submit"
            size="sm"
            className="px-3 rounded-full"
            onClick={createResume}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <BsArrowUpRight className="font-bold h-4 w-4 m-1" />
            )}
            <span className="text-white rounded-full m-1 ">Submit</span>
          </Button>

          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddResume;
