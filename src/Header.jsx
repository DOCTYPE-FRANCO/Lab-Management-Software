import React from "react";
import Navbar from "./Navbar.jsx";
import Logo from "./assets/pau-logo.png"


function Header(){
    return(
        <div className="flex flex-row justify-between items-center p-4 w-full ">
            <div>                
                <img src={Logo} className="w-[100px]"/>
            </div>
            
            <Navbar />

            <div className="hidden md:flex">
                <button className="w-[100px] rounded-2xl bg-white font-semibold border-0 hover:border-2 transition-all">Sign In</button>
            </div>

            
        </div>
    );
}

export default Header;