"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Rocket } from "lucide-react";
import Footer from "@/components/footer";

const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    role: "AI Engineering Student",
    image: "/testimonials/alex.jpg",
    content:
      "The mentorship I received was invaluable. My mentor helped me land my dream job in AI.",
    company: "Now at Google AI",
  },
  {
    name: "Maria Garcia",
    role: "Data Science Graduate",
    image: "/testimonials/maria.jpg",
    content:
      "The structured roadmap and expert guidance helped me transition into AI seamlessly.",
    company: "Now at OpenAI",
  },
  {
    name: "David Kim",
    role: "ML Researcher",
    image: "/testimonials/david.jpg",
    content:
      "Found amazing mentors who guided me through my research projects.",
    company: "Now at DeepMind",
  },
];

const ROADMAP_STEPS = [
  {
    title: "Submit Your Work",
    description:
      "Share your AI projects and get detailed feedback from experts",
    icon: CheckCircle2,
    color: "blue",
  },
  {
    title: "Connect with Mentors",
    description: "Get matched with industry experts who align with your goals",
    icon: Users,
    color: "purple",
  },
  {
    title: "Get Funded",
    description:
      "Top projects get funding opportunities and industry connections",
    icon: Rocket,
    color: "pink",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div
      className="bg-black/30 backdrop-blur-md rounded-xl p-6
                    border border-blue-500/20 hover:border-blue-500/40
                    transform hover:-translate-y-1 transition-all duration-300
                    shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
    >
      <div className="flex items-start gap-4">
        <div
          className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0
                        border-2 border-blue-500/30"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            {testimonial.name}
          </h3>
          <p className="text-blue-400 text-sm">{testimonial.role}</p>
          <p className="text-blue-300/70 text-xs">{testimonial.company}</p>
        </div>
      </div>
      <p className="mt-4 text-blue-100/80 italic">
        &quot;{testimonial.content}&quot;
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-radial-complex bg-fixed">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 text-center">
        <div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12
                       border border-blue-500/20 shadow-glow max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl 
                         text-white drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
          >
            AI-Powered Mentorship
          </h1>
          <p className="mt-6 text-xl text-blue-100/90 max-w-2xl mx-auto">
            Connect with industry experts and accelerate your career through our
            innovative AI-matching system.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-950 font-semibold
                             shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-400/30 text-blue-100 
                             hover:bg-blue-500/10 hover:border-blue-400/50"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-white 
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)] mb-12"
          >
            Your Journey to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ROADMAP_STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-6
                                        border border-blue-500/20 hover:border-blue-500/40
                                        transform hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center
                                bg-${step.color}-500/20 text-${step.color}-400 mb-4`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-white 
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)] mb-4"
          >
            Success Stories
          </h2>
          <p className="text-blue-100/80 text-center mb-12 max-w-2xl mx-auto">
            Hear from our community members who have transformed their careers
            through our platform
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12
                         border border-blue-500/20 shadow-glow"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white 
                          drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)] mb-4"
            >
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Join our community of ambitious learners and expert mentors today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-950 font-semibold
                             shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              <Link href="/signup" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
