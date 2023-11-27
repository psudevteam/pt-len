import { TInput } from "@/entites";
import type { ReactDatePickerProps } from "react-datepicker";

export interface TInputDatePickerProps<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
> extends Omit<ReactDatePickerProps<CustomModifierNames, WithRange>, "value" | "placeholderText">,
    TInput {
  value?: WithRange extends false | undefined ? Date | null : [Date | null, Date | null];
}
