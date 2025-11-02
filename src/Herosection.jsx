import React from "react";
function Herosection(){
    return(
        <div className="flex flex-col items-center gap-7 mt-20">
            <p className="md:text-6xl text-white font-extrabold md:max-w-[600px] text-center">Manage your Labs with Ease</p>

            <div className="flex flex-row gap-5">
                <p className="text-white font-bold border-2 border-white p-3 px-14 hover:bg-gray-400 transition-colors duration-500 hover:cursor-pointer">Learn More</p>
                <p className="flex justify-center items-center font-bold w-[200px] h-[50px] bg-white hover:scale-110 transition-transform duration-500 hover:cursor-pointer">Get Started </p>
            </div>
        </div>
    );
}

export default Herosection;