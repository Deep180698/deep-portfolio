export default function Skills() {
  const skills = {
    Frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vue.js",
      "Angular",
      "SASS",
      "Webpack",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Redis",
    ],
    "Tools & Others": [
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "Jest",
      "Cypress",
      "CI/CD",
      "Linux",
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white p-6 rounded-xl shadow-sm border"
          >
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
