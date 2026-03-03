"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mic, Users, Building2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const communityFeatures = [
  {
    icon: Mic,
    title: "Speaker events",
    description: "Featuring leading researchers and organizations at the cutting edge of AI-driven discovery.",
  },
  {
    icon: Users,
    title: "Focused working groups",
    description: "Addressing research questions and/or developing tooling.",
  },
  {
    icon: Building2,
    title: "Industry connections",
    description: "Enabling companies to turn AI-driven algorithm discoveries into tangible results.",
  },
];

export function PurposeSection() {
  return (
    <section id="deliverables" className="py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Purpose Column */}
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Our Purpose
            </h2>
            <Separator className="bg-stone-300" />
            <div className="space-y-6 pt-4">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Recent breakthroughs in AI-driven algorithm discovery - including AlphaEvolve, OpenEvolve, and ShinkaEvolve - have shown that AI systems can outperform decades of human effort. From breaking a 56-year-old record in matrix multiplication to achieving 5× speedups on systems research problems, these advances signal a future where algorithm development is largely AI-driven.
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                The Institute for Algorithm Mining accelerates this transition by building a global community that fosters collaboration and knowledge sharing:
              </p>
            </div>

            {/* Community Features - Under Our Purpose */}
            <div className="pt-6">
              <StaggerContainer staggerDelay={0.1} className="space-y-5">
                {communityFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-stone-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-stone-600 font-normal">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Who should join Column */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Who should join
            </h2>
            <Separator className="bg-stone-300" />
            <div className="pt-4 space-y-6">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Anyone interested in exploring the frontier of AI-driven algorithm discovery - whether researchers, engineers, industry practitioners, or enthusiasts.
              </p>
              
              {/* Subscribe CTA */}
              <div className="pt-4">
                <p className="text-sm text-stone-500 font-normal mb-4">
                  Subscribe to stay informed about our events and initiatives:
                </p>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white border-stone-200 text-stone-900 placeholder:text-stone-400 rounded-full px-5 py-5 font-normal focus-visible:ring-emerald-500"
                  />
                  <Button
                    type="submit"
                    className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 py-5 font-normal transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
