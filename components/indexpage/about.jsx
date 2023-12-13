import styles from "@/styles/Home.module.css";
import { Michroma } from "next/font/google";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <section id="about">
      <div className={`flex items-center align-middle justify-center ${styles.background_image}`}>
        <div className={styles.centered_circle}>
          <div className="text-center w-full mt-16 pb-3">
            <div className={`text-6xl font-bold text-black ${Mac.className}`}>ABOUT ME</div>
          </div>
          <div className="text-center pt-8  text-black text-xl px-4">
           
            {`I am a passionate writer with a deep love for the written word. 
            Writing, to me, is not just a profession; it's a way of life. It allows me to weave stories, craft narratives, and share ideas that resonate with people from all walks of life.
            
           
            My journey as a writer has taken me on countless adventures, from delving into the realms of fiction to exploring the intricacies of non-fiction. I've had the privilege of penning down the human experience, capturing moments of joy, sadness, triumph, and introspection.
            
           
            I love to write in my mother tongue, which is Urdu, because I feel a sense of home and peace when I write in it. I believe that Urdu is a language that can beautifully capture and convey emotions. The words used in this language have a magical quality, especially in poetry. That's why I prefer to express myself in Urdu.
            
           
            Thank you for visiting my corner of the internet. I invite you to explore my writings, share your thoughts, and embark on literary journeys with me. Together, let's discover the power of storytelling and the magic of words.
            
           
            I look forward to sharing the written word with you.
            
  
            Warm regards`}
            
            </div>
        </div>
      </div>
    </section>
  );
}

