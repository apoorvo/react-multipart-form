import React from "react";
import { MAX_STEP } from "../common/constants";
import Tab from "./Tab";

const Timeline = ({ step }) => {
  const timelineArray = [...new Array(MAX_STEP)].map((_, index) => {
    return (
      <Tab
        key={index}
        page={index + 1}
        completed={index <= step}
        first={index == 0}
        last={index == MAX_STEP - 1}
      />
    );
  });
  console.log(timelineArray);

  return <div className="flex w-full items-center">{timelineArray}</div>;
};

export default Timeline;
