declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

type BentoBoxProps = {
  col: string;
  children?: React.ReactNode;
  border?: boolean;
  className?: string;
};

type Theme = "light" | "dark";
