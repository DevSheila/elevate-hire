import React, { useRef, useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { SlActionUndo, SlActionRedo, SlGrid, SlLayers } from "react-icons/sl";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TfiBrush } from "react-icons/tfi";
import { ThemeSelector } from "../TabItems/ThemeSelector";

const HorizontalToolTabs = () => {
  const [activeTab, setActiveTab] = useState(""); // Track active tab
  const tabsRef = useRef(null); // Ref for the tabs container

  // Handle clicks outside the active tab
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the active tab container
      if (tabsRef.current && !tabsRef.current.contains(event.target)) {
        setActiveTab(""); // Reset to a default tab, change as needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-10 bg-transparent py-2 px-4 rounded-lg"
      style={{
        transform: "translateY(-5px)",
      }}
    >
      <div className="flex justify-center items-center bg-transparent py-2 px-4 rounded-lg">
        <div className="flex justify-center items-center space-x-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList
              className="flex justify-center"
              ref={tabsRef} // Attach the ref to the tabs container
            >
              <TabsTrigger value="undo">
                <div className="m-1 text-lg">
                  <SlActionUndo />
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
            {/* Add other TabsContent for the respective tabs */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HorizontalToolTabs;
