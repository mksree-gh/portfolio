'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, ArrowRight } from 'lucide-react';

// IMPORTANT: Import components from your existing UI library
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';


// --- Reusable Components for this Page ---

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Conferences', id: 'conferences' },
  { label: 'Contact', id: 'contact' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'conferences', 'contact'];
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
    handleScroll(); // run initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsSheetOpen(false); // Close mobile menu on click
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map(({ id, label }) => (
            <Button key={id} variant="link" onClick={() => scrollToSection(id)} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4">
              {label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto md:absolute md:right-6">
          <ThemeToggle />
          
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map(({ id, label }) => (
                    <Button key={id} variant="ghost" onClick={() => scrollToSection(id)} className="text-lg justify-start">
                      {label}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- DATA ---
const projectData = [ 
  {
    title: "AI-Powered Multi-Agent Data Analysis Pipeline",
    description:
      "Designed and implemented a LangGraph-based multi-agent LLM pipeline to automate data analysis, reducing insight generation time from hours to minutes.",
    skills: "LangGraph, Multi-Agent LLMs, RAG",
    link: "/projects/ai-pipeline",
  },
  {
    title: "DocuSense | PDF Management Tool",
    description:
      "Built a full-featured PDF analysis tool with OCR, duplicate detection, clustering, and semantic search for document organization and retrieval.",
    skills: "OCR, Pandas, TF-IDF, Scikit-learn",
    link: "/projects/docusense",
  },
  {
    title: "AI Tool for Intellectual Humility (IH) Analysis",
    description:
      "Developed an LLM-based tool using Google Gemini Pro to identify Intellectual Humility traits in texts, validated on unseen stories and cross-lingual use cases.",
    skills: "Google Gemini, Few-Shot Learning, Streamlit",
    link: "/projects/ai-tool-humility",
  }
];
const conferenceData = {
    viva: ["/conferences/vivatech/vivatech-1.jpeg", "/conferences/vivatech/vivatech-2.jpeg", "/conferences/vivatech/vivatech-3.jpeg", "/conferences/vivatech/vivatech-4.jpeg"],

    adfw: ["/conferences/adfw/adfw-1.jpeg", "/conferences/adfw/adfw-2.jpeg", "/conferences/adfw/adfw-3.jpeg"]

};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center pt-16">

        {/* --- HERO SECTION --- */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 w-full min-h-screen max-w-5xl mx-auto">
          <div className="w-48 md:w-64 flex-shrink-0"><Image src="/profile-art.png" alt="Line art illustration" width={256} height={256} priority /></div>
          <div className="text-center md:text-left"><h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Keerthi Sree Marrapu</h1><p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-semibold">Product Engineer building AI and data-driven solutions.</p><p className="mt-2 text-lg max-w-md text-gray-600 dark:text-gray-400">I blend user-first product thinking with systems-level design to translate complex vision into actionable, impactful results.</p></div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-24 px-6 w-full bg-gray-50 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto"><h2 className="text-3xl font-light text-center text-gray-900 dark:text-white mb-12">About</h2><div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6"><p>I am a Product Engineer from IIT Kharagpur with over two years of experience in driving AI and data solutions. I specialize in blending user-focused product thinking with cross-functional team leadership.</p><p>My work involves translating vision into actionable insights through user research and data analysis, balancing creative problem-solving with technical and organizational constraints. I hold a micro-specialization in AI with hands-on ML/DL experience and a research interest in Indian philosophy.</p></div></div>
        </section>

        {/* --- EXPERIENCE (Dates and roles fixed) --- */}

        <section id="experience" className="py-24 px-6 w-full">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-light text-center text-gray-900 dark:text-white mb-16">
      Experience
    </h2>
    <div className="max-w-3xl mx-auto space-y-12">
      
      {/* Hushh.ai */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <p className="md:w-48 flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-medium">
              May 2024 - May 2025
            </p>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Product Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Hushh.ai</p>
              <div className="mt-4 md:hidden">
                <Link
                  href="/experience/hushh"
                  className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  My Impact <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/experience/hushh"
              className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              My Impact <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <p className="md:w-48 flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-medium">
              Jun 2023 - May 2024
            </p>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Product Management Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Hushh.ai</p>
              <div className="mt-4 md:hidden">
                <Link
                  href="/experience/hushh"
                  className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  My Impact <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/experience/hushh"
              className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              My Impact <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Ernst & Young */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <p className="md:w-48 flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-medium">
              Apr 2023 - Jun 2023
            </p>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Python Developer Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Ernst & Young</p>
              <div className="mt-4 md:hidden">
                <Link
                  href="/experience/ey"
                  className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  My Impact <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/experience/ey"
              className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              My Impact <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* --- PROJECTS --- */}
        <section id="projects" className="py-24 px-6 w-full bg-gray-50 dark:bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-light text-center text-gray-900 dark:text-white mb-16">Projects</h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((p) => (
        <Link
          key={p.title}
          href={p.link}
          className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white/50 dark:bg-white/5 hover:shadow-lg transition-shadow hover:border-cyan-500 dark:hover:border-cyan-400"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 transition-colors">
            {p.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {p.description}
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-gray-600 dark:text-gray-400">Skills:</span> {p.skills}
          </p>
        </Link>
      ))}
    </div>
  </div>
</section>



        {/* --- CONFERENCES (Using your shadcn/ui Carousel) --- */}
        <section id="conferences" className="py-24 px-6 w-full">
            <h2 className="text-3xl font-light text-center text-gray-900 dark:text-white mb-16">Conferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <Carousel className="w-full" opts={{ loop: true }}>

                        <CarouselContent>{conferenceData.viva.map((img, i) => (<CarouselItem key={i}><Image src={img} alt={`VivaTech image ${i+1}`} width={600} height={400} className="rounded-md object-cover aspect-[3/2]"/></CarouselItem>))}</CarouselContent>

                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 text-white border-0 hover:bg-black/70" />

                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 text-white border-0 hover:bg-black/70" />

                    </Carousel>
                    <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">Viva Technology 2024 - Paris</h3><p className="mt-2 text-gray-700 dark:text-gray-300">Represented Hushh.ai, engaging with global tech leaders and presenting our core offerings.</p>
                </div>
                <div>
                    <Carousel className="w-full" opts={{ loop: true }}>

                        <CarouselContent>{conferenceData.adfw.map((img, i) => (<CarouselItem key={i}><Image src={img} alt={`ADFW image ${i+1}`} width={600} height={400} className="rounded-md object-cover aspect-[3/2]"/></CarouselItem>))}</CarouselContent>

                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 text-white border-0 hover:bg-black/70" />

                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 text-white border-0 hover:bg-black/70" />

                    </Carousel>
                    <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">Abu Dhabi Finance Week 2024</h3><p className="mt-2 text-gray-700 dark:text-gray-300">Showcased our AI-driven solutions to investors and partners at a key international finance forum.</p>
                </div>
            </div>
        </section>
        
        {/* --- CONTACT & FOOTER --- */}
        <section id="contact" className="py-24 px-6 w-full bg-gray-50 dark:bg-gray-800"><div className="text-center"><h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12">Let's connect.</h2><div className="flex justify-center space-x-8"><a href="https://linkedin.com/in/mksree" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-600 dark:text-cyan-400 hover:underline">LinkedIn</a><a href="mailto:mksree066@gmail.com" className="text-lg text-cyan-600 dark:text-cyan-400 hover:underline">Email</a></div></div></section>
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6"><p className="text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Keerthi Sree Marrapu</p></footer>
      </main>
  </>
  );
}