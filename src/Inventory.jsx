import React from "react";
import { Link } from "react-router-dom";
import System from "./assets/system-img.svg"

function Inventory() {
  return (
    <div>
        <div className="md:flex md:flex-row flex flex-col gap-10 md:gap-30 items-center justify-center ">
            <Link to="/schoolsystem">
                <div className="flex flex-col gap-5 justify-center items-center bg-white w-[200px] h-[200px] rounded-2xl mt-20 relative bottom-0 hover:bottom-5 transition-all duration-500">
                    <img src={System} className="w-[40px] h-[40px]"/>
                    <p className="text-black font-bold">LAB 1</p>
                </div>
            </Link>

            <Link to= "/personal">
                <div className="flex flex-col gap-5 justify-center items-center bg-white w-[200px] h-[200px] rounded-2xl mt-20 relative bottom-0 hover:bottom-5 transition-all duration-500">
                    <img src={System} className="w-[40px] h-[40px]"/>
                    <p className="text-black font-bold">LAB 2</p>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default Inventory;