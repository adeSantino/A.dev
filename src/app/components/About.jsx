import { motion } from "framer-motion";
import { Code, Globe, Zap } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Next.js", icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "React", icon: Globe, color: "from-blue-400 to-blue-500" },
    { name: "Laravel", icon: Zap, color: "from-blue-600 to-blue-700" },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting Digital <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">Experiences</span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Passionate about building efficient, clean, and user-friendly digital experiences that make a difference.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed">
                Hello! I'm a passionate web developer skilled in building efficient, clean, and user-friendly digital experiences. My journey started with a strong curiosity about how websites and systems work, and over time, I've developed a solid foundation in both frontend and backend technologies.
              </p>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                I specialize in building modern web applications using <strong className="text-blue-300">Next.js</strong>, <strong className="text-blue-300">React</strong>, and <strong className="text-blue-300">Laravel</strong>, and I also have experience in <strong className="text-blue-300">Python</strong> for backend development and scripting. My focus is on writing scalable, maintainable code and creating seamless user experiences.
              </p>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                When I'm not coding, I enjoy exploring new design trends, improving my skills in graphic design, or learning new technologies. I'm always open to new challenges and eager to grow as a developer.
              </p>
            </div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Core Technologies</h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <p className="text-blue-200 text-sm">Advanced proficiency</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-300 mb-2">15+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

