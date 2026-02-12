import { useNavigate, useParams } from "react-router";
import { ChevronRight, Copy, RotateCcw, Play, CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const apiDetails: Record<string, any> = {
  "create-payment": {
    name: "Create Payment",
    method: "POST",
    endpoint: "/api/v1/payments/create",
    description: "Initiate a new payment transaction for your customers. This API supports multiple payment methods including UPI, cards, net banking, and wallets.",
    requiredFields: ["amount", "currency", "customer_id", "order_id", "payment_method"],
    samplePayload: {
      amount: 10000,
      currency: "INR",
      customer_id: "cust_123456",
      order_id: "order_789012",
      payment_method: "upi",
      customer_email: "customer@example.com",
      customer_phone: "+919876543210",
      redirect_url: "https://yoursite.com/payment/success",
      webhook_url: "https://yoursite.com/webhook"
    },
    useCase: "Use this API when a customer initiates checkout on your platform. The API returns a payment link or redirect URL that you can use to complete the transaction."
  },
  "get-payment": {
    name: "Get Payment Status",
    method: "GET",
    endpoint: "/api/v1/payments/{payment_id}",
    description: "Retrieve the current status and details of a payment transaction.",
    requiredFields: ["payment_id"],
    samplePayload: {
      payment_id: "pay_abc123xyz456"
    },
    useCase: "Poll this API to check payment status after redirecting the customer. Recommended polling interval: 2-3 seconds."
  },
  "create-payout": {
    name: "Create Payout",
    method: "POST",
    endpoint: "/api/v1/payouts/create",
    description: "Disburse funds to beneficiary bank accounts or UPI addresses.",
    requiredFields: ["amount", "currency", "beneficiary_id", "account_number", "ifsc_code"],
    samplePayload: {
      amount: 5000,
      currency: "INR",
      beneficiary_id: "ben_987654",
      account_number: "1234567890",
      ifsc_code: "HDFC0001234",
      account_holder_name: "John Doe",
      transfer_mode: "IMPS",
      purpose: "vendor_payment",
      reference_id: "ref_123456"
    },
    useCase: "Use for vendor payments, salary disbursements, or customer refunds. Supports IMPS, NEFT, and RTGS transfer modes."
  },
  "create-refund": {
    name: "Create Refund",
    method: "POST",
    endpoint: "/api/v1/refunds/create",
    description: "Process full or partial refunds for completed payments.",
    requiredFields: ["payment_id", "amount", "reason"],
    samplePayload: {
      payment_id: "pay_abc123xyz456",
      amount: 10000,
      reason: "customer_request",
      notes: "Product returned by customer"
    },
    useCase: "Initiate refunds within 180 days of the original transaction. Partial refunds are supported."
  },
  "verify-bank": {
    name: "Bank Account Verification",
    method: "POST",
    endpoint: "/api/v1/verification/bank",
    description: "Verify bank account details and account holder name.",
    requiredFields: ["account_number", "ifsc_code"],
    samplePayload: {
      account_number: "1234567890",
      ifsc_code: "HDFC0001234",
      name_to_match: "John Doe"
    },
    useCase: "Verify beneficiary accounts before processing payouts to prevent failed transactions."
  }
};

export default function ApiDetailPage() {
  const { category, apiId } = useParams();
  const navigate = useNavigate();
  const [requestBody, setRequestBody] = useState("");
  const [headers, setHeaders] = useState<Array<{key: string; value: string}>>([]);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [token, setToken] = useState("tok_sandbox_" + Math.random().toString(36).substring(2, 15));
  const [tokenStatus, setTokenStatus] = useState<"active" | "expired">("active");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [showResponse, setShowResponse] = useState(false);

  const api = apiDetails[apiId || ""] || apiDetails["create-payment"];
  const categoryTitle = category?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-") || "";

  // Initialize request body on mount
  useState(() => {
    setRequestBody(JSON.stringify(api.samplePayload, null, 2));
  });

  const handleGenerateToken = () => {
    const newToken = "tok_sandbox_" + Math.random().toString(36).substring(2, 15);
    setToken(newToken);
    setTokenStatus("active");
    toast.success("Token generated successfully");
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const handleRemoveHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const handleHeaderChange = (index: number, field: "key" | "value", value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const handleReset = () => {
    setRequestBody(JSON.stringify(api.samplePayload, null, 2));
    setHeaders([]);
    setResponse(null);
    setShowResponse(false);
    toast.info("Request reset to defaults");
  };

  const handleCopyCurl = () => {
    const curl = `curl -X ${api.method} https://api.paytech.com${api.endpoint} \\
  -H "Authorization: Bearer ${token}" \\
  -H "Content-Type: application/json" \\
  -d '${requestBody}'`;
    navigator.clipboard.writeText(curl);
    toast.success("cURL command copied to clipboard");
  };

  const handleRunApi = () => {
    // Validate JSON
    try {
      JSON.parse(requestBody);
    } catch (e) {
      toast.error("Invalid JSON in request body");
      return;
    }

    setIsLoading(true);
    setShowResponse(false);

    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        success: true,
        status_code: 200,
        response_time: Math.floor(Math.random() * 500) + 200,
        request_id: "req_" + Math.random().toString(36).substring(2, 15),
        data: {
          id: api.method === "POST" ? "txn_" + Math.random().toString(36).substring(2, 15) : undefined,
          status: "success",
          message: api.method === "POST" ? "Transaction created successfully" : "Data retrieved successfully",
          ...JSON.parse(requestBody),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      };

      setResponse(mockResponse);
      setIsLoading(false);
      setShowResponse(true);
      
      // Scroll to response
      setTimeout(() => {
        document.getElementById("response-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      
      toast.success("API request successful");
    }, 1500);
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - API Info */}
      <div className="w-[40%] bg-[#f6f9fc] border-r border-[#e9effb] overflow-y-auto">
        <div className="p-[24px] pt-[20px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 font-['Inter:Regular',sans-serif] text-[14px]">
            <span
              onClick={() => navigate("/developer")}
              className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
            >
              Developer Tools
            </span>
            <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
            <span 
              onClick={() => navigate(`/api-testing/${category}`)}
              className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
            >
              {categoryTitle}
            </span>
            <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
            <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21]">{api.name}</span>
          </div>

          {/* API Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[28px]">
                {api.name}
              </h1>
              <span className={`inline-flex items-center px-[12px] py-[6px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] ${
                api.method === "GET" 
                  ? "bg-[#e7f5ec] text-[#219867]" 
                  : "bg-[#e9f3ff] text-[#3b5ba3]"
              }`}>
                {api.method}
              </span>
            </div>
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px] leading-relaxed">
              {api.description}
            </p>
          </div>

          {/* Endpoint */}
          <div className="mb-6">
            <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">Endpoint</label>
            <div className="bg-[#1c1e21] rounded-[8px] p-[12px] font-mono text-[#4ade80] text-[13px]">
              {api.endpoint}
            </div>
          </div>

          {/* Required Fields */}
          <div className="mb-6">
            <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-3">Required Fields</label>
            <div className="space-y-2">
              {api.requiredFields.map((field: string) => (
                <div key={field} className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#3b5ba3]"></div>
                  <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] font-mono">{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Case */}
          <div className="bg-[#e9f3ff] border border-[#91a7e5] rounded-[12px] p-[20px]">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Sample Use Case</h3>
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] leading-relaxed">
              {api.useCase}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Request Builder */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-[24px] pt-[20px]">
          <h2 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[24px] mb-6">Request Builder</h2>

          {/* Authentication Section */}
          <div className="mb-8">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Authentication</h3>
            <div className="bg-[#f6f9fc] border border-[#e9effb] rounded-[12px] p-[20px] space-y-4">
              <div>
                <label className="block font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px] mb-2">API Key</label>
                <div className="relative">
                  <input
                    type={showApiKey ? "text" : "password"}
                    value="sk_test_abc123xyz789"
                    readOnly
                    className="w-full bg-white border border-[#dde1e7] rounded-[8px] px-[12px] py-[10px] font-mono text-[#1c1e21] text-[13px] pr-[40px]"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4f5661] hover:text-[#1c1e21]"
                  >
                    {showApiKey ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px] mb-2">API Secret</label>
                <div className="relative">
                  <input
                    type={showApiSecret ? "text" : "password"}
                    value="sk_secret_def456uvw321"
                    readOnly
                    className="w-full bg-white border border-[#dde1e7] rounded-[8px] px-[12px] py-[10px] font-mono text-[#1c1e21] text-[13px] pr-[40px]"
                  />
                  <button
                    onClick={() => setShowApiSecret(!showApiSecret)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4f5661] hover:text-[#1c1e21]"
                  >
                    {showApiSecret ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Headers Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px]">Headers</h3>
              <button
                onClick={handleAddHeader}
                className="text-[#3b5ba3] font-['Inter:Medium',sans-serif] text-[13px] hover:underline"
              >
                + Add Custom Header
              </button>
            </div>
            <div className="bg-[#f6f9fc] border border-[#e9effb] rounded-[12px] p-[20px] space-y-3">
              {/* Auto-generated headers */}
              <div className="grid grid-cols-[1fr,1fr,auto] gap-3 items-center">
                <input
                  type="text"
                  value="Content-Type"
                  readOnly
                  className="bg-[#e9effb] border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]"
                />
                <input
                  type="text"
                  value="application/json"
                  readOnly
                  className="bg-[#e9effb] border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]"
                />
                <div className="w-[32px]"></div>
              </div>
              <div className="grid grid-cols-[1fr,1fr,auto] gap-3 items-center">
                <input
                  type="text"
                  value="Authorization"
                  readOnly
                  className="bg-[#e9effb] border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]"
                />
                <input
                  type="text"
                  value={`Bearer ${token}`}
                  readOnly
                  className="bg-[#e9effb] border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] font-mono overflow-hidden text-ellipsis"
                />
                <div className="w-[32px]"></div>
              </div>

              {/* Custom headers */}
              {headers.map((header, index) => (
                <div key={index} className="grid grid-cols-[1fr,1fr,auto] gap-3 items-center">
                  <input
                    type="text"
                    placeholder="Header Key"
                    value={header.key}
                    onChange={(e) => handleHeaderChange(index, "key", e.target.value)}
                    className="bg-white border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px]"
                  />
                  <input
                    type="text"
                    placeholder="Header Value"
                    value={header.value}
                    onChange={(e) => handleHeaderChange(index, "value", e.target.value)}
                    className="bg-white border border-[#dde1e7] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px]"
                  />
                  <button
                    onClick={() => handleRemoveHeader(index)}
                    className="w-[32px] h-[32px] flex items-center justify-center text-[#e74c3c] hover:bg-[#fee] rounded-[6px] transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Request Body Section */}
          <div className="mb-8">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Request Body</h3>
            <div className="relative">
              <textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                className="w-full h-[320px] bg-[#1c1e21] border border-[#e9effb] rounded-[12px] p-[16px] font-mono text-[#4ade80] text-[13px] resize-none focus:outline-none focus:border-[#91a7e5]"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={handleRunApi}
              disabled={isLoading}
              className="flex items-center gap-2 px-[24px] py-[12px] bg-[#3b5ba3] text-white rounded-[10px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#324d8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-[18px] h-[18px] border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-[18px] h-[18px]" />
                  Run API
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-[20px] py-[12px] bg-white border border-[#dde1e7] text-[#4f5661] rounded-[10px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#f6f9fc] transition-colors"
            >
              <RotateCcw className="w-[18px] h-[18px]" />
              Reset
            </button>
            <button
              onClick={handleCopyCurl}
              className="flex items-center gap-2 px-[20px] py-[12px] bg-white border border-[#dde1e7] text-[#4f5661] rounded-[10px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#f6f9fc] transition-colors"
            >
              <Copy className="w-[18px] h-[18px]" />
              Copy cURL
            </button>
          </div>

          {/* Response Section */}
          {showResponse && response && (
            <div id="response-section" className="mb-8">
              <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[20px] mb-4">Response</h3>
              
              {/* Response Metadata */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="bg-[#e7f5ec] border border-[#219867] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-[16px] h-[16px] text-[#219867]" />
                    <span className="font-['Inter:Medium',sans-serif] text-[#219867] text-[12px]">SUCCESS</span>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[18px]">{response.status_code}</p>
                </div>
                
                <div className="bg-[#f6f9fc] border border-[#e9effb] rounded-[8px] p-[16px]">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-1">RESPONSE TIME</p>
                  <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[18px]">{response.response_time}ms</p>
                </div>
                
                <div className="bg-[#f6f9fc] border border-[#e9effb] rounded-[8px] p-[16px] col-span-2">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-1">REQUEST ID</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] font-mono">{response.request_id}</p>
                </div>
              </div>

              {/* Response Body */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Response Body</label>
                <pre className="bg-[#1c1e21] border border-[#e9effb] rounded-[12px] p-[16px] font-mono text-[#4ade80] text-[13px] overflow-x-auto">
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