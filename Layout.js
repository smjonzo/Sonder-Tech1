import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TrendingUp, Users, DollarSign, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: TrendingUp },
    { name: "About", url: createPageUrl("About"), icon: Users },
    { name: "Invest", url: createPageUrl("Invest"), icon: DollarSign },
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      <style>{`
        :root {
          --sonder-navy: #0f172a;
          --sonder-blue: #1e40af;
          --sonder-gold: #d97706;
          --sonder-light: #f8fafc;
        }
        
        .sonder-gradient {
          background: linear-gradient(135deg, var(--sonder-navy) 0%, var(--sonder-blue) 50%, var(--sonder-gold) 100%);
        }
        
        .sonder-text-gradient {
          background: linear-gradient(135deg, var(--sonder-blue), var(--sonder-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Header */}
      <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 sonder-gradient rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold sonder-text-gradient">Sonder Tech</h1>
                <p className="text-xs text-slate-600 -mt-1">Blockchain Innovation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    isActive(item.url)
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-700 hover:text-blue-600 hover:bg-white/60"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.url)
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-white/60"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 sonder-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold sonder-text-gradient">Sonder Tech</h3>
            </div>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Transforming African commodity markets through blockchain innovation and sustainable technology solutions.
            </p>
            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500">
                © 2024 Sonder Tech. All rights reserved. Building the future of transparent commodity trading.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}