import { useNavigate } from "react-router";
import { Code2, Webhook, FileText, ArrowLeftRight, RefreshCw, CheckCircle } from "lucide-react";

export default function ApiTestingDashboard() {
  const navigate = useNavigate();

  const apiCategories = [
    {
      id: "pay-in",
      title: "Pay-In APIs",
      description: "Accept payments from customers via multiple channels",
      icon: ArrowLeftRight,
      count: 8,
    },
    {
      id: "pay-out",
      title: "Pay-Out APIs",
      description: "Disburse funds to bank accounts and wallets",
      icon: ArrowLeftRight,
      count: 6,
    },
    {
      id: "refund",
      title: "Refund APIs",
      description: "Process refunds and reversals",
      icon: RefreshCw,
      count: 4,
    },
    {
      id: "verification",
      title: "Verification APIs",
      description: "Verify bank accounts, PAN, and KYC details",
      icon: CheckCircle,
      count: 10,
    },
    {
      id: "webhooks",
      title: "Webhooks",
      description: "Real-time event notifications",
      icon: Webhook,
      count: 12,
    },
    {
      id: "logs",
      title: "API Logs",
      description: "View and debug API request history",
      icon: FileText,
      count: null,
    },
  ];

  return (
    <div className="p-[32px]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[32px] mb-2">API Testing</h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[16px]">
          Test and validate API integrations in a secure sandbox environment
        </p>
      </div>

      {/* Environment Selector */}
      <div className="mb-6 flex items-center gap-4">
        <label className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">Environment:</label>
        <select className="bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] px-[16px] py-[8px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] cursor-pointer">
          <option value="sandbox">Sandbox</option>
          <option value="production" disabled>Production (Read-only)</option>
        </select>
      </div>

      {/* Info Banner */}
      <div className="bg-[#e9f3ff] border border-[#91a7e5] rounded-[12px] p-[20px] mb-8 flex items-start gap-3">
        <div className="w-[20px] h-[20px] rounded-full bg-[#3b5ba3] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-[12px] h-[12px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-1">Sandbox Environment Active</p>
          <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
            Use sandbox credentials to test APIs safely. No real transactions will be processed.
          </p>
        </div>
      </div>

      {/* API Category Cards */}
      <div className="grid grid-cols-3 gap-[24px]">
        {apiCategories.map((category) => {
          const Icon = category.icon;
          const isSpecialPage = category.id === "webhooks" || category.id === "logs";
          
          return (
            <div
              key={category.id}
              onClick={() => {
                if (category.id === "webhooks") {
                  navigate("/api-testing/webhooks/test");
                } else if (category.id === "logs") {
                  navigate("/api-testing/logs");
                } else {
                  navigate(`/api-testing/${category.id}`);
                }
              }}
              className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px] cursor-pointer hover:border-[#91a7e5] hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-[48px] h-[48px] bg-[#e9f3ff] rounded-[12px] flex items-center justify-center group-hover:bg-[#d4e7ff] transition-colors">
                  <Icon className="w-[24px] h-[24px] text-[#3b5ba3]" />
                </div>
                {category.count !== null && (
                  <div className="bg-[#f6f9fc] rounded-[6px] px-[10px] py-[4px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px]">{category.count} APIs</p>
                  </div>
                )}
              </div>
              
              <h3 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[20px] mb-2">
                {category.title}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px] mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center gap-2 text-[#3b5ba3] font-['Inter:Medium',sans-serif] text-[13px] group-hover:gap-3 transition-all">
                <span>{isSpecialPage ? "Open" : "View APIs"}</span>
                <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}