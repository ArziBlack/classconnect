import React, { ReactNode } from "react";

type ViewCardProps = {
  className?: string;
  children: ReactNode;
};

export const ViewCard = ({ children, className }: ViewCardProps) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md flex flex-col items-center w-full ${className}`}
    >
      {children}
    </div>
  );
};
