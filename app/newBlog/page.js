"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Home from "./component/homeShow"
// import HomeComponent from "@/components/indexpage/homeComponents";

export default function NewBlog() {
  const [title, settitle] = useState("My blog");
  const [description, setdesc] = useState("Started long time ago");
  const [famous, setFamous] = useState(false)
  const [range, setrange] = useState(5)
  const router = useRouter();

  const SubmitEvent = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
 
      const res = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({  title, description, famous, range }),
      });
      
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <HomeComponent/>
    <Home title={title} 
    description={description} 
    settitle={settitle} 
    setdesc={setdesc} 
    SubmitEvent={SubmitEvent}
     range={range}
     setrange={setrange} famous={famous} setFamous={setFamous} />
  );
}



