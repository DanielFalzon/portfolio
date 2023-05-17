import Link from "next/link";
import SkillItem from "@/components/skill-item";

const Page = () => {
    return ( 
        <main className="flex min-h-screen flex-col justify-between">
                <div className='w-full text-center py-2 text-md'>
                    <Link href="/">Home</Link>
                </div>
                <div className="flex-grow p-8 flex flex-col justify-between">
                    <h1 className="text-6xl flex-grow-2 mb-10">Here's what I do...</h1>
                    
                    <div className="flex flex-col text-md flex-grow justify-start">
                        <SkillItem name="Engineering Management"></SkillItem>
                        <SkillItem name="Web Development"></SkillItem>
                        <SkillItem name="Product Management"></SkillItem>
                        <SkillItem name="Agile Adoption"></SkillItem>
                        <SkillItem name="Process Optimistation"></SkillItem>
                    </div>
                </div>

                <div className='w-full text-center py-2 text-md'>
                    Toolkit
                </div>
        </main>
     );
}
 
export default Page;