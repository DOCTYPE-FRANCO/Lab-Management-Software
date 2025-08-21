import React from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png"
import PersonalSystem from "./assets/user-img.png";


function Personal(){
    return(
        <div>
            <div className="mb-15  flex flex-row p-4 w-full h-10 ">
                <div>                
                    <img src={Logo} className="w-[100px]"/>
                </div>
                <Navbar />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mt-0  ">
                <img src={PersonalSystem} className="w-[65px]  rounded-full"/>
                <h1 className="text-white text-3xl font-bold">
                    PERSONAL COMPUTER 
                </h1>
                
            </div>
            
            <div className="flex flex-col items-center justify-center mt-10">

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className="font-bold text-white">Name :</label>
                    <input type="text" placeholder="Enter you name" className="bg-white w-50s py-3 rounded-r-3xl pl-5 font-bold " />
                </div>

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className=" font-bold text-white">Computer Brand :</label>
                    <input type="text" placeholder="Eg. Dell, HP, Fujistu, Mac" className="bg-white w-55 py-3 rounded-r-3xl pl-5 font-bold" />
                </div>

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className=" font-bold text-white">Operating System:</label>
                    <select placeholder="Explain the issue" className="bg-white w-40 py-3 rounded-r-3xl pl-5 font-bold">
                        <option>Windows</option>
                        <option>Linux</option>
                        <option>MacOS</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className=" font-bold text-white">What Wrong? :</label>
                    <input type="text" placeholder="Explain the issue" className="bg-white w-50 py-3 rounded-r-3xl pl-5 font-bold" />
                </div>

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className=" font-bold text-white">What Have you tried? :</label>
                    <input type="text" placeholder="Have you tried fixing it?" className="bg-white w-55 py-3 rounded-r-3xl pl-5 font-bold" />
                </div>

                <div>
                    <button className="bg-white text-black font-bold py-3 px-6 rounded-full mt-10 hover:bg-gray-500 transition duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Personal;