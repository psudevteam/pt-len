import React, { FC, ReactElement } from "react";

const FullScreenLoader: FC = (): ReactElement => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default FullScreenLoader;
