import React from 'react'
import ResponsiveLayout from '../layout/ResponsiveLayout'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginLoading = () => {
  return (
    
    <ResponsiveLayout>
    <ToastContainer />
    <div
      className="flex justify-center items-center h-[100vh]"
    //   style={{
    //     backgroundImage: `url(${loginImg.src})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "100% 100%",
    //   }}
    >
      <div className="flex w-[45rem] h-[25rem]">
        <div className="w-[55%] bg-[#ffc3c360] rounded-l-md flex flex-col gap-4 justify-center items-center shadow-md shadow-red-100">
          <div className="w-32">
            {/* <Image
              className="w-full"
              src={require("../../assests/logo1.png")}
              height={300}
              width={300}
              alt="logo"
            ></Image> */}
          </div>
          <div className="text-3xl merri font-semibold text-center text-[#ac2828]">
            {/* Login to Your Account */}
          </div>
          <div className="w-[70%] flex justify-around text-[#cc191996] text-xs">
            {/* <div
              className={`cursor-pointer ${
                loginUser == "users"
                  ? "text-[#b43232] border-b-2 border-b-red-700"
                  : ""
              }`}
            //   id="users"
            //   onClick={loginUserHandler}
            >
              {/* As Donor */}
            </div> */
            
            
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
          
          </div>
          
          
       
          <div className="flex flex-col gap-2">
           
          </div>
        </div>
        </div>
       
      
   
  </ResponsiveLayout>
  )
}

export default LoginLoading