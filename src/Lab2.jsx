import React, {useEffect, useState} from "react";
import axios from "axios";
function Lab2(){
    const [systems, setSystems] = useState([]);
    const [selectedSystem, setSelectedSystem] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("jwt"));
    console.log(token)

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
    }, [])

    function getStatusColor(status){
        switch(status){
            case "WORKING" : return "bg-green-500";
            case "FAULTY" : return "bg-red-500";
            case "MISSING PERIPHERALS": return "bg-orange-500";
            default: return "bg-gray-500"
        }
    }

    function editSystem(system){
        setSelectedSystem(system)
    }

    return(
        <div className="mt-20 flex flex-col justify-center items-center">
            <div className="text-2xl text-white text-center font-bold">Lab 2</div>

            <div className="grid grid-cols-8 gap-2 justify-center items-center w-[800px] mt-10">
                {systems.map((system) => (
                    <div 
                        key={system.name}
                        className={`flex justify-center items-center w-[50px] h-[50px] bg-black rounded-2xl active:bg-gray-400 cursor-pointer transition-all duration-200 hover:scale-110 ${getStatusColor(system.status)}`}
                        onClick={() => editSystem(system)}
                    >
                        <p className="flex justify-center font-bold text-white text-xs">{system.name}</p>
                    </div>
                ))}
            </div>

            {selectedSystem && (
                <div className="flex flex-col justify-between top-20 fixed bg-white w-[450px] h-[220px] rounded-2xl">
                    <div>
                        <h2 className="font-bold text-2xl text-center mb-2">{selectedSystem.name}</h2>
                    </div>

                    <div className="flex flex-row gap-1.5 justify-center items-center">
                        <p className="text-center">{selectedSystem.status}</p>
                        <div className={`w-3 h-4 ${getStatusColor(selectedSystem.status)}`}></div>
                    </div>

                    <div className="flex flex-row justify-center gap-1 mb-5">
                        <button className="bg-green-500 w-[70px] py-1 rounded-2xl font-bold text-white">Edit</button>
                        <button onClick={() => setSelectedSystem(null)} className="bg-red-500 w-[70px] py-1 rounded-2xl font-bold text-white hover:bg-red-800 active:bg-gray-700">Close</button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Lab2;