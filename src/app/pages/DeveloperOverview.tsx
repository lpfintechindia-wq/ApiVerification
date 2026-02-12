import { useNavigate } from "react-router";
import { Layers, Shield, Activity, FileText, ArrowRight, TrendingUp, Clock, CheckCircle2, Code2, Zap, Lock, AlertCircle } from "lucide-react";

export default function DeveloperOverview() {
  const navigate = useNavigate();

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
      title: "Webhooks",
      description: "Configure and test webhook endpoints",
      icon: Activity,
      gradient: "from-[#ec4899] to-[#db2777]",
      bgColor: "bg-[#fdf2f8]",
      path: "/api-testing/webhooks/test",
      stats: { total: "5 Events", active: "2 Active" }
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
    { api: "PAN Verification", status: "Success", time: "5 min ago", type: "verification" },
    { api: "Bank Transfer API", status: "Success", time: "2 hours ago", type: "payment" },
    { api: "GSTIN Verification", status: "Failed", time: "3 hours ago", type: "verification" },
    { api: "Webhook Test", status: "Success", time: "10 min ago", type: "webhook" },
    { api: "Webhook Test", status: "Success", time: "15 min ago", type: "webhook" },
    { api: "Webhook Test", status: "Success", time: "18 min ago", type: "webhook" }
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-[32px] font-bold text-[#0f172a] mb-2">
          Welcome to Developer Portal
        </h1>
        <p className="text-[16px] text-[#64748b]">
          Build, test, and integrate payment and verification APIs with ease
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:shadow-lg hover:border-[#cbd5e1] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.bgColor} ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[12px] font-semibold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-[28px] font-bold text-[#0f172a] mb-1">{stat.value}</p>
              <p className="text-[13px] text-[#64748b]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold text-[#0f172a] mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(link.path)}
                className="group bg-white border border-[#e2e8f0] rounded-xl p-6 hover:shadow-lg hover:border-[#3b82f6] cursor-pointer transition-all relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={`w-full h-full bg-gradient-to-br ${link.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#cbd5e1] group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-[18px] font-semibold text-[#0f172a] mb-2">
                    {link.title}
                  </h3>
                  <p className="text-[14px] text-[#64748b] mb-4">
                    {link.description}
                  </p>

                  <div className="flex items-center gap-4 text-[12px]">
                    <span className="text-[#64748b] font-medium">{link.stats.total}</span>
                    <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                    <span className="text-[#10b981] font-medium">{link.stats.active}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Features */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
          <h2 className="text-[18px] font-semibold text-[#0f172a] mb-4">Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#0f172a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-[#64748b]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[18px] font-semibold text-[#0f172a]">Recent Activity</h2>
            <button
              onClick={() => navigate("/api-testing/logs")}
              className="text-[13px] text-[#3b82f6] hover:underline font-medium"
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
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "Success" ? "bg-[#10b981]" : "bg-[#ef4444]"
                    }`}
                  ></div>
                  <div>
                    <p className="text-[13px] font-medium text-[#0f172a]">
                      {activity.api}
                    </p>
                    <p className="text-[11px] text-[#64748b]">{activity.time}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold ${
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

      {/* Getting Started */}
      <div className="mt-8 bg-gradient-to-br from-[#eff6ff] via-[#f5f3ff] to-[#fdf2f8] border border-[#cbd5e1] rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
            <Code2 className="w-6 h-6 text-[#3b82f6]" />
          </div>
          <div className="flex-1">
            <h2 className="text-[18px] font-semibold text-[#0f172a] mb-2">
              Getting Started
            </h2>
            <p className="text-[14px] text-[#64748b] mb-4">
              Follow these steps to integrate our APIs into your application
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg text-[13px] font-medium hover:bg-[#2563eb] transition-colors shadow-md">
                View Documentation
              </button>
              <button className="px-4 py-2 bg-white border border-[#e2e8f0] text-[#0f172a] rounded-lg text-[13px] font-medium hover:bg-[#f8fafc] transition-colors shadow-sm">
                Get API Keys
              </button>
              <button className="px-4 py-2 bg-white border border-[#e2e8f0] text-[#0f172a] rounded-lg text-[13px] font-medium hover:bg-[#f8fafc] transition-colors shadow-sm">
                Watch Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}