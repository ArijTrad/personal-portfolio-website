//alt="Arij Trad – Web Developer portrait photo for personal portfolio"
/*
Add structured data (Schema.org) later for rich search results

Use priority for above-the-fold images with next/image

Add a title attribute (optional):

title="Arij Trad – Full Stack Web Developer"
*/

//==== сделать на русском alt text лутший веб разрабочик





import Image from 'next/image';
import InteractiveStars from './ui/InteractiveStars';

export default function HeroSection() {
  
  return (
    <section 
      className="relative h-[650px] overflow-hidden flex flex-row items-center justify-center px-8 gap-8 bg-transparent">
      
      {/* Black background behind the canvas */}
      <div className="absolute inset-0 bg-black z-[-2]" />
      
      {/* Interactive Stars Background */}
      <InteractiveStars height={650} />

      {/* Left: Text */}
      <div className="max-w-md z-10">
        <h1 className="text-4xl font-bold mb-4">
          This is the <u>HERO</u> section
        </h1>
        <h1 className="flex justify-center">
          <b>this is the <u>SUBTEXT</u> section</b>
        </h1>
      </div>

      <Image
        src="/images/best-web-developers-arij-trad.png"   // path inside /public
        alt="hire best web developers hire now online"          // Updated Russian alt text
        width={500}              // desired display width
        height={550}             // desired display height
        className="rounded-lg object-cover self-end filter self-end z-10"
        priority                // preload because it's above the fold
      />
    </section>
  );
}