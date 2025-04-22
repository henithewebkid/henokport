import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import rsop from '../images/rsop.png'
import wysemonk from '../images/wysemonk.png'
// Define types for the experience data
type Experience = {
  title: string;
  company_name: string;
  icon: string; // Assuming icon is a string path to the image
  iconBg: string;
  date: string;
  points: string[];
};

// Define props for ExperienceCard component
type ExperienceCardProps = {
  experience: Experience;
};

const experiences: Experience[] = [
  {
    title: "WordPress & Theme Developer",
    company_name: "RSOP (UK)",
    icon: rsop, // Replace with actual image import or path
    iconBg: "#383E56",
    date: "February 2022 - October 2023",
    points: [
      "Designed and developed custom WordPress plugins to extend website capabilities and improve user engagement",
      "Optimized website architecture and content for SEO, achieving measurable improvements in search rankings and organic traffic",
      "Provided technical support and troubleshooting for WordPress themes and plugins, ensuring optimal performance",
      "Implemented security best practices to protect websites from vulnerabilities and potential cyber threats",
      "Collaborated with stakeholders to translate business requirements into technical solutions"
    ],
  },
  {
    title: "Web Developer",
    company_name: "Chainlinx Technologies",
    icon: wysemonk, // Replace with actual image import or path
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining responsive web applications using modern technologies",
      "Collaborating with cross-functional teams to deliver high-quality digital solutions",
      "Implementing best practices for performance optimization and user experience",
      "Contributing to all phases of the development lifecycle from concept to deployment"
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <>
      <div>
        <p className="text-gray-400 text-center">What I have done so far</p>
        <h2 className="md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 text-center">
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
      contentStyle={{
        background: "black",
        color: "#fff",
        padding:20,
        border:"1px solid #ffff",
        borderRadius:"0.5rem"
      }}
      key={index}
      contentArrowStyle={{ border: "7px solid  #ffff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-[#915EFF] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
       </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;