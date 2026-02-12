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

export default function ApiTransactionLog() {
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
        return <CheckCircle2 className="w-4 h-4 text-[#10b981]" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-[#ef4444]" />;
      case "pending":
        return <Clock className="w-4 h-4 text-[#f59e0b]" />;
      default:
        return null;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "success":
        return "bg-[#d1fae5] text-[#065f46]";
      case "failed":
        return "bg-[#fee2e2] text-[#991b1b]";
      case "pending":
        return "bg-[#fef3c7] text-[#92400e]";
      default:
        return "bg-[#f1f5f9] text-[#475569]";
    }
  };

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-[14px]">
        <span
          onClick={() => navigate("/developer")}
          className="text-[#3b82f6] cursor-pointer hover:underline font-medium"
        >
          Developer Tools
        </span>
        <ChevronRight className="w-[14px] h-[14px] text-[#cbd5e1]" />
        <span className="text-[#0f172a] font-semibold">
          API Transaction Log
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-[#0f172a] mb-2">
            API Transaction Log
          </h1>
          <p className="text-[16px] text-[#64748b]">
            View and debug API request history
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e2e8f0] text-[#0f172a] rounded-lg text-[13px] font-medium hover:bg-[#f8fafc] transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Export Logs
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by API name, Request ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg pl-10 pr-4 py-2.5 text-[14px] text-[#0f172a] placeholder:text-[#64748b] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#64748b]" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-[14px] text-[#0f172a] cursor-pointer focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
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
          className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-[14px] text-[#0f172a] cursor-pointer focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
        >
          <option value="all">All Environments</option>
          <option value="sandbox">Sandbox</option>
          <option value="production">Production</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-[14px] text-[#64748b]">
          Showing {filteredLogs.length} of {logs.length} requests
        </p>
      </div>

      {/* Logs Table */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
            <tr>
              <th className="text-left px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">Date & Time</th>
              <th className="text-left px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">API Name</th>
              <th className="text-left px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">Environment</th>
              <th className="text-left px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">Status</th>
              <th className="text-left px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">Request ID</th>
              <th className="text-right px-6 py-4 text-[13px] font-semibold text-[#64748b] uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <p className="text-[14px] text-[#64748b]">No logs found</p>
                </td>
              </tr>
            ) : (
              filteredLogs.slice(0, 20).map((log, index) => (
                <tr 
                  key={log.id}
                  className={`border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors ${
                    index === Math.min(filteredLogs.length - 1, 19) ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <p className="text-[13px] text-[#0f172a]">
                      {formatTimestamp(log.timestamp)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-[14px] font-medium text-[#0f172a] mb-1">{log.apiName}</p>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${
                          log.method === "GET" 
                            ? "bg-[#d1fae5] text-[#065f46]" 
                            : "bg-[#dbeafe] text-[#1e40af]"
                        }`}>
                          {log.method}
                        </span>
                        <span className="text-[12px] text-[#64748b] font-mono">{log.endpoint}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-semibold ${
                      log.environment === "sandbox"
                        ? "bg-[#dbeafe] text-[#1e40af]"
                        : "bg-[#fef3c7] text-[#92400e]"
                    }`}>
                      {log.environment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(log.status)}
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-semibold ${getStatusBadgeClass(log.status)}`}>
                        {log.statusCode}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[13px] text-[#64748b] font-mono">{log.id}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleViewDetails(log)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[#3b82f6] hover:bg-[#eff6ff] rounded-lg text-[13px] font-medium transition-colors"
                    >
                      <Eye className="w-4 h-4" />
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="border-b border-[#e2e8f0] p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[24px] font-bold text-[#0f172a] mb-2">
                    Request Details
                  </h2>
                  <p className="text-[14px] text-[#64748b]">
                    {selectedLog.apiName} • {formatTimestamp(selectedLog.timestamp)}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:bg-[#f8fafc] rounded-lg transition-colors text-xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <p className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wide mb-2">Request ID</p>
                  <p className="text-[14px] text-[#0f172a] font-mono">{selectedLog.id}</p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <p className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wide mb-2">Response Time</p>
                  <p className="text-[14px] text-[#0f172a]">{selectedLog.responseTime}ms</p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <p className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wide mb-2">Method</p>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-semibold ${
                    selectedLog.method === "GET" 
                      ? "bg-[#d1fae5] text-[#065f46]" 
                      : "bg-[#dbeafe] text-[#1e40af]"
                  }`}>
                    {selectedLog.method}
                  </span>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <p className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wide mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(selectedLog.status)}
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-semibold ${getStatusBadgeClass(selectedLog.status)}`}>
                      {selectedLog.status.toUpperCase()} • {selectedLog.statusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Endpoint */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-2">Endpoint</h3>
                <div className="bg-[#0f172a] rounded-lg p-3 font-mono text-[#4ade80] text-[13px]">
                  {selectedLog.endpoint}
                </div>
              </div>

              {/* Headers */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-2">Headers</h3>
                <div className="bg-[#f8fafc] rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[13px] font-medium text-[#64748b]">Content-Type</span>
                    <span className="text-[13px] text-[#0f172a]">application/json</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] font-medium text-[#64748b]">Authorization</span>
                    <span className="text-[13px] text-[#0f172a]">Bearer tok_****</span>
                  </div>
                </div>
              </div>

              {/* Request Payload */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-2">Request Payload</h3>
                <pre className="bg-[#0f172a] rounded-lg p-4 font-mono text-[#4ade80] text-[13px] overflow-x-auto">
                  {JSON.stringify(selectedLog.requestPayload, null, 2)}
                </pre>
              </div>

              {/* Response Payload */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-2">Response Payload</h3>
                <pre className="bg-[#0f172a] rounded-lg p-4 font-mono text-[#4ade80] text-[13px] overflow-x-auto">
                  {JSON.stringify(selectedLog.responsePayload, null, 2)}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#e2e8f0] p-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 bg-[#3b82f6] text-white rounded-lg text-[14px] font-medium hover:bg-[#2563eb] transition-colors shadow-md"
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