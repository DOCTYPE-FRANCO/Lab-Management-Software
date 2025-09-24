import React, {useEffect, useState} from "react";
import axios from "axios";
function Lab2(){
    const [systems, setSystems] = useState([]);
    const token = localStorage.getItem("jwt")

    useEffect(() =>{
        async function getSystems(){
            try{
                const response = await axios.get("http://localhost:8080/api/lab2systems", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = response.data;
                console.log(data);
                setSystems(data)
            }catch (error){
                console.log(error);
            }
        }
        getSystems()
    })
    return(
        <div className="mt-20">
            <div className="text-2xl text-white text-center font-bold">Lab 2</div>

            <div className="grid grid-cols-8">
                {systems.map((system) => (
                    <div 
                        key={system.name}
                        className="w-[100px] h-[100px] bg-black"
                    >
                        {system.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lab2;