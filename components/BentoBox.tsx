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
        `flex flex-col relative ${col} row-span-1
         h-[230px] w-full min-w-0 min-h-0
         overflow-hidden ${className}`,
        border && "box rounded-3xl"
      )}
    >
      {children}
    </div>
  );
};

export default BentoBox;
