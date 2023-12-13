"use client";

import styles from "../styles/Home.module.css";
import Navbar from "@/components/indexpage/navbar";
import HomeComponent from "@/components/indexpage/homeComponents";
import About from "@/components/indexpage/about";
import Famed from "@/components/indexpage/famed";
import Contact from "@/components/indexpage/contact";
import Login from "../components/logincard";
import useAuthContext from "@/Hooks/useAuthContext";

export default function Home() {
  const {loginCard} = useAuthContext()
  return (
    <div className={`${loginCard?"overflow-hidden":" "} + ${styles.background_image}`}>
      <Navbar />
      <Login />
      <HomeComponent />
      <About />
      <Famed />
      <Contact />
    </div>
  )
}
