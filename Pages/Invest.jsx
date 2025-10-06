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

// ========== INVEST PAGE ==========
export default function InvestPage() {
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

    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        investment_amount: "",
        investor_type: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  if (submitSuccess) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-[var(--sonder-green)] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Thank You for Your Interest!</h1>
            <p className="text-xl text-slate-600 mb-8">Our team will be in touch within 24 hours.</p>
            <Button onClick={() => setSubmitSuccess(false)} className="bg-[var(--sonder-teal)]">
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="sonder-text-gradient">Investment</span> Opportunity
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-[var(--sonder-teal)]" />
                Express Your Interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="mt-2" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Investment Range</Label>
                    <Select value={formData.investment_amount} onValueChange={(v) => handleInputChange("investment_amount", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under_100k">Under $100K</SelectItem>
                        <SelectItem value="100k_500k">$100K - $500K</SelectItem>
                        <SelectItem value="500k_1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m_5m">$1M - $5M</SelectItem>
                        <SelectItem value="over_5m">Over $5M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Investor Type</Label>
                    <Select value={formData.investor_type} onValueChange={(v) => handleInputChange("investor_type", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="institutional">Institutional</SelectItem>
                        <SelectItem value="family_office">Family Office</SelectItem>
                        <SelectItem value="vc_fund">VC Fund</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="mt-2 h-24" />
                </div>

                <Button type="submit" disabled={isSubmitting || !formData.name || !formData.email} className="w-full bg-[var(--sonder-teal)] py-3 text-lg">
                  {isSubmitting ? "Submitting..." : "Submit Investment Interest"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[var(--sonder-teal)]" />
                  Projected Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { year: "Year 1", revenue: "$1-2M", growth: "Foundation Building" },
                  { year: "Year 3", revenue: "$10-15M", growth: "Market Expansion" },
                  { year: "Year 5", revenue: "$35-50M", growth: "Full Scale" }
                ].map((p) => (
                  <div key={p.year} className="flex justify-between items-center p-4 bg-teal-50/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{p.year}</h4>
                      <p className="text-sm text-slate-600">{p.growth}</p>
                    </div>
                    <p className="text-xl font-bold sonder-text-gradient">{p.revenue}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
