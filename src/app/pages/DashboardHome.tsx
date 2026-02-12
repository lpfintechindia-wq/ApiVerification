export default function DashboardHome() {
  return (
    <div className="p-[32px]">
      <div className="mb-6">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] text-[#1c1e21] text-[25px] mb-6">Good afternoon, Admin!</p>
        
        <div className="flex gap-[12px] items-center">
          <button className="bg-[#3b5ba3] h-[42px] px-[20px] rounded-[10px] text-white font-['Inter:Medium',sans-serif] font-medium text-[13.1px] hover:bg-[#324d8a] transition-colors">
            Payout
          </button>
          <button className="bg-white h-[42px] px-[20px] rounded-[10px] border border-[#dde1e7] text-[#4f5661] font-['Inter:Medium',sans-serif] font-medium text-[13.3px] hover:bg-[#f6f9fc] transition-colors">
            Payout
          </button>
          <button className="bg-white h-[42px] px-[20px] rounded-[10px] border border-[#dde1e7] text-[#4f5661] font-['Inter:Medium',sans-serif] font-medium text-[13.3px] hover:bg-[#f6f9fc] transition-colors">
            API Verification Suite
          </button>
          <button className="bg-white h-[42px] px-[20px] rounded-[10px] border border-[#dde1e7] text-[#4f5661] font-['Inter:Medium',sans-serif] font-medium text-[13.3px] hover:bg-[#f6f9fc] transition-colors">
            Cross Border Payments
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[20px] mb-8">
        <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] px-[32px] py-[28px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#4f5661] text-[18px] mb-4">Payin Wallet Balance</p>
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold text-[#1c1e21]">
            <span className="font-['Outfit:Medium',sans-serif] font-medium text-[22px]">Rs.</span>
            <span className="text-[32px]"> 12,54,526.7</span>
          </p>
        </div>
        
        <div className="bg-[#fdfdfd] border border-[#e9effb] rounded-[16px] px-[32px] py-[28px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#4f5661] text-[18px] mb-4">Payout Wallet Balance</p>
          <p className="font-['Outfit:SemiBold',sans-serif] font-semibold text-[#1c1e21]">
            <span className="font-['Outfit:Medium',sans-serif] font-medium text-[22px]">Rs.</span>
            <span className="text-[32px]"> 44,753.95</span>
          </p>
        </div>
      </div>
    </div>
  );
}