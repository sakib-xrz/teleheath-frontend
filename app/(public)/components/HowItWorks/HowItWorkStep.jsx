import React from "react";

const HowItWorkStep = ({
  title,
  description,
  onClick,
  Icon,
  selectStep,
  id,
}) => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-[60px] font-bold text-gray-300">{id}</p>
      <div
        onClick={onClick}
        className={`rounded-full p-3 ${
          selectStep + 1 === id
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-500"
        } hidden transition duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-primary md:block`}
      >
        <Icon className="size-12" />
      </div>
      <div>
        <h4 className="text-2xl font-bold text-gray-600">{title}</h4>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorkStep;
