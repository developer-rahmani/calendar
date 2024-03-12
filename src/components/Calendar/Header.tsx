// !! Types
import { HeaderType } from "./index.types";

// !! Components
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

const Header = ({ monthName, handlePrev, handleNext }: HeaderType) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-200">{monthName}</span>

      <div className="flex items-center gap-[12px]">
        <button onClick={handlePrev}>
          <ArrowLeftIcon />
        </button>
        <button onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
