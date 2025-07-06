import React from 'react';

export default function Seminars() {
  return (
      <section id="seminars" className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-5xl font-bold text-center mb-12">Seminars & Workshops</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
          <p className="mb-6">
            Here you'll find a list of seminars and workshops I've attended or presented, showcasing my
            continuous learning and engagement with the tech community.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <span className="font-semibold text-white">"Cybersecurity Professional Career Symposium 2023"</span> - Philippine Institute of Cyber Security Professionals (PICSPro), April 15, 2023
              <p className="text-sm text-gray-400 ml-4">
                Actively participated as a student delegate during the Cybersecurity Professional Career Symposium 2023 of the Philippine Institute of Cyber Security Professionals (PICSPro) and PICSPro Bacolod Chapter.
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">"Google DevFest Manila 2024"</span> - Google Developers Group (GDG) Manila, 2024
              <p className="text-sm text-gray-400 ml-4">
                Participated in sessions covering the latest in Android, Web, Cloud, and AI technologies from Google.
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">"Google DevFest Bacolod 2023"</span> - Google Developers Group (GDG) Bacolod, 2023
              <p className="text-sm text-gray-400 ml-4">
                Attended talks and workshops focused on Google developer technologies, networking with local developers.
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">"AWS Cloud Practitioner Essentials"</span> - AWS Training and Certification, 2025
              <p className="text-sm text-gray-400 ml-4">
                Gained a foundational understanding of AWS cloud concepts, services, security, architecture, pricing, and support. This course prepared me for the AWS Certified Cloud Practitioner exam.
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">"Zuitt Online Workshop in Basic Web Development"</span> - Zuitt, 2024
              <p className="text-sm text-gray-400 ml-4">
                Completed an intensive online workshop covering fundamental web development concepts including HTML, CSS, JavaScript, and basic responsive design principles.
              </p>
            </li>
          </ul>
        </div>
      </section>
  );
}