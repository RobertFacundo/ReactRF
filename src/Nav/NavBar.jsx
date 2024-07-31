import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Switch from "./NavSwitch";

const NavBar = () => {
    return (
        <nav className="bg-white z-50 text-gray-500 hover:text-black dark:bg-black dark:text-slate-300 dark:hover:text-white md:flex transition-colors duration-700">
            <div className="flex basis-1/3">
                <NavLeft />
                
                 <Switch />
            </div>
             <NavRight />
           
        </nav>
    )
};

export default NavBar;