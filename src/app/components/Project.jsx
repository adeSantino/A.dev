"use client";

import React from "react";
import projects from "../projectsData";

export default function Project() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-white transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover border-b border-gray-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Error";
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.category}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
