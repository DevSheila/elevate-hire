import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/verticaltabs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiOutlineUpCircle,
  AiOutlineDownCircle,
  AiOutlineFolderOpen,
  AiOutlineBulb,
  AiOutlineDelete,
} from "react-icons/ai";

function VerticalToolTabs() {
  return (
    <Tabs defaultValue="add" className="w-fit bg-gray">
      <div className="flex">
        <TabsList className="mr-4">
          <TabsTrigger value="add">
            <AiOutlinePlusCircle />
          </TabsTrigger>

          <TabsTrigger value="up">
            <AiOutlineUpCircle />
          </TabsTrigger>

          <TabsTrigger value="down">
            <AiOutlineDownCircle />
          </TabsTrigger>

          <TabsTrigger value="folder">
            <AiOutlineFolderOpen />
          </TabsTrigger>

          <TabsTrigger value="bulb">
            <AiOutlineBulb />
          </TabsTrigger>

          <TabsTrigger value="trash">
            <AiOutlineDelete />
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}

export default VerticalToolTabs;
