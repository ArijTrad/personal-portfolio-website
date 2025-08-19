'use client';
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow p-4 ">
      <ul className="flex justify-between max-w-4xl mx-auto">
        <li className="font-bold"><Link href="/">My Portfolio</Link></li>
        <li className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Stacks</a>
          <a href="#contact" className="hover:underline">About Me</a>
          <a href="#contact" className="hover:underline">Contact</a>

           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/cv">My-CV</Link>

        </li>
      </ul>
    </nav>
  );
}
