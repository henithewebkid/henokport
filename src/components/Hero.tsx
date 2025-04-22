import React from 'react';
import { Github, Linkedin, Mail, Code2, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute h-[1000px] w-[1000px] -top-[500px] -right-[500px] rounded-full bg-gradient-radial from-[#4F46E5] via-transparent to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute h-[1000px] w-[1000px] -bottom-[500px] -left-[500px] rounded-full bg-gradient-radial from-[#7C3AED] via-transparent to-transparent opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-4 py-2 mb-6">
            <Code2 className="h-4 w-4 text-indigo-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Building the future
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text">
              one line at a time
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting exceptional digital experiences through innovative full-stack development and creative problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-all"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/ArafatMamia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/arafat-mamia-2779a3312/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="mailto:arafmamia001@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { title: 'Frontend', desc: 'React, Next.js, TypeScript' },
            { title: 'Backend', desc: 'Node.js, Python, APIs' },
            { title: 'Database', desc: 'PostgreSQL, MongoDB' },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;