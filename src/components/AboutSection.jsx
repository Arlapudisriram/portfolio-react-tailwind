
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "Java", "Python"] },
    { category: "Cloud", items: ["AWS", "Docker", "Vercel", "MongoDB"] }
  ];

  const features = ["Strong foundation in React, JavaScript, and Tailwind CSS", "Write clean and maintainable code", "Focus on performance and responsive UI", "Quick learner with problem-solving mindset", "Passionate about building real-world projects", "Open to feedback and continuous improvement"];

  const socialLinks = [
    { icon: <Github className="h-7 w-7"/>, href: "https://github.com/Arlapudisriram" },
    { icon: <Linkedin className="h-7 w-7" />, href: "https://www.linkedin.com/in/httsriram-arlapudi-29560a230/" },
    { icon: <Twitter className="h-7 w-7" />, href: "#" },
    { icon: <Mail className="h-7 w-7" />, href: "sriramvarma853@gmail.com" }
  ];


  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  // Programmatic download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/FrontendDeveloper_Sriram_Resume.pdf';
    link.download = 'Sriram-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about"
       className=" relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0a0a0a]">
      {/* Background Shapes */}
      <div className="absolute inset-0 ">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
       
        {/* <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div> */}
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  once: true }}
            className="text-center mb-16 md:mb-20 px-2 sm:px-6">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide ">ABOUT ME</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4 sm:mb-6">
            <span className="text-violet-700">Hi, I’m Sriram </span>
            <span className="block mt-2 text-violet-700"> Frontend Developer (React + Tailwind)</span>
            </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold">performance</span>, and <span className="text-primary font-semibold">elegance</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* About Card */}
            <div className="bg-card/50 border  rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row  gap-6 md:gap-8">
                  {/* Profile Image */}
                  <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative flex-shrink-0">
                    <div className='w-[280px] h-[280px]   border border-gray-200  shadow-2xl rounded-full'>
                      <img src="/profile.jpeg" alt="sriram" className="w-full h-full rounded-full  object-cover" />
                    </div>
                    <div>
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/50 rounded-xl border dark:border-none ">
                        <h4 className="font-bold mb-6 text-center text-xl text-violet-700  sm:text-base">Quick Connect</h4>
                        <div className="flex flex-col  justify-center  sm:gap-4">
                        {socialLinks.map((social, index) => (
                          <a key={index} href={social.href} className="py-2 pl-10 bg-background rounded-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">{social.icon}</a>
                        ))}
                      </div>
                    </div>
                    </div>

                  </motion.div>

                  
                  <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{  once: true }}
                      className="space-y-6 dark:text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-violet-700  dark:text-white">
                        About Me
                      </h2>

                      <p className="text-gray-700 leading-relaxed  dark:text-gray-300">
                        I’m a Frontend Developer who enjoys turning ideas into clean,
                        responsive, and user-focused web experiences. I specialize in React,
                        JavaScript, and Tailwind CSS, and I love building interfaces that
                        feel fast, modern, and intuitive.
                      </p>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-400">
                          I focus on writing code that is:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-white space-y-1">
                          <li>Clean and maintainable</li>
                          <li>Pixel-perfect and responsive</li>
                          <li>User-friendly and accessible</li>
                        </ul>
                      </div>

                      <p className="text-gray-700 leading-relaxed dark:text-white">
                        I’ve built projects ranging from portfolio websites and responsive
                        dashboards to small web applications, and I’m continuously improving
                        my skills in Next.js and TypeScript.
                      </p>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-400">
                          Right now, I’m looking for an opportunity where I can:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 dark:text-white">
                          <li>Work on real-world UI challenges</li>
                          <li>Build modern React components</li>
                          <li>Learn from experienced developers</li>
                          <li>Contribute to meaningful products</li>
                        </ul>
                      </div>

                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{  once: true }}
                        className="p-4 bg-gray-100 rounded-xl text-gray-800 font-medium border border-gray-200 dark:bg-gray-50"
                      >
                        If you’re looking for someone who brings consistency, energy, and
                        clean code — I’d love to connect.
                      </motion.div>
                  </motion.div>
                  

           
                  
                </div>

             
               
             
              </div>
            </div>

          </div>

          {/* Right Column */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  once: true }}
            className="space-y-4 sm:space-y-8">
            
            <div className="bg-card/50 border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 text-violet-500 sm:mb-6 text-center">Let's Work Together</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <a href="/Contact" className="flex-1 block w-full p-3 sm:p-4 bg-violet-200 text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-violet-300 hover:scale-105 hover:shadow-lg group dark:bg-violet-600">
                  <div className="flex items-center justify-center gap-2 sm:gap-3"><User className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-300" />Start a Project</div>
                </a>

              
                <button
                  onClick={handleDownload}
                  className="flex-1 block w-full p-3 sm:p-4 border border-gray-300 rounded-xl text-center font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Download className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    View Resume
                  </div>
                </button>
              </div>

             
              
            </div>

            {/* Why Choose Me */}
            <motion.div  
            className="bg-card/50 border  rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2"><Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />Why Choose Me</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /><span className="text-xs sm:text-sm text-foreground ">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div className="bg-card/60 border  rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Available</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground bg-green-500/10  px-2 py-1 rounded-lg">
                   for Frontend/React Opportunities
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-1 sm:p-2">
                ⚡ Response time: Under 24 hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};







































