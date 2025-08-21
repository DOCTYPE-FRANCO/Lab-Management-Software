import React from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png"
import School from "./assets/school.svg";

 
function Schoolsys() {
    return(
        <div className="overflow-hidden">
            <div className="mb-20  flex flex-row p-4 w-full h-10 ">
                <div>                
                    <img src={Logo} className="w-[100px]"/>
                </div>
                <Navbar />
            </div>
            <div className="flex flex-col gap-4  justify-center items-center mt-0 bg-white w-[250px] md:w-[500px] md:ml-100 ">
                <img src={School} className="w-[40px] h-[40px]"/>
                <h1 className="text-black text-3xl font-bold max-w-[250px]">
                    SCHOOL COMPUTER 
                </h1>
                
            </div>
            
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className="text-2xl font-bold text-white">What Wrong? :</label>
                    <input type="text" placeholder="Explain the issue" className="bg-white w-65 py-3 rounded-r-3xl pl-5 text-2xl" />
                </div>

                <div className="flex flex-row  gap-5 items-center justify-center mt-10">
                    <label className="text-2xl font-bold text-white">What Have you tried? :</label>
                    <input type="text" placeholder="Have you tried fixing it?" className="bg-white w-75 py-3 rounded-r-3xl pl-5 text-2xl" />
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

export default Schoolsys;