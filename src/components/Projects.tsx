
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import wysemonk from '../images/wysemonk.png'
import rsop from '../images/rsop.png'
import kodiprofessional from '../images/kodiprofessional.png'


const Projects = () => {
  const projects = [
    {
      img:rsop,
      title: 'Royale School Of Photography',
      description: 'Royale School Of Photography is your gateway to mastering photography skills. platform offers diverse courses, workshops, and resources for all levels. Explore detailed course descriptions, instructor profiles, and student testimonials. unleash your creativity and excel in photography..',
      // tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://www.rsop.co.uk/',
      live: 'https://www.rsop.co.uk/',
    },
    {
      img:wysemonk ,
      title: 'wysemonk',
      description: 'website developer company crafts custom websites for businesses, blending creativity with technical expertise and collaborate closely with clients to understand their vision and goals, ensuring every website is functional, secure, and optimized. Stay ahead with cutting-edge solutions and elevate online presence today.',
      // tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      github: 'https://wysemonk.com/',
      live: 'https://wysemonk.com/',
    },
    {
      img:kodiprofessional,
      title: 'Kodiprofessional',
      description: "Explore Dubai's premier WooCommerce website, offering a curated selection of luxury products and services, blending traditional charm with modern convenience.",
      // tech: ['WebRTC', 'Socket.io', 'Redis', 'Node.js'],
      github: 'https://kodiprofessional.ae/',
      live: 'https://kodiprofessional.ae/',
    }
  ];
console.log("wysemonk",wysemonk)
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Projects.
          </h2>
          <p className="text-gray-400">
            My portfolio showcases my skills and experience through real-world projects. Each project is described briefly and includes links to code repositories and live demos. These examples demonstrate my ability to solve complex problems, work with diverse technologies, and effectively manage projects.
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg opacity-50 blur group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-black rounded-lg border border-gray-800">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <img className="w-full h-[300px] object-cover" src={project.img} alt="" />
                    <h3 className="text-3xl font-bold mb-4 mt-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {/* {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-gray-300 bg-gray-800/50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))} */}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;