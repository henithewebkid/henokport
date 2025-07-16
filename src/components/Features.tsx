import React from 'react';
import { Code2, Server, Smartphone, Cpu } from 'lucide-react';
const Features = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Custom Website Development',
      description: 'I build fully tailored websites from the ground up—whether it's a corporate site, personal brand, or custom web application. My focus is on clean code, scalable structure, and delivering a smooth user experience across all devices.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'WordPress & CMS Solutions',
      description: 'From custom themes and plugins to full WooCommerce setups, I help businesses make the most of WordPress. I ensure every site is easy to manage, SEO-ready, and built for performance.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'E-Commerce Development',
      description: 'I develop secure, high-converting online stores using WooCommerce and Laravel-based platforms. My e-commerce solutions include API integrations, payment gateways, and performance optimization to help your business grow online.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Performance & Optimization',
      description: 'Slow sites lose visitors. I optimize websites for speed, mobile responsiveness, and SEO—ensuring your users have a fast, smooth experience that ranks well in search engines and keeps them engaged.',
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
          I'm Henok, a dedicated and versatile website developer with over 7 years of experience building fast, modern, and functional websites using WordPress, Laravel, and other web technologies. I specialize in custom themes, plugin development, and performance optimization, with a strong focus on user experience and clean design. Whether it's launching e-commerce platforms, corporate websites, or custom web apps, I bring both technical expertise and creative problem-solving to every project I take on.
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