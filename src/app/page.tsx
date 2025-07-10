import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    
    <div>

     <Navbar />

    <main className=" bg-pink-200 grid grid-rows-[20px_20px_20px_20px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<Navbar />

 

  {/* 
  <HeroSection />
  <Projects />
  <ContactForm />
  <Footer />
*/}
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
    </main>
    </div>
  );
}













