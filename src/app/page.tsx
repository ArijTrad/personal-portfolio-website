




import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

import ClientButton from '@/components/ClientButton';

export default function Home() {
  return (





    
    <div>

     <Navbar />
     <HeroSection  />

    <main className=" bg-pink-200 grid grid-rows-[20px_20px_20px_20px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Image
              className="dark:invert"
              src="/file.svg"
              alt="Vercel logomark"
              width={38}
              height={38}
            />

            <Image
              className="dark:invert"
              src="/globe.svg"
              alt="Vercel logomark"
              width={38}
              height={38}
            />
            <Image
              className="dark:invert"
              src="/window.svg"
              alt="Vercel logomark"
              width={38}
              height={38}
            />
        
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Portfolio
      </h1>

<ClientButton /> {/* ✅ No 'use client' here! */}


----------------------------------- <br />

<ProjectCard title={"search engine"} description={"full stack project"} link={"google.com"} />


    </main>
    </div>
  );
}













