"use client";

import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const deliverables = [
  "Rules: Produce a set of rules for algorithmic efficiency benchmarking, specifying initial 2-3 benchmarks.",
  "Harness: Produce a testing harness executable on commonly available clouds using standardized frameworks.",
  "Baseline implementations: Produce baseline training algorithms and model implementations for each benchmark, serving as submission skeletons.",
  "Call for participation.",
  "Initial Submission round: Once rules and harness/references are developed, call for participation by the research/industry community.",
  "Additional submission rounds on a regular schedule.",
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
                We need a more scientifically sound methodology for evaluating training speedups due to new algorithms, including both new optimizers and new model architectures. Cutting edge machine learning (ML) models are exceeding the compute budgets of many researchers, and ML compute is becoming a larger and larger cost in industry.
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                To reduce the compute cost of ML research and practice, we need rigorous benchmarking of efficiency. Such benchmarks will guide us in selecting the best directions to evolve existing techniques and ultimately enable progress toward models that produce not only better results, but better results at lower cost.
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
