"use client";

import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const deliverables = [
  "Evolutionary Coding Agents familiarity: Investigate and experiment with evolutionary coding agents like Openevolve, to gain experience using evolutionary coding agents.",
  "Research questions: Pose a research question that interests you, getting the compute to research it and produce interesting results",
  "Integration with TIG protocol: Design and prototype the integration of evolutionary discovery pipelines with TIG's verification and incentive mechanisms, enabling Algorithm Mining at scale.",
  "Open source the finalised tool: For algorithm mining to take place at scale",
];

export function PurposeSection() {
  return (
    <section id="deliverables" className="py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Purpose Column */}
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Purpose
            </h2>
            <Separator className="bg-stone-300" />
            <div className="space-y-6 pt-4">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Fundamental algorithm research is one of the highest-leverage activities in technology — yet it historically has been economically infeasible to commercial investment. Breakthroughs are unpredictable, timelines are long, and results are hard to monetise directly. Progress has depended almost entirely on government funding.
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Meanwhile, a new generation of evolutionary coding agents (AlphaEvolve, OpenEvolve, ShinkaEvolve) has demonstrated that AI systems can discover algorithms that outperform decades of human effort — from breaking 56-year-old records in matrix multiplication to achieving 5× speedups on systems research problems.c
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                The Algorithm Mining Research Group exists to accelerate this transition. Researchers will work at the intersection of automated algorithm discovery and optimisation research, investigating key research questions needed to make open algorithm research self-sustaining.
              </p>
            </div>
          </FadeIn>

          {/* Deliverables Column */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Deliverables
            </h2>
            <Separator className="bg-stone-300" />
            <div className="pt-4">
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {deliverables.map((item, index) => (
                  <StaggerItem key={index}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-stone-700 leading-relaxed font-normal">
                        {item}
                      </span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
