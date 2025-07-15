'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AIToolHumilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Back link */}
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
              AI Tool for Intellectual Humility (IH) Analysis
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              LLM-based research tool leveraging Upaniṣadic texts and Indian IH Scale.
            </p>
          </header>

          <section className="space-y-8 border rounded-lg p-6 md:p-8 bg-card">
            <ul className="space-y-6 list-none">
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Developed an LLM-based (Google Gemini Pro 1.0) tool to identify IH traits using Upaniṣadic texts and the "Indian IH Scale".
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Designed a curated dataset and used few-shot learning with prompting for nuanced IH trait extraction across narratives.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Validated tool performance on unseen stories (e.g., Upaniṣadic stories, biographies), with cross-lingual use cases (e.g., Telugu poetry) via a Streamlit UI on Hugging Face.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Authored a comprehensive B.Tech thesis covering research methods, model design, training, results, and applications.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
