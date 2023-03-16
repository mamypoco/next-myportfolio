import Head from "next/head";
import Image from "next/image";
import bandMe from "../public/images/bandme.jpg";
import { Button } from "reactstrap";

export default function Home() {
   return (
      <div className="fullpage">
         <header className="header">
            <div className="wrapper">
               <h1>
                  Hello, I'm Mami, <br />
                  Frontend Developer.
               </h1>
            </div>

            <Image src={bandMe} width={300} height={400} alt="Burton and Me" />
         </header>
         <Button>Thank you!</Button>
      </div>
   );
}
