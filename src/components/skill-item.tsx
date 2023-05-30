import { FC } from "react";
import { formatTimeDiffFromCurr } from "@/utils/formatTimeDiff";

type SkillItemProps = {
    name: String
}

const SkillItem:FC<SkillItemProps> = ({name}) => {    

    return (
        <div className="text-left px-6 py-2 bg-cta bg-opacity-20 drop-shadow-2xl font-extralight rounded-md hover:bg-opacity-10
        transition ease-in-out cursor-pointer select-none mb-6">
            <div className=" text-lg rounded-md mb-2">
                { name }
            </div>
            <div className="text-sm text-black italic">
                { formatTimeDiffFromCurr(new Date("2022-02-17").getTime()) }
            </div>
        </div>
    )
    
}

export default SkillItem;

