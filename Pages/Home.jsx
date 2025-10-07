import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkle,
  Globe2,
  Leaf,
  LineChart,
  Workflow,
  Users2,
  Building2,
  Star
} from "lucide-react";
import { createPageUrl } from "../utils";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 }
};

const metrics = [
  {
    value: "3.2M+",
    label: "traceable supply events",
    accent: "bg-[var(--sonder-teal)]"
  },
  {
    value: "48",
    label: "integrated agri-coops",
    accent: "bg-[var(--sonder-green)]"
  },
  {
    value: "12%",
    label: "yield lift for producers",
    accent: "bg-[var(--sonder-orange)]"
  },
  {
    value: "28",
    label: "markets with live nodes",
    accent: "bg-slate-800"
  }
];

const solutionPillars = [
  {
    icon: ShieldCheck,
    title: "Proof of trust",
    description:
      "Tamper-proof attestations and automated compliance provide institutional-grade confidence for every shipment."
  },
  {
    icon: LineChart,
    title: "Intelligent liquidity",
    description:
      "Market intelligence and programmable contracts unlock faster settlements and dynamic pricing for cross-border trade."
  },
  {
    icon: Leaf,
    title: "Verified impact",
    description:
      "Continuous ESG scoring captures environmental and social metrics so sustainable capital finds the right producers."
  }
];

const experienceFlow = [
  {
    title: "Digitise",
    description:
      "Onboard producers and tokenize real-world assets with granular geo and quality data in minutes, not months.",
    icon: Workflow
  },
  {
    title: "Activate",
    description:
      "Curated deal rooms match verified supply with strategic buyers, bringing transparency to negotiations and terms.",
    icon: Users2
  },
  {
    title: "Scale",
    description:
      "Embedded finance, insurance, and settlement rails distribute prosperity equitably across every community.",
    icon: HeartHandshake
  }
];

const ecosystemHighlights = [
  {
    icon: Globe2,
    title: "Pan-African fabric",
    description:
      "Interoperable rails respect local policy while connecting cooperatives, regulators, and investors across the continent."
  },
  {
    icon: Sparkle,
    title: "Signal amplification",
    description:
      "A living knowledge graph surfaces anomalies, ESG performance, and demand surges as they unfold."
  },
  {
    icon: Building2,
    title: "Institutional access",
    description:
      "Sonder's compliance-ready stack makes it effortless for banks and DFIs to extend capital to frontier markets."
  }
];

