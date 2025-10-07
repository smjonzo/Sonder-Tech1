import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { TrendingUp, Users, DollarSign, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: TrendingUp },
    { name: "About", url: createPageUrl("About"), icon: Users },
    { name: "Invest", url: createPageUrl("Invest"), icon: DollarSign },
  ];

  const isActive = (url) => location.pathname === url;
  const newLogoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689e48f33b2360ca4ea8053c/968a98002_IMG_2463.JPEG";

  return (
    <div className="min-h-screen bg-[var(--sonder-light-bg)] text-[var(--sonder-dark-text)]">
      <style>{`
        :root {
          --sonder-teal: #2d8a9d;
          --sonder-green: #6aa979;
          --sonder-orange: #f2a649;
          --sonder-dark-text: #3c4e62;
          --sonder-light-bg: #f0f5f4;
          --sonder-light-text: #f8fafc;
        }
        
        .sonder-gradient {
          background: linear-gradient(135deg, var(--sonder-teal) 0%, var(--sonder-green) 50%, var(--sonder-orange) 100%);
        }
        
        .sonder-text-gradient {
          background: linear-gradient(135deg, var(--sonder-teal), var(--sonder-green), var(--sonder-orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(240, 245, 244, 0.85);
          border-color: rgba(60, 78, 98, 0.1);
        }
      `}</style>

      {/* Header */}
      <header className="glass-effect border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
               <div className="w-12 h-12 rounded-lg overflow-hidden" style={{
                 backgroundImage: `url(${newLogoUrl})`,
                 backgroundSize: '300%',
                 backgroundPosition: 'center 40%',
                 backgroundRepeat: 'no-repeat',
               }}></div>
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
                      ? "bg-[var(--sonder-dark-text)] text-white shadow-lg"
                      : "text-[var(--sonder-dark-text)] hover:text-[var(--sonder-teal)] hover:bg-white/60"
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
                        ? "bg-[var(--sonder-dark-text)] text-white"
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
      <footer className="glass-effect border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
               <div className="w-10 h-10 rounded-lg overflow-hidden" style={{
                 backgroundImage: `url(${newLogoUrl})`,
                 backgroundSize: '300%',
                 backgroundPosition: 'center 30%',
                 backgroundRepeat: 'no-repeat',
               }}></div>
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
