export type RangeStateType = {
  start: string;
  end: string;
  type: string;
  id: string;
};

export type MonthType = {
  name: string;
  id: number;
  days: number;
};

export type HeaderType = {
  monthName: string;
  handlePrev: () => void;
  handleNext: () => void;
};

export type SidebarType = {
  range: RangeStateType[];
  handleDelete: (id: string) => void;
};

export type TypeContainer = {
  type: string;
  start: { monthName: string | null; day: number | null };
  end: { monthName: string | null; day: number | null };
  index: number;
  months: MonthType[];
  handleChangeType: (value: string) => void;
  handleSetRange: (value: RangeStateType) => void;
  handleClearStartDate: () => void;
  handleClearEndDate: () => void;
  handleHideTypeContainer: () => void;
};
