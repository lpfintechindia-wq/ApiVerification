import { useNavigate, useParams } from "react-router";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const apiData: Record<string, any[]> = {
  "pay-in": [
    { id: "create-payment", name: "Create Payment", method: "POST", description: "Initiate a new payment transaction", status: "Active" },
    { id: "get-payment", name: "Get Payment Status", method: "GET", description: "Retrieve payment transaction details", status: "Active" },
    { id: "list-payments", name: "List Payments", method: "GET", description: "Get all payment transactions", status: "Active" },
    { id: "cancel-payment", name: "Cancel Payment", method: "POST", description: "Cancel a pending payment", status: "Active" },
    { id: "upi-collect", name: "UPI Collect", method: "POST", description: "Initiate UPI collect request", status: "Active" },
    { id: "validate-vpa", name: "Validate VPA", method: "POST", description: "Validate UPI VPA address", status: "Active" },
    { id: "recurring-payment", name: "Create Recurring Payment", method: "POST", description: "Set up recurring payment", status: "Beta" },
    { id: "payment-link", name: "Generate Payment Link", method: "POST", description: "Create payment link for customers", status: "Active" },
  ],
  "pay-out": [
    { id: "create-payout", name: "Create Payout", method: "POST", description: "Disburse funds to beneficiary", status: "Active" },
    { id: "get-payout", name: "Get Payout Status", method: "GET", description: "Check payout transaction status", status: "Active" },
    { id: "bulk-payout", name: "Bulk Payout", method: "POST", description: "Process multiple payouts", status: "Active" },
    { id: "cancel-payout", name: "Cancel Payout", method: "POST", description: "Cancel pending payout", status: "Active" },
    { id: "beneficiary-add", name: "Add Beneficiary", method: "POST", description: "Add new beneficiary account", status: "Active" },
    { id: "beneficiary-list", name: "List Beneficiaries", method: "GET", description: "Get all beneficiaries", status: "Active" },
  ],
  "refund": [
    { id: "create-refund", name: "Create Refund", method: "POST", description: "Process payment refund", status: "Active" },
    { id: "get-refund", name: "Get Refund Status", method: "GET", description: "Check refund status", status: "Active" },
    { id: "partial-refund", name: "Partial Refund", method: "POST", description: "Process partial amount refund", status: "Active" },
    { id: "list-refunds", name: "List Refunds", method: "GET", description: "Get all refund transactions", status: "Active" },
  ],
  "verification": [
    { id: "verify-bank", name: "Bank Account Verification", method: "POST", description: "Verify bank account details", status: "Active" },
    { id: "verify-pan", name: "PAN Verification", method: "POST", description: "Verify PAN card details", status: "Active" },
    { id: "verify-aadhaar", name: "Aadhaar Verification", method: "POST", description: "Verify Aadhaar details", status: "Active" },
    { id: "verify-gstin", name: "GSTIN Verification", method: "POST", description: "Verify GST identification", status: "Active" },
    { id: "verify-ifsc", name: "IFSC Code Lookup", method: "GET", description: "Get bank details by IFSC", status: "Active" },
    { id: "penny-drop", name: "Penny Drop Verification", method: "POST", description: "Verify account via penny drop", status: "Active" },
    { id: "ckyc-check", name: "CKYC Verification", method: "POST", description: "Central KYC check", status: "Active" },
    { id: "video-kyc", name: "Video KYC", method: "POST", description: "Initiate video KYC session", status: "Beta" },
    { id: "digilocker", name: "DigiLocker Integration", method: "POST", description: "Fetch documents from DigiLocker", status: "Beta" },
    { id: "esign", name: "eSign Document", method: "POST", description: "Digital signature verification", status: "Active" },
  ],
};

export default function ApiListPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const apis = apiData[category || ""] || [];
  const categoryTitle = category?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-") || "";

  const filteredApis = apis.filter(api =>
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-[32px]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 font-['Inter:Regular',sans-serif] text-[14px]">
        <span
          onClick={() => navigate("/developer")}
          className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
        >
          Developer Tools
        </span>
        <ChevronRight className="w-[16px] h-[16px] text-[#4f5661]" />
        <span className="font-['Inter:Regular',sans-serif] text-[#1c1e21]">
          API List
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[32px] mb-2">
            {categoryTitle} APIs
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[16px]">
            {apis.length} API{apis.length !== 1 ? 's' : ''} available for testing
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-[400px]">
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] pl-[40px] pr-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] focus:outline-none focus:border-[#91a7e5]"
          />
          <Search className="absolute left-[12px] top-[10px] w-[18px] h-[18px] text-[#4f5661]" />
        </div>
      </div>

      {/* API List Table */}
      <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f6f9fc] border-b border-[#e9effb]">
            <tr>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">API NAME</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">METHOD</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">DESCRIPTION</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">STATUS</th>
              <th className="text-right px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredApis.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-[24px] py-[40px] text-center">
                  <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">No APIs found</p>
                </td>
              </tr>
            ) : (
              filteredApis.map((api, index) => (
                <tr 
                  key={api.id}
                  className={`border-b border-[#e9effb] hover:bg-[#f6f9fc] transition-colors ${
                    index === filteredApis.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-[24px] py-[20px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">{api.name}</p>
                  </td>
                  <td className="px-[24px] py-[20px]">
                    <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${
                      api.method === "GET" 
                        ? "bg-[#e7f5ec] text-[#219867]" 
                        : "bg-[#e9f3ff] text-[#3b5ba3]"
                    }`}>
                      {api.method}
                    </span>
                  </td>
                  <td className="px-[24px] py-[20px]">
                    <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">{api.description}</p>
                  </td>
                  <td className="px-[24px] py-[20px]">
                    <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${
                      api.status === "Active" 
                        ? "bg-[#e7f5ec] text-[#219867]" 
                        : "bg-[#fff4e6] text-[#e67700]"
                    }`}>
                      {api.status}
                    </span>
                  </td>
                  <td className="px-[24px] py-[20px] text-right">
                    <button
                      onClick={() => navigate(`/api-testing/${category}/${api.id}`)}
                      className="inline-flex items-center gap-2 px-[16px] py-[8px] bg-[#3b5ba3] text-white rounded-[8px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#324d8a] transition-colors"
                    >
                      Test API
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}