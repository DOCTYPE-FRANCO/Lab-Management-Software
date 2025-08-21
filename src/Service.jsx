import React from "react";
import System from "./assets/system-img.svg"
import Schedule from "./assets/schedule-img.svg"
import Inventory from "./assets/inventory-img.svg"
import Maintenance from "./assets/maintain-img.svg"
import { Link } from "react-router-dom";

function Service(){
    return(
        <div className=" flex flex-col relative md:flex md:flex-row gap-10 items-center justify-center mt-20">
            <div className="flex flex-col items-center justify-center gap-5 bg-white w-[200px] h-[200px] rounded-2xl relative bottom-0 hover:bottom-5 transition-all duration-500">
                <img src={System} className="w-[40px] h-[40px]" />
                <p className="text-black  font-bold">System Allocation</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 bg-white w-[200px] h-[200px] rounded-2xl relative bottom-0 hover:bottom-5 transition-all duration-500">
                <img src={Schedule} className="w-[40px] h-[40px]" />
                <p className="text-black  font-bold">Lab Sessions</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 bg-white w-[200px] h-[200px] rounded-2xl relative bottom-0 hover:bottom-5 transition-all duration-500">
                <img src={Inventory} className="w-[40px] h-[40px]" />
                <p className="text-black  font-bold">Inventory</p>
            </div>

           <Link to="/maintenance">
             <div className="flex flex-col items-center justify-center gap-5 bg-white w-[200px] h-[200px] rounded-2xl relative bottom-0 hover:bottom-5 transition-all duration-500">
                <img src={Maintenance} className="w-[40px] h-[40px]" />
                <p className="text-black  font-bold">Repair/Maintenance</p>
            </div>
           </Link>
        </div>
    );
}
export default Service;