import React from "react";
import Navbar from "./Navbar.jsx";
import Logo from "./assets/LG.jpg"


function Header(){
    return(
        <div className="flex flex-row justify-self-center justify-between items-center w-[80vw] h-[50px] fixed top-4 z-40 bg-blue-800/80 backdrop-blur-sm rounded-2xl">
            <div className="overflow-hidden w-[60px] h-[40px] pl-4">                
                <img src={Logo} className="w-full h-full object-contain"/>
            </div>
            
            <Navbar />

            <p className="hidden md:flex bg-white p-1 px-6 mr-10  font-bold rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer">
                SIGN IN
            </p>

        </div>
    );
}

export default Header;