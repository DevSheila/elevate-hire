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
import { Loader2Icon } from "lucide-react";
import { SlOptionsVertical } from "react-icons/sl";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
  };

  return (
    <>
      <Link to={"/resumebuilder/" + resume?.id} target="_blank">
        <article class="rounded-xl bg-white p-3  hover:shadow-lg">
          <div class="relative flex items-end overflow-hidden rounded-xl bg-blue-100">
            <div
              className=" bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 rounded-xl border-t-4 "
              style={{ borderColor: "#4287f5" }}
            >
              <img src="/template/template1.png" alt="document Photo" />

              <div class="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-blue-100 p-2 ">

                <span class="text-blue-500 ml-1 text-sm">80%</span>
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
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
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
        </article>
      </Link>
    </>
  );
}

export default ResumeCardItem;
