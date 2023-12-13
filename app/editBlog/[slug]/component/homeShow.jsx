import React from "react";
import styles from "@/styles/Home.module.css";
import Titles from "@/components/blogComponents/title";
import Descp from "@/components/blogComponents/desc";
import CheckBox from "@/components/blogComponents/checkbox";
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
  const rangeChange =(e)=>{
    setrange(e.target.value)
  }
  const cancelEvent=()=>{
    settitle("")
    setdesc("")
    setrange(0)
    setFamous(false)
    router.push('/')
  }
  // console.log("range" + range)
  return (
    <>
      <div className={styles.background_image}>
        <form
          className="pt-5 p-5 text-white w-screen"
          method="POST"
          onSubmit={SubmitEvent}
        >
          <div className={`text-4xl font-bold flex justify-between ${Mac.className}`}>
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
            
          </div>
          <div className="flex flex-row space-x-52 mb-2">
            <div className={`text-xl ml-2 ${Orb.className}`}>Start</div>
            <div className="">
              <CheckBox famous={famous} setFamous={setFamous} />
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
          <Descp desc={description} setdesc={setdesc} />
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
