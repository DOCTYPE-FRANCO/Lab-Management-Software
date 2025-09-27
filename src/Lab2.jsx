import React, {useEffect, useState} from "react";
import { ClipLoader, BeatLoader} from "react-spinners";
import axios from "axios";
function Lab2(){
    const [systems, setSystems] = useState([]);
    const [selectedSystem, setSelectedSystem] = useState(null);
    const [edit, setEdit] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("jwt"));
    const [lastDate, setLastDate] = useState();
    const [loading, setLoading] = useState(false)
    console.log(token)

    async function getSystems(){
        try{
            setLoading(true)
            const response = await axios.get("http://localhost:8080/api/lab2systems", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            const data = response.data;
            console.log(data);
            setSystems(data.systems)
            setLoading(false)
            setLastDate(data.lastDate)
        }catch (error){
            console.log(error);
        }
    }
    useEffect(() =>{
        getSystems()
    },[])

    function getStatusColor(status){
        switch(status){
            case "WORKING" : return "bg-green-500";
            case "FAULTY" : return "bg-red-500";
            case "MISSING PERIPHERALS": return "bg-orange-500";
            default: return "bg-gray-500"
        }
    }

    function viewSystem(system){
        setSelectedSystem(system)
    }

    function editSystem(){
        setEdit(true)
    }

    return(
        <div className="mt-20 flex flex-col justify-center items-center">
            <div className={`text-2xl text-white text-center font-extrabold ${loading? 'mb-10': ''}`}>Lab 2 INVENTORY</div>
            
            {systems && (
                <div className={`text-white text-center font-bold ${loading? 'mb-20': ''}`}>LAST UPDATED : {lastDate}</div>
            )}

            {loading && (
                <div className="flex flex-col justify-center items-center">
                    <BeatLoader size={30} color="#e2eaf0"/>
                    <p className="text-white font-bold">Trying to fetch data from Database ...</p>
                </div>
            )}

            <div className="grid grid-cols-4 pl-8 md:grid-cols-8 gap-2 justify-center items-center w-[400px] md:w-[800px] mt-10">
                
                {systems.map((system) => (
                    <div 
                        key={system.name}
                        className={`flex justify-center items-center w-[50px] h-[50px] bg-black rounded-2xl active:bg-gray-400 cursor-pointer transition-all duration-200 hover:scale-110 ${getStatusColor(system.status)}`}
                        onClick={() => viewSystem(system)}
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
                        <button onClick={editSystem} className="bg-green-500 w-[70px] py-1 rounded-2xl font-bold text-white hover:bg-green-800 active:bg-gray-700">Edit</button>
                        <button onClick={() => setSelectedSystem(null)} className="bg-red-500 w-[70px] py-1 rounded-2xl font-bold text-white hover:bg-red-800 active:bg-gray-700">Close</button>
                    </div>

                    {edit && (
                        <div className="flex flex-col gap-14 items-center fixed top-20 bg-white w-[450px] h-[250px] z-50 rounded-sm">
                            <h2 className="text-black text-2xl font-bold text-center">Edit {selectedSystem.name}</h2>

                            <select 
                                className="flex justify-center border rounded p-2 w-1/2 text-center"
                                value={selectedSystem.status}
                                onChange={(e) => 
                                    setSelectedSystem({...selectedSystem, status: e.target.value})
                                } 
                            >
                                <option>WORKING</option>
                                <option>FAULTY</option>
                                <option>MISSING PERIPHERALS</option>
                            </select>

                            <button 
                                className="font-bold text-white bg-blue-900 w-[80px] h-[30px] rounded-full hover:bg-blue-600 active:bg-gray-700"
                                onClick={async () => {
                                    try {
                                        console.log(selectedSystem.status)
                                    await axios.put(
                                        `http://localhost:8080/api/lab2systems/${selectedSystem.name}`,
                                        selectedSystem,
                                        { headers: { Authorization: `Bearer ${token}` } }
                                    );
                                    getSystems();
                                    setSelectedSystem(null);
                                    setEdit(false);
                                    
                                    } catch (error) {
                                    console.error(error);
                                    }
                                }}
                            >
                                Save
                            </button>
                        </div>
                    )}
                </div>

            )}
        </div>
    );
}

export default Lab2;