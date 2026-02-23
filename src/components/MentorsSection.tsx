"use client";

import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@algorithm-mining.org",
    bio: "Dr. Sarah Chen is a Senior Research Scientist at DeepMind, London, where she leads research on efficient training algorithms. She holds a Ph.D. in Computer Science from MIT and previously worked on large-scale optimization at Google Brain. Her work focuses on reducing the computational cost of training large neural networks.",
  },
  {
    name: "Prof. Michael Rodriguez",
    email: "m.rodriguez@algorithm-mining.org",
    bio: "Prof. Michael Rodriguez is an Associate Professor at Stanford University's Computer Science department, specializing in systems for machine learning. He holds a Ph.D. from UC Berkeley and has published extensively on distributed training and model parallelism. He previously led ML infrastructure teams at Meta.",
  },
  {
    name: "Dr. Aisha Patel",
    email: "aisha.patel@algorithm-mining.org",
    bio: "Dr. Aisha Patel is a Principal Researcher at Microsoft Research, Redmond, where she works on neural architecture search and automated ML systems. She completed her Ph.D. at Carnegie Mellon University and has been instrumental in developing efficiency benchmarks for the ML community.",
  },
];

export function MentorsSection() {
  return (
    <section id="mentors" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Fellowship Mentors
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-stone-600 mb-12 font-normal">
            To contact all fellowship mentors email{" "}
            <a
              href="mailto:mentors@algorithm-mining.org"
              className="text-stone-900 underline underline-offset-2 hover:text-stone-700"
            >
              mentors@algorithm-mining.org
            </a>
            .
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="space-y-0">
          {mentors.map((mentor, index) => (
            <StaggerItem key={mentor.name}>
              <div>
                <div className="py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    {/* Name and email column */}
                    <div className="md:col-span-1">
                      <h3 className="text-xl font-normal text-stone-900 mb-2">
                        {mentor.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${mentor.email}`}
                          className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 font-normal"
                        >
                          {mentor.email}
                        </a>
                        <a
                          href="#"
                          className="text-stone-400 hover:text-stone-700 transition-colors"
                          aria-label="Website"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Bio column */}
                    <div className="md:col-span-2">
                      <p className="text-stone-700 leading-relaxed font-normal">
                        {mentor.bio}
                      </p>
                    </div>
                  </div>
                </div>
                {index < mentors.length - 1 && (
                  <Separator className="bg-stone-200" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
