import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts &&
        parts.map((part) => (
          <Part key={part.name} part={part.name} exercises={part.exercises} />
        ))}
    </div>
  );
};

export default Content;
