import { useNavigate, useParams } from "react-router";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const apiData: Record<string, any> = {
  identity: {
    title: "Identity Verification",
    apis: [
      {
        id: "pan-verification",
        name: "PAN Verification",
        description: "Verify PAN card details and check authenticity",
        inputType: "ID Number",
        status: "Active"
      },
      {
        id: "dl-verification",
        name: "Driving License Verification",
        description: "Verify driving license details from RTO database",
        inputType: "ID Number",
        status: "Active"
      },
      {
        id: "voter-verification",
        name: "Voter ID Verification",
        description: "Verify voter ID card details from Election Commission",
        inputType: "ID Number",
        status: "Active"
      },
      {
        id: "passport-verification",
        name: "Passport Verification",
        description: "Verify passport details and status",
        inputType: "ID Number",
        status: "Active"
      },
      {
        id: "profile-lookup",
        name: "Profile Lookup",
        description: "Get comprehensive profile information",
        inputType: "ID Number",
        status: "Active"
      },
      {
        id: "address-verification",
        name: "Address Verification",
        description: "Verify address details and proof",
        inputType: "Document",
        status: "Active"
      }
    ]
  },
  ocr: {
    title: "Document & OCR",
    apis: [
      {
        id: "pan-ocr",
        name: "PAN OCR",
        description: "Extract PAN details from document image using OCR",
        inputType: "OCR Upload",
        status: "Active"
      },
      {
        id: "all-ocr",
        name: "All OCRs",
        description: "Universal OCR for multiple document types",
        inputType: "OCR Upload",
        status: "Active"
      },
      {
        id: "rc-verification",
        name: "RC Verification",
        description: "Verify vehicle registration certificate",
        inputType: "ID Number",
        status: "Active"
      }
    ]
  },
  business: {
    title: "Government & Business",
    apis: [
      {
        id: "gstin-verification",
        name: "GSTIN Verification",
        description: "Verify GST registration and business details",
        inputType: "GSTIN",
        status: "Active"
      },
      {
        id: "msme-verification",
        name: "MSME Verification",
        description: "Verify MSME registration certificate",
        inputType: "MSME Number",
        status: "Active"
      },
      {
        id: "company-verification",
        name: "Company Verification",
        description: "Verify company registration from MCA database",
        inputType: "CIN",
        status: "Active"
      }
    ]
  },
  bank: {
    title: "Financial Verification",
    apis: [
      {
        id: "bank-account-verification",
        name: "Bank Account Verification",
        description: "Verify bank account details and account holder name",
        inputType: "Bank Details",
        status: "Active"
      },
      {
        id: "ccrv",
        name: "CCRV",
        description: "Credit Card Risk Verification",
        inputType: "Card Number",
        status: "Active"
      }
    ]
  }
};

export default function VerificationApiList() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const categoryData = category ? apiData[category] : null;

  if (!categoryData) {
    return (
      <div className="p-[32px]">
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
          Category not found
        </p>
      </div>
    );
  }

  const filteredApis = categoryData.apis.filter((api: any) =>
    api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    api.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-[14px]">
        <span
          onClick={() => navigate("/verification-apis")}
          className="text-[#3b82f6] cursor-pointer hover:underline font-medium"
        >
          Verification APIs
        </span>
        <ChevronRight className="w-[14px] h-[14px] text-[#cbd5e1]" />
        <span className="text-[#0f172a] font-semibold">
          {categoryData.title}
        </span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-[#0f172a] mb-2">
          {categoryData.title}
        </h1>
        <p className="text-[14px] text-[#64748b]">
          {categoryData.apis.length} APIs available for testing
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#e2e8f0] rounded-lg text-[14px] text-[#0f172a] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 bg-white"
          />
        </div>
      </div>

      {/* API Table */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-[#0f172a] text-[13px]">
                API Name
              </th>
              <th className="px-6 py-3 text-left font-semibold text-[#0f172a] text-[13px]">
                Description
              </th>
              <th className="px-6 py-3 text-left font-semibold text-[#0f172a] text-[13px]">
                Input Type
              </th>
              <th className="px-6 py-3 text-left font-semibold text-[#0f172a] text-[13px]">
                Status
              </th>
              <th className="px-6 py-3 text-left font-semibold text-[#0f172a] text-[13px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredApis.map((api: any, index: number) => (
              <tr
                key={api.id}
                className={`border-b border-[#e2e8f0] hover:bg-[#f8fafc] cursor-pointer transition-colors ${
                  index === filteredApis.length - 1 ? "border-b-0" : ""
                }`}
                onClick={() => navigate(`/verification-apis/${category}/${api.id}`)}
              >
                <td className="px-6 py-4">
                  <p className="font-semibold text-[#0f172a] text-[14px]">
                    {api.name}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[#64748b] text-[13px] max-w-md">
                    {api.description}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] text-[12px] font-medium">
                    {api.inputType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <span className="text-[#10b981] text-[13px] font-medium">
                      {api.status}
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/verification-apis/${category}/${api.id}`);
                    }}
                    className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg text-[13px] font-medium hover:bg-[#2563eb] transition-colors shadow-sm"
                  >
                    Test API
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredApis.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-[#64748b] text-[14px]">
              No APIs found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
}