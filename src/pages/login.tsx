import React from "react";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[550px] py-20 px-10 rounded-xl border shadow-md">
        <form className="w-full flex flex-col justify-between">
          <h1 className="w-full text-[#555555] text-center text-4xl pb-10 font-[Montserrat-Medium]">
            Sign In With
          </h1>

          <div className="pt-9 pb-2.5">
            <span className="text-[#555555] font-montserrat-semibold">
              Username
            </span>
          </div>
          <div
            className="w-full relative bg-[#f7f7f7] border border-[#e6e6e6] rounded-[10px] validate-input"
            data-validate="Username is required"
          >
            <input className="input100" type="text" name="username" />
            <span className="focus-input100"></span>
          </div>

          <div className="pt-3 pb-2.5">
            <span className="text-[#555555] font-montserrat-semibold">
              Password
            </span>

            <a href="#" className="text-[#999999] text-sm bo1 m-l-5">
              Forgot?
            </a>
          </div>
          <div
            className="w-full relative bg-[#f7f7f7] border border-[#e6e6e6] rounded-[10px] validate-input"
            data-validate="Password is required"
          >
            <input className="input100" type="password" name="pass" />
            <span className="focus-input100"></span>
          </div>

          <div className="container-login100-form-btn m-t-17">
            <button className="flex justify-center items-center px-5 w-full h-[60px] text-white bg-[#333333] duration-300 hover:bg-[#333333dc] rounded-[10px] font-montserrat-medium">
              Sign In
            </button>
          </div>

          <div className="w-full text-center pt-14">
            <span className="text-[#999999] text-sm">Not a member?</span>

            <a href="#" className="text-[#999999] text-sm bo1">
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
