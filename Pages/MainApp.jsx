// ========== MAIN APP ==========
export default function SonderWebsite() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", icon: TrendingUp },
    { name: "About", icon: Users },
    { name: "Invest", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-[var(--sonder-light-bg)] text-[var(--sonder-dark-text)]">
      <style>{`
        :root {
          --sonder-teal: #2d8a9d;
          --sonder-green: #6aa979;
          --sonder-orange: #f2a649;
          --sonder-dark-text: #3c4e62;
          --sonder-light-bg: #f0f5f4;
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
        }
      `}</style>

      <header className="glass-effect border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div onClick={() => setCurrentPage("Home")} className="flex items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 rounded-lg overflow-hidden" style={{
                backgroundImage: `url(${newLogoUrl})`,
                backgroundSize: '300%',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
              }}></div>
              <div>
                <h1 className="text-2xl font-bold sonder-text-gradient">Sonder Tech</h1>
                <p className="text-xs text-slate-600">Blockchain Innovation</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    currentPage === item.name
                      ? "bg-[var(--sonder-dark-text)] text-white shadow-lg"
                      : "text-[var(--sonder-dark-text)] hover:text-[var(--sonder-teal)] hover:bg-white/60"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => { setCurrentPage(item.name); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium ${
                      currentPage === item.name ? "bg-[var(--sonder-dark-text)] text-white" : "text-slate-700 hover:bg-white/60"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {currentPage === "Home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "About" && <AboutPage />}
        {currentPage === "Invest" && <InvestPage />}
      </main>

      <footer className="glass-effect border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg overflow-hidden" style={{
              backgroundImage: `url(${newLogoUrl})`,
              backgroundSize: '300%',
              backgroundPosition: 'center 30%',
            }}></div>
            <h3 className="text-xl font-bold sonder-text-gradient">Sonder Tech</h3>
          </div>
          <p className="text-slate-600 mb-6">Transforming African commodity markets through blockchain innovation.</p>
          <p className="text-sm text-slate-500">© 2024 Sonder Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
