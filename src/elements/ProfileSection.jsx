import React from "react";
import {
  BsEnvelopeFill,
  BsLink45Deg,
  BsTwitter,
  BsFillPhoneFill,
  BsLinkedin,
  BsGithub,
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

function ProfileSection() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <div className="flex flex-col items-start mb-8">
              <h1 className="text-3xl font-bold">Sheila Sharon.</h1>
              <h2 className="text-lg font-semibold">Full Stack Engineer</h2>
              <p className="text-gray-600">Short pitch about yourself</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-8 p-6 md:p-10 bg-gray-800 text-white">
              <ul className="list-none flex flex-col gap-4 mb-6 md:mb-0">
                <li className="flex items-center">
                  <BsEnvelopeFill className="mr-2" />
                  <a
                    href="mailto:sheilasharon10@gmail.com"
                    className="text-white hover:underline truncate"
                  >
                    sheilasharon10@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <BsLink45Deg className="mr-2" />
                  <a
                    href="https://devsheila.github.io/sheilaSite/"
                    className="text-white hover:underline truncate"
                  >
                    devsheila.github.io/sheilaSite/
                  </a>
                </li>
                <li className="flex items-center">
                  <BsTwitter className="mr-2" />
                  <a
                    href="https://twitter.com/SheilaWambui0"
                    className="text-white hover:underline truncate"
                  >
                    twitter.com/SheilaWambui0
                  </a>
                </li>
              </ul>
              <ul className="list-none flex flex-col gap-4">
                <li className="flex items-center">
                  <BsFillPhoneFill className="mr-2" />
                  <a
                    href="tel:+254710617776"
                    className="text-white hover:underline truncate"
                  >
                    +254710617776
                  </a>
                </li>
                <li className="flex items-center">
                  <BsLinkedin className="mr-2" />
                  <a
                    href="https://www.linkedin.com/in/SheilaSharonWambui"
                    className="text-white hover:underline truncate"
                  >
                    linkedin.com/in/SheilaSharonWambui
                  </a>
                </li>
                <li className="flex items-center">
                  <BsGithub className="mr-2" />
                  <a
                    href="https://github.com/DevSheila"
                    className="text-white hover:underline truncate"
                  >
                    github.com/DevSheila
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </DialogTrigger>
        {/* POPUP FORM CONTENT */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProfileSection;
