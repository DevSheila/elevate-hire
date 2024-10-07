import React from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

import { SlActionUndo, SlActionRedo, SlGrid, SlLayers } from "react-icons/sl";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TfiBrush } from "react-icons/tfi";
import { ThemeSelector } from "../TabItems/ThemeSelector";
import ThemeColor from "../TabItems/ThemeColor";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HorizontalToolTabs1 = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-10 bg-transparent py-2 px-4 rounded-lg"
      style={{
        transform: "translateY(-5px)",
      }}
    >
      <div className="flex justify-center items-center bg-transparent py-2 px-4  ">
        <div className=" flex justify-center items-center space-x-2 bg-gray-600 px-4">
          {/* <Tabs className="w-full">
            <TabsList className="flex justify-center">
              <TabsTrigger value="undo">
                <div className="m-1 text-lg">
                  <SlActionUndo />Open
                </div>
              </TabsTrigger>

              <TabsTrigger value="redo">
                <div className="m-1 text-lg">
                  <SlActionRedo />
                </div>
              </TabsTrigger>

              <TabsTrigger value="theme">
                <div className="m-1 text-lg">
                  <TfiBrush />
                </div>
                <span className="hidden md:inline">Theme</span>
              </TabsTrigger>

              <TabsTrigger value="layout">
                <div className="m-1 text-lg">
                  <SlGrid />
                </div>
                <span className="hidden md:inline">Layout</span>
              </TabsTrigger>

              <TabsTrigger value="template">
                <div className="m-1 text-lg">
                  <SlLayers />
                </div>
                <span className="hidden md:inline">Template</span>
              </TabsTrigger>

              <TabsTrigger value="preview">
                <div className="m-1 text-xl">
                  <AiOutlineFileSearch />
                </div>
                <span className="hidden md:inline">Preview</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theme">
              <ThemeSelector />
            </TabsContent>
          </Tabs> */}

          <Popover className="rounded-full px-4">
            <PopoverTrigger className="text-white">
              <div className="m-1 text-lg">
                <SlActionUndo />Open
              </div>
              
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="text-white">
              <div className="m-1 text-lg">
                <SlActionUndo />Open
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="text-white">
              <div className="m-1 text-lg">
                <SlActionUndo />Open
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HorizontalToolTabs1;
