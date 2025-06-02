declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

type BentoBoxProps = {
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  children?: React.ReactNode;
};