const testimonials = [
  {
    quote:
      "Sonder turned a fragmented cocoa network into a unified ledger of truth. Our partners finally trust every datapoint we share.",
    name: "Adjoa Mensah",
    role: "Director, Ghana Agro Cooperative"
  },
  {
    quote:
      "Verifiable carbon insights in each shipment unlocked blended finance instruments we once thought impossible.",
    name: "Kabelo Dlamini",
    role: "Principal, Aether Minerals"
  }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-32 top-[-12rem] w-[32rem] h-[32rem] sonder-gradient rounded-full blur-3xl opacity-30" />
        <div className="absolute -left-16 bottom-[-10rem] w-[28rem] h-[28rem] bg-[var(--sonder-teal)] rounded-full blur-3xl opacity-20" />
      </div>

      <section className="relative pt-24 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <Badge className="bg-white/40 text-[var(--sonder-teal)] border border-white/60 backdrop-blur-sm text-sm font-semibold px-4 py-2 rounded-full">
              Building equitable commodity ecosystems
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[var(--sonder-dark-text)] leading-tight">
              Orchestrate transparent trade for Africa's most vital supply chains
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
              Sonder synchronises data, capital, and compliance so that producers, regulators, and institutional investors advance together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Invest")}> 
                <Button
                  size="lg"
                  className="bg-[var(--sonder-teal)] hover:bg-[var(--sonder-green)] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Discover investment rounds
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-200 text-[var(--sonder-dark-text)] px-8 py-4 text-lg font-semibold rounded-full hover:bg-white/80 hover:shadow-lg transition-all duration-200"
                >
                  Explore the Sonder story
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="glass-effect border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 sonder-gradient opacity-20" />
              <CardHeader className="relative space-y-2">
                <CardTitle className="text-2xl font-semibold text-[var(--sonder-dark-text)]">
                  Impact intelligence
                </CardTitle>
                <p className="text-sm text-slate-500">
                  Real-time, chain-of-custody insights for the communities and investors powering inclusive prosperity.
                </p>
              </CardHeader>
              <CardContent className="relative grid grid-cols-2 gap-6 pt-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-2xl bg-white/60 backdrop-blur border border-white/50 shadow-sm">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${metric.accent}`}>
                      {metric.label}
                    </span>
                    <p className="mt-4 text-3xl font-bold text-[var(--sonder-dark-text)]">{metric.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h2 className="text-4xl font-semibold text-[var(--sonder-dark-text)]">
              Platform pillars built for frontier markets
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Sonder's trust fabric blends hardware attestations, blockchain security, and adaptive analytics to remove friction from every trade lane.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="h-full"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 rounded-3xl bg-white shadow-xl border border-white/80 text-left space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--sonder-teal)]/10 text-[var(--sonder-teal)]">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--sonder-dark-text)]">{pillar.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="space-y-6"
          >
            <Badge className="bg-[var(--sonder-orange)]/10 text-[var(--sonder-orange)] border-0 text-xs uppercase tracking-[0.3em]">
              Journey
            </Badge>
            <h2 className="text-4xl font-semibold text-[var(--sonder-dark-text)] leading-tight">
              A guided path from digitisation to equitable growth
            </h2>
            <p className="text-lg text-slate-600">
              Every partnership begins with on-the-ground enablement and continues through automated compliance, financing, and long-term capacity building.
            </p>
            <Link to={createPageUrl("Invest")}>
              <Button variant="ghost" className="text-[var(--sonder-teal)] hover:bg-[var(--sonder-teal)]/10">
                Partner with Sonder
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="space-y-6">
            {experienceFlow.map((step, index) => (
              <motion.div
                key={step.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-6 p-6 rounded-3xl bg-white/70 backdrop-blur border border-white/80 shadow-lg">
                  <div className="flex-none w-12 h-12 rounded-full bg-[var(--sonder-teal)]/10 text-[var(--sonder-teal)] flex items-center justify-center text-lg font-semibold">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[var(--sonder-dark-text)]">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="ml-auto text-2xl font-bold text-slate-200">0{index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full sonder-gradient blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 text-center">
            <Badge className="bg-white/10 text-white border-white/20 text-xs uppercase tracking-[0.3em]">
              Ecosystem
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              A collaborative fabric for regenerative value chains
            </h2>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Sonder synchronises logistics data, sustainability attestations, and financing workflows into one living infrastructure.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {ecosystemHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="h-full"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 rounded-3xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-base text-slate-200 leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center space-y-4"
          >
            <Badge className="bg-[var(--sonder-teal)]/10 text-[var(--sonder-teal)] border-0 text-xs uppercase tracking-[0.3em]">
              Voices from the field
            </Badge>
            <h2 className="text-4xl font-semibold text-[var(--sonder-dark-text)]">
              Trusted by cooperatives, regulators, and visionary investors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're partnering with communities to create resilient supply chains and measurable prosperity outcomes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-white/80 shadow-xl bg-white/80 backdrop-blur">
                  <CardContent className="space-y-4 p-8">
                    <Star className="w-8 h-8 text-[var(--sonder-orange)]" />
                    <p className="text-lg text-slate-700 leading-relaxed">“{testimonial.quote}”</p>
                    <div>
                      <p className="font-semibold text-[var(--sonder-dark-text)]">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl sonder-gradient text-white px-10 py-14 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
            <div className="relative space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                Ready to co-create the future of equitable trade?
              </h2>
              <p className="text-lg text-white/80">
                Join Sonder in building regenerative economies with transparent data, aligned incentives, and shared prosperity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={createPageUrl("Invest")}>
                  <Button size="lg" className="bg-white text-[var(--sonder-dark-text)] hover:bg-white/90 px-8 py-4 rounded-full">
                    Invest with Sonder
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("About")}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-full"
                  >
                    Learn about our mission
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
