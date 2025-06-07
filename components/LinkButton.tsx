import { MoveUpRight } from "lucide-react";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";

const LinkButton = ({ className }: LinkButtonProps) => {
  return (
    <>
      <div className={`flex flex-col ${className}`}>
        <div className="w-12 h-12 flex justify-center align-center self-end rounded-full border-2 border-[#626262] transition-all duration-300 overflow-hidden relative">
          <ArrowUpRightIcon
            className="w-6 h-6 absolute transition-all duration-500 
                    translate-x-[-30px] translate-y-[30px] opacity-0
                    group-hover:translate-x-[0px] group-hover:translate-y-[10px] 
                    group-hover:opacity-100"
          />
          <ArrowUpRightIcon
            className="w-6 h-6 absolute transition-all duration-500 
                    translate-x-[0px] translate-y-[10px] opacity-100
                    group-hover:translate-x-[30px] group-hover:translate-y-[-30px] 
                    group-hover:opacity-0"
          />
        </div>
      </div>
    </>
  );
};

export default LinkButton;
