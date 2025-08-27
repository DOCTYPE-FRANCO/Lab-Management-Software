import React from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png"
import PersonalSystem from "./assets/user-img.png";


function Personal(){
    return(
        <div className="flex flex-col justify-center items-center">
            
            <div className="flex flex-col gap-5 justify-center items-center mt-0  ">
                <img src={PersonalSystem} className="w-[65px]  rounded-full"/>
                <h1 className="text-white text-3xl font-bold">
                    PERSONAL COMPUTER 
                </h1>
                
            </div>
            
            <div className="flex flex-col gap-3 w-[400px] h-[500px] p-7 pt-10 rounded-2xl mb-11 shadow-lg bg-white justify-center mt-10">

                <div className="flex flex-col">
                    <label className="font-bold">Name:</label>
                    <input type="text" className="border border-black p-2"/>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold">System Brand:</label>
                    <select className="border border-black">
                        <option value="dell">Dell</option>
                        <option value="hp">HP</option>
                        <option value="macbook">Macbook</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-bold">Issues:</label>
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

export default Personal;