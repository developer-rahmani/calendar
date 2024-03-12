"use client";

// !! Types
import { MonthType, RangeStateType } from "./index.types";

// !! Hooks
import React, { useEffect, useState } from "react";

// !! Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import TypeContainer from "./TypeContainer";

const months: MonthType[] = [
  {
    name: "January",
    id: 0,
    days: 31,
  },
  {
    name: "February",
    id: 1,
    days: 29,
  },
  {
    name: "March",
    id: 2,
    days: 31,
  },
  {
    name: "April",
    id: 3,
    days: 30,
  },
  {
    name: "May",
    id: 4,
    days: 31,
  },
  {
    name: "June",
    id: 5,
    days: 30,
  },
  {
    name: "July",
    id: 6,
    days: 31,
  },
  {
    name: "August",
    id: 7,
    days: 31,
  },
  {
    name: "September",
    id: 8,
    days: 30,
  },
  {
    name: "October",
    id: 9,
    days: 31,
  },
  {
    name: "November",
    id: 10,
    days: 30,
  },
  {
    name: "December",
    id: 11,
    days: 31,
  },
];

const Calendar = () => {
  const [index, setIndex] = useState<number>(0);
  const [start, setStart] = useState<{
    monthName: string | null;
    day: number | null;
  }>({ monthName: null, day: null });
  const [end, setEnd] = useState<{
    monthName: string | null;
    day: number | null;
  }>({
    monthName: null,
    day: null,
  });
  const [range, setRange] = useState<RangeStateType[]>([]);
  const [type, setType] = useState<string>("");
  const [isShowTypeContaienr, setIsShowTypeContainer] =
    useState<boolean>(false);

  const handleNext = () => {
    setIndex((prevState) => (prevState >= 11 ? 11 : prevState + 1));
  };

  const handlePrev = () => {
    setIndex((prevState) => (prevState <= 0 ? 0 : prevState - 1));
  };

  useEffect(() => {
    setType("");

    console.log({ start, end });

    if (start.day && end.day) {
      setIsShowTypeContainer(true);

      if (end.day <= start.day) {
        setStart({ monthName: end.monthName, day: end.day });
        setEnd({ monthName: start.monthName, day: start.day });
      }
    }
  }, [start, end]);

  useEffect(() => {
    console.log("range", range);
  }, [range]);

  return (
    <div className="flex items-start gap-[24px] h-[400px]">
      <Sidebar
        range={range}
        handleDelete={(id) =>
          setRange((prevState) => prevState.filter((item) => item.id !== id))
        }
      />

      <div className="grid grid-cols-1 gap-[12px] relative">
        <Header
          handleNext={handleNext}
          handlePrev={handlePrev}
          monthName={months[index].name}
        />

        <div className="grid grid-cols-5 w-[500px]">
          {Array.from(new Array(months[index].days), (x, i) => i).map(
            (item) => (
              <span
                key={item + 1}
                className={`border h-[42px] w-full flex items-center justify-center cursor-pointer ${
                  item + 1 === start.day &&
                  start.monthName === months[index].name
                    ? "bg-gray-700"
                    : ""
                } ${
                  item + 1 === end.day && end.monthName === months[index].name
                    ? "bg-gray-700"
                    : ""
                } ${
                  start.day && end.day
                    ? start.monthName !== end.monthName
                      ? (item + 1 >= start.day &&
                          start.monthName === months[index].name) ||
                        (item + 1 <= end.day &&
                          end.monthName === months[index].name)
                        ? "bg-gray-500"
                        : ""
                      : item + 1 >= start.day && item + 1 <= end.day
                      ? "bg-gray-500"
                      : ""
                    : ""
                }`}
                onClick={() => {
                  if (isShowTypeContaienr) {
                    return;
                  }

                  if (!start.day) {
                    setStart({ day: item + 1, monthName: months[index].name });
                  }

                  if (start.day) {
                    setEnd({ day: item + 1, monthName: months[index].name });
                  }
                }}
              >
                {item + 1}
              </span>
            )
          )}
        </div>

        {isShowTypeContaienr ? (
          <TypeContainer
            type={type}
            start={start}
            end={end}
            index={index}
            months={months}
            handleClearEndDate={() => setEnd({ day: null, monthName: null })}
            handleClearStartDate={() =>
              setStart({ day: null, monthName: null })
            }
            handleHideTypeContainer={() => setIsShowTypeContainer(false)}
            handleChangeType={(newType) => setType(newType)}
            handleSetRange={(newRange) => setRange([...range, newRange])}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Calendar;
