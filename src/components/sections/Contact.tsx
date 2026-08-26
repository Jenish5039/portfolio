"use client";

import { contactChannels, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding py-20 sm:py-28 lg:py-32 bg-obsidian-canvas border-t border-charcoal-rim"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <SectionHeading number="03" title="Initiate Contact" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left Column: Direct Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <ScrollReveal delay={0.1}>
              <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-light leading-[1.08] tracking-[-0.025em] text-parchment font-saans">
                Have a product in mind? <br />
                <span className="text-ash-text">Let&apos;s build together.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-fog-text font-saans font-w380 max-w-lg">
                Available for full-time Product Design &amp; UI/UX roles, design systems strategy, and AI-accelerated frontend engagements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3.5 pt-2">
                <Magnetic strength={0.2} className="self-start">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group btn-pill-filled !py-3 !px-6 text-sm inline-flex items-center gap-2"
                    aria-label={`Send an email to ${personalInfo.email}`}
                  >
                    <span>Send an Email</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  </a>
                </Magnetic>
                <span className="text-xs font-grotesk text-limestone mt-1">
                  Average response time: &lt; 24 hours
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Channels Stack (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            {contactChannels.map((channel, index) => (
              <ScrollReveal
                key={channel.id}
                delay={0.15 + index * 0.08}
                className="w-full"
              >
                <SpotlightCard className="group card-raised rounded-[12px] transition-all duration-300">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-6 sm:p-7 flex items-center justify-between w-full h-full"
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="eyebrow-label text-limestone font-grotesk text-xs uppercase tracking-wider">
                          {channel.action}
                        </span>
                        <span className="badge-moss text-[11px] py-0.5 px-2 font-medium">
                          DIRECT
                        </span>
                      </div>
                      <span className="text-[17px] font-saans font-light text-parchment group-hover:text-white transition-colors">
                        {channel.value}
                      </span>
                      <span className="text-xs text-fog-text font-saans font-w380">
                        {channel.description}
                      </span>
                    </div>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal-rim bg-void-black text-parchment text-[14px] transition-all duration-300 group-hover:border-parchment/50 group-hover:bg-ember-surface group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </a>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
