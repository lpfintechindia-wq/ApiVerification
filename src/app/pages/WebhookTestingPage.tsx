import { useNavigate } from "react-router";
import { ChevronRight, Send, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const webhookEvents = [
  { id: "payment.success", name: "Payment Success", description: "Triggered when payment is completed successfully" },
  { id: "payment.failed", name: "Payment Failed", description: "Triggered when payment fails" },
  { id: "payment.pending", name: "Payment Pending", description: "Triggered when payment is in pending state" },
  { id: "payout.success", name: "Payout Success", description: "Triggered when payout is completed" },
  { id: "payout.failed", name: "Payout Failed", description: "Triggered when payout fails" },
  { id: "refund.initiated", name: "Refund Initiated", description: "Triggered when refund is started" },
  { id: "refund.completed", name: "Refund Completed", description: "Triggered when refund is completed" },
  { id: "kyc.verified", name: "KYC Verified", description: "Triggered when KYC verification succeeds" },
  { id: "kyc.failed", name: "KYC Failed", description: "Triggered when KYC verification fails" },
];

const samplePayloads: Record<string, any> = {
  "payment.success": {
    event: "payment.success",
    timestamp: new Date().toISOString(),
    data: {
      payment_id: "pay_abc123xyz456",
      order_id: "order_789012",
      amount: 10000,
      currency: "INR",
      status: "success",
      payment_method: "upi",
      customer_id: "cust_123456",
      utr: "123456789012",
      settled: false
    }
  },
  "payment.failed": {
    event: "payment.failed",
    timestamp: new Date().toISOString(),
    data: {
      payment_id: "pay_def456uvw789",
      order_id: "order_345678",
      amount: 5000,
      currency: "INR",
      status: "failed",
      payment_method: "card",
      error_code: "INSUFFICIENT_FUNDS",
      error_message: "Transaction declined by bank"
    }
  },
  "payout.success": {
    event: "payout.success",
    timestamp: new Date().toISOString(),
    data: {
      payout_id: "pyt_ghi789jkl012",
      beneficiary_id: "ben_987654",
      amount: 5000,
      currency: "INR",
      status: "success",
      account_number: "****7890",
      ifsc_code: "HDFC0001234",
      utr: "987654321098",
      transfer_mode: "IMPS"
    }
  },
};

export default function WebhookTestingPage() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(webhookEvents[0].id);
  const [webhookUrl, setWebhookUrl] = useState("https://yoursite.com/webhook");
  const [deliveryStatus, setDeliveryStatus] = useState<"idle" | "sending" | "success" | "failed">("idle");
  const [deliveryResponse, setDeliveryResponse] = useState<any>(null);

  const currentPayload = samplePayloads[selectedEvent] || samplePayloads["payment.success"];
  const selectedEventData = webhookEvents.find(e => e.id === selectedEvent);

  // Generate webhook signature
  const generateSignature = () => {
    return "sha256=" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const handleTriggerWebhook = () => {
    if (!webhookUrl) {
      toast.error("Please enter a webhook URL");
      return;
    }

    setDeliveryStatus("sending");
    setDeliveryResponse(null);

    // Simulate webhook delivery
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        setDeliveryStatus("success");
        setDeliveryResponse({
          status: 200,
          response_time: Math.floor(Math.random() * 300) + 100,
          delivery_id: "del_" + Math.random().toString(36).substring(2, 15),
          attempts: 1
        });
        toast.success("Webhook delivered successfully");
      } else {
        setDeliveryStatus("failed");
        setDeliveryResponse({
          status: 500,
          response_time: Math.floor(Math.random() * 1000) + 500,
          error: "Connection timeout",
          attempts: 1
        });
        toast.error("Webhook delivery failed");
      }
    }, 1500);
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
          Webhook Testing
        </span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Outfit:Medium',sans-serif] font-medium text-[#1c1e21] text-[32px] mb-2">
          Webhook Testing
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[16px]">
          Test webhook events and validate your endpoint integration
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        {/* Left Panel - Configuration */}
        <div>
          {/* Webhook Event Selector */}
          <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px] mb-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Select Webhook Event</h3>
            <select 
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="w-full bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] px-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] cursor-pointer mb-3"
            >
              {webhookEvents.map((event) => (
                <option key={event.id} value={event.id}>{event.name}</option>
              ))}
            </select>
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
              {selectedEventData?.description}
            </p>
          </div>

          {/* Webhook URL */}
          <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px] mb-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Webhook URL</h3>
            <input
              type="text"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://yoursite.com/webhook"
              className="w-full bg-[#f6f9fc] border border-[#eceff3] rounded-[8px] px-[16px] py-[10px] font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[14px] focus:outline-none focus:border-[#91a7e5]"
            />
            <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px] mt-2">
              Enter your endpoint URL to receive the test webhook
            </p>
          </div>

          {/* Headers & Signature */}
          <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px] mb-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Headers & Signature</h3>
            <div className="space-y-3">
              <div className="bg-[#f6f9fc] rounded-[8px] p-[12px]">
                <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-1">Content-Type</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px] font-mono">application/json</p>
              </div>
              <div className="bg-[#f6f9fc] rounded-[8px] p-[12px]">
                <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-1">X-PayTech-Signature</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px] font-mono break-all">{generateSignature()}</p>
              </div>
              <div className="bg-[#f6f9fc] rounded-[8px] p-[12px]">
                <p className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[12px] mb-1">X-PayTech-Event</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px] font-mono">{selectedEvent}</p>
              </div>
            </div>
          </div>

          {/* Trigger Button */}
          <button
            onClick={handleTriggerWebhook}
            disabled={deliveryStatus === "sending"}
            className="w-full flex items-center justify-center gap-2 px-[24px] py-[14px] bg-[#3b5ba3] text-white rounded-[10px] font-['Inter:Medium',sans-serif] text-[15px] hover:bg-[#324d8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {deliveryStatus === "sending" ? (
              <>
                <div className="w-[18px] h-[18px] border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-[18px] h-[18px]" />
                Trigger Test Webhook
              </>
            )}
          </button>
        </div>

        {/* Right Panel - Payload & Response */}
        <div>
          {/* Sample Payload */}
          <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px] mb-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Sample Payload</h3>
            <pre className="bg-[#1c1e21] rounded-[8px] p-[16px] font-mono text-[#4ade80] text-[13px] overflow-x-auto max-h-[400px]">
              {JSON.stringify(currentPayload, null, 2)}
            </pre>
          </div>

          {/* Delivery Status */}
          {deliveryStatus !== "idle" && (
            <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] p-[28px]">
              <h3 className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[16px] mb-4">Delivery Status</h3>
              
              {deliveryStatus === "sending" && (
                <div className="flex items-center gap-3 text-[#4f5661]">
                  <Clock className="w-[20px] h-[20px] animate-pulse" />
                  <span className="font-['Inter:Regular',sans-serif] text-[14px]">Delivering webhook...</span>
                </div>
              )}

              {deliveryStatus === "success" && deliveryResponse && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-[24px] h-[24px] text-[#219867]" />
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] text-[#219867] text-[16px]">Delivered Successfully</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                        Response received in {deliveryResponse.response_time}ms
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f6f9fc] rounded-[8px] p-[16px] space-y-2">
                    <div className="flex justify-between">
                      <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Status Code</span>
                      <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">{deliveryResponse.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Delivery ID</span>
                      <span className="font-['Inter:Regular',sans-serif] text-[#1c1e21] text-[13px] font-mono">{deliveryResponse.delivery_id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Attempts</span>
                      <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">{deliveryResponse.attempts}</span>
                    </div>
                  </div>
                </div>
              )}

              {deliveryStatus === "failed" && deliveryResponse && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="w-[24px] h-[24px] text-[#e74c3c]" />
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] text-[#e74c3c] text-[16px]">Delivery Failed</p>
                      <p className="font-['Inter:Regular',sans-serif] text-[#4f5661] text-[13px]">
                        {deliveryResponse.error}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#fee] rounded-[8px] p-[16px] space-y-2">
                    <div className="flex justify-between">
                      <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Status Code</span>
                      <span className="font-['Inter:Medium',sans-serif] text-[#e74c3c] text-[13px]">{deliveryResponse.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-['Inter:Medium',sans-serif] text-[#4f5661] text-[13px]">Attempts</span>
                      <span className="font-['Inter:Medium',sans-serif] text-[#1c1e21] text-[13px]">{deliveryResponse.attempts}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-[12px] bg-[#fff4e6] border border-[#e67700] rounded-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[#e67700] text-[13px] mb-1">Troubleshooting</p>
                    <ul className="space-y-1 font-['Inter:Regular',sans-serif] text-[#4f5661] text-[12px]">
                      <li>• Verify your webhook URL is accessible</li>
                      <li>• Check if your server is responding</li>
                      <li>• Ensure SSL certificate is valid</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}