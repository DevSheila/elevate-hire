import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2Icon,} from 'lucide-react'
import { SlOptionsVertical } from "react-icons/sl";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("resume", resume);
  }, [resume]);

  const onDelete = () => {
    setLoading(true);
  };
  return (
    <div className="">
      <Link to={"/resumebuilder/resume/" + resume?.id}>
        <article class="rounded-xl bg-white p-3  hover:shadow-lg">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <div
                className=" bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 rounded-xl border-t-4 "
                style={{ borderColor: "#4287f5" }}
              >
                <img src="/doc.png" alt="document Photo" />

                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-slate-400 ml-1 text-sm">80%</span>
                </div>
              </div>
            </div>


            <div className=" flex justify-between ">
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">{resume?.profileData.jobTitle}</h2>
                <p class="text-slate-400 mt-1 text-sm">20th September 2023</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <SlOptionsVertical className="text-black h-4 w-4 cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() =>
                      navigation("/resumebuilder/resume/" + resume.id + "/edit")
                    }
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      navigation("/my-resume/" + resume.id + "/view")
                    }
                  >
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      navigation("/my-resume/" + resume.id + "/view")
                    }
                  >
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setOpenAlert(true)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <AlertDialog open={openAlert}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} disabled={loading}>
                      {loading ? (
                        <Loader2Icon className="animate-spin" />
                      ) : (
                        "Delete"
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </a>
        </article>
      </Link>
    </div>
  );
}

export default ResumeCardItem;
