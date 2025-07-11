'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      // Adjust the scroll offset to feel more accurate for the nav highlighting
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-600 ${
                  activeSection === id ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center">
        {/* HERO SECTION - Using your new two-column design */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 w-full min-h-screen max-w-4xl mx-auto">
          <div className="w-48 md:w-64 flex-shrink-0">
            <Image 
              src="/profile-art.png" // After: Use a direct string path
              alt="Line art illustration of Keerthi Sree Marrapu"
              width={256} // Add width
              height={256} // Add height
              priority 
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Keerthi Sree Marrapu
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Product Engineer building AI and data-driven solutions.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">About</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>I am a Product Engineer from IIT Kharagpur with over two years of experience in driving AI and data solutions. I specialize in blending user-focused product thinking with cross-functional team leadership.</p>
              <p>My work involves translating vision into actionable insights through user research and data analysis, balancing creative problem-solving with technical and organizational constraints. I hold a micro-specialization in AI with hands-on ML/DL experience and a research interest in Indian philosophy.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 w-full bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Experience items go here... */}
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <p className="md:w-48 flex-shrink-0 text-sm text-gray-500 font-medium">May 2024 - May 2025</p>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Product Engineer</h3>
                  <p className="text-gray-600">Hushh.ai</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <p className="md:w-48 flex-shrink-0 text-sm text-gray-500 font-medium">Jun 2023 - May 2024</p>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Product Management Intern</h3>
                  <p className="text-gray-600">Hushh.ai</p>
                </div>
              </div>
              {/* Add other experiences similarly */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">Projects</h2>
            <div className="space-y-12">
              {/* Project items go here... */}
              <div className="border-b border-gray-200 pb-8">
                <Link href="/projects/ai-pipeline" className="text-xl font-medium text-gray-900 mb-4 block hover:text-cyan-600 transition-colors">
                    AI-Powered Multi-Agent Data Analysis Pipeline
                </Link>
                <p className="text-gray-700 leading-relaxed">Designed and implemented a LangGraph-based multi-agent LLM pipeline to automate data analysis, reducing insight generation time from hours to minutes.</p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <Link href="/projects/ai-tool-humility" className="text-xl font-medium text-gray-900 mb-4 block hover:text-cyan-600 transition-colors">
                    AI Tool for Intellectual Humility (IH) Analysis
                </Link>
                <p className="text-gray-700 leading-relaxed">Developed an LLM-based tool using Google Gemini Pro to identify Intellectual Humility traits in texts, validated on unseen stories and cross-lingual use cases.</p>
              </div>
              {/* Add other projects similarly */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 w-full bg-gray-50">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Let's connect.</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://linkedin.com/in/mksree" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-cyan-600 transition-colors underline underline-offset-4">LinkedIn</a>
              <a href="mailto:mksree066@gmail.com" className="text-lg text-gray-700 hover:text-cyan-600 transition-colors underline underline-offset-4">Email</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}