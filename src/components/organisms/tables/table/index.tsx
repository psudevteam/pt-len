import { FC, ReactElement } from "react";
import { TTable } from "./type";
import { Search, Pagination } from "@/components";

export const Table: FC<TTable> = (props): ReactElement => {
  return (
    <section className="shadow-md p-4 border rounded-lg w-[2000px] gap-y-4 flex flex-col">
      <div className="flex w-full gap-x-4 justify-between">
        <Search {...props} />
      </div>
      <div className="w-full overflow-x-auto">
        <table {...props} className="border border-gray-100 rounded-lg p-1 w-full overflow-x-auto">
          {props.children}
        </table>
      </div>
      <Pagination {...props} />
    </section>
  );
};
