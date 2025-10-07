import React, { useState } from "react";
import { InvestmentInterest } from "../Entities/InvestmentInterest";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { 
  TrendingUp, 
  DollarSign, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Users,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

export default function Invest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment_amount: "",
    investor_type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await InvestmentInterest.create(formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        investment_amount: "",
        investor_type: "",
        message: ""
      });
    } catch (error) {
      setSubmitError("There was an error submitting your information. Please try again.");
    }
    setIsSubmitting(false);
  };

  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "$20-30M Market Opportunity",
      description: "Total addressable investment over 3 years with strong ROI projections"
    },
    {
      icon: BarChart3,
      title: "25-30% Expected Annual Returns",
      description: "By Year 5 with break-even projected in Year 3"
    },
    {
      icon: Globe,
      title: "First-Mover Advantage",
      description: "Leading blockchain implementation in African commodity markets"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Diversified approach across multiple commodities and stable jurisdictions"
    }
  ];

  const projectedReturns = [
    { year: "Year 1", revenue: "$1-2M", growth: "Foundation Building" },
    { year: "Year 3", revenue: "$10-15M", growth: "Market Expansion" },
    { year: "Year 5", revenue: "$35-50M", growth: "Full Scale Operations" }
  ];

  if (submitSuccess) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-[var(--sonder-green)] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[var(--sonder-dark-text)] mb-6">Thank You for Your Interest!</h1>
            <p className="text-xl text-slate-600 mb-8">
              We've received your investment inquiry and our team will be in touch within 24 hours 
              to discuss the opportunity in detail.
            </p>
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-[var(--sonder-teal)] hover:bg-[var(--sonder-green)]"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="sonder-text-gradient">Investment</span> Opportunity
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join us in revolutionizing African commodity markets through blockchain technology. 
            Be part of a transformative investment opportunity with strong social impact and financial returns.
          </p>
        </motion.div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investmentHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 sonder-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Investment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-[var(--sonder-teal)]" />
                  Express Your Interest
                </CardTitle>
                <p className="text-slate-600">
                  Complete the form below and our investment team will contact you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {submitError && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="investment_amount" className="font-semibold">Investment Range</Label>
                      <select
                        id="investment_amount"
                        value={formData.investment_amount}
                        onChange={(event) => handleInputChange("investment_amount", event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[var(--sonder-dark-text)] shadow-sm focus:border-[var(--sonder-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--sonder-teal)]/40"
                      >
                        <option value="">Select range</option>
                        <option value="under_100k">Under $100K</option>
                        <option value="100k_500k">$100K - $500K</option>
                        <option value="500k_1m">$500K - $1M</option>
                        <option value="1m_5m">$1M - $5M</option>
                        <option value="over_5m">Over $5M</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="investor_type" className="font-semibold">Investor Type</Label>
                      <select
                        id="investor_type"
                        value={formData.investor_type}
                        onChange={(event) => handleInputChange("investor_type", event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[var(--sonder-dark-text)] shadow-sm focus:border-[var(--sonder-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--sonder-teal)]/40"
                      >
                        <option value="">Select type</option>
                        <option value="individual">Individual Investor</option>
                        <option value="institutional">Institutional Investor</option>
                        <option value="family_office">Family Office</option>
                        <option value="vc_fund">VC Fund</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold">Message or Questions</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 h-24"
                      placeholder="Tell us about your investment goals and any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="w-full bg-[var(--sonder-teal)] hover:bg-[var(--sonder-green)] py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Investment Interest
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Investment Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Projected Returns */}
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[var(--sonder-teal)]" />
                  Projected Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectedReturns.map((projection, index) => (
                    <div key={projection.year} className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50/50 to-orange-50/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[var(--sonder-dark-text)]">{projection.year}</h4>
                        <p className="text-sm text-slate-600">{projection.growth}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold sonder-text-gradient">{projection.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[var(--sonder-teal)]" />
                  Why Invest with Sonder?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--sonder-green)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--sonder-dark-text)]">Market Leadership</p>
                      <p className="text-sm text-slate-600">First-mover advantage in blockchain commodity solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--sonder-green)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--sonder-dark-text)]">Proven Technology</p>
                      <p className="text-sm text-slate-600">Cutting-edge blockchain infrastructure built for scale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--sonder-green)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--sonder-dark-text)]">Social Impact</p>
                      <p className="text-sm text-slate-600">Direct positive impact on African communities and producers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--sonder-green)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--sonder-dark-text)]">Experienced Team</p>
                      <p className="text-sm text-slate-600">Led by experts in blockchain technology and African markets</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}