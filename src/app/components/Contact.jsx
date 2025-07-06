import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-5xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:adriannetelan20@gmail.com"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/adevadrianne/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/adeSantino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
