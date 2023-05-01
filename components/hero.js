import styles from "../styles/Hero.module.css";
import Link from "next/link";

const Hero = () => {
   return (
      <div className={styles.hero}>
         <div className={styles.greeting}>
            <h1>
               Hi, I'm Mami.
               <br />
               Fullstack Developer.
            </h1>

            <div className={styles.links}>
               <ul>
                  <li>
                     <Link href="#About">About</Link>
                  </li>
                  <li>
                     <Link href="#Project">Project</Link>
                  </li>
                  <li>
                     <Link href="#Contact">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Hero;
