import React from "react";
import { TypeContainer } from "./index.types";

function generateUEID() {
  let first: string | number = (Math.random() * 46656) | 0;
  let second: string | number = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

const TypeContainer = ({
  type,
  handleChangeType,
  handleSetRange,
  handleClearStartDate,
  handleClearEndDate,
  handleHideTypeContainer,
  start,
  end,
  index,
  months,
}: TypeContainer) => {

  console.log("startstartstartstart",start)

  return (
    <div className="grid grid-cols-1 gap-[24px] bg-gray-900 p-[24px] text-gray-200 absolute bottom-0 left-[50%] translate-x-[-50%]">
      <div className="flex justify-between gap-[24px] text-center ">
        {["high", "shoulder", "low"].map((item) => (
          <button
            key={item}
            onClick={() => handleChangeType(item)}
            className={`p-[4px] text-sm ${type === item ? "bg-gray-500" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="bg-lime-800 py-[8px] rounded-[4px]"
        onClick={() => {
          if (type) {
            handleSetRange({
              type,
              start: `${start.day} ${start.monthName}`,
              end: `${end.day} ${end.monthName}`,
              id: generateUEID(),
            });

            handleClearStartDate();

            handleClearEndDate();

            handleHideTypeContainer();
          }
        }}
      >
        confirm
      </button>
    </div>
  );
};

export default TypeContainer;
