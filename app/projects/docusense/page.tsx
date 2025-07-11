'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DocuSensePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back Navigation */}
      <div className="pt-8 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              DocuSense | PDF Management Tool
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Built a PDF management tool for usage stats, duplicate detection (MD5 hashing), and OCR text extraction (PyPDF2).
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Used pandas & NLTK for data extraction and analysis; applied Scikit-learn K-Means clustering for PDF organization.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Engineered a TF-IDF and cosine similarity-based search engine for content-based PDF retrieval; designed UI mockups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}