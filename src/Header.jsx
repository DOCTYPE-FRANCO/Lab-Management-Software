import React from "react";
import Navbar from "./Navbar.jsx";
import Logo from "./assets/LG.jpg"


function Header(){
    return(
        <div className="flex flex-row justify-between items-center p-4 w-full fixed top-0 z-40">
            <div>                
                <img src={Logo} className="w-[100px] "/>
            </div>
            
            <Navbar />

        
            
        </div>
    );
}

export default Header;