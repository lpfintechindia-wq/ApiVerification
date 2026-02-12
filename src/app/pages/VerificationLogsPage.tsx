import { useNavigate } from "react-router";
import { ChevronRight, Search, Filter, Download, Eye, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

const mockLogs = [
  {
    id: "VER-20250203-001",
    timestamp: "2025-02-03 14:32:15",
    apiName: "PAN Verification",
    inputReference: "ABCDE1234F",
    status: "Success",
    statusCode: 200,
    responseTime: "1.2s",
    category: "identity"
  },
  {
    id: "VER-20250203-002",
    timestamp: "2025-02-03 14:30:48",
    apiName: "Bank Account Verification",
    inputReference: "123456789012",
    status: "Success",
    statusCode: 200,
    responseTime: "0.8s",
    category: "bank"
  },
  {
    id: "VER-20250203-003",
    timestamp: "2025-02-03 14:28:33",
    apiName: "GSTIN Verification",
    inputReference: "22AAAAA0000A1Z5",
    status: "Failed",
    statusCode: 404,
    responseTime: "1.5s",
    category: "business"
  },
  {
    id: "VER-20250203-004",
    timestamp: "2025-02-03 14:25:12",
    apiName: "PAN OCR",
    inputReference: "pan_document.pdf",
    status: "Success",
    statusCode: 200,
    responseTime: "2.1s",
    category: "ocr"
  },
  {
    id: "VER-20250203-005",
    timestamp: "2025-02-03 14:20:05",
    apiName: "Driving License Verification",
    inputReference: "DL-1234567890",
    status: "Success",
    statusCode: 200,
    responseTime: "1.0s",
    category: "identity"
  },
  {
    id: "VER-20250203-006",
    timestamp: "2025-02-03 14:15:22",
    apiName: "Digilocker Data Fetch",
    inputReference: "User Consent",
    status: "Success",
    statusCode: 200,
    responseTime: "3.2s",
    category: "digilocker"
  }
];

export default function VerificationLogsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLog, setSelectedLog] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch =
      log.apiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.inputReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus =
      statusFilter === "all" || log.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const viewDetails = (log: any) => {
    setSelectedLog(log);
    setShowModal(true);
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
        <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21]">
          Verification Logs
        </span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[28px] mb-2">
          Verification Logs & History
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
          Complete audit trail of all verification API requests
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4f5661]" />
          <input
            type="text"
            placeholder="Search by API name, ID, or input..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#e9effb] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#1c1e21] focus:outline-none focus:border-[#3b5ba3]"
          />
        </div>

        {/* Status Filter */}
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2 rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] ${
              statusFilter === "all"
                ? "bg-[#3b5ba3] text-white"
                : "border border-[#e9effb] text-[#4f5661] hover:bg-[#f6f9fc]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("success")}
            className={`px-4 py-2 rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] ${
              statusFilter === "success"
                ? "bg-[#16a34a] text-white"
                : "border border-[#e9effb] text-[#4f5661] hover:bg-[#f6f9fc]"
            }`}
          >
            Success
          </button>
          <button
            onClick={() => setStatusFilter("failed")}
            className={`px-4 py-2 rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] ${
              statusFilter === "failed"
                ? "bg-[#dc2626] text-white"
                : "border border-[#e9effb] text-[#4f5661] hover:bg-[#f6f9fc]"
            }`}
          >
            Failed
          </button>
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 px-4 py-2 border border-[#e9effb] text-[#3b5ba3] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#f6f9fc]">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Logs Table */}
      <div className="bg-white border border-[#e9effb] rounded-[12px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f6f9fc] border-b border-[#e9effb]">
            <tr>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                API Name
              </th>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                Input Reference
              </th>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                Status
              </th>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                Request ID
              </th>
              <th className="px-6 py-3 text-left font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr
                key={log.id}
                className={`border-b border-[#e9effb] hover:bg-[#f6f9fc] ${
                  index === filteredLogs.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                    {log.timestamp}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px]">
                    {log.apiName}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-['Inter:Regular',sans-serif] font-mono text-[#4f5661] text-[13px]">
                    {log.inputReference}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-[6px] ${
                      log.status === "Success"
                        ? "bg-[#e7f5ec] text-[#16a34a]"
                        : "bg-[#fef3f2] text-[#dc2626]"
                    }`}
                  >
                    {log.status === "Success" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    <span className="font-['Inter:Medium',sans-serif] text-[13px]">
                      {log.status}
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-['Inter:Regular',sans-serif] font-mono text-[#4f5661] text-[12px]">
                    {log.id}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => viewDetails(log)}
                    className="flex items-center gap-2 px-3 py-1 text-[#3b5ba3] hover:bg-[#e9f3ff] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px]"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLogs.length === 0 && (
          <div className="py-12 text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
              No logs found matching your filters
            </p>
          </div>
        )}
      </div>

      {/* Modal - Log Details */}
      {showModal && selectedLog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-[#e9effb] p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[20px]">
                  Request Details
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-[#4f5661] hover:text-[#1c1e21] text-[24px] leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Request Info */}
              <div>
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-3">
                  Request Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                      Request ID:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] font-mono text-[#1c1e21] text-[13px]">
                      {selectedLog.id}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                      Timestamp:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                      {selectedLog.timestamp}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                      Response Time:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                      {selectedLog.responseTime}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-[#f6f9fc] rounded-[6px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                      Status Code:
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">
                      {selectedLog.statusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Request Payload */}
              <div>
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-3">
                  Request Payload
                </h4>
                <div className="bg-[#1c1e21] rounded-[8px] p-4 overflow-x-auto">
                  <pre className="font-mono text-[#4ade80] text-[12px] leading-relaxed">
                    {JSON.stringify(
                      {
                        input: selectedLog.inputReference,
                        api: selectedLog.apiName,
                        category: selectedLog.category
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>

              {/* Response */}
              <div>
                <h4 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-3">
                  Response
                </h4>
                <div className="bg-[#1c1e21] rounded-[8px] p-4 overflow-x-auto">
                  <pre className="font-mono text-[#4ade80] text-[12px] leading-relaxed">
                    {JSON.stringify(
                      {
                        status: selectedLog.status.toLowerCase(),
                        statusCode: selectedLog.statusCode,
                        data: {
                          verified: selectedLog.status === "Success",
                          message: selectedLog.status === "Success" ? "Verification successful" : "Verification failed"
                        }
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-[#e9effb] p-6">
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-4 py-2 bg-[#3b5ba3] text-white rounded-[6px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#2d4a8a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
