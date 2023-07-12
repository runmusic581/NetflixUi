import Input from "@/Components/Input";
import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover '>
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:2/5 sm:max-w-md lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="name"
                />
              )}

              <Input
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
              />
              <Input
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
              />
            </div>
            <button className="bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex flex-row justify-center items-center gap-4 mt-8 ">
              <div
                className="
                w-10
                h-10
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                cursor-pointer
                hover:opacity-80
                transition
                "
              >
                <FcGoogle size={30} />
              </div>
              <div
                className="
                w-10
                h-10
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                cursor-pointer
                hover:opacity-80
                transition
                "
              >
                <FaApple size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix ?"
                : "Already have an account"}
              <span
                onClick={toggleVariant}
                className="text-white cursor-pointer ml-1 hover:underline"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
