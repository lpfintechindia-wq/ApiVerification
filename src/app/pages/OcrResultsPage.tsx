import { useNavigate, useParams } from "react-router";
import { ChevronRight, FileText, Download, CheckCircle2 } from "lucide-react";

export default function OcrResultsPage() {
  const navigate = useNavigate();
  const { resultId } = useParams();

  // Mock OCR result data
  const ocrResult = {
    id: resultId,
    documentType: "PAN Card",
    uploadedAt: "2025-02-03 14:30:25",
    processingTime: "2.1s",
    status: "success",
    extractedFields: {
      pan_number: "ABCDE1234F",
      name: "JOHN DOE",
      father_name: "RICHARD DOE",
      dob: "01/01/1990"
    },
    confidenceScores: {
      pan_number: 0.98,
      name: 0.96,
      father_name: 0.94,
      dob: 0.97
    },
    documentQuality: "High",
    rawJson: {
      status: "success",
      document_type: "pan",
      extracted_data: {
        pan_number: "ABCDE1234F",
        name: "JOHN DOE",
        father_name: "RICHARD DOE",
        dob: "01/01/1990"
      },
      confidence_scores: {
        pan_number: 0.98,
        name: 0.96,
        father_name: 0.94,
        dob: 0.97
      },
      quality: {
        overall: "high",
        blur_score: 0.95,
        brightness: 0.88
      }
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 0.95) return "text-[#16a34a]";
    if (score >= 0.85) return "text-[#f59e0b]";
    return "text-[#dc2626]";
  };

  const getConfidenceBg = (score: number) => {
    if (score >= 0.95) return "bg-[#e7f5ec]";
    if (score >= 0.85) return "bg-[#fef3c7]";
    return "bg-[#fef3f2]";
  };

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
        <span
          onClick={() => navigate("/verification-apis/ocr")}
          className="font-['Inter:Regular',sans-serif] text-[#3b5ba3] cursor-pointer hover:underline"
        >
          Document & OCR
        </span>
        <ChevronRight className="w-[14px] h-[14px] text-[#4f5661]" />
        <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21]">
          OCR Results
        </span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[28px] mb-2">
              OCR Results
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
              Extracted fields and confidence scores from document
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#e7f5ec] rounded-[8px]">
            <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
            <span className="font-['Inter:Medium',sans-serif] text-[#16a34a] text-[14px]">
              Processing Complete
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Document Preview */}
        <div className="bg-white border border-[#e9effb] rounded-[12px] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px]">
              Document Preview
            </h3>
            <button className="flex items-center gap-2 px-3 py-2 border border-[#e9effb] text-[#3b5ba3] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#f6f9fc]">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          {/* Mock Document Image */}
          <div className="bg-[#f6f9fc] border-2 border-dashed border-[#e9effb] rounded-[8px] p-8 mb-4">
            <div className="flex flex-col items-center justify-center text-center">
              <FileText className="w-16 h-16 text-[#4f5661] mb-3" />
              <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-1">
                {ocrResult.documentType}
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                Uploaded: {ocrResult.uploadedAt}
              </p>
            </div>
          </div>

          {/* Document Info */}
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
              <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                Document Type:
              </span>
              <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                {ocrResult.documentType}
              </span>
            </div>
            <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
              <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                Processing Time:
              </span>
              <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                {ocrResult.processingTime}
              </span>
            </div>
            <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
              <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                Document Quality:
              </span>
              <span className="font-['Inter:Medium',sans-serif] text-[#16a34a] text-[13px]">
                {ocrResult.documentQuality}
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel - Extracted Fields */}
        <div className="bg-white border border-[#e9effb] rounded-[12px] p-6">
          <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">
            Extracted Fields
          </h3>

          <div className="space-y-4 mb-6">
            {Object.entries(ocrResult.extractedFields).map(([key, value]) => {
              const confidence = ocrResult.confidenceScores[key as keyof typeof ocrResult.confidenceScores];
              return (
                <div key={key} className="p-4 border border-[#e9effb] rounded-[8px]">
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] uppercase">
                      {key.replace(/_/g, " ")}
                    </label>
                    <span
                      className={`px-2 py-1 rounded-[4px] font-['Inter:Medium',sans-serif] text-[11px] ${getConfidenceBg(
                        confidence
                      )} ${getConfidenceColor(confidence)}`}
                    >
                      {(confidence * 100).toFixed(0)}% confidence
                    </span>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px]">
                    {value as string}
                  </p>
                  <div className="mt-2 h-1 bg-[#e9effb] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        confidence >= 0.95
                          ? "bg-[#16a34a]"
                          : confidence >= 0.85
                          ? "bg-[#f59e0b]"
                          : "bg-[#dc2626]"
                      }`}
                      style={{ width: `${confidence * 100}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Confidence Legend */}
          <div className="p-4 bg-[#f6f9fc] rounded-[8px]">
            <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px] mb-2">
              Confidence Score Guide
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#16a34a]"></div>
                <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                  High (95%+) - Very reliable
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                  Medium (85-94%) - Review recommended
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#dc2626]"></div>
                <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                  Low (&lt;85%) - Manual verification required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Raw JSON Response */}
      <div className="mt-6 bg-white border border-[#e9effb] rounded-[12px] p-6">
        <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">
          Raw OCR JSON
        </h3>
        <div className="bg-[#1c1e21] rounded-[8px] p-4 overflow-x-auto">
          <pre className="font-mono text-[#4ade80] text-[12px] leading-relaxed">
            {JSON.stringify(ocrResult.rawJson, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
