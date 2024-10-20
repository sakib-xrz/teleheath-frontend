import React from "react";

const gradientSizes = {
  size1: "h-2/3 w-2/3 sm:h-1/2 sm:w-1/2 md:h-2/5 md:w-1/3",
  size2: "h-1/2 w-1/3 sm:h-1/3 sm:w-1/2 md:h-2/5 md:w-1/3",
  size3: "h-1/2 w-1/2 sm:h-1/3 sm:w-1/2 md:h-2/5 md:w-1/3",
};

const GradientBg = ({
  isRight = false,
  isBottom = false,
  size = "size1",
  ...props
}) => {
  return (
    <div
      className={`absolute ${
        isRight ? "right-0 bg-gradient-to-tr" : "left-0 bg-gradient-to-tl"
      } ${isBottom ? "bottom-0" : ""} ${gradientSizes[size]} z-0 max-h-[50vh] from-teal-100 via-teal-200 to-primary blur-[90px] sm:max-h-[40vh]`}
      {...props}
    ></div>
  );
};

export default GradientBg;