// import { motion } from "framer-motion";
// import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';

// export const AboutSection = () => {
   
//   return (
//     <section
//       id="about"
//       className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white"
//     >
//       <div className="max-w-6xl mx-auto border border-red-600 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Profile Image */}
//        <div className=" min-h-screen mt-14">
//          <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex justify-center"
//         >
// -------------------------------------------------------------
//           <div className="">
//             <img
//               src="/profile.jpeg"
//               alt="Profile"
//               className="w-56 h-56 rounded-full object-cover"
//             />
//           </div>
          
//         </motion.div>
        
//        </div>

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             About Me
//           </h2>

//           <p className="text-gray-700 leading-relaxed">
//             I’m a Frontend Developer who enjoys turning ideas into clean,
//             responsive, and user-focused web experiences. I specialize in React,
//             JavaScript, and Tailwind CSS, and I love building interfaces that
//             feel fast, modern, and intuitive.
//           </p>

//           <div className="space-y-2">
//             <h3 className="font-semibold text-gray-900">
//               I focus on writing code that is:
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Clean and maintainable</li>
//               <li>Pixel-perfect and responsive</li>
//               <li>User-friendly and accessible</li>
//             </ul>
//           </div>

//           <p className="text-gray-700 leading-relaxed">
//             I’ve built projects ranging from portfolio websites and responsive
//             dashboards to small web applications, and I’m continuously improving
//             my skills in Next.js and TypeScript.
//           </p>

//           <div className="space-y-2">
//             <h3 className="font-semibold text-gray-900">
//               Right now, I’m looking for an opportunity where I can:
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Work on real-world UI challenges</li>
//               <li>Build modern React components</li>
//               <li>Learn from experienced developers</li>
//               <li>Contribute to meaningful products</li>
//             </ul>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="p-4 bg-gray-100 rounded-xl text-gray-800 font-medium border border-gray-200"
//           >
//             If you’re looking for someone who brings consistency, energy, and
//             clean code — I’d love to connect.
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };










































































































































































































































































































































































// import React, { useState, useEffect } from 'react';
// import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export const AboutSection = () => {
//   const [activeTab, setActiveTab] = useState('personal');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [counter, setCounter] = useState(0);



//   const socialLinks = [
//     { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/sahilmd01" },
//     { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/codewithkinu" },
//     { icon: <Twitter className="h-5 w-5" />, href: "#" },
//     { icon: <Mail className="h-5 w-5" />, href: "mailto:sahilmd.dev@gmail.com" }
//   ];

   
//   useEffect(() => {
//     const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Programmatic download function
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/Sahil-resume.pdf'; // Must be in public folder
//     link.download = 'Sahil-resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      

//       <div className="container mx-auto max-w-7xl relative">
//         {/* Header */}
//         <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
//           <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
//             <div className="relative">
//               <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
//               <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//             </div>
//             <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
//           </div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
//             <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Transforming</span>
//             <span className="block text-primary animate-pulse">Ideas Into Reality</span>
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
//             Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold">performance</span>, and <span className="text-primary font-semibold">elegance</span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
//           {/* Left Column */}
//           <div className="xl:col-span-2 space-y-8">
//             {/* About Card */}
//             <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8  shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 relative overflow-hidden group">

//               <div className="relative">
//                 <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
//                   {/* Profile Image */}
//                   <div className="relative flex-shrink-0">
//                     <div className="w-[200px] h-[200px] sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500  relative">
//                       <img src="/profile.jpeg" alt="sriram" className="w-[160px] h-[160px] object-cover" />
//                       <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
//                         <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                     <div className="">
                        
//                     </div>
                 
                 
//                 </div>

           
                
//               </div>
//             </div>

            
//           </div>

     
          
          
//         </div>
//       </div>


//     </section>
//   );
// };
