import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {SlArrowUpCircle ,SlArrowDownCircle , SlBulb ,SlTrash   } from "react-icons/sl";
import { TfiBrush } from "react-icons/tfi";
const SectionTabs = () => {
  return (
    <>
      <Tabs className="w-full mt-4">
        <TabsList className="flex justify-center">
          <TabsTrigger value="undo">
            <div className="m-1 text-lg">
              <SlArrowUpCircle />
            </div>
          </TabsTrigger>

          <TabsTrigger value="redo">
            <div className="m-1 text-lg">
              <SlArrowDownCircle />
            </div>
          </TabsTrigger>

          <TabsTrigger value="theme">
            <div className="m-1 text-lg">
              <SlBulb />
            </div>
          </TabsTrigger>

          <TabsTrigger value="layout">
            <div className="m-1 text-lg">
              <SlTrash />
            </div>
          </TabsTrigger>


        </TabsList>
      </Tabs>
    </>
  );
};

export default SectionTabs;
