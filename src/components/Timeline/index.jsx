import React from "react";
import Tab from "./Tab";

const Timeline = () => {
  return (
    <div className="flex w-full items-center">
      <Tab page={1} completed={true} first={true} size="lg" />
      <Tab page={2} completed={false} size="3xl" />
      <Tab page={3} completed={false} size="3xl" />
      <Tab page={4} completed={false} last={true} size="3xl" />
    </div>
  );
};

export default Timeline;
