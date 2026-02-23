"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, MessageCircle, Twitter, Linkedin, Youtube } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Brand */}
          <FadeIn direction="left">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-normal tracking-tight">
                  AM
                </span>
                <span className="text-2xl font-light text-stone-400 ml-1">
                  Fellowship
                </span>
              </div>
              <p className="text-stone-400 text-sm font-normal">
                Advancing algorithmic efficiency through rigorous benchmarking and open collaboration.
              </p>
            </div>
          </FadeIn>

          {/* Right column - Newsletter */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <h3 className="text-base font-normal mb-2">Stay Updated</h3>
              <p className="text-stone-400 text-sm mb-4 font-normal">
                Get the latest fellowship updates delivered fresh to your inbox
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-white/10 border-stone-700 text-white placeholder:text-stone-500 rounded-lg focus-visible:ring-emerald-500 font-normal"
                />
                <Button
                  type="submit"
                  className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-lg px-6 font-normal transition-colors"
                >
                  Submit
                </Button>
              </form>
              <p className="text-stone-500 text-xs mt-3 font-normal">
                By submitting this form you agree to our{" "}
                <a href="#" className="underline underline-offset-2 hover:text-stone-300">
                  Privacy Policy
                </a>
              </p>
            </div>
          </FadeIn>
        </div>

        <Separator className="my-10 bg-stone-800" />

        {/* Bottom row */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-normal">
              <span>&copy; 2026 Algorithm Mining Fellowship</span>
              <a href="#" className="hover:text-stone-300 underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-stone-300 underline underline-offset-2">
                Policies
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
