import { Outlet, useLocation, useNavigate } from "react-router";
import svgPaths from "@/imports/svg-tq7lxjg182";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#4b1b91] h-[40px] left-1/2 overflow-clip rounded-[8px] top-[46px] w-[116px] shadow-md">
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[normal] left-[calc(50%-30.5px)] text-white text-[16px] top-[calc(50%-10px)]">PAYTECH</p>
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="House">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1628)" id="House">
          <g id="Vector" />
          <path d={svgPaths.p38b11f00} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1628">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DashboardTab({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-full cursor-pointer transition-all ${
        isActive ? "bg-[#4b1b91] text-white" : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-white"
      }`} 
      data-name="Dashboard tab"
    >
      {isActive && <div aria-hidden="true" className="absolute border-white border-l-4 border-solid inset-0 pointer-events-none" />}
      <House />
      <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Dashboard</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1679)" id="Users">
          <g id="Vector" />
          <path d={svgPaths.p17952800} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1679">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconParkDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UserTab() {
  return (
    <div className="h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all" data-name="User tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <Users />
            <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">User</p>
          </div>
          <IconParkDown />
        </div>
      </div>
    </div>
  );
}

function PiggyBank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PiggyBank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1672)" id="PiggyBank">
          <g id="Vector" />
          <path d={svgPaths.p2e655440} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1672">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FundTab() {
  return (
    <div className="h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <PiggyBank />
            <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Fund</p>
          </div>
          <IconParkDown />
        </div>
      </div>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1661)" id="ChartBar">
          <g id="Vector" />
          <path d={svgPaths.pf616052} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1661">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReportsTab() {
  return (
    <div className="h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <ChartBar />
            <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GearSix() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GearSix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1650)" id="GearSix">
          <g id="Vector" />
          <path d={svgPaths.p2ba43880} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1650">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SettingTab() {
  return (
    <div className="h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all" data-name="User tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <GearSix />
            <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Setting</p>
          </div>
          <IconParkDown />
        </div>
      </div>
    </div>
  );
}

function CodeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3a23d800} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function DeveloperToolsTab({ activeRoute, onNavigate }: { activeRoute: string; onNavigate: (path: string) => void }) {
  const isActive = activeRoute.startsWith("/api-testing") || activeRoute.startsWith("/verification-apis") || activeRoute.startsWith("/developer");
  
  return (
    <div className="relative shrink-0 w-full">
      <div 
        className={`h-[48px] relative shrink-0 w-full cursor-pointer transition-all ${
          isActive ? "bg-[#4b1b91] text-white" : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-white"
        }`}
        onClick={() => onNavigate("/developer")}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <CodeIcon />
              <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Developer Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_1654)" id="User">
          <g id="Vector" />
          <path d={svgPaths.pe9f2500} fill="currentColor" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1654">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all" data-name="Profile">
      <User />
      <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px]">Profile</p>
    </div>
  );
}

function LeftNavBar({ activeRoute, onNavigate, onClose }: { activeRoute: string; onNavigate: (path: string) => void; onClose?: () => void }) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose?.();
  };

  return (
    <div className="bg-[#0F172A] h-full relative w-full lg:w-[240px]" data-name="Left nav bar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          aria-label="Close menu"
        >
          <X className="size-6" />
        </button>

        <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-[144px] w-full" data-name="Left Nav bar">
          <DashboardTab 
            isActive={activeRoute === "/"} 
            onClick={() => handleNavigate("/")} 
          />
          <UserTab />
          <FundTab />
          <ReportsTab />
          <SettingTab />
          <DeveloperToolsTab 
            activeRoute={activeRoute}
            onNavigate={handleNavigate}
          />
          <Profile />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[15.273px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2727 15.2727">
        <g id="search">
          <path d={svgPaths.p1a5e7700} id="Vector" stroke="var(--stroke-0, #4b1b91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27273" />
          <path d={svgPaths.p19baff6f} id="Vector_2" stroke="var(--stroke-0, #4b1b91)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27273" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#f6f9fc] h-[40px] relative rounded-[12px] shrink-0 w-full max-w-[280px] hidden sm:block" data-name="Search">
      <div className="content-stretch flex gap-[16px] items-center overflow-clip pl-[16px] pr-[12px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Item">
          <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f7987] text-[14px]">Search</p>
        </div>
        <div className="content-stretch flex items-center p-[6.364px] relative shrink-0" data-name="Icon">
          <Search1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eceff3] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function OutlineGeneralSun() {
  return (
    <div className="col-1 ml-[12.5px] mt-[11.67px] relative row-1 size-[16.667px]" data-name="Outline/General/Sun">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Outline/General/Sun">
          <g id="Icon">
            <path d={svgPaths.p37a6bfc0} fill="var(--fill-0, #FDFDFD)" />
            <path clipRule="evenodd" d={svgPaths.p1edb5df0} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" />
            <path d={svgPaths.p38d6980} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p3bde1380} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p3d120f00} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p35bf7700} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p3b9ce900} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p234e0b80} fill="var(--fill-0, #FDFDFD)" />
            <path d={svgPaths.p68d9400} fill="var(--fill-0, #FDFDFD)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 hidden sm:block">
      <div className="bg-[#f6f9fc] border-[#eceff3] border-[0.71px] border-solid col-1 h-[40px] ml-0 mt-0 rounded-[44px] row-1 w-[83.333px]" />
      <div className="bg-[#1c1e21] col-1 ml-[6.25px] mt-[5.42px] rounded-[42.6px] row-1 shadow-[0px_2.84px_2.84px_0px_rgba(0,0,0,0.25),7.1px_7.1px_14.2px_0px_#24272c] size-[29.167px]" />
      <OutlineGeneralSun />
    </div>
  );
}

function Frame11() {
  return <div className="bg-[#FEE2E2] rounded-[40px] shrink-0 size-[40px] hidden sm:block" />;
}

function TopNavBar({ title, onMenuClick }: { title: string; onMenuClick: () => void }) {
  return (
    <div className="bg-white flex-[1_0_0] h-[64px] lg:h-[80px] min-h-px min-w-px sticky top-0 border-b border-[#E2E8F0] shadow-sm z-30" data-name="Top nav bar">
      <div className="overflow-clip relative rounded-[inherit] w-full h-full px-4 lg:px-[52px]">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Menu button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-[#0F172A] hover:text-[#4b1b91] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] text-[#0F172A] text-[18px] lg:text-[24px]">{title}</p>
          </div>

          {/* Right side - Search, Theme toggle, Profile */}
          <div className="content-stretch flex gap-3 lg:gap-[32px] items-center relative shrink-0">
            <Search />
            <Group3 />
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <Frame11 />
              <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0F172A] text-[14px] hidden sm:block">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Dashboard";
    if (path.startsWith("/api-testing")) return "API Testing";
    if (path.startsWith("/verification-apis")) return "Verification APIs";
    if (path.startsWith("/developer")) return "Developer Tools";
    return "Dashboard";
  };

  return (
    <div className="flex h-screen w-full bg-[#f6f9fc]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <LeftNavBar 
          activeRoute={location.pathname} 
          onNavigate={(path) => navigate(path)} 
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden">
            <LeftNavBar 
              activeRoute={location.pathname} 
              onNavigate={(path) => navigate(path)}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavBar 
          title={getPageTitle()} 
          onMenuClick={() => setMobileMenuOpen(true)}
        />
        <div className="flex-1 overflow-auto bg-[#f6f9fc]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
