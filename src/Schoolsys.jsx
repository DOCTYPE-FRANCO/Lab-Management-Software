import React from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png"
import School from "./assets/school.svg";

 
function Schoolsys() {
    return(
        <div className=" flex flex-col justify-center items-center overflow-hidden mt-20">
            
            <div className="flex flex-col gap-4  justify-center items-center mt-0  w-full ">
                <img src={School} className="w-[40px] h-[40px]"/>
                <h1 className="text-white text-3xl font-bold max-w-[300px] md:max-w-[500px]">
                    SCHOOL COMPUTER 
                </h1>
                
            </div>
            
            <div className="flex flex-col gap-3 sm:w-[300px] w-[400px] h-[400px] p-4 pt-10 rounded-2xl mb-11 shadow-lg bg-white justify-center mt-10">

                <div className="flex flex-col">
                    <label className="font-bold">Issue:</label>
                    <input type="text" className="border border-black p-2"/>
                </div>

                <div className="flex flex-col">
                    <label className="font-bold">What have you tried?: </label>
                    <input type="text" className="border border-black p-2"/>
                </div>

                    

                <div className="flex flex-col">
                    <label className="font-bold">What did you notice?</label>
                    <input type="text" className="border border-black p-5"/>
                </div>

                <div className="flex justify-center items-center">
                    <button className="font-bold bg-blue-700 text-white w-[100px] h-[50px] rounded-full hover:bg-slate-500">
                        Submit
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Schoolsys;