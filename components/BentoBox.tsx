import clsx from "clsx";

const BentoBox = ({
  col,
  children,
  border = true,
  className,
}: BentoBoxProps) => {
  return (
    <div
      className={clsx(
        `flex flex-col relative ${col}
        w-full min-w-full min-h-full
         overflow-hidden ${className}`,
        border ? "box rounded-3xl h-content lg:h-[230px]" : "h-full"
      )}
    >
      {children}
    </div>
  );
};

export default BentoBox;
