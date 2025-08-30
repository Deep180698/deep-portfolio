export default function Projects() {
  const projects = {
    dotnet: [
      {
        title: "Employee Management System",
        desc: "A professional live project built with .NET Core (backend) and Vue.js (frontend). Developed during my work at [Company Name]. Key features: employee CRUD, role-based access, attendance tracking, notifications, and admin dashboard.",
        link: "https://komalems.com/",
        type: "Professional Project"
      },
      {
        title: "Transportation System",
        desc: "A professional live transportation management system built with .NET (backend) and Vue.js (frontend). Developed during my work at [Company Name]. Features real-time vehicle tracking, route optimization, booking system, and admin dashboard.",
        link: "https://totalwaytrans.com/",
        type: "Professional Project"
      },
    ],

    react: [
      {
        title: "Job Guru",
        desc: "A job-finding mobile app built with React Native and Node.js, featuring real-time updates, MongoDB backend, and deployment on Render.",
        link: "https://github.com/Deep180698/JobGuru",
      },
      {
        title: "Restaurant POS System",
        desc: "POS solution built with Node.js, MongoDB, React.js (admin dashboard), and React Native (front-end). Supports staff management, reporting & real-time orders. 🔧 In development.",
        link: "https://github.com/Deep180698/POS_APP",
      },
      {
        title: "Flip the Fashion",
        desc: "An e-commerce platform with payment integration, optimized UI/UX, and responsive performance.",
        link: "http://flipthefashion.com/",
      },
    ],
  };

  const Section = ({ title, items }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {items.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <p className="text-gray-600 mb-4">{p.type}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <Section title=".NET + Vue.js Projects" items={projects.dotnet} />
      <Section title="React / React Native Projects" items={projects.react} />
    </section>
  );
}
