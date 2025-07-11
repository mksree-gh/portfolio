'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              { id: 'contact', label: 'Contact' }
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

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Keerthi Sree Marrapu
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Product Engineer building AI and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
              About
            </h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                I am a Product Engineer from IIT Kharagpur with over two years of experience in driving AI and data solutions. I specialize in blending user-focused product thinking with cross-functional team leadership.
              </p>
              <p>
                My work involves translating vision into actionable insights through user research and data analysis, balancing creative problem-solving with technical and organizational constraints. I hold a micro-specialization in AI with hands-on ML/DL experience and a research interest in Indian philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm text-gray-500 font-medium">May 2024 - May 2025</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Product Engineer</h3>
                  <p className="text-gray-600">Hushh.ai</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm text-gray-500 font-medium">Jun 2023 - May 2024</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Product Management Intern</h3>
                  <p className="text-gray-600">Hushh.ai</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm text-gray-500 font-medium">Apr 2023 - Jun 2023</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Python Developer Intern</h3>
                  <p className="text-gray-600">Ernst & Young</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm text-gray-500 font-medium">Feb 2022 - Dec 2022</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Research Intern</h3>
                  <p className="text-gray-600">IIT Kharagpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">
            Projects
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="border-b border-gray-200 pb-8">
                <Link href="/projects/ai-pipeline">
                  <h3 className="text-xl font-medium text-gray-900 mb-4 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
                    AI-Powered Multi-Agent Data Analysis Pipeline
                  </h3>
                </Link>
                <p className="text-gray-700 leading-relaxed">
                  Designed and implemented a LangGraph-based multi-agent LLM pipeline to automate data analysis, reducing insight generation time from hours to minutes.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <Link href="/projects/ai-tool-humility">
                  <h3 className="text-xl font-medium text-gray-900 mb-4 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
                    AI Tool for Intellectual Humility (IH) Analysis
                  </h3>
                </Link>
                <p className="text-gray-700 leading-relaxed">
                  Developed an LLM-based tool using Google Gemini Pro to identify Intellectual Humility traits in texts, validated on unseen stories and cross-lingual use cases.
                </p>
              </div>
              
              <div className="pb-8">
                <Link href="/projects/docusense">
                  <h3 className="text-xl font-medium text-gray-900 mb-4 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
                    DocuSense | PDF Management Tool
                  </h3>
                </Link>
                <p className="text-gray-700 leading-relaxed">
                  Built a PDF management tool for usage statistics, duplicate detection, and OCR, featuring a TF-IDF and cosine similarity-based search engine for content retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Let's connect.
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://linkedin.com/in/mksree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 underline underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="mailto:mksree066@gmail.com"
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 underline underline-offset-4"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}