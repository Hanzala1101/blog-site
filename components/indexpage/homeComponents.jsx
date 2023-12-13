import { Lexend, Old_Standard_TT, Lancelot, Michroma } from "next/font/google";
import Styles from "@/styles/Home.module.css"
import Link from "next/link";
// If loading a variable font, you don't need to specify the font weight
const inter = Lexend({ subsets: ["latin"] });
const old = Old_Standard_TT({ weight: "700", subsets: ["latin"] });
const Lanc = Lancelot({ weight: "400", subsets: ["latin"] });
const Mac = Michroma({ weight: "400", subsets: ["latin"] });

export default function HomeComponent() {
  return (
    <section id="home">
      <div className={`${"flex  w-screen place-items-center  "}, ${Styles.height}`}>
        <div className="text-white  ">
          <div className={`relative p-2 ml-10 ${inter.className}`}>
            <div className={`uppercase lg:text-8xl text-7xl ${Lanc.className}`}>
              Welcome.....
            </div>
            <div className="text-4xl lg:text-5xl">
              <div className={`tracking-widest ${old.className}`}>Hey, I ZAARA SHAJAL</div>
              <div><div className="inline-block lg:text-4xl pt-5">Writing is my &nbsp;</div>
              <div className={`inline-block ${Mac.className}`}>OBSESSION</div></div>
              <div className="inline-block lg:text-4xl pt-5 ">No one can &nbsp;</div>
              <div className={`inline-block  ${Mac.className}`}>STOP ME</div>
              <div className={`leading-loose ${Mac.className}`}> PAASIONATE</div>
            </div>
            <Link href="/mblog">
            <div className="uppercase border border-black p-2 px-7 w-fit text-3xl mt-2 bg-[#a1392d6e] hover:bg-[#944141b3]">
              read
            </div>
            </Link>
          </div>
        </div>
      </div>
      </section>
  );
}
