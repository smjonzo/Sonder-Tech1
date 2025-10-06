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


// ========== ABOUT PAGE ==========
export default function AboutPage() {
  const founders = [
    {
      name: "Aman Solomon",
      role: "Co-Founder & Operating Partner",
      image: getPlaceholderImage("Aman Solomon"),
      bio: "Visionary leader with extensive experience in blockchain technology and African markets. Previously led digital transformation initiatives across emerging economies.",
      expertise: ["Blockchain Strategy", "Market Development", "Strategic Partnerships", "Regulatory Affairs"]
    },
    {
      name: "Musaab Malik",
      role: "Co-Founder & Managing Partner",
      image: getPlaceholderImage("Musaab Malik"),
      bio: "Technical innovator specializing in distributed systems and smart contract development. Expert in scaling blockchain solutions for emerging markets.",
      expertise: ["Blockchain Development", "Smart Contracts", "System Architecture", "Fintech Solutions"]
    }
  ];

  const keyTeam = [
    {
      name: "Sean Radimer",
      role: "CDO (Chief Data Officer)",
      image: getPlaceholderImage("Sean Radimer"),
      bio: "Data science expert with deep expertise in analytics and machine learning applications for commodity markets.",
      expertise: ["Data Analytics", "Machine Learning", "Market Intelligence", "Predictive Modeling"]
    },
    {
      name: "Chelsea Boruff",
      role: "CGO (Chief Growth Officer)",
      image: getPlaceholderImage("Chelsea Boruff"),
      bio: "Growth strategist with proven track record in scaling technology companies across emerging markets.",
      expertise: ["Growth Strategy", "Market Expansion", "Partnership Development", "Customer Acquisition"]
    },
    {
      name: "Arham Shah",
      role: "CCO (Chief Capital Officer)",
      image: getPlaceholderImage("Arham Shah"),
      bio: "Financial executive with extensive experience in venture capital and emerging market investments.",
      expertise: ["Financial Strategy", "Investment Analysis", "Risk Management", "Capital Markets"]
    }
  ];

  const extendedTeam = [
    {
      name: "Levi Lillioja",
      role: "Blockchain Engineer",
      image: getPlaceholderImage("Levi Lillioja"),
      bio: "Blockchain engineer specializing in smart contract development and distributed ledger technology.",
      expertise: ["Smart Contract Development", "Solidity", "Blockchain Security", "DApp Development"]
    },
    {
      name: "Marco Mankaryous",
      role: "Head of Business Development",
      image: getPlaceholderImage("Marco Mankaryous"),
      bio: "Business development leader with proven expertise in forging strategic partnerships.",
      expertise: ["Business Development", "Strategic Partnerships", "Market Entry", "Client Relations"]
    },
    {
      name: "Uriel Azong",
      role: "Strategic Finance Development",
      image: getPlaceholderImage("Uriel Azong"),
      bio: "Strategic finance professional specializing in financial planning, analysis, and capital allocation.",
      expertise: ["Financial Planning", "Strategic Analysis", "Capital Allocation", "Investment Strategy"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet the <span className="sonder-text-gradient">Team</span>
            </h1>
          </div>
        </FadeIn>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="sonder-text-gradient">Executives</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <Card key={founder.name} className="glass-effect border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={founder.image} alt={founder.name} className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                      <p className="text-lg">{founder.role}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-600 text-lg mb-6">{founder.bio}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill) => (
                          <Badge key={skill} className="bg-teal-100 text-[var(--sonder-teal)] border-2 border-black">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="sonder-text-gradient">Leadership Team</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {keyTeam.map((member) => (
              <Card key={member.name} className="glass-effect border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} className="bg-teal-100 text-[var(--sonder-teal)] text-xs border-2 border-black">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="sonder-text-gradient">Extended Team</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {extendedTeam.map((member) => (
              <Card key={member.name} className="glass-effect border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} className="bg-teal-100 text-[var(--sonder-teal)] text-xs border-2 border-black">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
