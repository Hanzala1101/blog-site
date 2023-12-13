import { Michroma, Orbitron, Amiri } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Pic from "@/assets/cpic.jpg";
import Spic from "@/assets/spic.jpg";
import Image from "next/image";
import Link from "next/link";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function Contact() {
  return (
    <section id="contact">
      <div className={`${styles.background_image} , ${styles.allsection}`}>
        <div className={styles.topSection}>
          <div
            className={`${"flex flex-col text-center items-center w-full"} , ${
              styles.leftHalf
            }`}
          >
            <div className="text-black">
              <div className="inline-block lg:text-3xl">We are &nbsp;</div>
              <div className={`inline-block  lg:text-3xl ${Orb.className}`}>
                writers &nbsp;
              </div>
              <div className="inline-block lg:text-3xl">my &nbsp;</div>
              <div className={`inline-block  lg:text-3xl ${Orb.className}`}>
                love,
              </div>
            </div>
            <div className="text-black">
              <div className="inline-block lg:text-3xl">We dont &nbsp;</div>
              <div className={`inline-block  lg:text-3xl ${Orb.className}`}>
                cry,
              </div>
            </div>
            <div className="text-black">
              <div className="inline-block lg:text-3xl">We &nbsp;</div>
              <div className={`inline-block lg:text-3xl ${Orb.className}`}>
                bleed &nbsp;
              </div>
              <div className="inline-block lg:text-3xl">on &nbsp;</div>
              <div className={`inline-block lg:text-3xl ${Orb.className}`}>
                paper.
              </div>
            </div>
            <Link href="/newBlog">
              <div className=" text-black uppercase border border-black p-2 px-10 w-fit text-2xl mt-2 bg-[#a1392dce]  hover:bg-[#331717b3]">
                start
              </div>
            </Link>
          </div>
          <div className={styles.rightHalf}>
            <Image src={Pic} alt="not found" className="h-full w-full" />
          </div>
        </div>

        <div className={styles.bottomSectionContainer}>
          <div className="h-full w-60">
            <Image src={Spic} alt="not found" className="h-full w-full" />
          </div>
          <div>
            <div className="text-center w-full mt-5 text-5xl font-bold text-black">
              <div className={Mac.className}>CONTACT</div>
            </div>
            <div className=" m-5 text-center">
              <div className={`inline-block ${Ami.className}`}>
                If you have any query and question please contact me through
                this platforms.
              </div>
              <div className={`font-bold ${Ami.className}`}>
                Note: Dont ask irrelevant things and other than article.
              </div>
              <div className={`inline-block ${Ami.className}`}>
                If you do then strict action will be taken.
              </div>
            </div>
            <div className="m-5 text-center">
              <div className={`font-bold ${Ami.className}`}>
                bakashine@gmail.com
              </div>
            </div>
            <div className="m-5 text-center">
              <div className={`font-bold ${Ami.className}`}>_raaz.myst_</div>
            </div>
          </div>
          <div className="h-full w-60">
            <Image src={Spic} alt="not found" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
