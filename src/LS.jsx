import React, {useState} from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
function LS (){
    const [logged, setLogged] = useState(true)
    const [haveAccount , setHaveAccount] = useState(false);
    const [Sdata, setSdata] = useState({
        matricNo: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    const [loading, setLoading] = useState(false)

    const [Ldata, setLdata] = useState({
        matricNo: "",
        password: ""

    })
    async function handleLogin(e){
        e.preventDefault();
        setLoading(true)

         try{
            const response = await axios.post("http://localhost:8080/api/login", {
                matricNo: Ldata.matricNo,
                password: Ldata.password
            });
            

            console.log(response);
            if(response.status === 200){
                const token = response.data.Token;
                console.log(token);
                localStorage.setItem("jwt", token);
                setLoading(false)
                setLogged(true);

            }else{
                alert("Something Went wrong , Try again")
            }
             
        }catch(error){
            console.log(error);
            setLoading(false); 
            alert("Login failed, please try again.");
        }
    }
    async function handleSignup(e){
        e.preventDefault();
        setLoading(true)

        if (Sdata.password !== Sdata.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try{
            const response = await axios.post("http://localhost:8080/api/signup", {
                matricNo: Sdata.matricNo,
                name: Sdata.name,
                email: Sdata.email,
                password: Sdata.password
            });
            setLoading(false);
            console.log(response);
            if(response.data === 'DATA RECEIVED, TRY LOGGING IN'){
                setHaveAccount(true);
            }else{
                alert("Somthing Went Wrong, Try again later")
            }
        }catch(error){
            console.log(error);
            setLoading(false)
            alert("Something went wrong. Try again later")
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSdata(prev => ({
        ...prev,
        [name]: value   // dynamic key update
        }));
    }

    function handleChangeL(e) {
        const { name, value } = e.target;
        setLdata(prev => ({
        ...prev,
        [name]: value   // dynamic key update
        }));
    }

    return(
        <div className={logged? "hidden" : ""}>
            
            {/*Sign Up*/}
            <div className="fixed inset-0  bg-opacity-0.2 backdrop-blur-xs z-10"></div>         
                <div className={haveAccount? "hidden": "flex flex-col fixed md:top-1 top-0 z-40 left-1/2 -translate-x-1/2 bg-blue-500 w-[300px] h-[550px] mt-12 md:mt-0 rounded-2xl justify-center"}>
                    
                    <div><p className="mb-3 text-center text-white text-2xl font-extrabold">SIGN-UP</p></div>
                    {loading && (
                        <div className=" fixed  top-20 flex justify-center items-center w-full h-2 z-50">
                            <BeatLoader color="white"  size={50}/>
                        </div>
                    )}
                    <form onSubmit={handleSignup} className="flex flex-col items-center justify-center">
                        <label className=" mb-2 font-bold text-white">
                            Matric Number
                            <input
                            type="text"
                            name="matricNo"
                            value={Sdata.matricNo}
                            onChange={handleChange}
                            className="text-black w-[250px] border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <label className=" mb-2 font-bold text-white">
                            Name
                            <input
                            type="text"
                            name="name"
                            value={Sdata.name}
                            onChange={handleChange} 
                            className="text-black w-[250px] border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <label className=" mb-2 font-bold text-white">
                            Email
                            <input
                            type="text"
                            name="email"
                            value={Sdata.email}
                            onChange={handleChange}
                            className="text-black w-[250px] border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <label className=" mb-2 font-bold text-white">
                            Password
                            <input
                            type="password"
                            name="password"
                            value={Sdata.password}
                            onChange={handleChange}
                            className="w-[250px] border text-black p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <label className=" mb-2 font-bold text-white">
                            Confirm Password
                            <input
                            type="password"
                            name="confirmPassword"
                            value={Sdata.confirmPassword}
                            onChange={handleChange}
                            className="w-[250px] text-black border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-[250px] bg-blue-600 text-white py-2 rounded mt-4 hover:bg-gray-500 active:bg-gray-300 font-bold transition-all duration-500"
                        >
                            Sign Up
                        </button>

                        <p onClick={() =>setHaveAccount(true)} className="mt-2 hover:text-purple-900 hover:cursor-pointer active:text-purple-900 active:cursor-pointer">Already Have an account, Login.</p>
                    </form>
                </div>
            

            <div className={haveAccount? "flex justify-center fixed top-1 left-1/2 -translate-x-1/2  rounded-xl z-50  shadow-lg" : "hidden"}>
                <div className="flex flex-col bg-blue-500 w-[300px] h-[550px] mt-12 md:mt-0 rounded-2xl justify-center">
                    <div><p className="mb-3 text-center text-white text-2xl font-extrabold">LOGIN</p></div>
                    
                    {loading && (
                        <div className=" fixed  top-20 flex justify-center items-center w-full h-2 z-50">
                            <BeatLoader color="white"  size={30}/>
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center">
                        <label className=" mb-2 font-bold text-white">
                            Matric Number
                            <input
                            type="text"
                            name="matricNo"
                            value={Ldata.matricNo}
                            onChange={handleChangeL}
                            className="text-black w-[250px] border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        

                        <label className=" mb-2 font-bold text-white">
                            Password
                            <input
                            type="password"
                            name="password"
                            value={Ldata.password}
                            onChange={handleChangeL}
                            className="w-[250px] text-black border p-2 rounded mt-1 flex flex-col items-center bg-white"
                            required
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-[250px] bg-blue-600 text-white py-2 rounded mt-4 hover:bg-gray-500 active:bg-gray-300 font-bold transition-all duration-500"
                        >
                            LOGIN
                        </button>

                        <p onClick={() =>setHaveAccount(false)} className="mt-2 hover:text-purple-900 hover:cursor-pointer active:text-purple-900 active:cursor-pointer">Don't Have an account, Sign Up.</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LS;