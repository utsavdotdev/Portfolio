const BentoBox = ({
  className = "",
  colSpan = "",
  rowSpan = "",
  children,
}: BentoBoxProps) => {
  return (
    <div
      className={`flex flex-col relative rounded-4xl border border-gray-300/20 bg-white dark:bg-neutral-900 ${colSpan} ${rowSpan} ${className}
  items-center justify-center text-white text-xl font-nun`}
    >
      {children}
    </div>
  );
};

export default BentoBox;
