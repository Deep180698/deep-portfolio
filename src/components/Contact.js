export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-300 mb-10 max-w-xl mx-auto">
        I’m always open to discussing new projects, opportunities, or collaborations. 
        Feel free to reach out! 🚀
      </p>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <a
          href="mailto:pateldeep0989@gmail.com"
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          ✉ Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/deep-patel-a65b0a157"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/Deep180698"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          💻 GitHub
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Deep Patel. All rights reserved.
      </p>
    </section>
  );
}
