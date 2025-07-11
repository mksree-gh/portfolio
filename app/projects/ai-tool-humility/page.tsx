'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AIToolHumilityPage() {
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
              AI Tool for Intellectual Humility (IH) Analysis
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Developed an LLM-based (Google Gemini Pro 1.0) tool to identify IH traits using Upaniṣadic texts and the "Indian IH Scale".
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Designed a curated dataset and used few-shot learning with prompting for nuanced IH trait extraction across narratives.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Validated tool performance on unseen stories (e.g., Upanisadic stories, biographies), with cross-lingual use cases (e.g., Telugu poetry) via a Streamlit UI on Hugging Face.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Authored a comprehensive B.Tech thesis covering research methods, model design, training, results, and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}