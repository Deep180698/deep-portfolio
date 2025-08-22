export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Deep Patel</span> | All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:pateldeep0989@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/deep-patel-a65b0a157"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Deep180698"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
