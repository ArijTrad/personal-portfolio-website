type Props = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a href={link} target="_blank" className="text-blue-500 underline">
        View Project
      </a>
    </div>
  );
}
