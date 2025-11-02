import React, {useEffect, useRef} from "react";
import Typewriter from "typewriter-effect";
import Logo from "./assets/pau-logo.png"
import Hero from "./assets/DMSHERO.jpg"
import { motion,useAnimation, useInView } from "framer-motion";
import Herosection from "./Herosection";

function Homepage(){
    return(
        <div className="flex flex-col md:flex-col gap-10 justify-center items-center mt-30 md:mt-10">
            <Herosection />
            

            <div className="flex md:flex-row gap-4 items-center justify-center mt-32">
                <motion.section
                    initial="hidden"
                    animate={mainControls2}
                    ref={ref2}
                    variants={{
                        hidden:{opacity: 0},
                        visible: {opacity: 1, transition:{staggerChildren: 0.5}}
                    }}
                    className="flex flex-col justify-center items-center shadow-2xl shadow-gray-500 mt-20 mb-20 w-[80vw] md:w-[45vw] md:h-[280px] mx-auto rounded-md p-5 md:p-0 bg-white"
                >
                    <motion.div variants={variants2} className="flex flex-row justify-center gap-3 mt-10">
                        <Target color="#000000" />
                        <p className="text-2xl font-bold text-black">Why Work with Me</p>
                    </motion.div>

                    <section className="flex flex-col gap-3 items-start justify-self-center mt-10">
                        <motion.div variants={variants2} className="flex flex-row gap-5">
                            <Goal color="#000000"/>
                            <p className="text-black">Proven ability to engage and grow audiences</p>
                        </motion.div>


                        <motion.div variants={variants2} className="flex flex-row gap-5">
                            <Goal color="#000000"/>
                            <p className="text-black">Creative collaboration that aligns with your vision</p>
                        </motion.div>

                        
                        <motion.div variants={variants2} className="flex flex-row gap-5">
                            <Goal color="#000000"/>
                            <p className="text-black">Professional and timely communication</p>
                        </motion.div>
                    </section>
                </motion.section>

                <div className="flex justify-center items-center ">
                    <motion.img  
                        src={Hero} 
                        className="md:w-[500px] w-[350px] rounded-xl" 
                        initial={{opacity: 0, x: 50, scale: 0.8}}
                        animate={{opacity: 1, x:0 , scale: 1}}
                        transition={{duration: 1}}        
                        
                    />
                </div>
            </div>
        </div>
            
        
    );
}

export default Homepage;