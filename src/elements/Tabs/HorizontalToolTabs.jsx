import React, { useRef, useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { SlActionUndo, SlActionRedo, SlGrid, SlLayers } from "react-icons/sl";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TfiBrush } from "react-icons/tfi";
import { ThemeSelector } from "../TabItems/ThemeSelector";
import TemplatePreview2 from "../TemplatePreview2";
import { ThemeTxtSelector } from "../TabItems/ThemeTxtSelector";
import { redo, undo } from "@/store/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector

const HorizontalToolTabs = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(""); // Track active tab
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Track sheet open state
  const tabsRef = useRef(null); // Ref for the tabs container
  const contentRef = useRef(null); // Ref for the tabs content

  // Get the past and future states from the Redux store
  const past = useSelector((state) => state.resumeDetails.past);
  const resume = useSelector((state) => state.resumeDetails.resume);
  const future = useSelector((state) => state.resumeDetails.future);

  const handleUndo = () => {
    if (past.length > 0) {
      dispatch(undo());
      console.log("_________________________________________")
      console.log("undo is called")
      console.log("past",past)
      console.log("resume",resume)
      console.log("future",future)
      console.log("_________________________________________")

    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      dispatch(redo());
      console.log("_________________________________________")
      console.log("redo is called")
      console.log("past",past)
      console.log("resume",resume)
      console.log("future",future)
      console.log("_________________________________________")
    }
  };

  // Handle clicks outside the active tab
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tabsRef.current &&
        !tabsRef.current.contains(event.target) &&
        contentRef.current &&
        !contentRef.current.contains(event.target)
      ) {
        setActiveTab(""); // Reset to a default tab, change as needed
        setIsSheetOpen(false); // Close the sheet if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Open sheet when the layout tab is clicked
  useEffect(() => {
    if (activeTab === "layout") {
      setIsSheetOpen(true);
    } else {
      setIsSheetOpen(false);
    }
  }, [activeTab]);

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
              <TabsTrigger value="undo" onClick={handleUndo} disabled={past.length === 0}>
                <div className="m-1 text-lg">
                  <SlActionUndo />
                </div>
              </TabsTrigger>

              <TabsTrigger value="redo" onClick={handleRedo} disabled={future.length === 0}>
                <div className="m-1 text-lg">
                  <SlActionRedo />
                </div>
              </TabsTrigger>

              <TabsTrigger value="theme">
                <div className="m-1 text-lg">
                  <TfiBrush />
                </div>
                <span className="hidden md:inline">Theme Color</span>
              </TabsTrigger>

              <TabsTrigger value="text">
                <div className="m-1 text-lg">
                  <TfiBrush />
                </div>
                <span className="hidden md:inline">Text Color</span>
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

            {/* Wrap the TabsContent with a ref */}
            <div ref={contentRef}>
              <TabsContent value="theme">
                <ThemeSelector />
              </TabsContent>

              <TabsContent value="text">
                <ThemeTxtSelector />
              </TabsContent>

              <TabsContent value="template">
                <TemplatePreview2 />
              </TabsContent> 
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HorizontalToolTabs;
