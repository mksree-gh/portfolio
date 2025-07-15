'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DocuSensePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Link Header */}
      <div className="border-b border-border py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              DocuSense | PDF Management Tool
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              End-to-end document analytics and retrieval with clustering & semantic search.
            </p>
          </header>

          <section className="space-y-8 border rounded-lg p-6 md:p-8 bg-card">
            <ul className="space-y-6 list-none">
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Built a PDF management tool for usage stats, duplicate detection (MD5 hashing), and OCR text extraction using PyPDF2.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Used pandas & NLTK for data extraction and analysis; applied Scikit-learn K-Means clustering for PDF organization.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Engineered a TF-IDF and cosine similarity-based search engine for content-based PDF retrieval; designed UI mockups.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
