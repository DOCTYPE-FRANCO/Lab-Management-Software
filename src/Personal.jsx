import React, {useState} from "react";
import Navbar from "./Navbar";
import Logo from "./assets/pau-logo.png";
import PersonalSystem from "./assets/user-img.png";
import axios from "axios";


function Personal(){
    const [formData, setFormData] = useState({
        name: "",
        systemBrand: "",
        issues: "",
        tried: "",
        noticed: ""
    });

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

        setFormData({
            name: "",
            systemBrand: "",
            issues: "",
            tried: "",
            noticed: "" 
        })

    }

    return(
        <div className="flex flex-col justify-center items-center">
            
            <div className="flex flex-col gap-5 justify-center items-center mt-0  ">
                <img src={PersonalSystem} className="w-[65px]  rounded-full"/>
                <h1 className="text-white text-3xl font-bold">
                    PERSONAL COMPUTER 
                </h1>
                
            </div>

    
            <form id="personalForm"  onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 sm:w-[250px] w-[400px] h-[500px] p-7 pt-10 rounded-2xl mb-11 shadow-lg bg-white justify-center mt-10">

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
                    >
                        Submit
                    </button>
                    </div>
                </div>
            </form>
            
            
        </div>
    );
}

export default Personal;