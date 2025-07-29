import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-900 via-blue-900/50 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get in <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Email Card */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-200 text-sm mb-4">Let's start a conversation</p>
              <a
                href="mailto:adriannetelan20@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-blue-200 text-sm mb-4">Connect professionally</p>
              <a
                href="https://www.linkedin.com/in/adevadrianne/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Connect
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-blue-200 text-sm mb-4">Check out my work</p>
              <a
                href="https://github.com/adeSantino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/25"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Icons */}
        <div className="flex justify-center">
          <div className="flex gap-6 p-4 bg-slate-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl">
            <a
              href="mailto:adriannetelan20@gmail.com"
              className="group p-3 bg-slate-700/50 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-blue-200 group-hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/adevadrianne/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-slate-700/50 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-200 group-hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="https://github.com/adeSantino"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-slate-700/50 hover:bg-slate-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-blue-200 group-hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
