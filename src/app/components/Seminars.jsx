import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Users } from 'lucide-react';

export default function Seminars() {
  const seminars = [
    {
      title: "Cybersecurity Professional Career Symposium 2023",
      organization: "Philippine Institute of Cyber Security Professionals (PICSPro)",
      date: "April 15, 2023",
      location: "Philippines",
      description: "Actively participated as a student delegate during the Cybersecurity Professional Career Symposium 2023 of the Philippine Institute of Cyber Security Professionals (PICSPro) and PICSPro Bacolod Chapter.",
      icon: Award,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Google DevFest Manila 2024",
      organization: "Google Developers Group (GDG) Manila",
      date: "2024",
      location: "Manila, Philippines",
      description: "Participated in sessions covering the latest in Android, Web, Cloud, and AI technologies from Google.",
      icon: Users,
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Google DevFest Bacolod 2023",
      organization: "Google Developers Group (GDG) Bacolod",
      date: "2023",
      location: "Bacolod, Philippines",
      description: "Attended talks and workshops focused on Google developer technologies, networking with local developers.",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      organization: "AWS Training and Certification",
      date: "2025",
      location: "Online",
      description: "Gained a foundational understanding of AWS cloud concepts, services, security, architecture, pricing, and support. This course prepared me for the AWS Certified Cloud Practitioner exam.",
      icon: Award,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Zuitt Online Workshop in Basic Web Development",
      organization: "Zuitt",
      date: "2024",
      location: "Online",
      description: "Completed an intensive online workshop covering fundamental web development concepts including HTML, CSS, JavaScript, and basic responsive design principles.",
      icon: Award,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="seminars" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      
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
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Learning Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Seminars & <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">Workshops</span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A showcase of my continuous learning journey and engagement with the tech community through various seminars, workshops, and professional development opportunities.
          </p>
        </motion.div>

        {/* Seminars Grid */}
        <div className="grid gap-8">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${seminar.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <seminar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Title and Organization */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {seminar.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{seminar.organization}</p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{seminar.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed">
                    {seminar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-blue-200 mb-6">Always eager to learn and grow</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cool-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect & Learn Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}