import React, {useState} from "react";
import Menu from "./assets/menu-img.svg"
import X from "./assets/Xicon.svg"
import { Link } from "react-router-dom";

function Navbar(){
    const [mobile, setMobile] = useState(false);
    return(
        <div className="w-[350px] h-[50px] overflow-hidden">
            <div className="flex gap-10 justify-center items-center h-full">
                
                <ul className="hidden md:flex gap-8 text-white">
                    <Link to="/">  
                        <li className="cursor-pointer hover:text-gray-600 font-bold">Home</li>                 
                    </Link>
                    
                    <Link to="/services">
                        <li className="cursor-pointer hover:text-gray-600 font-bold" >Services</li>
                    </Link>

                    <li className="cursor-pointer hover:text-gray-600 font-bold">Contact</li>          
                </ul>

                

                <div className="md:hidden flex justify-end w-full mt-3 mr-3">
                    <img src={Menu} onClick={()=> setMobile(true)} className="w-[40px]"/>
                </div>

                
                
                { /*  Mobile View */}

                <div className={`${mobile? "bg-white fixed top-0 w-full h-[300px] z-50  items-center flex flex-col transition-all duration-500" : "h-0 w-0"}  `}>
                    <div  className="flex flex-col justify-end items-end w-full p-4">
                        <img onClick={()=> setMobile(false)} src={X} className="w-[40px] h-[40px] justify-end "/>
                    </div>
                    <ul className="text-3xl font-bold flex flex-col gap-3">
                        <Link to="/"><li onClick={()=> setMobile(false)} href="#Header" className="cursor-pointer hover:text-gray-600 font-bold text-center border-2 border-black w-[200px]">Home</li></Link>
                        <Link to="/services"><li onClick={()=> setMobile(false)} href="#About" className="cursor-pointer hover:text-gray-600 font-bold text-center border-2 border-black w-[200px]">Service</li></Link>
                        <li onClick={()=> setMobile(false)} href="#Contact" className="cursor-pointer hover:text-gray-600 font-bold text-center border-2 border-black w-[200px]">Contact</li>
                        <li onClick={()=> setMobile(false)} href="#Sign-In" className="cursor-pointer hover:text-gray-600 font-bold text-center border-2 border-black w-[200px]">Sign In</li>                        
                    </ul>
                </div>
            </div>
    </div>
    );
}

export default Navbar;