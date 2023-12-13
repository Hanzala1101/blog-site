import { React, useState } from "react";
import SignUp from "./AuthModel";
import useAuthContext from "@/Hooks/useAuthContext";

function Card() {
  const { loginCard } = useAuthContext();
  const [isSignin, setisSignin] = useState(true);
  return (
    <>
      <div
        className={`w-screen h-screen -top-2 z-10  ${
          loginCard ? "absolute backdrop-blur-sm" : "hidden"
        }`}
      >
        <div className="relative flex justify-center items-center w-full h-full z-10">
          <SignUp isSignIn={isSignin} setisSignin={setisSignin} />
        </div>
      </div>
    </>
  );
}

export default Card;
