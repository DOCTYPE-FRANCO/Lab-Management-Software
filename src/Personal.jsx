import React, {useState} from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png";
import PersonalSystem from "./assets/user-img.png";
import axios from "axios";
import X from "./assets/Xicon.svg"


function Personal(){
    const [formData, setFormData] = useState({
        name: "",
        systemBrand: "",
        issues: "",
        tried: "",
        noticed: ""
    });

    const [getSessions, setGetSessions] = useState(false);

    const [sessionList, setSessionList] = useState(false);

    const [sessions, setSessions] = useState([]);

    const [selectedSession, setSelectedSession] = useState(null);

    function handleSelect(session){
        setSelectedSession(session);
        console.log(selectedSession);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event){ 
        event.preventDefault();
        try {
            // send to backend
            const response = await axios.post("http://localhost:8080/api/complaint/personalcomplaint", formData);
            console.log("Submitted successfully:", response.data);

            
            
        } catch (error) {
            console.error(" Error submitting form:", error);
        }
        setGetSessions(true);

        setFormData({
            name: "",
            systemBrand: "",
            issues: "",
            tried: "",
            noticed: "" 
        })

    }

    async function getAvailableSessions(event){
        event.preventDefault();
        try{
            const response = await axios.get("http://localhost:8080/api/availablesessions")
            console.log(response.data);
            setSessions(response.data);
            setSessionList(true);
        }catch(error){
            console.log(error);
        }
        
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center overflow-hidden">
            
                <div className="flex flex-col gap-5 justify-center items-center mt-0  ">
                    <img src={PersonalSystem} className="w-[65px]  rounded-full"/>
                    <h1 className="text-white text-3xl font-bold">
                        PERSONAL COMPUTER 
                    </h1>
                    
                </div>

        
                <form id="personalForm"  onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 sm:w-[250px] w-[400px]  p-7 pt-10 rounded-2xl mb-11 shadow-lg bg-white justify-center mt-10">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="font-bold">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name} 

                                onChange={handleChange}
                                className="border border-black p-2"
                            />
                        </div>

                        {/* System Brand */}
                        <div className="flex flex-col">
                        <label className="font-bold">System Brand:</label>
                        <input
                            type="text"
                            name="systemBrand"
                            value={formData.systemBrand}
                            onChange={handleChange}
                            className="border border-black p-2"
                            placeholder="E.g Macbook, Dell, Hp"
                        />
                        </div>

                        {/* Issues */}
                        <div className="flex flex-col">
                        <label className="font-bold">Issues:</label>
                        <input
                            type="text"
                            name="issues"
                            value={formData.issues}
                            onChange={handleChange}
                            className="border border-black p-2"
                        />
                        </div>

                        {/* What have you tried */}
                        <div className="flex flex-col">
                        <label className="font-bold">What have you tried?:</label>
                        <input
                            type="text"
                            name="tried"
                            value={formData.tried}
                            onChange={handleChange}
                            className="border border-black p-2"
                        />
                        </div>

                        {/* What did you notice */}
                        <div className="flex flex-col">
                        <label className="font-bold">What did you notice?</label>
                        <input
                            type="text"
                            name="noticed"
                            value={formData.noticed}
                            onChange={handleChange}
                            className="border border-black p-5"
                        />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center items-center">
                        <button
                            
                            type="submit"
                            className="font-bold bg-blue-700 text-white w-[100px] h-[50px] rounded-full hover:bg-slate-500"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                </form>
                
                {/* Book Session */}
                <div className={`${getSessions? " flex flex-col  fixed gap-10  z-45 md:w-[550px] md:h-[300px] w-[370px] h-[250px] bg-white  top-[250px] md:top-[100px]": "w-0 h-0"}`}>
                    <div className="flex justify-end items-end w-full h-[50px]">
                        <img src={X} className="w-[40px] h-[40px]" onClick={()=> setGetSessions(false)}/>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-10">
                        <p className="text-2xl font-bold">Book a Session for Repair</p>
                        <button onClick={getAvailableSessions} className="w-[240px] h-[40px] bg-blue-600 rounded-full font-bold text-white hover:bg-gray-600">
                            Get Available Sessions
                        </button>
                    </div>
                </div>

                {/* Session List */}
                <div className={`${sessionList? " flex flex-col  fixed gap-10  z-45 md:w-[550px] md:h-[420px] w-[370px] h-[350px] bg-white  top-[250px] md:top-[100px]": "w-0 h-0"}`}>
                    <div className="flex justify-end items-end w-full h-[50px]">
                        <img src={X} className="w-[40px] h-[40px] " onClick={()=> setSessionList(false)} />
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-10">
                        <p className="text-2xl font-bold">Available Sessions</p>
                        <div>
                            {sessions.map((session, index) => {
                                
                                const dateObj = new Date(session.date);
                                const formattedDate = dateObj.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                });

                                // Format start and end time
                                const formattedStart = session.startTime
                                    ? new Date(`1970-01-01T${session.startTime}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                    : '';
                                const formattedEnd = session.endTime
                                    ? new Date(`1970-01-01T${session.endTime}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                    : '';

                                return (
                                    <p key={index} className="hover:bg-gray-600" onClick={()=> setSelectedSession(session)}> {formattedDate} || {formattedStart} - {formattedEnd} </p>
                                );
                            })}
                        </div>
                        <div>
                            <button className="bg-blue-700 rounded-full px-4 py-3 text-white hover:bg-gray-600 active:bg-blue-300">Confirm</button>
                        </div>

                        
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Personal;