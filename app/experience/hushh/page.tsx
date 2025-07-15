'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HushhPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link 
            href="/#experience"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experience
          </Link>
        </div>

        {/* Coming Soon */}
        <h1 className="text-3xl font-light text-foreground mb-4">
          Hushh.ai – Product Engineer & Intern
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I’m working on documenting this project. It’ll be live here soon!
        </p>
      </div>
    </div>
  );
}
