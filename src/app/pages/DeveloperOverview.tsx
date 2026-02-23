import { useNavigate } from "react-router";
import { Layers, Shield, Activity, FileText, ArrowRight, TrendingUp, Clock, CheckCircle2, Code2, Zap, Lock, AlertCircle, Wallet, CreditCard, DollarSign, Receipt, Eye, X } from "lucide-react";
import { useState } from "react";

export default function DeveloperOverview() {
  const navigate = useNavigate();
  const [showTransactions, setShowTransactions] = useState(false);
  const [showApiPricing, setShowApiPricing] = useState(false);

  const quickLinks = [
    {
      title: "Verification APIs",
      description: "Identity, document, and business verification",
      icon: Shield,
      gradient: "from-[#8b5cf6] to-[#7c3aed]",
      bgColor: "bg-[#f5f3ff]",
      path: "/verification-apis",
      stats: { total: "18 APIs", active: "10 Active" }
    },
    {
      title: "Wallet Balance",
      description: "View balance and transaction history",
      icon: Wallet,
      gradient: "from-[#A02724] to-[#8B1F1C]",
      bgColor: "bg-[#FEE2E2]",
      path: "#wallet",
      stats: { total: "₹1,24,560", active: "Available" }
    },
    {
      title: "API Logs",
      description: "View and analyze API request logs",
      icon: FileText,
      gradient: "from-[#10b981] to-[#059669]",
      bgColor: "bg-[#ecfdf5]",
      path: "/developer/transaction-logs",
      stats: { total: "2.5k Logs", active: "Today" }
    }
  ];

  const stats = [
    {
      label: "Total API Calls",
      value: "12,543",
      change: "+15.2%",
      icon: TrendingUp,
      color: "text-[#10b981]",
      bgColor: "bg-[#ecfdf5]"
    },
    {
      label: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s",
      icon: Clock,
      color: "text-[#3b82f6]",
      bgColor: "bg-[#eff6ff]"
    },
    {
      label: "Success Rate",
      value: "99.8%",
      change: "",
      icon: CheckCircle2,
      color: "text-[#10b981]",
      bgColor: "bg-[#ecfdf5]"
    },
    {
      label: "Active APIs",
      value: "23",
      change: "+3",
      icon: Code2,
      color: "text-[#8b5cf6]",
      bgColor: "bg-[#f5f3ff]"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Sandbox Environment",
      description: "Test APIs safely without affecting production data",
      color: "text-[#f59e0b]",
      bgColor: "bg-[#fef3c7]"
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "API keys and OAuth2 token-based authentication",
      color: "text-[#3b82f6]",
      bgColor: "bg-[#dbeafe]"
    },
    {
      icon: Code2,
      title: "Code Examples",
      description: "Ready-to-use code snippets in multiple languages",
      color: "text-[#8b5cf6]",
      bgColor: "bg-[#ede9fe]"
    }
  ];

  const recentActivity = [
    { api: "PAN Verification", status: "Success", time: "5 min ago", type: "verification", cost: "₹5.00" },
    { api: "Bank Transfer API", status: "Success", time: "2 hours ago", type: "payment", cost: "₹10.00" },
    { api: "GSTIN Verification", status: "Failed", time: "3 hours ago", type: "verification", cost: "₹0.00" },
    { api: "Aadhaar Verification", status: "Success", time: "10 min ago", type: "verification", cost: "₹8.00" },
    { api: "Bank Verification", status: "Success", time: "15 min ago", type: "verification", cost: "₹6.00" },
    { api: "Document OCR", status: "Success", time: "18 min ago", type: "ocr", cost: "₹12.00" }
  ];

  const allTransactions = [
    { id: "TXN001", api: "PAN Verification", status: "Success", time: "2024-02-20 14:30", cost: "₹5.00", balanceAfter: "₹1,24,560" },
    { id: "TXN002", api: "Bank Transfer API", status: "Success", time: "2024-02-20 12:15", cost: "₹10.00", balanceAfter: "₹1,24,565" },
    { id: "TXN003", api: "GSTIN Verification", status: "Failed", time: "2024-02-20 11:30", cost: "₹0.00", balanceAfter: "₹1,24,575" },
    { id: "TXN004", api: "Aadhaar Verification", status: "Success", time: "2024-02-20 14:20", cost: "₹8.00", balanceAfter: "₹1,24,575" },
    { id: "TXN005", api: "Bank Verification", status: "Success", time: "2024-02-20 14:15", cost: "₹6.00", balanceAfter: "₹1,24,583" },
    { id: "TXN006", api: "Document OCR", status: "Success", time: "2024-02-20 14:10", cost: "₹12.00", balanceAfter: "₹1,24,589" },
    { id: "TXN007", api: "PAN Verification", status: "Success", time: "2024-02-20 10:45", cost: "₹5.00", balanceAfter: "₹1,24,601" },
    { id: "TXN008", api: "Aadhaar eSign", status: "Success", time: "2024-02-20 09:30", cost: "₹15.00", balanceAfter: "₹1,24,606" },
    { id: "TXN009", api: "GSTIN Verification", status: "Success", time: "2024-02-19 18:20", cost: "₹7.00", balanceAfter: "₹1,24,621" },
    { id: "TXN010", api: "Bank Verification", status: "Success", time: "2024-02-19 16:15", cost: "₹6.00", balanceAfter: "₹1,24,628" },
  ];

  const apiPricing = [
    { category: "Identity Verification", apis: [
      { name: "PAN Verification", price: "₹5.00", perUnit: "per verification" },
      { name: "Aadhaar Verification", price: "₹8.00", perUnit: "per verification" },
      { name: "Driving License", price: "₹6.00", perUnit: "per verification" },
      { name: "Voter ID", price: "₹5.00", perUnit: "per verification" },
    ]},
    { category: "Business Verification", apis: [
      { name: "GSTIN Verification", price: "₹7.00", perUnit: "per verification" },
      { name: "CIN Verification", price: "₹8.00", perUnit: "per verification" },
      { name: "Udyam Certificate", price: "₹10.00", perUnit: "per verification" },
    ]},
    { category: "Bank & Financial", apis: [
      { name: "Bank Account Verification", price: "₹6.00", perUnit: "per verification" },
      { name: "UPI ID Verification", price: "₹4.00", perUnit: "per verification" },
      { name: "IFSC Code Lookup", price: "₹2.00", perUnit: "per lookup" },
    ]},
    { category: "Document OCR", apis: [
      { name: "PAN Card OCR", price: "₹12.00", perUnit: "per document" },
      { name: "Aadhaar Card OCR", price: "₹15.00", perUnit: "per document" },
      { name: "Passport OCR", price: "₹18.00", perUnit: "per document" },
    ]},
  ];

  const handleQuickLinkClick = (path: string) => {
    if (path === "#wallet") {
      // Scroll to wallet balance section
      const walletSection = document.getElementById("wallet-balance");
      walletSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Hero Section */}
      <div className="mb-6 lg:mb-8">
        <h1 className="font-['Montserrat',sans-serif] text-[24px] lg:text-[32px] font-bold text-[#0f172a] mb-2">
          Welcome to Developer Portal
        </h1>
        <p className="font-['Montserrat',sans-serif] text-[14px] lg:text-[16px] text-[#64748b]">
          Build, test, and integrate payment and verification APIs with ease
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white border border-[#e2e8f0] rounded-xl p-4 lg:p-5 hover:shadow-lg hover:border-[#cbd5e1] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.bgColor} ${stat.color} w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <span className={`text-[11px] lg:text-[12px] font-semibold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <p className="font-['Montserrat',sans-serif] text-[20px] lg:text-[28px] font-bold text-[#0f172a] mb-1">{stat.value}</p>
              <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[13px] text-[#64748b]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="mb-6 lg:mb-8">
        <h2 className="font-['Montserrat',sans-serif] text-[18px] lg:text-[20px] font-semibold text-[#0f172a] mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={index}
                onClick={() => handleQuickLinkClick(link.path)}
                className="group bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 hover:shadow-lg hover:border-[#A02724] cursor-pointer transition-all relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 ${link.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={`w-full h-full bg-gradient-to-br ${link.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#cbd5e1] group-hover:text-[#A02724] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] font-semibold text-[#0f172a] mb-2">
                    {link.title}
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] text-[#64748b] mb-4">
                    {link.description}
                  </p>

                  <div className="flex items-center gap-4 text-[12px]">
                    <span className="font-['Montserrat',sans-serif] text-[#64748b] font-medium">{link.stats.total}</span>
                    <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                    <span className="font-['Montserrat',sans-serif] text-[#10b981] font-medium">{link.stats.active}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wallet Balance Section */}
      <div id="wallet-balance" className="mb-6 lg:mb-8">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#A02724] to-[#8B1F1C] rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[18px] lg:text-[20px] font-semibold text-[#0f172a]">Wallet Balance</h2>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#64748b]">Current available balance</p>
              </div>
            </div>
            <button
              onClick={() => setShowTransactions(!showTransactions)}
              className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg transition-colors"
            >
              <Receipt className="w-4 h-4 text-[#64748b]" />
              <span className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#0f172a] font-medium hidden sm:inline">
                {showTransactions ? "Hide" : "View All"}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
            {/* Current Balance */}
            <div className="bg-gradient-to-br from-[#A02724] to-[#8B1F1C] rounded-xl p-5 lg:p-6 text-white">
              <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] opacity-90 mb-2 text-[#ffffff]">Available Balance</p>
              <p className="font-['Montserrat',sans-serif] text-[28px] lg:text-[36px] font-bold mb-1 text-[#ffffff]">₹1,24,560</p>
              <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] opacity-80 text-[#ffffff]">Last updated: Today, 2:30 PM</p>
            </div>

            {/* This Month */}
            <div className="bg-[#f8fafc] rounded-xl p-5 lg:p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#ef4444]" />
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] text-[#64748b]">This Month</p>
              </div>
              <p className="font-['Montserrat',sans-serif] text-[24px] lg:text-[28px] font-bold text-[#0f172a] mb-1">₹8,945</p>
              <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] text-[#64748b]">Total charges</p>
            </div>

            {/* API Calls */}
            <div className="bg-[#f8fafc] rounded-xl p-5 lg:p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-[#3b82f6]" />
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] text-[#64748b]">API Calls</p>
              </div>
              <p className="font-['Montserrat',sans-serif] text-[24px] lg:text-[28px] font-bold text-[#0f172a] mb-1">12,543</p>
              <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] text-[#64748b]">This month</p>
            </div>
          </div>

          {/* Statement Information */}
          

          {/* Recent Charges */}
          <div>
            <h3 className="font-['Montserrat',sans-serif] text-[15px] lg:text-[16px] font-semibold text-[#0f172a] mb-3">Recent Charges</h3>
            <div className="space-y-2">
              {recentActivity.slice(0, 5).map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg hover:bg-[#f1f5f9] transition-colors border border-transparent hover:border-[#e2e8f0]"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        activity.status === "Success" ? "bg-[#10b981]" : "bg-[#ef4444]"
                      }`}
                    ></div>
                    <div className="min-w-0 flex-1">
                      <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] font-medium text-[#0f172a] truncate">
                        {activity.api}
                      </p>
                      <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-[11px] text-[#64748b]">{activity.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] font-semibold text-[#0f172a]">
                      {activity.cost}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] lg:text-[11px] font-semibold ${
                        activity.status === "Success"
                          ? "bg-[#d1fae5] text-[#065f46]"
                          : "bg-[#fee2e2] text-[#991b1b]"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Transactions Modal/Section */}
      {showTransactions && (
        <div className="mb-6 lg:mb-8">
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] lg:text-[20px] font-semibold text-[#0f172a]">All Transactions</h2>
              <button
                onClick={() => setShowTransactions(false)}
                className="text-[#64748b] hover:text-[#0f172a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b]">Transaction ID</th>
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b]">API Name</th>
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b] hidden md:table-cell">Date & Time</th>
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b]">Cost</th>
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b] hidden lg:table-cell">Balance After</th>
                    <th className="font-['Montserrat',sans-serif] text-left py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#64748b]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allTransactions.map((txn, index) => (
                    <tr key={index} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                      <td className="font-['Montserrat',sans-serif] py-3 px-2 text-[11px] lg:text-[12px] text-[#64748b]">{txn.id}</td>
                      <td className="font-['Montserrat',sans-serif] py-3 px-2 text-[12px] lg:text-[13px] font-medium text-[#0f172a]">{txn.api}</td>
                      <td className="font-['Montserrat',sans-serif] py-3 px-2 text-[11px] lg:text-[12px] text-[#64748b] hidden md:table-cell">{txn.time}</td>
                      <td className="font-['Montserrat',sans-serif] py-3 px-2 text-[12px] lg:text-[13px] font-semibold text-[#0f172a]">{txn.cost}</td>
                      <td className="font-['Montserrat',sans-serif] py-3 px-2 text-[12px] lg:text-[13px] text-[#64748b] hidden lg:table-cell">{txn.balanceAfter}</td>
                      <td className="py-3 px-2">
                        <span
                          className={`font-['Montserrat',sans-serif] inline-block px-2 py-1 rounded-md text-[10px] lg:text-[11px] font-semibold ${
                            txn.status === "Success"
                              ? "bg-[#d1fae5] text-[#065f46]"
                              : "bg-[#fee2e2] text-[#991b1b]"
                          }`}
                        >
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Plan Card */}
      <div className="mb-6 lg:mb-8">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h2 className="font-['Montserrat',sans-serif] text-[18px] lg:text-[20px] font-semibold text-[#0f172a]">Current Subscription Plan</h2>
              <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#64748b]">Your active plan and API pricing details</p>
            </div>
          </div>

          {/* Plan Details */}
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl p-5 lg:p-6 text-white mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] opacity-90 mb-1">Current Plan</p>
                <h3 className="font-['Montserrat',sans-serif] text-[24px] lg:text-[32px] font-bold mb-2">Enterprise Plan</h3>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] opacity-80">Pay per API call • No monthly subscription</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] font-semibold">Active</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div>
                <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] opacity-80 mb-1">Plan Started</p>
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold">Jan 1, 2024</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] opacity-80 mb-1">Billing Cycle</p>
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold">Postpaid</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] opacity-80 mb-1">Support</p>
                <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold">24/7 Priority</p>
              </div>
            </div>
          </div>

          {/* View All API Charges Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowApiPricing(!showApiPricing)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white rounded-lg font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-medium hover:shadow-lg transition-all"
            >
              <Eye className="w-4 h-4" />
              {showApiPricing ? "Hide API Charges" : "View All API Charges"}
            </button>
          </div>

          {/* API Pricing Table - Collapsible */}
          {showApiPricing && (
            <div>
              <h3 className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] font-semibold text-[#0f172a] mb-4">Complete API Pricing</h3>
              <div className="space-y-4">
                {apiPricing.map((category, index) => (
                  <div key={index} className="border border-[#e2e8f0] rounded-lg overflow-hidden">
                    <div className="bg-[#f8fafc] px-4 py-3 border-b border-[#e2e8f0]">
                      <h4 className="font-['Montserrat',sans-serif] text-[14px] lg:text-[15px] font-semibold text-[#0f172a]">{category.category}</h4>
                    </div>
                    <div className="divide-y divide-[#f1f5f9]">
                      {category.apis.map((api, apiIndex) => (
                        <div key={apiIndex} className="flex items-center justify-between px-4 py-3 hover:bg-[#f8fafc] transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                            <span className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#0f172a]">{api.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold text-[#0f172a]">{api.price}</p>
                            <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-[11px] text-[#64748b]">{api.perUnit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Notes */}
              <div className="mt-6 bg-[#fef3c7] border border-[#fde68a] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold text-[#92400e] mb-2">Pricing Notes</h4>
                    <ul className="font-['Montserrat',sans-serif] text-[11px] lg:text-[12px] text-[#78350f] space-y-1">
                      <li>• All prices are exclusive of GST (18% will be added to invoice)</li>
                      <li>• Volume discounts available for 10,000+ API calls per month</li>
                      <li>• Sandbox environment is completely free for testing</li>
                      <li>• No setup fees or hidden charges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Features */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 shadow-sm">
          <h2 className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] font-semibold text-[#0f172a] mb-4">Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-9 h-9 lg:w-10 lg:h-10 ${feature.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] text-[13px] lg:text-[14px] font-semibold text-[#0f172a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#64748b]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 lg:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] font-semibold text-[#0f172a]">Recent Activity</h2>
            <button
              onClick={() => navigate("/api-testing/logs")}
              className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#A02724] hover:underline font-medium"
            >
              View all
            </button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg hover:bg-[#f1f5f9] transition-colors border border-transparent hover:border-[#e2e8f0]"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activity.status === "Success" ? "bg-[#10b981]" : "bg-[#ef4444]"
                    }`}
                  ></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] font-medium text-[#0f172a] truncate">
                      {activity.api}
                    </p>
                    <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-[11px] text-[#64748b]">{activity.time}</p>
                  </div>
                </div>
                <span
                  className={`font-['Montserrat',sans-serif] px-2 py-1 rounded-md text-[10px] lg:text-[11px] font-semibold shrink-0 ${
                    activity.status === "Success"
                      ? "bg-[#d1fae5] text-[#065f46]"
                      : "bg-[#fee2e2] text-[#991b1b]"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}