import React from 'react';
import { Code2, Server, Smartphone, Cpu } from 'lucide-react';
const Features = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and TypeScript.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js and Python.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile development',
      description: 'Designing and implementing efficient database solutions with PostgreSQL and MongoDB.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Data Science',
      description: 'Architecting scalable and maintainable software systems.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];


  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            About Me
          </h2>
          <p className="text-gray-400">
            I'm a full stack developer with experience in TypeScript and JavaScript, specializing in frameworks like React, Node.js, and Three.js. I'm also a quick learner and enjoy collaborating closely with clients to create efficient, scalable, and user-friendly solutions that address real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:border-gray-700 transition-all duration-300"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${feature.gradient} rounded-lg transition-opacity duration-300`}></div>
              <div className="relative">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;