import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Award, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

const imageAman = require("pictures/Aman.jpeg");
const imageMusaab = require("pictures/Musaab.jpeg");
const imageSean = require("pictures/Sean.jpeg");
const imageChelsea = require("pictures/Chelsea.JPEG");
const imageArham = require("pictures/IMG_1020 (5) (2).JPG");
const imageLevi = require("pictures/Levi.JPEG");
const imageMarco = require("pictures/Marco.JPEG");
const imageUriel = require("pictures/Uriel.JPG");

export default function About() {
  const founders = [
    {
      name: "Aman Solomon",
      role: "Co-Founder & Operating Partner",
      image: <img src={imageAman.default} alt="image not found" />,
      bio: "Visionary leader with extensive experience in blockchain technology and African markets. Previously led digital transformation initiatives across emerging economies.",
      expertise: ["Blockchain Strategy", "Market Development", "Strategic Partnerships", "Regulatory Affairs"]
    },
    {
      name: "Musaab Malik",
      role: "Co-Founder & Managing Partner",
      image: <img src={imageMusaab.default} alt="image not found" />,
      bio: "Technical innovator specializing in distributed systems and smart contract development. Expert in scaling blockchain solutions for emerging markets.",
      expertise: ["Blockchain Development", "Smart Contracts", "System Architecture", "Fintech Solutions"]
    }
  ];

  const keyTeam = [
    {
      name: "Sean Radimer",
      role: "CDO (Chief Data Officer)",
      image: <img src={imageSean.default} alt="image not found" />,
      bio: "Data science expert with deep expertise in analytics and machine learning applications for commodity markets. Leads our data strategy and insights platform.",
      expertise: ["Data Analytics", "Machine Learning", "Market Intelligence", "Predictive Modeling"]
    },
    {
      name: "Chelsea Boruff",
      role: "CGO (Chief Growth Officer)",
      image: <img src={imageChelsea.default} alt="image not found" />,
      bio: "Growth strategist with proven track record in scaling technology companies across emerging markets. Drives our market expansion and partnership initiatives.",
      expertise: ["Growth Strategy", "Market Expansion", "Partnership Development", "Customer Acquisition"]
    },
    {
      name: "Arham Shah",
      role: "CCO (Chief Capital Officer)",
      image: <img src={imageArham.default} alt="image not found" />,
      bio: "Financial executive with extensive experience in venture capital and emerging market investments. Oversees financial strategy and investor relations.",
      expertise: ["Financial Strategy", "Investment Analysis", "Risk Management", "Capital Markets"]
    }
  ];

  const extendedTeam = [
    {
      name: "Levi Lillioja",
      role: "Blockchain Engineer",
      image: <img src={imageLevi.default} alt="image not found" />,
      bio: "Blockchain engineer specializing in smart contract development and distributed ledger technology. Builds secure and scalable blockchain solutions for commodity tracking.",
      expertise: ["Smart Contract Development", "Solidity", "Blockchain Security", "DApp Development"]
    },
    {
      name: "Marco Mankaryous",
      role: "Head of Business Development",
      image: <img src={imageMarco.default} alt="image not found" />,
      bio: "Business development leader with proven expertise in forging strategic partnerships and driving growth in emerging markets. Spearheads new market opportunities and client relationships.",
      expertise: ["Business Development", "Strategic Partnerships", "Market Entry", "Client Relations"]
    },
    {
      name: "Uriel Azong",
      role: "Strategic Finance Development",
      image: <img src={imageUriel.default} alt="image not found" />,
      bio: "Strategic finance professional specializing in financial planning, analysis, and capital allocation. Develops financial strategies that support long-term business growth.",
      expertise: ["Financial Planning", "Strategic Analysis", "Capital Allocation", "Investment Strategy"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "Creating clear, auditable records for every transaction in the commodity supply chain."
    },
    {
      icon: Heart,
      title: "Ethical Impact",
      description: "Ensuring fair compensation and working conditions for all participants in our networks."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Pioneering technology solutions that address real-world challenges in African markets."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Meet the <span className="sonder-text-gradient">Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our leadership team combines deep technical expertise with extensive market knowledge 
            to deliver blockchain solutions that transform African commodity markets.
          </p>
        </motion.div>

        {/* Executives Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="sonder-text-gradient">Executives</span>
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                        <p className="text-lg opacity-90">{founder.role}</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {founder.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-[var(--sonder-dark-text)] mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary"
                              className="bg-teal-100 text-[var(--sonder-teal)] hover:bg-teal-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="sonder-text-gradient">Leadership Team</span>
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {keyTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-[var(--sonder-dark-text)] mb-2 text-sm">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary"
                              className="bg-teal-100 text-[var(--sonder-teal)] hover:bg-teal-200 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extended Team Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="sonder-text-gradient">Extended Team</span>
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {extendedTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-[var(--sonder-dark-text)] mb-2 text-sm">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary"
                              className="bg-teal-100 text-[var(--sonder-teal)] hover:bg-teal-200 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
            Our <span className="sonder-text-gradient">Core Values</span>
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            The principles that guide every decision we make and every solution we build.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 sonder-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="sonder-gradient border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-teal-100 leading-relaxed max-w-4xl mx-auto">
                To revolutionize African commodity markets through blockchain technology, 
                creating transparent, ethical, and efficient trading systems that empower 
                local communities, ensure fair compensation for producers, and deliver 
                sustainable value to all stakeholders in the supply chain.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
