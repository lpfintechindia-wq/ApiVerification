import { useNavigate } from "react-router";
import { ChevronRight, ShieldCheck, ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DigilockerPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [consentStatus, setConsentStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [tokenStatus, setTokenStatus] = useState<"idle" | "generating" | "active">("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState<any>(null);

  const initiateConsent = () => {
    setIsLoading(true);
    setTimeout(() => {
      setConsentStatus("approved");
      setCurrentStep(2);
      setIsLoading(false);
      toast.success("Consent approved by user");
    }, 2000);
  };

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFetchedData({
        aadhaar_number: "XXXX-XXXX-1234",
        name: "JOHN DOE",
        dob: "01/01/1990",
        gender: "Male",
        address: "123 Main Street, Mumbai, Maharashtra - 400001",
        documents: [
          { type: "Driving License", number: "DL-1234567890", issued: "2020-05-15" },
          { type: "PAN Card", number: "ABCDE1234F", issued: "2010-03-20" }
        ]
      });
      setCurrentStep(3);
      setIsLoading(false);
      toast.success("Data fetched successfully from Digilocker");
    }, 2000);
  };

  const steps = [
    { id: 1, title: "Initiate Consent", status: currentStep >= 1 ? "completed" : "pending" },
    { id: 2, title: "User Approval", status: currentStep >= 2 ? "completed" : "pending" },
    { id: 3, title: "Fetch Data", status: currentStep >= 3 ? "completed" : "pending" }
  ];

  return (
    <div className="p-[32px]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-[14px]">
        <span
          onClick={() => navigate("/verification-apis")}
          className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
        >
          Verification APIs
        </span>
        <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
        <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21]">
          Digilocker
        </span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8 text-[#7c3aed]" />
          <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[28px]">
            Digilocker Verification
          </h1>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
          Securely access government-issued documents through Digilocker integration
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8 bg-white border border-[#e9effb] rounded-[12px] p-6">
        <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[15px] mb-4">
          Verification Flow
        </h3>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step.status === "completed"
                      ? "bg-[#e7f5ec] text-[#16a34a]"
                      : currentStep === step.id
                      ? "bg-[#e9f3ff] text-[#3b5ba3]"
                      : "bg-[#f6f9fc] text-[#4f5661]"
                  }`}
                >
                  {step.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <span className="font-['Inter:Medium',sans-serif] text-[14px]">{step.id}</span>
                  )}
                </div>
                <p
                  className={`font-['Inter:Regular',sans-serif] text-[12px] text-center ${
                    step.status === "completed" || currentStep === step.id
                      ? "text-[#1c1e21]"
                      : "text-[#4f5661]"
                  }`}
                >
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] w-full -mx-2 ${
                    currentStep > step.id ? "bg-[#16a34a]" : "bg-[#e9effb]"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Actions */}
        <div className="bg-white border border-[#e9effb] rounded-[12px] p-6">
          <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">
            Actions
          </h3>

          <div className="space-y-4">
            {/* Step 1: Initiate Consent */}
            <div className={`p-4 rounded-[8px] border ${currentStep >= 1 ? "border-[#3b5ba3] bg-[#e9f3ff]" : "border-[#e9effb]"}`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">
                  1. Initiate Consent
                </h4>
                {currentStep > 1 && (
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                )}
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] mb-3">
                Request user consent to access their Digilocker documents
              </p>
              {currentStep === 1 && (
                <button
                  onClick={initiateConsent}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#3b5ba3] text-white rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#2d4a8a] disabled:opacity-50"
                >
                  {isLoading ? "Initiating..." : "Initiate Consent"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Step 2: User Approval */}
            <div className={`p-4 rounded-[8px] border ${currentStep >= 2 ? "border-[#3b5ba3] bg-[#e9f3ff]" : "border-[#e9effb]"}`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">
                  2. User Approval
                </h4>
                {currentStep > 2 ? (
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                ) : currentStep === 2 ? (
                  <Clock className="w-5 h-5 text-[#f59e0b]" />
                ) : null}
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] mb-3">
                Waiting for user to approve access via Digilocker
              </p>
              {currentStep === 2 && (
                <div className="flex items-center gap-2 p-3 bg-[#e7f5ec] rounded-[6px]">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span className="font-['Inter:Medium',sans-serif] text-[#16a34a] text-[13px]">
                    Consent Approved
                  </span>
                </div>
              )}
            </div>

            {/* Step 3: Fetch Data */}
            <div className={`p-4 rounded-[8px] border ${currentStep >= 3 ? "border-[#3b5ba3] bg-[#e9f3ff]" : "border-[#e9effb]"}`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">
                  3. Fetch Data
                </h4>
                {currentStep > 3 && (
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                )}
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] mb-3">
                Retrieve user documents and information
              </p>
              {currentStep === 3 && (
                <button
                  onClick={fetchData}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#3b5ba3] text-white rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#2d4a8a] disabled:opacity-50"
                >
                  {isLoading ? "Fetching..." : "Fetch Data"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - Data Preview */}
        <div className="bg-white border border-[#e9effb] rounded-[12px] p-6">
          <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">
            Data Preview
          </h3>

          {!fetchedData ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="w-12 h-12 text-[#4f5661] mb-3" />
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
                Complete the flow to view fetched data
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* User Info */}
              <div className="p-4 bg-[#f6f9fc] rounded-[8px]">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-3">
                  Personal Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                      Name:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[12px]">
                      {fetchedData.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                      Aadhaar:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[12px]">
                      {fetchedData.aadhaar_number}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                      DOB:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[12px]">
                      {fetchedData.dob}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                      Gender:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[12px]">
                      {fetchedData.gender}
                    </span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 bg-[#f6f9fc] rounded-[8px]">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">
                  Address
                </h4>
                <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                  {fetchedData.address}
                </p>
              </div>

              {/* Documents */}
              <div className="p-4 bg-[#f6f9fc] rounded-[8px]">
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-3">
                  Available Documents
                </h4>
                <div className="space-y-2">
                  {fetchedData.documents.map((doc: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white border border-[#e9effb] rounded-[6px]"
                    >
                      <div>
                        <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[12px]">
                          {doc.type}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[11px]">
                          {doc.number}
                        </p>
                      </div>
                      <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[11px]">
                        Issued: {doc.issued}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Logs Button */}
              <button
                onClick={() => navigate("/verification-apis/logs")}
                className="w-full px-4 py-2 border border-[#e9effb] text-[#3b5ba3] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#f6f9fc]"
              >
                View Logs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}