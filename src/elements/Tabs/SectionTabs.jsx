import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  SlArrowUpCircle,
  SlArrowDownCircle,
  SlBulb,
  SlTrash,
} from "react-icons/sl";
import { TfiBrush } from "react-icons/tfi";

const SectionTabs = ({ onRemove, onMoveUp ,onMoveDown}) => {
  return (
    <>
      <Tabs className="w-full mt-4">
        <TabsList className="flex justify-center">
          <TabsTrigger onClick={onMoveUp} value="up">
            <div className="m-1 text-lg hover:font-bold hover:text-blue-500">
              <SlArrowUpCircle />
            </div>
          </TabsTrigger>

          <TabsTrigger onClick={onMoveDown} value="down">
            <div className="m-1 text-lg hover:font-bold hover:text-blue-500">
              <SlArrowDownCircle />
            </div>
          </TabsTrigger>

          <TabsTrigger value="tip">
            <div className="m-1 text-lg hover:font-bold hover:text-yellow-500">
              <SlBulb />
            </div>
          </TabsTrigger>

          <TabsTrigger onClick={onRemove} value="delete">
            <div className="m-1 text-lg hover:font-bold hover:text-red-500">
              <SlTrash />
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default SectionTabs;
