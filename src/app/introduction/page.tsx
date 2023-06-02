import SkillItem from "@/components/skill-item";
import ScrollButton from "@/components/scroll-button";

const Page = () => {
    return ( 
        <>
            <ScrollButton link="/" title="Home" />

            <div className="flex-grow flex flex-col justify-between">
                <h1 className="text-6xl flex-grow-2 mb-10">Here&apos;s what I do...</h1>
                
                <div className="flex flex-col text-md flex-grow justify-center">
                    <SkillItem name="Engineering Management"></SkillItem>
                    <SkillItem name="Web Development"></SkillItem>
                    <SkillItem name="Product Management"></SkillItem>
                    <SkillItem name="System Architecture"></SkillItem>
                    <SkillItem name="Process Optimistation"></SkillItem>
                </div>
            </div>

            

            <ScrollButton link="/toolkit" title="Toolkit" />
        </>
     );
}
 
export default Page;