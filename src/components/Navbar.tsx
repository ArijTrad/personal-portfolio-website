
export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex justify-between max-w-4xl mx-auto">
        <li className="font-bold">My Portfolio</li>
        <li className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Stacks</a>
          <a href="#contact" className="hover:underline">About Me</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
