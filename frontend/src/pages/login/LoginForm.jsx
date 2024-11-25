import { useState} from "react";
import useLogin from "../../hooks/useLogin";

export const LoginForm =()=>{
        
    const[user,setUser] = useState({
        username:"",
        password:"",
    });

    const {loading,login} = useLogin();

    const handleLoginChange =(e)=>{
        const {name,value} = e.target;
        setUser((prev)=>({...prev,[name]:value}));
    };

    const handleLoginSubmit = async (event)=>{
        event.preventDefault();
        await login(user);
    };

    return(
        <>
        <div className="h-screen w-screen flex items-center justify-center">
        <form
        onSubmit={handleLoginSubmit}
        className= "max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
        <h1 className="text-2xl font-bold font text-gray-700 text-center mb-4">Login</h1>
        <p className= "text-center text-gray-600 mb-6">
            <b>Please fill in this form to Login</b>
        </p>
        <div>
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" 
            required
            name="username" 
            placeholder="Username"
            value={user.username}
            onChange={handleLoginChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline">
            </input>
        </div>
        <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" 
            required
            name="password" 
            placeholder="Password"
            value={user.password}
            onChange={handleLoginChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline">
            </input>
        </div>
        <div className="text-center">
        <button
          type="submit"
          className="w-full py-2 text-white font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition duration-300"
        >
          {loading? <span className="loading loading-spinner"></span>:"Login"}
        </button>
        </div>
        </form>
        </div>
        </>
    )
};
