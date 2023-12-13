import { Michroma } from "next/font/google";
import { useForm } from "react-hook-form";
import AuthModelInput from "./AuthModelInput";
import useAuth from "@/Hooks/useAuth";
import useAuthContext from "@/Hooks/useAuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Mac = Michroma({ weight: "400", subsets: ["latin"] });

export default function AuthModel({ isSignIn, setisSignin }) {
  const {loading, data, error,loginCard,setloginCard}= useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin, signup}= useAuth();
  const renderContent = (signInCntent, signUpConent) => {
    return isSignIn ? signInCntent : signUpConent;
  };

  const handleSignIn =()=>{
    setisSignin(!isSignIn)
  }
  const onSubmit = (data) => {
    isSignIn? signin(data): signup(data) };
  return (
    <>
      <div
        id="popup-modal"
        className=" max-w-sm max-h-screen overflow-y-scroll no-scrollbar p-4 relative bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"

      >
        {loading?(
          <div className="w-full h-full flex justify-center content-center">
          <CircularProgress />
          </div>
        ):(
        <><div
          className="text-white w-full flex justify-end text-black right-6 font-extrabold text-lg hover:cursor-pointer"
          onClick={() => {
            setloginCard(false);
          }}
        >
          {" "}
          x{" "}
        </div>
        <div className="space-y-6" action="#">
          <h5
            className={`text-xl font-medium text-gray-900 dark:text-white ${Mac.className}`}
          >
            {renderContent("Sign In to our platform","Sign Up to our platform")}
          </h5>
          
          {error?(<Alert severity="error">{error}</Alert>):("")}
          <AuthModelInput register={register}
                errors={errors}
                isSignIn={isSignIn}/>
          
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit(onSubmit)}
          >
            {renderContent("Login to your account"," Register your account",)}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex">
            {renderContent("Not register ? ","Already register ? ")}
            <div
              className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
              onClick={handleSignIn}
            >
              {renderContent("Create account","Login")}
            </div>
          </div>
        </div>
        </>
         )} 
      </div>
    </>
  );
}
