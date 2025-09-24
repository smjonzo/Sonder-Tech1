
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, Award, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const founders = [
    {
      name: "Aman Solomon",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with extensive experience in blockchain technology and African markets. Previously led digital transformation initiatives across emerging economies.",
      expertise: ["Blockchain Strategy", "Market Development", "Strategic Partnerships", "Regulatory Affairs"],
      education: "Bachelors in Business, Boston College",
      location: "Boston, MA"
    },
    {
      name: "Musaab Malik",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Technical innovator specializing in distributed systems and smart contract development. Expert in scaling blockchain solutions for emerging markets.",
      expertise: ["Blockchain Development", "Smart Contracts", "System Architecture", "Fintech Solutions"],
      education: "Bachelors in Business, Boston College",
      location: "Boston, MA"
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
            Meet the <span className="sonder-text-gradient">Visionaries</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our founding team combines deep technical expertise with extensive market knowledge 
            to deliver blockchain solutions that transform African commodity markets.
          </p>
        </motion.div>

        {/* Founders Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
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
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-slate-600">
                        <Award className="w-5 h-5 mr-2" />
                        <span>{founder.education}</span>
                      </div>
                      
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{founder.location}</span>
                      </div>
                      
                      <div className="flex space-x-4 pt-2">
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </button>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <Mail className="w-5 h-5" />
                          <span>Email</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
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