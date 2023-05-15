import { FC } from "react";

type SkillItemProps = {
    name: String
}

const SkillItem:FC<SkillItemProps> = ({name}) => (
    <div className="text-left p-6 py-4 text-lg border-y-2 border-y-black">
        { name }
    </div>
)

export default SkillItem;

