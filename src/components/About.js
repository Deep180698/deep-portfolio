export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      {/* Top Intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          I'm a passionate developer with <span className="font-semibold text-blue-600">3+ years</span> of experience 
          building web and mobile applications that make a difference.
        </p>
      </div>

      {/* Story + Features */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* My Story */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m Deep Patel, a passionate Full Stack Developer and UI Platform Specialist with over 3 years of experience designing and building scalable, secure, and high-performing web and mobile applications. My journey in technology started with a love for problem-solving and creativity, which evolved into a career crafting solutions that combine functionality, design, and user experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’ve had the opportunity to work with startups and established companies, developing versatile platforms ranging from social networking and e-commerce to restaurant POS systems and on-demand service marketplaces. Whether building real-time mobile apps with React Native, creating responsive dashboards with React.js, or designing robust backend systems with Node.js and MongoDB, I focus on clean, maintainable code and modular architectures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My work extends beyond coding I’m passionate about integrating DevOps practices like Docker, CI/CD pipelines, and cloud deployments to ensure seamless and scalable systems. I enjoy turning complex requirements into intuitive user experiences, empowering teams and users alike.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Outside of work, I’m constantly learning new technologies, exploring UI/UX design, and contributing to projects that challenge the limits of what’s possible. I thrive in collaborative environments and love bringing innovative ideas to life while continuously pushing my skills forward.
          </p>
        </div>

        {/* Features / Highlights */}
        <div className="grid gap-6">
          <div className="p-6 border rounded-xl shadow-sm text-left">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{"</>"}</span>
              <h4 className="font-semibold text-lg">Clean Code</h4>
            </div>
            <p className="text-gray-600">
              Writing maintainable, scalable code that stands the test of time.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm text-left">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🎨</span>
              <h4 className="font-semibold text-lg">Design Focus</h4>
            </div>
            <p className="text-gray-600">
              Creating beautiful, user-centered designs that enhance user experience.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm text-left">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">⚡</span>
              <h4 className="font-semibold text-lg">Performance</h4>
            </div>
            <p className="text-gray-600">
              Building fast, optimized applications that deliver exceptional performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
