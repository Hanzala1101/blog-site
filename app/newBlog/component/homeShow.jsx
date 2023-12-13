import React from "react";
import styles from "@/styles/Home.module.css";
import Titles from "@/components/blogComponents/title";
import CheckBox from "@/components/blogComponents/checkbox";
// import Descp from "@/components/blogComponents/desc";
import Desc from "./desc"
import { Michroma, Orbitron, Amiri } from "next/font/google";
import { useRouter } from "next/navigation";
const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function HomeShow({
  title,
  description,
  settitle,
  setdesc,
  SubmitEvent,
  range,
  setrange,
  famous,
  setFamous,
}) {
  const router = useRouter();
  const rangeChange = (e) => {
    setrange(e.target.value);
  };
  const cancelEvent = () => {
    settitle("");
    setdesc("");
    setrange(0);
    setFamous(false);
    router.push("/");
  };
  // console.log("range" + range)
  // const handleCheckboxChange = () => {
  //   setFamous(famous=>!famous)
  // }
  return (
    <>
      <div className={styles.background_image}>
        <form
          className="pt-5 p-5 text-white w-screen"
          onSubmit={SubmitEvent}
        >
          <div
            className={`text-4xl font-bold flex justify-between ${Mac.className}`}
          >
            <p>Write a Blog</p>
            <div
              className="lg:mr-4 m-2 float-right bg-[#ffffff40] p-2 text-2xl  hover:text-black rounded-md hover:cursor-pointer"
              type="submit"
              onClick={cancelEvent}
            >
              Cancel
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Titles title={title} settitle={settitle} />
            {/* <div className={`m-8 text-xl ml-2 ${Orb.className}`}>
              Title
              <input
                name="Title "
                placeholder="Enter the Title"
                defaultValue={title}
                onChange={(e) => settitle(e.target.value)}
                className=" ml-5 mb-4 p-2 rounded-md text-black"
              />
            </div> */}
          </div>
          <div className="flex flex-row space-x-52 mb-2">
            <div className={`text-xl ml-2 ${Orb.className}`}>Start</div>
            <div className="">
              <CheckBox famous={famous} setFamous={setFamous} />
              {/* <div>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchChecked"
                  checked={famous}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="flexSwitchChecked"
                >
                  Famouse
                </label>
              </div> */}
            </div>
            <div>
              <label
                htmlFor="default-range"
                className={`text-xl ${Ami.className}`}
              >
                Rank:
              </label>
              <input
                id="default-range"
                type="range"
                min={0}
                max={5}
                value={range}
                onChange={rangeChange}
                className="w-36 h-2 ml-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
          </div>
          {/* <textarea name="textarea" id="textarea" cols="30" rows="10" className="text-black"
          value={description} onChange={(e)=>setdesc(e.currentTarget.value)}
          ></textarea> */}
          {/* <Descp desc={description} setdesc={setdesc} /> */}
          <Desc setdesc={setdesc}/>
          <button
            className="lg:mr-4 m-2 float-right bg-[#ffffff40] p-2 text-2xl  hover:text-black rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
