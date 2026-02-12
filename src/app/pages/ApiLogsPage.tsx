import { useNavigate } from "react-router";
import { ChevronRight, Search, Filter, Eye, CheckCircle2, XCircle, Clock, Download } from "lucide-react";
import { useState } from "react";

// Generate mock log data
const generateLogs = () => {
  const apis = [
    { name: "Create Payment", endpoint: "/api/v1/payments/create", method: "POST" },
    { name: "Get Payment Status", endpoint: "/api/v1/payments/{id}", method: "GET" },
    { name: "Create Payout", endpoint: "/api/v1/payouts/create", method: "POST" },
    { name: "Bank Verification", endpoint: "/api/v1/verification/bank", method: "POST" },
    { name: "Create Refund", endpoint: "/api/v1/refunds/create", method: "POST" },
  ];

  const statuses = ["success", "failed", "pending"];
  const environments = ["sandbox", "production"];

  const logs = [];
  for (let i = 0; i < 50; i++) {
    const api = apis[Math.floor(Math.random() * apis.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const environment = i < 40 ? "sandbox" : "production"; // Most logs in sandbox
    
    const timestamp = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000); // Last 7 days
    
    logs.push({
      id: `req_${Math.random().toString(36).substring(2, 15)}`,
      timestamp: timestamp.toISOString(),
      apiName: api.name,
      endpoint: api.endpoint,
      method: api.method,
      status,
      statusCode: status === "success" ? 200 : status === "failed" ? 400 : 102,
      environment,
      responseTime: Math.floor(Math.random() * 1000) + 100,
      requestPayload: {
        amount: Math.floor(Math.random() * 10000) + 1000,
        currency: "INR",
      },
      responsePayload: status === "success" 
        ? { status: "success", message: "Request processed" }
        : { status: "error", error_code: "INVALID_REQUEST", message: "Request validation failed" }
    });
  }

  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export default function ApiLogsPage() {
  const navigate = useNavigate();
  const [logs] = useState(generateLogs());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterEnvironment, setFilterEnvironment] = useState<string>("all");
  const [selectedLog, setSelectedLog] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.apiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.endpoint.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || log.status === filterStatus;
    const matchesEnvironment = filterEnvironment === "all" || log.environment === filterEnvironment;

    return matchesSearch && matchesStatus && matchesEnvironment;
  });

  const handleViewDetails = (log: any) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="w-[16px] h-[16px] text-[#219867]" />;
      case "failed":
        return <XCircle className="w-[16px] h-[16px] text-[#e74c3c]" />;
      case "pending":
        return <Clock className="w-[16px] h-[16px] text-[#e67700]" />;
      default:
        return null;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "success":
        return "bg-[#e7f5ec] text-[#219867]";
      case "failed":
        return "bg-[#fee] text-[#e74c3c]";
      case "pending":
        return "bg-[#fff4e6] text-[#e67700]";
      default:
        return "bg-[#f6f9fc] text-[#4f5661]";
    }
  };

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
          API Logs
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[32px] mb-2">
            API Transaction Log
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[16px]">
            View and debug API request history
          </p>
        </div>
        <button className="flex items-center gap-2 px-[20px] py-[10px] bg-white border border-[#dde1e7] text-[#4f5661] rounded-[8px] font-['Inter:Medium',sans-serif] text-[13px] hover:bg-[#f6f9fc] transition-colors">
          <Download className="w-[16px] h-[16px]" />
          Export Logs
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1 max-w-[400px]">
          <input
            type="text"
            placeholder="Search by API name, Request ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] pl-[40px] pr-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] focus:outline-none focus:border-[#91a7e5]"
          />
          <Search className="absolute left-[12px] top-[10px] w-[18px] h-[18px] text-[#4f5661]" />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-[18px] h-[18px] text-[#4f5661]" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] px-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Environment Filter */}
        <select
          value={filterEnvironment}
          onChange={(e) => setFilterEnvironment(e.target.value)}
          className="bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] px-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] cursor-pointer"
        >
          <option value="all">All Environments</option>
          <option value="sandbox">Sandbox</option>
          <option value="production">Production</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
          Showing {filteredLogs.length} of {logs.length} requests
        </p>
      </div>

      {/* Logs Table */}
      <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f6f9fc] border-b border-[#e9effb]">
            <tr>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">DATE & TIME</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">API NAME</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">ENVIRONMENT</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">STATUS</th>
              <th className="text-left px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">REQUEST ID</th>
              <th className="text-right px-[24px] py-[16px] font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-[24px] py-[40px] text-center">
                  <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">No logs found</p>
                </td>
              </tr>
            ) : (
              filteredLogs.slice(0, 20).map((log, index) => (
                <tr 
                  key={log.id}
                  className={`border-b border-[#e9effb] hover:bg-[#f6f9fc] transition-colors ${
                    index === Math.min(filteredLogs.length - 1, 19) ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-[24px] py-[18px]">
                    <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px]">
                      {formatTimestamp(log.timestamp)}
                    </p>
                  </td>
                  <td className="px-[24px] py-[18px]">
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-1">{log.apiName}</p>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center px-[8px] py-[2px] rounded-[4px] font-['Inter:Medium',sans-serif] text-[11px] ${
                          log.method === "GET" 
                            ? "bg-[#e7f5ec] text-[#219867]" 
                            : "bg-[#e9f3ff] text-[#3b5ba3]"
                        }`}>
                          {log.method}
                        </span>
                        <span className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px] font-mono">{log.endpoint}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-[24px] py-[18px]">
                    <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${
                      log.environment === "sandbox"
                        ? "bg-[#e9f3ff] text-[#3b5ba3]"
                        : "bg-[#fff4e6] text-[#e67700]"
                    }`}>
                      {log.environment}
                    </span>
                  </td>
                  <td className="px-[24px] py-[18px]">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(log.status)}
                      <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${getStatusBadgeClass(log.status)}`}>
                        {log.statusCode}
                      </span>
                    </div>
                  </td>
                  <td className="px-[24px] py-[18px]">
                    <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px] font-mono">{log.id}</p>
                  </td>
                  <td className="px-[24px] py-[18px] text-right">
                    <button
                      onClick={() => handleViewDetails(log)}
                      className="inline-flex items-center gap-2 px-[14px] py-[6px] text-[#3b5ba3] hover:bg-[#e9f3ff] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] transition-colors"
                    >
                      <Eye className="w-[16px] h-[16px]" />
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Log Details */}
      {showModal && selectedLog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-[16px] max-w-[800px] w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="border-b border-[#e9effb] p-[24px]">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[24px] mb-2">
                    Request Details
                  </h2>
                  <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[14px]">
                    {selectedLog.apiName} • {formatTimestamp(selectedLog.timestamp)}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-[32px] h-[32px] flex items-center justify-center text-[#4f5661] hover:bg-[#f6f9fc] rounded-[6px] transition-colors text-[24px]"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-[24px] space-y-6">
              {/* Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f6f9fc] rounded-[8px] p-[16px]">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-2">REQUEST ID</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] font-mono">{selectedLog.id}</p>
                </div>
                <div className="bg-[#f6f9fc] rounded-[8px] p-[16px]">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-2">RESPONSE TIME</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px]">{selectedLog.responseTime}ms</p>
                </div>
                <div className="bg-[#f6f9fc] rounded-[8px] p-[16px]">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-2">METHOD</p>
                  <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${
                    selectedLog.method === "GET" 
                      ? "bg-[#e7f5ec] text-[#219867]" 
                      : "bg-[#e9f3ff] text-[#3b5ba3]"
                  }`}>
                    {selectedLog.method}
                  </span>
                </div>
                <div className="bg-[#f6f9fc] rounded-[8px] p-[16px]">
                  <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-2">STATUS</p>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(selectedLog.status)}
                    <span className={`inline-flex items-center px-[10px] py-[4px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[12px] ${getStatusBadgeClass(selectedLog.status)}`}>
                      {selectedLog.status.toUpperCase()} • {selectedLog.statusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Endpoint */}
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Endpoint</h3>
                <div className="bg-[#1c1e21] rounded-[8px] p-[12px] font-mono text-[#4ade80] text-[13px]">
                  {selectedLog.endpoint}
                </div>
              </div>

              {/* Headers */}
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Headers</h3>
                <div className="bg-[#f6f9fc] rounded-[8px] p-[16px] space-y-2">
                  <div className="flex justify-between">
                    <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Content-Type</span>
                    <span className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px]">application/json</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Authorization</span>
                    <span className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px]">Bearer tok_****</span>
                  </div>
                </div>
              </div>

              {/* Request Payload */}
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Request Payload</h3>
                <pre className="bg-[#1c1e21] rounded-[8px] p-[16px] font-mono text-[#4ade80] text-[13px] overflow-x-auto">
                  {JSON.stringify(selectedLog.requestPayload, null, 2)}
                </pre>
              </div>

              {/* Response Payload */}
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[14px] mb-2">Response Payload</h3>
                <pre className="bg-[#1c1e21] rounded-[8px] p-[16px] font-mono text-[#4ade80] text-[13px] overflow-x-auto">
                  {JSON.stringify(selectedLog.responsePayload, null, 2)}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#e9effb] p-[24px] flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-[24px] py-[10px] bg-[#3b5ba3] text-white rounded-[8px] font-['Inter:Medium',sans-serif] text-[14px] hover:bg-[#324d8a] transition-colors"
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