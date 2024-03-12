// !! Types
import { SidebarType } from "./index.types";

// !! Components
import { CloseIcon } from "./Icons";

const Sidebar = ({ range, handleDelete }: SidebarType) => {
  return (
    <div className="flex flex-col justify-between h-full gap-[24px] bg-gray-900 w-[300px] p-[24px] text-sm">
      {["high", "shoulder", "low"].map((item) => (
        <div key={item} className="h-[33.3333%] flex flex-col gap-[4px] overflow-y-auto">
          <span>{item}</span>

          {range
            .filter((rangeItem) => rangeItem.type === item)
            .map((item, index) => (
              <div
                className="flex items-center justify-between gap-[4px]"
                key={index}
              >
                {item.start} - {item.end}
                <button onClick={() => handleDelete(item.id)}>
                  {" "}
                  <CloseIcon />
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
