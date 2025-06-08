import { typeMetadata } from "next";
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

interface CursorPosition {
  x: number;
  y: number;
}

interface LinkButtonProps {
  className?: string;
  link?: string;
  type?:string
}

interface SocialMedia {
  name: string;
  url: string;
  icon: LucideIcon;
}

type Stack = {
  name: string;
  icon: string;
};
