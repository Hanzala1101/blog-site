import React from 'react'
import Link from "next/link";
import Styles from "../../../styles/Home.module.css";
import parse from 'html-react-parser';

import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "400", subsets: ["latin"] });

export default function Read({title, desc}) {
  return (
    <div className="w-screen min-h-screen bg-slate-500">
            <div className="text-4xl text-center lg:text-5xl text-white ml-5 pt-8">
                <div className={Mar.className}>{title}</div>
            </div>
            <div className="flex align-middle justify-center ">
                <div className={Styles.hlog}>
                    <div className={`m-2 p-2 text-xl text-justify`}>
                    {parse(desc)}
                    </div>
                </div>
            </div>    
            <Link href="/mblog"><div className="text-xl text-[#ffffff] text-center"> Go back</div></Link>
        </div>
  )
}
