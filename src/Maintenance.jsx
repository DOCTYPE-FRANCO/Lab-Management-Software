import React from "react";
import Navbar from "./Navbar";
import School from "./assets/school.svg";
import Personal from "./assets/personal.svg"
import Logo from "./assets/pau-logo.png"
import { Link } from "react-router-dom";

function Maintenance(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="mb-20  flex flex-row p-4 w-full ">
                <div>                
                    <img src={Logo} className="w-[100px]"/>
                </div>
                <Navbar/>
            </div>
            <div className="flex flex-row justify-center items-center">
                <h1 className="text-white text-3xl font-bold max-w-[250px] md:max-w-[500px]">
                    REQUEST REPAIR / MAINTENANCE
                </h1>
            </div>
            <div className="md:flex md:flex-row flex-col gap-30 items-center justify-center ">
                <Link to="/schoolsystem">
                    <div className="flex flex-col gap-5 justify-center items-center bg-white w-[200px] h-[200px] rounded-2xl mt-20 relative bottom-0 hover:bottom-5 transition-all duration-500">
                        <img src={School} className="w-[40px] h-[40px]"/>
                        <p className="text-black font-bold">School Computer</p>
                    </div>
                </Link>

                <Link to= "/personal">
                    <div className="flex flex-col gap-5 justify-center items-center bg-white w-[200px] h-[200px] rounded-2xl mt-20 relative bottom-0 hover:bottom-5 transition-all duration-500">
                        <img src={Personal} className="w-[40px] h-[40px]"/>
                        <p className="text-black font-bold">Personal Computer</p>
                    </div>
                </Link>
            </div>
        </div>
    );

}

export default Maintenance;