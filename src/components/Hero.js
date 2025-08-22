import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center overflow-hidden px-6 pt-24">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          Deep
        </span>{" "}
      
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-400 mb-4"
      >
        Full Stack Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
      >
        I’m a <span className="text-blue-400 font-medium">Full Stack Developer</span> 
        with 5 years of experience building modern and scalable applications. 
        I specialize in <span className="text-gray-100">React</span> &{" "}
        <span className="text-gray-100">Node.js</span>, crafting{" "}
        <span className="text-blue-400">user-friendly</span> solutions that blend 
        performance with intuitive design.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-6"
      >
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl shadow-2xl text-lg font-semibold transform transition-all hover:scale-110 hover:-translate-y-1"
        >
          View My Work
        </a>
        <a
  href="/DeepFullStackCV.pdf"
  download="DeepFullStackCV.pdf"
  className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-xl shadow-2xl text-lg font-semibold backdrop-blur-md bg-white/10 transition-all hover:scale-110 hover:-translate-y-1"
>
  Download Resume
</a>
      </motion.div>
    </section>
  );
}
