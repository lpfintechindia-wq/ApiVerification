import { useNavigate, useParams } from "react-router";
import { ChevronRight, Eye, EyeOff, Play, RotateCcw, Copy, Upload, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const apiDetails: Record<string, any> = {
  "pan-verification": {
    name: "PAN Verification",
    method: "POST",
    endpoint: "/api/v1/verification/pan",
    description: "Verify PAN card details and check authenticity. Returns name, DOB, and status.",
    category: "identity",
    categoryTitle: "Identity Verification",
    inputFields: [
      { name: "pan_number", label: "PAN Number", type: "text", placeholder: "ABCDE1234F", required: true, tooltip: "10 character alphanumeric PAN" },
      { name: "dob", label: "Date of Birth", type: "date", required: false, tooltip: "Optional for enhanced verification" }
    ],
    sampleData: { pan_number: "ABCDE1234F", dob: "1990-01-15" },
    useCase: "Use this API to verify PAN authenticity during customer onboarding or KYC processes."
  },
  "dl-verification": {
    name: "Driving License Verification",
    method: "POST",
    endpoint: "/api/v1/verification/driving-license",
    description: "Verify driving license details from RTO database. Returns holder name, validity, and license type.",
    category: "identity",
    categoryTitle: "Identity Verification",
    inputFields: [
      { name: "dl_number", label: "DL Number", type: "text", placeholder: "DL-1234567890", required: true, tooltip: "Format varies by state" },
      { name: "dob", label: "Date of Birth", type: "date", required: true, tooltip: "DOB as per license" }
    ],
    sampleData: { dl_number: "DL-1234567890", dob: "1990-01-15" },
    useCase: "Verify driving license for customer authentication or background checks."
  },
  "bank-account-verification": {
    name: "Bank Account Verification",
    method: "POST",
    endpoint: "/api/v1/verification/bank-account",
    description: "Verify bank account details and validate account holder name match.",
    category: "bank",
    categoryTitle: "Financial Verification",
    inputFields: [
      { name: "account_number", label: "Account Number", type: "text", placeholder: "123456789012", required: true, tooltip: "10-18 digit account number" },
      { name: "ifsc", label: "IFSC Code", type: "text", placeholder: "HDFC0001234", required: true, tooltip: "11 character IFSC code" },
      { name: "name", label: "Account Holder Name", type: "text", placeholder: "John Doe", required: false, tooltip: "For name match verification" }
    ],
    sampleData: { account_number: "123456789012", ifsc: "HDFC0001234", name: "John Doe" },
    useCase: "Validate bank account before processing payouts or refunds."
  },
  "pan-ocr": {
    name: "PAN OCR",
    method: "POST",
    endpoint: "/api/v1/ocr/pan",
    description: "Extract PAN details from document image using OCR technology. Returns parsed structured data with confidence scores.",
    category: "ocr",
    categoryTitle: "Document & OCR",
    inputFields: [
      { name: "document", label: "Upload PAN Document", type: "file", accept: "image/*,application/pdf", required: true, tooltip: "JPG, PNG, or PDF format" }
    ],
    sampleData: {},
    useCase: "Automate data extraction from PAN card images during digital onboarding."
  },
  "gstin-verification": {
    name: "GSTIN Verification",
    method: "POST",
    endpoint: "/api/v1/verification/gstin",
    description: "Verify GST registration and fetch complete business details including legal name, address, and status.",
    category: "business",
    categoryTitle: "Government & Business",
    inputFields: [
      { name: "gstin", label: "GSTIN Number", type: "text", placeholder: "22AAAAA0000A1Z5", required: true, tooltip: "15 character GSTIN" }
    ],
    sampleData: { gstin: "22AAAAA0000A1Z5" },
    useCase: "Verify vendor/merchant GST details for compliance and B2B transactions."
  }
};

export default function VerificationTestingPage() {
  const navigate = useNavigate();
  const { category, apiId } = useParams();
  const api = apiId ? apiDetails[apiId] : null;

  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [apiKey] = useState("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
  const [apiSecret] = useState("sk_secret_9xYZ42HqLyjWDarjtT1zdp8ef");
  const [tokenGenerated, setTokenGenerated] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  if (!api) {
    return (
      <div className="p-[32px]">
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
          API not found
        </p>
      </div>
    );
  }

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      handleInputChange("document", file.name);
    }
  };

  const generateToken = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTokenGenerated(true);
      setIsLoading(false);
      toast.success("API token generated successfully");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({});
    setResponse(null);
    setUploadedFile(null);
    toast.info("Form reset");
  };

  const handleVerify = () => {
    // Validate required fields
    const missingFields = api.inputFields
      .filter((field: any) => field.required && !formData[field.name])
      .map((field: any) => field.label);

    if (missingFields.length > 0) {
      toast.error(`Please fill required fields: ${missingFields.join(", ")}`);
      return;
    }

    setIsLoading(true);
    setResponse(null);

    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        status: "success",
        verified: true,
        statusCode: 200,
        requestId: `REQ-${Date.now()}`,
        responseTime: "1.2s",
        data: apiId === "pan-verification" ? {
          pan_number: formData.pan_number,
          name: "JOHN DOE",
          dob: formData.dob || "1990-01-15",
          status: "Valid",
          registered_date: "2010-05-20"
        } : apiId === "bank-account-verification" ? {
          account_number: formData.account_number,
          ifsc: formData.ifsc,
          name_match: formData.name ? "Full Match" : "N/A",
          account_status: "Active",
          bank_name: "HDFC Bank",
          branch: "Mumbai Main Branch"
        } : apiId === "pan-ocr" ? {
          extracted_fields: {
            pan_number: "ABCDE1234F",
            name: "JOHN DOE",
            father_name: "RICHARD DOE",
            dob: "01/01/1990"
          },
          confidence_score: 0.98,
          document_quality: "High"
        } : {
          verification_status: "Verified",
          details: "Verification successful"
        }
      };

      setResponse(mockResponse);
      setIsLoading(false);
      toast.success("Verification completed successfully");
    }, 2000);
  };

  const copyCurl = () => {
    const curl = `curl -X ${api.method} ${api.endpoint} \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(formData, null, 2)}'`;
    navigator.clipboard.writeText(curl);
    toast.success("cURL command copied");
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - API Info */}
      <div className="w-[40%] bg-[#f6f9fc] border-r border-[#e9effb] overflow-y-auto">
        <div className="p-[24px] pt-[20px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-[13px]">
            <span
              onClick={() => navigate("/verification-apis")}
              className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
            >
              Verification APIs
            </span>
            <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
            <span
              onClick={() => navigate(`/verification-apis/${category}`)}
              className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
            >
              {api.categoryTitle}
            </span>
            <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
            <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21]">{api.name}</span>
          </div>

          {/* API Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[24px]">
                {api.name}
              </h1>
              <span className="inline-flex items-center px-[12px] py-[6px] rounded-[6px] bg-[#e9f3ff] text-[#3b5ba3] font-['Inter:Medium',sans-serif] text-[13px]">
                {api.method}
              </span>
            </div>
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px] leading-relaxed">
              {api.description}
            </p>
          </div>

          {/* Endpoint */}
          <div className="mb-6">
            <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">
              Endpoint
            </label>
            <div className="bg-[#1c1e21] rounded-[8px] p-[12px] font-mono text-[#4ade80] text-[13px]">
              {api.endpoint}
            </div>
          </div>

          {/* Use Case */}
          <div className="mb-6">
            <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">
              Use Case
            </label>
            <div className="bg-white border border-[#e9effb] rounded-[8px] p-[12px]">
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] leading-relaxed">
                {api.useCase}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Request Builder */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-[24px] pt-[20px]">
          <h2 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[24px] mb-6">
            Request Builder
          </h2>

          {/* Input Form */}
          <div className="mb-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[15px] mb-4">
              Input Parameters
            </h3>

            <div className="space-y-4">
              {api.inputFields.map((field: any) => (
                <div key={field.name}>
                  <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">
                    {field.label}
                    {field.required && <span className="text-[#dc2626] ml-1">*</span>}
                    {field.tooltip && (
                      <span className="ml-2 text-[#4f5661] text-[11px]">
                        ({field.tooltip})
                      </span>
                    )}
                  </label>

                  {field.type === "file" ? (
                    <div className="border-2 border-dashed border-[#e9effb] rounded-[8px] p-6 text-center hover:border-[#3b5ba3] transition-colors">
                      <input
                        type="file"
                        accept={field.accept}
                        onChange={handleFileUpload}
                        className="hidden"
                        id={field.name}
                      />
                      <label htmlFor={field.name} className="cursor-pointer">
                        <Upload className="w-8 h-8 text-[#4f5661] mx-auto mb-2" />
                        {uploadedFile ? (
                          <p className="font-['Inter:Medium',sans-serif] text-[#3b5ba3] text-[13px]">
                            {uploadedFile.name}
                          </p>
                        ) : (
                          <>
                            <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-1">
                              Click to upload or drag and drop
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                              {field.accept}
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-3 py-2 border border-[#e9effb] rounded-[6px] font-['Inter:Regular',sans-serif] text-[14px] text-[#1c1e21] focus:outline-none focus:border-[#3b5ba3]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleVerify}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#3b5ba3] text-white rounded-[8px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#2d4a8a] disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              {isLoading ? "Verifying..." : "Verify / Run API"}
            </button>
            <button
              onClick={handleReset}
              disabled={isLoading}
              className="px-4 py-3 border border-[#e9effb] text-[#4f5661] rounded-[8px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#f6f9fc] disabled:opacity-50"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={copyCurl}
              className="px-4 py-3 border border-[#e9effb] text-[#4f5661] rounded-[8px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#f6f9fc]"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Response Viewer */}
          {response && (
            <div className="border border-[#e9effb] rounded-[8px] p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[15px]">
                  Response
                </h3>
                <div className="flex items-center gap-4">
                  <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                    {response.responseTime}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#e7f5ec]">
                    <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                    <span className="font-['Inter:Medium',sans-serif] text-[#16a34a] text-[13px]">
                      {response.statusCode}
                    </span>
                  </span>
                </div>
              </div>

              <div className="bg-[#f6f9fc] rounded-[8px] p-4 mb-3">
                <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                  Request ID: <span className="font-mono text-[#1c1e21]">{response.requestId}</span>
                </p>
              </div>

              <div className="bg-[#1c1e21] rounded-[8px] p-4 overflow-x-auto">
                <pre className="font-mono text-[#4ade80] text-[12px] leading-relaxed">
                  {JSON.stringify(response.data, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}