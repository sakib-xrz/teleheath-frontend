import React from "react";

const GradientBg = () => {
  return (
    <div>
      <div className="size-80 rounded-full bg-primary bg-blend-lighten blur-[80px] hover:bg-blend-darken"></div>
      <div className="size-60 rounded-full bg-green-600 bg-blend-lighten blur-3xl hover:bg-blend-darken"></div>
    </div>
  );
};

export default GradientBg;
