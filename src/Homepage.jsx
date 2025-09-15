import React from "react";
import Typewriter from "typewriter-effect";
import Logo from "./assets/pau-logo.png"
import Hero from "./assets/DMSHERO.jpg"


function Homepage(){
    return(
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-30 md:mt-10">
            <div className="flex flex-col md:w-[500px] w-[300px] gap-5">
                <p className="text-white font-extrabold text-5xl">LIBAS</p>
                <p className="text-gray-400 font-bold text-3xl">
                    <Typewriter 
                    options={{
                        strings: ["Lab Management Software", "Inventory Management Software", "Device Management Software"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 75,
                        pauseFor: 4000}}
                    />
                </p>

            </div>

            <div className="flex justify-center items-center mt-20">
                <img src={Hero} alt="HERO-IMG" className="md:w-[500px] w-[350px] rounded-xl" />
            </div>
        </div>
            
        
    );
}

export default Homepage;