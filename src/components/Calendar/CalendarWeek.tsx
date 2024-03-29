import * as React from "react";
import { CalendarDayView } from "./CalendarDayView";
import { CalendarDay } from "../../../api/Calendar/CalendarService";

export interface CalendarWeekProps {
  dates: CalendarDay[];
}

export const CalendarWeek: React.FC<CalendarWeekProps> = (props) => {
  return (
    <>
      {props.dates.map((date) => (
        <CalendarDayView key={date.date.toISOString()} day={date} />
      ))}
    </>
  );
};
