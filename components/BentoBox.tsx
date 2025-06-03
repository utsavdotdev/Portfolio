import { ReactNode } from "react";
import clsx from "clsx";

type BentoBoxProps = {
  col: string;
  children?: ReactNode;
  border?: boolean;
  className?: string;
};

const BentoBox = ({
  col,
  children,
  border = true,
  className,
}: BentoBoxProps) => {
  return (
    <div
      className={clsx(
        `flex flex-col relative ${col} row-span-1
         h-[230px] w-full min-w-0 min-h-0
         overflow-hidden ${className}`,
        border && "box"
      )}
    >
      {children}
    </div>
  );
};

export default BentoBox;
