import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Award, Target, Heart, Shield, Globe, Zap, TrendingUp, 
  ArrowRight, CheckCircle, Layers, Users, BarChart3, 
  DollarSign, Menu, X
} from "lucide-react";

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    }}>
      {children}
    </div>
  );
};

const newLogoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689e48f33b2360ca4ea8053c/968a98002_IMG_2463.JPEG";
const getPlaceholderImage = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=2d8a9d&color=fff&bold=true`;

// ========== HOME PAGE ==========
function HomePage({ setCurrentPage }) {
  return (
    <div>
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 sonder-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="sonder-text-gradient">Transforming</span>
                <br />
                <span className="text-[var(--sonder-dark-text)]">African Commodities</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
                Harnessing blockchain technology to create transparent, ethical, and efficient commodity markets across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setCurrentPage("Invest")} size="lg" className="bg-[var(--sonder-teal)] hover:bg-[var(--sonder-green)] text-white px-8 py-4 text-lg rounded-full">
                  Start Investing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => setCurrentPage("About")} variant="outline" size="lg" className="border-2 px-8 py-4 text-lg rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-white to-teal-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Blockchain <span className="sonder-text-gradient">Innovation</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Immutable Security", description: "Blockchain technology creates tamper-proof records ensuring complete transparency." },
              { icon: Globe, title: "African Market Focus", description: "Specialized solutions designed for African commodity markets." },
              { icon: Zap, title: "Smart Automation", description: "Automated smart contracts streamline transactions and ensure fair compensation." }
            ].map((feature, idx) => (
              <FadeIn key={feature.title} delay={300 + idx * 100}>
                <Card className="glass-effect border-0 shadow-xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 sonder-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
