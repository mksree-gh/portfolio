'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AIPipelinePage() {
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
              AI-Powered Multi-Agent Data Analysis Pipeline
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Identified critical delays in Inventory/Sales data analysis; designed and implemented a LangGraph-based multi-agent LLM pipeline, eliminating manual analysis and reducing insight generation time from manual hours to just 5–10 minutes.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Orchestrated a team of specialized LLM agents (Data Scientist, Analyst, Python Expert, Customer Engineer) to automate pandas queries, result interpretation, and summarization—achieving seamless and 100% hands-off automation.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Built RAG-ready descriptions with Tool/Memory Augmentation for high-context understanding & autonomous execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}