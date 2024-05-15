import React, { useState } from "react";
import { AdminCredentials } from "../Datas/AdminCredentials";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setAdminLoggedIn } from "../Redux/features/AdminSlice";
import CustomButton from "../customcomponets/CustomButton";

const LoginModal = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === AdminCredentials.email && password === AdminCredentials.password) {
      console.log("Admin logged in successfully!");
      toast.success("admin loggined succussfully")
      dispatch(setAdminLoggedIn(true));
      
    } else {
        setError("Invalid email or password");
        dispatch(setAdminLoggedIn(false));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
      <div className="bg-stone-100 bg-opacity-45 p-4 rounded-3xl shadow-md flex flex-col  " style={{backgroundImage:"url('')"}}>
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-2 ">
          <label htmlFor="username  "  className="text-xs"> Username:</label>
          <input required className="w-[80%] h-8 rounded-xl  outline-none p-3 text-sm" type="email" id="username" name="email" />
          <label htmlFor="password " className="text-xs mt-4">Password:</label>
          <input required className="w-[80%] h-8 rounded-xl  outline-none p-3 text-sm" type="password" id="password" name="password" />
          {/* <button type="submit">Login</button> */}
 <CustomButton content={"Login"} type={"submit"}/>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default LoginModal;
