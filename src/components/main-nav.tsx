"use client"

import { useState } from "react"
import { INavItem } from "@/types";
import { Turn as Hamburger } from 'hamburger-react'
import Link from "next/link";

const navItems : INavItem[] = [
    {name: "Home", link: "/"},
    {name: "Skills", link: "/introduction"},
    {name: "Toolkit", link: "/toolkit"},
    {name: "Contact", link: "/contact"}
]

const MainNav = ({}) => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <div className="absolute top-4 right-5 z-50">
                <Hamburger toggled={opened} toggle={setOpened} size={30} />
            </div>
            
            <div 
                className={"w-80 h-screen bg-cta absolute pl-10 top-0 right-0 z-40 flex flex-col justify-start "
                + (opened ? "right-0" : "hidden")}
                style={{paddingTop: "80px"}}
            >
                { navItems.map(item => ( <div>{item.name}</div>)) }
            </div>
            <div 
                className={"w-screen h-screen opacity-30 bg-black z-20 absolute top-0 " + (opened ? "right-0" : "hidden")}
                onClick={() => setOpened(!opened)}
            >

            </div>
        </div>
    )
}

export default MainNav