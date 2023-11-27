import DatePicker from "react-datepicker";
import { forwardRef } from "react";

export const InputDate = forwardRef(() => {
  return <DatePicker />;
});

InputDate.displayName = "InputDate";
