export default function Projects() {
  const projects = [
    {
      title: "Flip the Fashion",
      desc: "An E-commerce platform offering a seamless shopping experience with payment integration, optimized UI/UX, and responsive performance.",
      link: "http://flipthefashion.com/",
    },
    {
      title: "Job Guru",
      desc: "A job-finding mobile app built with React Native and Node.js, featuring real-time updates, MongoDB backend, and deployment on Render.",
      link: "https://github.com/Deep180698/JobGuru", // frontend
    },
 
      {
      title: "Restaurant POS System",
      desc: "Comprehensive POS solution built with Node.js, MongoDB, React.js (admin dashboard), and React Native (front-end). Supports staff mgmt, reporting & real-time orders. Moreover, this app is 🔧 Currently in development.",
      link: "https://github.com/Deep180698/POS_APP", // optional: leave blank or add a future link
    },
    {
      title: "Transportation System",
      desc: "Transportation management system built with .NET (backend) and Vue.js (frontend). Features real-time vehicle tracking, route optimization, booking system, and admin dashboard.",
      link: "https://totalwaytrans.com/",
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center px-6">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
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
    </section>
  );
}
