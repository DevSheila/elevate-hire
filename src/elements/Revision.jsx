import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuAlertCircle } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function Revision() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer bg-red-500 text-white p-1 rounded-full">
          <LuAlertCircle className="h-4 w-4 " />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80  rounded-xl">
        {/* Header */}
        <div className=" flex flex-col space-y-1.5 ">
          {/* Title */}

          <div className="text-xl font-semibold leading-none tracking-tight ">
            Description
          </div>
          {/* Description */}

          <div className=" text-sm text-muted-foreground">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and
            Insightful Analysis.
          </div>

          <div className="flex justify-end mt-2 my-2">
            <button
              onMouseEnter={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              className={`relative px-4 py-2 rounded-full  border-0 outline-none font-normal text-white transition-all duration-300 ease-in-out ${
                isFocused
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-700 text-white"
              }`}
            >
              {isFocused && (
                <span
                  className="absolute inset-0 bg-indigo-700 rounded-full -translate-x-2 -translate-y-2 scale-105 opacity-30"
                  aria-hidden="true"
                ></span>
              )}
              <span className="relative z-10">Fix It</span>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}




