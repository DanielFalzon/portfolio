import SkillItem from "@/components/skill-item";
import ScrollButton from "@/components/scroll-button";

const Page = () => {
    return ( 
        <main className="flex min-h-screen flex-col justify-between">
            <ScrollButton link="/" title="Home" />

            <div className="flex-grow p-8 flex flex-col justify-between">
                <h1 className="text-6xl flex-grow-2 mb-10">Here's what I do...</h1>
                
                <div className="flex flex-col text-md flex-grow justify-start">
                    <SkillItem name="Engineering Management"></SkillItem>
                    <SkillItem name="Web Development"></SkillItem>
                    <SkillItem name="Product Management"></SkillItem>
                    <SkillItem name="System Architecture"></SkillItem>
                    <SkillItem name="Process Optimistation"></SkillItem>
                </div>
            </div>

            

            <ScrollButton link="/toolkit" title="Toolkit" />
        </main>
     );
}
 
export default Page;