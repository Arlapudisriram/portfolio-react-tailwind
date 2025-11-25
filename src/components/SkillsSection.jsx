// SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiFirebase, SiTypescript, SiClerk,SiTailwindcss,SiVite } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skillCategories = [
  {
    title: "Frontend / Web Development",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DBFB", level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", level: 80 },
      { name: "Vite", icon: <SiVite />, color: "#646cff", level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC", level: 85 },
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, color: "#264DE4", level: 90 },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 90 },
    ],
  },
  {
    title: "State & Backend / Data",
    skills: [
      { name: "Redux", icon: <SiRedux />, color: "#764ABC", level: 70 },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 65 },
      { name: "Clerk", icon: <SiClerk />, color: "#4F46E5", level: 60 },
      { name: "SaaS apps", icon: <FaSass />, color: "#CD6799", level: 75 },
    ],
  },
  {
    title: "Additional / Design & UX",
    skills: [
      { name: "UI/UX", icon: <  MdDesignServices />, color: "#F24E1E", level: 70 },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E", level: 65 },
    ],
  },
  {
    title: "Optional / Other Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 85 },
      { name: "GitHub", icon: <FaGitAlt />, color: "#181717", level: 80 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Skills
        </h2>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform duration-300 relative group"
                  variants={itemVariants}
                >
                  {/* Icon */}
                  <div className="text-5xl mb-2" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                    {skill.name}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};













// import React from "react";
// import { FaReact, FaHtml5, FaCss3Alt, FaFigma,FaGitAlt, FaGithub } from "react-icons/fa";
// import {  SiFirebase ,SiRedux,SiTailwindcss,SiJavascript,SiNextdotjs, SiTypescript, SiVite, SiFramer } from "react-icons/si";
// import { MdDevices } from "react-icons/md";
// import { motion } from "framer-motion";

// // Animation for the container to stagger children
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15, // delay between each skill card
//     },
//   },
// };

// // Animation for each skill card
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // Skills data
// const skills = [
//   { name: "React", icon: FaReact, color: "#61DAFB" },
//   { name: "Redux", icon: SiRedux, color: "#764ABC" },
//   { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
//   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//   { name: "HTML", icon: FaHtml5, color: "#E34F26" },
//   { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
//   { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "Git", icon: FaGitAlt, color: "#F05032" },
//   { name: "Figma", icon: FaFigma, color: "#F24E1E" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
// ];

// export const SkillsSection = () => {
//   return (
//     <section className="my-16 px-4 md:px-16" id="skills">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         My Skills
//       </h2>

//       <motion.div
//         className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {skills.map((skill, index) => {
//             const Icon = skill.icon; 
//             return (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//                 variants={itemVariants}
//               >
               
//                  <div className="text-5xl mb-2">
//                   <Icon color={skill.color} />
//                 </div>
//                 <p className="text-lg font-medium">{skill.name}</p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
      
//     </section>
//   );
// };
























// import React from "react";
// import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
// import { SiTailwindcss, SiVite, SiFramer } from "react-icons/si";
// import { MdDevices } from "react-icons/md";
// import { motion } from "framer-motion";

// // Define the animation variants for all items
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// // Skills data
// const skills = [
//   { name: "React", icon: FaReact },
//   { name: "Vite", icon: SiVite },
//   { name: "Tailwind", icon: SiTailwindcss },
//   { name: "Git", icon: FaGitAlt },
//   { name: "GitHub", icon: FaGithub },
//   { name: "VS Code", icon: SiFramer }, // Use actual VS Code icon if needed
//   { name: "Responsive Design", icon: MdDevices },
//   { name: "Framer Motion", icon: SiFramer },
// ];

// export const SkillsSection = () => {
//   return (
//     <section className="my-16 px-4 md:px-16" id="skills">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         My Skills
//       </h2>

//       <motion.div
//         className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
//             variants={itemVariants}
//             custom={index}
//           >
//             <skill.icon className="text-3xl text-blue-500" />
//             <span className="font-medium text-lg">{skill.name}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };


