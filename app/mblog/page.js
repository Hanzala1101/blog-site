import Styles from "../../styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
import React from "react";
import Star from "../../components/star"
import Link from "next/link";
import parse from 'html-react-parser';

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "400", subsets: ["latin"] });

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};

export default async function Mblog() {
  try {
    const { Blogs } = await getBlogs();

  return (
    <section id="main">
      <div className={Styles.background_image}>
        <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
          <div className={Mac.className}>RECENT BLOGS</div>
        </div>
        <div className={`flex flex-col items-center m-10 ${Styles.scroll}`}>
          {Blogs.sort((a, b) => b.range - a.range).map((t, i) => (
            <div key={i}>
              <Link href={`/hasil/${t._id}`} >
                <div className={Styles.blogbox}>
                  <div className={`text-4xl ${Mar.className}`}>{t.title}</div>
                  <div className={`text-xl ${Ami.className}`}>
                    {parse(t.description?.slice(0, 60))}...
                  </div>
                  <Star count={t.range} id={t._id}/>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center ">
          <a href="/">
            <button className="bg-red-800 text-white p-2 my-8 rounded-md hover:bg-red-950">
              Go to Home
            </button>
          </a>
        </div>
      </div>
    </section>
  )
    } catch (error) {
      return (<>Blogs not found</>)
    }

}
