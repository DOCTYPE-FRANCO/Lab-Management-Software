import React from "react";
import Typewriter from "typewriter-effect";
import Logo from "./assets/pau-logo.png"
import Hero from "./assets/DMSHERO.jpg"
import { motion } from "framer-motion";
import Herosection from "./Herosection";

function Homepage(){
    return(
        <div className="flex flex-col md:flex-col gap-10 justify-center items-center mt-30 md:mt-10">
            <Herosection />
            <div className="flex flex-col md:w-[500px] w-[300px] gap-5">
                <p className="text-white font-extrabold text-5xl">LMS</p>
                <span className="text-gray-400 font-bold text-3xl">
                    <Typewriter 
                    options={{
                        strings: ["Lab Management Software", "Inventory Management Software", "Device Management Software"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 75,
                        pauseFor: 4000}}
                    />
                </span>

            </div>

            <div className="flex justify-center items-center mt-20">
                <motion.img  
                    src={Hero} 
                    className="md:w-[500px] w-[350px] rounded-xl" 
                    initial={{opacity: 0, x: 50, scale: 0.8}}
                    animate={{opacity: 1, x:0 , scale: 1}}
                    transition={{duration: 1}}        
                    
                />
            </div>
        </div>
            
        
    );
}

export default Homepage;