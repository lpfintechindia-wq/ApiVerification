import { Outlet, useLocation, useNavigate } from "react-router";
import { Code2, Menu, Bell, Settings, Search, Home, Layers, Shield, Activity, FileText, BookOpen, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function DeveloperLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "API Verification Suite",
      path: "/developer",
      icon: Shield,
      active: location.pathname === "/developer"
    }
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/developer") return "Dashboard";
    if (path.startsWith("/api-testing")) return "API Testing";
    if (path.startsWith("/verification-apis")) return "Verification APIs";
    return "Developer Tools";
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-[#e2e8f0] transition-all duration-300 flex-col relative z-20 shadow-sm hidden lg:flex`}
      >
        {/* Logo & Toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#e2e8f0]">
          {sidebarOpen ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#A02724] rounded-lg flex items-center justify-center shadow-md">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-['Montserrat',sans-serif] font-bold text-[14px] text-[#0f172a]">PAYTECH</h1>
                  <p className="font-['Montserrat',sans-serif] text-[10px] text-[#64748b]">Developer Portal</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 hover:bg-[#f1f5f9] rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-[#64748b]" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors mx-auto"
            >
              <Menu className="w-5 h-5 text-[#64748b]" />
            </button>
          )}
        </div>

        {/* Environment Selector */}
        {sidebarOpen && (
          <div className="p-4 border-b border-[#e2e8f0]">
            <label className="font-['Montserrat',sans-serif] text-[11px] text-[#64748b] mb-2 block uppercase tracking-wide font-medium">
              Environment
            </label>
            <select className="font-['Montserrat',sans-serif] w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 py-2 text-[13px] text-[#0f172a] focus:outline-none focus:border-[#A02724] focus:ring-2 focus:ring-[#A02724]/20">
              <option>🟢 Sandbox</option>
              <option>🔴 Production (Read-only)</option>
            </select>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-3 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`font-['Montserrat',sans-serif] w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    item.active
                      ? "bg-[#FEE2E2] text-[#A02724] border border-[#A02724]/20 shadow-sm"
                      : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {sidebarOpen && (
                    <span className="text-[14px] font-medium">{item.name}</span>
                  )}
                  {item.active && sidebarOpen && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#A02724]"></div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Back to Dashboard */}
        {sidebarOpen && (
          <div className="p-4 border-t border-[#e2e8f0]">
            <button
              onClick={() => navigate("/")}
              className="font-['Montserrat',sans-serif] w-full flex items-center gap-2 px-3 py-2 text-[13px] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
          </div>
        )}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
          
          {/* Mobile Sidebar */}
          <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-[#e2e8f0] z-50 flex flex-col shadow-xl lg:hidden">
            {/* Logo & Close */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#A02724] rounded-lg flex items-center justify-center shadow-md">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-['Montserrat',sans-serif] font-bold text-[14px] text-[#0f172a]">PAYTECH</h1>
                  <p className="font-['Montserrat',sans-serif] text-[10px] text-[#64748b]">Developer Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 hover:bg-[#f1f5f9] rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-[#64748b]" />
              </button>
            </div>

            {/* Environment Selector */}
            <div className="p-4 border-b border-[#e2e8f0]">
              <label className="font-['Montserrat',sans-serif] text-[11px] text-[#64748b] mb-2 block uppercase tracking-wide font-medium">
                Environment
              </label>
              <select className="font-['Montserrat',sans-serif] w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 py-2 text-[13px] text-[#0f172a] focus:outline-none focus:border-[#A02724] focus:ring-2 focus:ring-[#A02724]/20">
                <option>🟢 Sandbox</option>
                <option>🔴 Production (Read-only)</option>
              </select>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3 overflow-y-auto">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setMobileSidebarOpen(false);
                      }}
                      className={`font-['Montserrat',sans-serif] w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                        item.active
                          ? "bg-[#FEE2E2] text-[#A02724] border border-[#A02724]/20 shadow-sm"
                          : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="text-[14px] font-medium">{item.name}</span>
                      {item.active && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#A02724]"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Back to Dashboard */}
            <div className="p-4 border-t border-[#e2e8f0]">
              <button
                onClick={() => {
                  navigate("/");
                  setMobileSidebarOpen(false);
                }}
                className="font-['Montserrat',sans-serif] w-full flex items-center gap-2 px-3 py-2 text-[13px] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dashboard
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-4 lg:px-6 shadow-sm">
          <div className="flex items-center gap-3 lg:gap-4 min-w-0 flex-1">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-[#f8fafc] rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-[#64748b]" />
            </button>

            <h1 className="font-['Montserrat',sans-serif] text-[16px] lg:text-[20px] font-semibold text-[#0f172a] truncate">{getPageTitle()}</h1>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
              <span className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] text-[#059669] font-medium whitespace-nowrap">All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search - Hidden on mobile */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search APIs..."
                className="font-['Montserrat',sans-serif] w-48 lg:w-64 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg pl-10 pr-4 py-2 text-[13px] text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#A02724] focus:ring-2 focus:ring-[#A02724]/20"
              />
            </div>

            {/* Actions */}
            <button className="p-2 hover:bg-[#f8fafc] rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-[#64748b]" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#ef4444] rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-[#f8fafc] rounded-lg transition-colors hidden sm:block">
              <Settings className="w-5 h-5 text-[#64748b]" />
            </button>

            {/* User */}
            <div className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-3 border-l border-[#e2e8f0]">
              <div className="text-right hidden lg:block">
                <p className="font-['Montserrat',sans-serif] text-[13px] font-medium text-[#0f172a]">Admin User</p>
                <p className="font-['Montserrat',sans-serif] text-[11px] text-[#64748b]">Super Admin</p>
              </div>
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-[#A02724] rounded-full flex items-center justify-center text-[13px] lg:text-[14px] font-bold text-white shadow-md">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[#f8fafc]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
