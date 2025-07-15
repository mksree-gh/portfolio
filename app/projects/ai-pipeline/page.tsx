'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AIPipelinePage() {
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
              AI-Powered Multi-Agent Data Analysis Pipeline
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Automating insights with LangGraph and a team of specialized LLM agents.
            </p>
          </header>

          <section className="space-y-8 border rounded-lg p-6 md:p-8 bg-card">
            <ul className="space-y-6 list-none">
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Identified critical delays in Inventory/Sales data analysis; designed and implemented a LangGraph-based multi-agent LLM pipeline, reducing insight generation time from hours to ~5–10 minutes.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Orchestrated a team of specialized LLM agents (Data Scientist, Analyst, Python Expert, Customer Engineer) for automated pandas queries, interpretation, and summarization—achieving 100% hands-off automation.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="leading-relaxed">
                  Built RAG-ready descriptions with Tool/Memory Augmentation for high-context understanding and autonomous execution.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
