import { useNavigate } from "react-router";
import { User, FileText, Building2, Landmark, ShieldCheck } from "lucide-react";

export default function VerificationDashboard() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "identity",
      title: "Identity Verification",
      icon: User,
      gradient: "from-[#3b82f6] to-[#2563eb]",
      bgColor: "bg-[#eff6ff]",
      description: "Verify PAN, Driving License, Voter ID, Passport, and more",
      apis: [
        "PAN Verification",
        "Driving License Verification", 
        "Voter ID Verification",
        "Passport Verification",
        "Profile Lookup",
        "Address Verification"
      ]
    },
    {
      id: "ocr",
      title: "Document & OCR",
      icon: FileText,
      gradient: "from-[#f97316] to-[#ea580c]",
      bgColor: "bg-[#fff7ed]",
      description: "Extract and verify document data using OCR technology",
      apis: [
        "PAN OCR",
        "All OCRs",
        "RC Verification"
      ]
    },
    {
      id: "business",
      title: "Government & Business",
      icon: Building2,
      gradient: "from-[#10b981] to-[#059669]",
      bgColor: "bg-[#ecfdf5]",
      description: "Verify GSTIN, MSME, and Company information",
      apis: [
        "GSTIN Verification",
        "MSME Verification",
        "Company Verification"
      ]
    },
    {
      id: "bank",
      title: "Financial Verification",
      icon: Landmark,
      gradient: "from-[#ef4444] to-[#dc2626]",
      bgColor: "bg-[#fef2f2]",
      description: "Verify bank accounts and financial details",
      apis: [
        "Bank Account Verification",
        "CCRV"
      ]
    },
    {
      id: "digilocker",
      title: "Digi Services",
      icon: ShieldCheck,
      gradient: "from-[#8b5cf6] to-[#7c3aed]",
      bgColor: "bg-[#f5f3ff]",
      description: "Access Digilocker for verified government documents",
      apis: [
        "Digilocker Integration"
      ]
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[32px] font-bold text-[#0f172a] mb-2">
          Verification & OCR APIs
        </h1>
        <p className="text-[16px] text-[#64748b]">
          Test identity, document, business, and bank verification APIs securely in sandbox environment
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              onClick={() => {
                if (category.id === "digilocker") {
                  navigate("/verification-apis/digilocker/flow");
                } else {
                  navigate(`/verification-apis/${category.id}`);
                }
              }}
              className="group bg-white border border-[#e2e8f0] rounded-xl p-6 cursor-pointer hover:shadow-lg hover:border-[#cbd5e1] transition-all relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 shadow-sm`}>
                  <div className={`w-full h-full bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-semibold text-[#0f172a] mb-2">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#64748b] mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* API List */}
                <div className="space-y-2 mb-4">
                  {category.apis.map((api, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></div>
                      <span className="text-[#64748b] text-[12px]">
                        {api}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View APIs Link */}
                <div className="pt-4 border-t border-[#e2e8f0]">
                  <span className="text-[13px] font-semibold text-[#3b82f6] group-hover:underline flex items-center gap-1">
                    {category.id === "digilocker" ? "Open Digilocker Flow" : "View APIs"}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
          <p className="text-[12px] text-[#64748b] mb-1 uppercase tracking-wide font-medium">
            Total APIs
          </p>
          <p className="text-[28px] font-bold text-[#0f172a]">
            18+
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
          <p className="text-[12px] text-[#64748b] mb-1 uppercase tracking-wide font-medium">
            Categories
          </p>
          <p className="text-[28px] font-bold text-[#0f172a]">
            5
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
          <p className="text-[12px] text-[#64748b] mb-1 uppercase tracking-wide font-medium">
            Environment
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
            <p className="text-[24px] font-bold text-[#0f172a]">
              Sandbox
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm">
          <p className="text-[12px] text-[#64748b] mb-1 uppercase tracking-wide font-medium">
            Access
          </p>
          <p className="text-[24px] font-bold text-[#0f172a]">
            Full
          </p>
        </div>
      </div>
    </div>
  );
}
