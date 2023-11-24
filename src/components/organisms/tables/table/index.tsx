import { FC, ReactElement } from "react";
import { TTable } from "./type";
import { Search, Pagination, Button } from "@/components";

export const Table: FC<TTable> = (props): ReactElement => {
  return (
    <section className="shadow-md p-4 border rounded-lg w-auto max-w-[2000px] gap-y-4 flex flex-col overflow-x-auto">
      <div className="flex w-full gap-x-4 justify-between">
        <Search {...props} />
        <Button href={props.createLink} size="sm" variant="cancel">
          Tambah Data +
        </Button>
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
