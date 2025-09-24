import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Globe, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Layers,
  Users,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Immutable Security",
      description: "Blockchain technology creates tamper-proof records ensuring complete transparency in commodity tracking from source to market."
    },
    {
      icon: Globe,
      title: "African Market Focus",
      description: "Specialized solutions designed for African commodity markets, addressing unique challenges in mining, agriculture, and trade."
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automated smart contracts streamline transactions, reduce intermediaries, and ensure fair compensation for producers."
    }
  ];

  const benefits = [
    "End-to-end supply chain transparency",
    "Ethical sourcing verification",
    "Reduced trading intermediaries",
    "Enhanced producer compensation",
    "Environmental compliance tracking",
    "Automated regulatory reporting"
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 sonder-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="sonder-text-gradient">Transforming</span>
              <br />
              <span className="text-[var(--sonder-dark-text)]">African Commodities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Harnessing blockchain technology to create transparent, ethical, and efficient 
              commodity markets across Africa. From minerals to agriculture, we're building 
              the future of responsible trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Invest")}>
                <Button 
                  size="lg" 
                  className="bg-[var(--sonder-teal)] hover:bg-[var(--sonder-green)] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Start Investing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 text-[var(--sonder-dark-text)] px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-white to-teal-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--sonder-dark-text)] mb-6">
              Blockchain <span className="sonder-text-gradient">Innovation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our cutting-edge technology addresses the most persistent challenges 
              in African commodity markets through decentralized solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 sonder-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--sonder-dark-text)] mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-orange-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--sonder-dark-text)] mb-8">
                Measurable <span className="sonder-text-gradient">Impact</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our blockchain implementation delivers tangible benefits to every 
                participant in the commodity value chain, from local producers 
                to global buyers.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[var(--sonder-green)] flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-effect border-0 shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--sonder-teal)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold sonder-text-gradient mb-2">15-25%</h3>
                    <p className="text-slate-600 font-medium">Premium for Verified Sustainable Commodities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--sonder-orange)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold sonder-text-gradient mb-2">30%</h3>
                    <p className="text-slate-600 font-medium">Reduction in Price Discrepancies</p>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="w-16 h-16 bg-[var(--sonder-green)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold sonder-text-gradient mb-2">$20-30M</h3>
                    <p className="text-slate-600 font-medium">Investment Opportunity Over 3 Years</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sonder-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform African Markets?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Join us in building transparent, ethical, and efficient commodity 
              markets that benefit everyone in the value chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Invest")}>
                <Button 
                  size="lg" 
                  className="bg-white text-[var(--sonder-teal)] hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Explore Investment
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-[var(--sonder-teal)] transition-all duration-200"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}