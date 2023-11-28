import { FC, ReactElement } from "react";

type TProps = {
  data: {
    approve: number;
    pending: number;
  };
};

export const DashboardModule: FC<TProps> = (props): ReactElement => {
  return (
    <div className="flex flex-row gap-x-4 w-full">
      <div className="flex flex-col p-4 border shadow-md w-[200px] rounded-lg h-[200px]">
        <span className="font-medium text-2xl">Data Selesai </span>
        <span className="font-bold text-4xl">{props.data.approve}</span>
      </div>
      <div className="flex flex-col p-4 border shadow-md w-[200px] rounded-lg h-[200px]">
        <span className="font-medium text-2xl">Data Pending</span>
        <span className="font-bold text-4xl">{props.data.pending}</span>
      </div>
    </div>
  );
};
