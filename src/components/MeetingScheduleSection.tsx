"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Video } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function MeetingScheduleSection() {
  return (
    <section id="schedule" className="bg-slate-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-8">
            Meeting Schedule
          </h2>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <FadeIn delay={0.1} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-lg font-normal text-white">
                Thursday February 26, 2026
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Video className="h-4 w-4 text-stone-400" />
                <p className="text-stone-300 font-normal">
                  Weekly — 11:35 – 12:30 Pacific Time
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Button
              variant="outline"
              className="w-fit rounded-full px-6 py-5 text-sm font-normal border-stone-600 text-white hover:bg-stone-800 hover:text-white transition-colors"
            >
              Add to Calendar
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
