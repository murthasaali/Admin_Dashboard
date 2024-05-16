import React, { useState } from "react";
import { AdminCredentials } from "../Datas/AdminCredentials";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAdminLoggedIn } from "../Redux/features/AdminSlice";
import CustomButton from "../customcomponets/CustomButton";

const LoginModal = () => {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (
      email === AdminCredentials.email &&
      password === AdminCredentials.password &&
      AdminCredentials.role === "admin"
    ) {
      console.log("Admin logged in successfully!");
      setloading(true);
      setTimeout(() => {
        dispatch(setAdminLoggedIn(true));

        setloading(false);
        toast.success("admin loggined succussfully");
      }, 3000);
    } else {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
      dispatch(setAdminLoggedIn(false));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white bg-opacity-90 z-50">
      <div
        className="bg-stone-100 rounded-3xl"
        style={{
          backgroundImage:
            "url('https://dimasik-toys.ru/upload/iblock/a81/sw36qv7t8969ht6usjb0ub7gfz6l9fy7.jpg')",
        }}
      >
        <div className="backdrop-blur-md  bg-opacity-45  rounded-3xl shadow-md flex flex-col  p-4">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-[300px]  ">
            <label
              htmlFor="email  "
              className="text-xs font-thin px-3 text-stone-400"
            >
              {" "}
              email:
            </label>
            <input
              required
              className="w-[80%] h-8 rounded-xl    outline-none p-3 text-sm bg-customColor2 bg-opacity-40"
              type="email"
              id="email"
              name="email"
            />
            <label
              htmlFor="password "
              className="text-xs font-thin px-3 text-stone-400 mt-4"
            >
              Password:
            </label>
            <input
              required
              className="w-[80%] h-8 rounded-xl  outline-none p-3 text-sm mb-4 bg-customColor2 bg-opacity-40"
              type="password"
              id="password"
              name="password"
            />
            {error && <p className="text-red-500 text-xs p-3">{error}</p>}
            {/* <button type="submit">Login</button> */}
            {loading ? (
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <CustomButton
                content={"Login"}
                type={"submit"}
                border={"border"}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
