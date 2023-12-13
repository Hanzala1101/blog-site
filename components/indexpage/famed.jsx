import styles from "@/styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import CircularProgress from '@mui/material/CircularProgress';

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

const getBlogs = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog`, {
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

export default function Famed() {
  const [Blogs, setBlogs] = useState();
  const [loding, setloding] = useState(false)
  const fetchData = async () => {
    const {Blogs}  = await getBlogs();
    setBlogs(Blogs);
  };
  useEffect(() => {
    fetchData();
    setloding(true)
  }, []);

  return (
    <section id="famed">
      <div className={styles.background_image}>
        <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
          <div className={Mac.className}>FAMOUSE ARTICLES</div>
        </div>
        {loding?<div className={`m-10 ${styles.container}`}>
          {Blogs?.filter((blog) => blog.famous)
            .sort((a, b) => b.range - a.range)
            .slice(0, 3)
            .map((blog,i) => {
              return (
                <div key={i}>
                <Link href={`/hasil/${blog._id}`}>
                  <div className={styles.articleBox}>
                    <div className={`text-6xl text-center ${Mar.className}`}>
                      {blog.title}
                    </div>
                    <div
                      className={`text-xl text-center p-10 overflow-y-hidden ${Ami.className}`}
                    >
                      {parse(blog.description.slice(0, 300))}...
                    </div>
                  </div>
                </Link>
                </div>
              );
            })}
        </div>:<div className="w-full h-full flex justify-center content-center">
          <CircularProgress />
          </div>}
      </div>
    </section>
  );
}
