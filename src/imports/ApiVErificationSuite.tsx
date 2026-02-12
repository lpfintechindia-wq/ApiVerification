import svgPaths from "./svg-mcff422lu7";

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pf1df080} id="Vector" stroke="var(--stroke-0, #3B5BA3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25b54d00} id="Vector_2" stroke="var(--stroke-0, #3B5BA3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#d4dff7] left-[16px] rounded-[26843500px] size-[40px] top-1/2" data-name="Background">
      <Svg />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="-translate-y-1/2 absolute border-[#eceff3] border-l-[0.8px] border-solid h-[40px] left-[1311.46px] top-1/2 w-[144.54px]" data-name="VerticalBorder">
      <Background1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Semibold',sans-serif] h-[20px] justify-center leading-[0] left-[68px] not-italic text-[#1c1e21] text-[14px] top-[12px] w-[42.388px]">
        <p className="leading-[20px] whitespace-pre-wrap">Admin</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[68px] not-italic text-[#6f7987] text-[12px] top-[30px] w-[76.057px]">
        <p className="leading-[16px] whitespace-pre-wrap">System Admin</p>
      </div>
    </div>
  );
}

function Input() {
  return <div className="absolute bg-[#f6f9fc] border border-[#eceff3] border-solid h-[37.6px] left-[987.46px] rounded-[10px] top-[17.2px] w-[256px]" data-name="Input" />;
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[999.46px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6F7987)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1780e010} id="Vector_2" stroke="var(--stroke-0, #6F7987)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p309bbb80} id="Vector_2" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute left-[1259.46px] rounded-[10px] size-[36px] top-1/2" data-name="Button">
      <Svg2 />
      <div className="absolute bg-[#d32f2f] right-[4px] rounded-[26843500px] size-[8px] top-[4px]" data-name="Background" />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white border-[#eceff3] border-b-[0.8px] border-solid h-[72.8px] pointer-events-auto sticky top-0" data-name="Header">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] left-[32px] text-[#1c1e21] text-[20px] top-[36px] w-[189.807px]">
        <p className="leading-[28px] whitespace-pre-wrap">Dashboard</p>
      </div>
      <VerticalBorder />
      <Input />
      <Svg1 />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#0f172a] text-[32px] top-[-2.8px]">Welcome to Developer Portal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] whitespace-pre-wrap">Build, test, and integrate payment and verification APIs with ease</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[7.984px] h-[79.993px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1135)" id="Icon">
          <path d={svgPaths.p10b9c380} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.pb123780} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1135">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[39.473px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#10b981] text-[12px]">+12.5%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[39.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container4 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[41.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#0f172a] text-[28px] top-[-2.8px]">12,543</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[13px] whitespace-pre-wrap">Total API Calls</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.984px] h-[159.608px] items-start left-0 pb-[1.099px] pt-[21.084px] px-[21.084px] rounded-[14px] top-0 w-[334.909px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container3 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1112)" id="Icon">
          <path d={svgPaths.p2ee2d000} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p157a4b40} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1112">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[26.218px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3b82f6] text-[12px]">-0.3s</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[39.988px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Text1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[41.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#0f172a] text-[28px] top-[-2.8px]">1.2s</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[13px] whitespace-pre-wrap">Avg Response Time</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.984px] h-[159.608px] items-start left-[350.89px] pb-[1.099px] pt-[21.084px] px-[21.084px] rounded-[14px] top-0 w-[334.926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container6 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1139)" id="Icon">
          <path d={svgPaths.p3885080} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p3cc62300} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1139">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[34.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#10b981] text-[12px]">+0.2%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[39.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container10 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[41.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#0f172a] text-[28px] top-[-2.8px]">99.8%</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[13px] whitespace-pre-wrap">Success Rate</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.984px] h-[159.608px] items-start left-[701.8px] pb-[1.099px] pt-[21.084px] px-[21.084px] rounded-[14px] top-0 w-[334.926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container9 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1063)" id="Icon">
          <path d={svgPaths.p775e640} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p3f2a6000} id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p3826bca0} id="Vector_3" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1063">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[15.006px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#8b5cf6] text-[12px] whitespace-pre-wrap">+3</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[39.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container13 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[41.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#0f172a] text-[28px] top-[-2.8px]">23</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[19.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[13px] whitespace-pre-wrap">Active APIs</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.984px] h-[159.608px] items-start left-[1052.72px] pb-[1.099px] pt-[21.084px] px-[21.084px] rounded-[14px] top-0 w-[334.926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container12 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[159.608px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[29.995px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#0f172a] text-[20px] top-[-2.9px]">Quick Access</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[23.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9858 23.9858">
        <g id="Icon">
          <path d={svgPaths.p245e2200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-gradient-to-b from-[#8b5cf6] relative rounded-[10px] shrink-0 size-[47.989px] to-[#7c3aed]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[10px] shrink-0 size-[47.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g id="Icon">
          <path d="M4.16357 9.99219H15.8217" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.pde98900} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[47.989px] items-start justify-between left-0 top-0 w-[635.668px]" data-name="Container">
      <Container19 />
      <Icon5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[26.991px] left-0 top-[63.97px] w-[635.668px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#0f172a] text-[18px] top-[-1.9px]">Verification APIs</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20.981px] left-0 top-[98.95px] w-[635.668px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#64748b] text-[14px] top-[-0.9px]">Identity, document, and business verification</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[38.546px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">18 APIs</p>
      </div>
    </div>
  );
}

function Text5() {
  return <div className="bg-[#cbd5e1] rounded-[36871300px] shrink-0 size-[3.983px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[48.332px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#10b981] text-[12px]">15 Active</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[15.985px] h-[17.994px] items-center left-0 top-[135.91px] w-[635.668px]" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[153.908px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Heading2 />
      <Paragraph9 />
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white h-[204.077px] left-0 rounded-[14px] top-0 w-[685.837px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.099px] pt-[25.085px] px-[25.085px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9858 23.9858">
        <g id="Icon">
          <path d={svgPaths.p1aa8ec80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gradient-to-b from-[#ec4899] relative rounded-[10px] shrink-0 size-[47.989px] to-[#db2777]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#fdf2f8] relative rounded-[10px] shrink-0 size-[47.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g id="Icon">
          <path d="M4.16364 9.99219H15.8218" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.pde98900} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[47.989px] items-start justify-between left-0 top-0 w-[635.651px]" data-name="Container">
      <Container25 />
      <Icon7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[26.991px] left-0 top-[63.97px] w-[635.651px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#0f172a] text-[18px] top-[-1.9px]">Webhooks</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20.981px] left-0 top-[98.95px] w-[635.651px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#64748b] text-[14px] top-[-0.9px]">Configure and test webhook endpoints</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[45.053px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">5 Events</p>
      </div>
    </div>
  );
}

function Text8() {
  return <div className="bg-[#cbd5e1] rounded-[36871300px] shrink-0 size-[3.983px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[43.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#10b981] text-[12px]">2 Active</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[15.985px] h-[17.994px] items-center left-0 top-[135.91px] w-[635.651px]" data-name="Container">
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[153.908px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Heading3 />
      <Paragraph10 />
      <Container27 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white h-[204.077px] left-[701.8px] rounded-[14px] top-0 w-[685.82px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.099px] pt-[25.085px] px-[25.085px] relative rounded-[inherit] size-full">
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[23.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9858 23.9858">
        <g id="Icon">
          <path d={svgPaths.p224c1280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d={svgPaths.p19cd21c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d="M9.99406 8.99512H7.99524" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d="M15.9906 12.9923H7.99528" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d="M15.9905 16.9902H7.99524" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-gradient-to-b from-[#10b981] relative rounded-[10px] shrink-0 size-[47.989px] to-[#059669]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[10px] shrink-0 size-[47.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g id="Icon">
          <path d="M4.16357 9.99219H15.8217" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.pde98900} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[47.989px] items-start justify-between left-0 top-0 w-[635.668px]" data-name="Container">
      <Container31 />
      <Icon9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[26.991px] left-0 top-[63.97px] w-[635.668px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#0f172a] text-[18px] top-[-1.9px]">API Logs</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20.981px] left-0 top-[98.95px] w-[635.668px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#64748b] text-[14px] top-[-0.9px]">View and analyze API request logs</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[49.431px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">1.2k Logs</p>
      </div>
    </div>
  );
}

function Text11() {
  return <div className="bg-[#cbd5e1] rounded-[36871300px] shrink-0 size-[3.983px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="h-[17.994px] relative shrink-0 w-[32.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#10b981] text-[12px]">Today</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[15.985px] h-[17.994px] items-center left-0 top-[135.91px] w-[635.668px]" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[153.908px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Heading4 />
      <Paragraph11 />
      <Container33 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white h-[204.077px] left-0 rounded-[14px] top-[219.96px] w-[685.837px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.099px] pt-[25.085px] px-[25.085px] relative rounded-[inherit] size-full">
        <Container29 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-[121.526px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-[-0.21px] not-italic text-[#0f172a] text-[18px] top-[-1.9px]">Recent Activity</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[19.487px] relative shrink-0 w-[45.637px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#3b82f6] text-[13px] text-center">View all</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[26.991px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Button1 />
    </div>
  );
}

function Container39() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">PAN Verification</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">2 min ago</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[95.823px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[115.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container38 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">Bank Transfer API</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">5 min ago</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[103.412px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[123.38px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container42 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return <div className="bg-[#ef4444] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">GSTIN Verification</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">12 min ago</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[107.498px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[127.467px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#fee2e2] h-[24.467px] relative rounded-[8px] shrink-0 w-[45.087px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#991b1b] text-[11px] top-[1.98px]">Failed</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container46 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">Webhook Test</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">15 min ago</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[83.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[103.549px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container50 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">Webhook Test</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">15 min ago</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[83.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[103.549px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container54 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph22() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">Webhook Test</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">15 min ago</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[83.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[103.549px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container58 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#10b981] rounded-[36871300px] shrink-0 size-[7.984px]" data-name="Container" />;
}

function Paragraph24() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0f172a] text-[13px]">Webhook Test</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#64748b] text-[11px] whitespace-pre-wrap">15 min ago</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[83.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[103.549px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.984px] items-center relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#d1fae5] h-[24.467px] relative rounded-[8px] shrink-0 w-[54.05px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.5px] left-[7.78px] not-italic text-[#065f46] text-[11px] top-[1.98px]">Success</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#f8fafc] h-[62.154px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13.083px] py-[1.099px] relative size-full">
          <Container62 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[11.984px] h-[507px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container41 />
      <Container45 />
      <Container49 />
      <Container53 />
      <Container57 />
      <Container61 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[15.985px] h-[617px] items-start left-[706.01px] pb-[1.099px] pt-[25.085px] px-[25.085px] rounded-[14px] top-[219.96px] w-[682px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[424.139px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container22 />
      <Container28 />
      <Container34 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[15.985px] h-[470.119px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container15 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#0f172a] text-[18px] top-[-1.9px]">Features</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1089)" id="Icon">
          <path d={svgPaths.p2c011180} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1089">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.9px]">Sandbox Environment</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#64748b] text-[13px]">Test APIs safely without affecting production data</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[44.452px] relative shrink-0 w-[283.126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-start relative size-full">
        <Heading7 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[15.985px] h-[44.452px] items-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1081)" id="Icon">
          <path d={svgPaths.p1a22480} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p1b415ac0} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1081">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.9px]">Secure Authentication</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#64748b] text-[13px]">API keys and OAuth2 token-based authentication</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[44.452px] relative shrink-0 w-[282.267px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-start relative size-full">
        <Heading8 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[15.985px] h-[44.452px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[19.985px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9853 19.9853">
        <g clipPath="url(#clip0_2024_1143)" id="Icon">
          <path d={svgPaths.p775e640} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.pa203580} id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
          <path d={svgPaths.p12c0e080} id="Vector_3" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66545" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1143">
            <rect fill="white" height="19.9853" width="19.9853" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[10px] shrink-0 size-[39.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.017px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#0f172a] text-[14px] top-[-0.9px]">Code Examples</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex h-[19.487px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#64748b] text-[13px]">Ready-to-use code snippets in multiple languages</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[44.452px] relative shrink-0 w-[286.817px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-start relative size-full">
        <Heading9 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[15.985px] h-[44.452px] items-start relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[15.985px] h-[165.325px] items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container71 />
      <Container74 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[15.985px] h-[377.713px] items-start left-[-0.01px] pb-[1.099px] pt-[25.085px] px-[25.085px] rounded-[14px] top-[0.17px] w-[681.82px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Heading6 />
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[378px] relative shrink-0 w-[682px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[23.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9858 23.9858">
        <g id="Icon">
          <path d={svgPaths.p3ffbaf00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d={svgPaths.p3baec600} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
          <path d={svgPaths.p236b1d80} id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99882" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[47.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#0f172a] text-[18px] top-[-1.9px]">Getting Started</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#64748b] text-[14px] top-[-0.9px]">Follow these steps to integrate our APIs into your application</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#3b82f6] h-[37.653px] left-0 rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[155.745px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[77.98px] not-italic text-[13px] text-center text-white top-[7.08px]">View Documentation</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[1.099px] border-solid h-[37.653px] left-[167.73px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[109.009px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[52.98px] not-italic text-[#0f172a] text-[13px] text-center top-[5.98px]">Get API Keys</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[1.099px] border-solid h-[37.653px] left-[288.72px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[119.363px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[59.48px] not-italic text-[#0f172a] text-[13px] text-center top-[5.98px]">Watch Tutorial</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[37.653px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container80() {
  return (
    <div className="flex-[1_0_0] h-[109.593px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.984px] items-start relative size-full">
        <Heading10 />
        <Paragraph29 />
        <Container81 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[109.593px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[15.985px] items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-gradient-to-b from-[#eff6ff] h-[159.763px] relative rounded-[14px] shrink-0 to-[#fdf2f8] via-1/2 via-[#f5f3ff] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.099px] pt-[25.085px] px-[25.085px] relative size-full">
        <Container78 />
      </div>
    </div>
  );
}

function DeveloperOverview() {
  return (
    <div className="h-[1439.116px] relative shrink-0 w-full" data-name="DeveloperOverview">
      <div className="content-stretch flex flex-col gap-[31.987px] items-start pt-[31.987px] px-[31.987px] relative size-full">
        <Container />
        <Container1 />
        <Container14 />
        <Container65 />
        <Container77 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[1435.94px] items-start left-[240px] overflow-clip pr-[20.878px] pt-[-3.297px] top-[72.8px] w-[1472.494px]" data-name="Main Content">
      <DeveloperOverview />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f6f9fc] h-[1509px] left-0 right-0 top-0" data-name="Background">
      <div className="absolute h-[1509px] inset-[0_0_0_240px] pointer-events-none">
        <Header />
      </div>
      <MainContent />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#3b5ba3] h-[40px] left-1/2 overflow-clip rounded-[8px] top-[45px] w-[116px]">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-30.5px)] text-[#fdfdfd] text-[16px] top-[calc(50%-10px)]">PAYTECH</p>
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="House">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1072)" id="House">
          <g id="Vector" />
          <path d={svgPaths.p38b11f00} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1072">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DashboardTab() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Dashboard tab">
      <House />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">Dashboard</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1068)" id="Users">
          <g id="Vector" />
          <path d={svgPaths.p17952800} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1068">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Users />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">User</p>
    </div>
  );
}

function IconParkDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UserTab() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame2 />
          <IconParkDown />
        </div>
      </div>
    </div>
  );
}

function PiggyBank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PiggyBank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1099)" id="PiggyBank">
          <g id="Vector" />
          <path d={svgPaths.p2e655440} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1099">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <PiggyBank />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">Fund</p>
    </div>
  );
}

function IconParkDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame4 />
          <IconParkDown1 />
        </div>
      </div>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1059)" id="ChartBar">
          <g id="Vector" />
          <path d={svgPaths.pf616052} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1059">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ChartBar />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">Reports</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function ChartBar1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1059)" id="ChartBar">
          <g id="Vector" />
          <path d={svgPaths.pf616052} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1059">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ChartBar1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">API Banking Suite</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function GearSix() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GearSix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1124)" id="GearSix">
          <g id="Vector" />
          <path d={svgPaths.p2ba43880} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1124">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <GearSix />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">Setting</p>
    </div>
  );
}

function IconParkDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UserTab1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame7 />
          <IconParkDown2 />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsApiRounded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:api-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:api-rounded">
          <path d={svgPaths.p3a23d800} fill="var(--fill-0, #4F5661)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <MaterialSymbolsApiRounded />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">API</p>
    </div>
  );
}

function IconParkDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame11 />
          <IconParkDown3 />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsApiRounded1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:api-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:api-rounded">
          <path d={svgPaths.p3a23d800} fill="var(--fill-0, #4F5661)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <MaterialSymbolsApiRounded1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">API Verification Suite</p>
    </div>
  );
}

function IconParkDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-park:down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-park:down">
          <path d="M18 9L12 15L6 9" id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#e9effb] h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <Frame12 />
          <IconParkDown4 />
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2024_1055)" id="User">
          <g id="Vector" />
          <path d={svgPaths.pe9f2500} fill="var(--fill-0, #4F5661)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2024_1055">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-[240px]" data-name="Profile">
      <User />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4f5661] text-[14px]">Profile</p>
    </div>
  );
}

function LeftNavBar1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[-1px] top-[143px] w-[240px]" data-name="Left nav bar">
      <DashboardTab />
      <UserTab />
      <Frame3 />
      <Frame8 />
      <Frame9 />
      <UserTab1 />
      <Frame1 />
      <Frame10 />
      <Profile />
    </div>
  );
}

function LeftNavBar() {
  return (
    <div className="absolute bg-[#fdfdfd] border border-[#eceff3] border-solid h-[982px] left-0 overflow-clip top-0 w-[240px]" data-name="Left nav bar">
      <Frame />
      <LeftNavBar1 />
    </div>
  );
}

export default function ApiVErificationSuite() {
  return (
    <div className="relative size-full" data-name="API VErification Suite" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(18, 18, 18) 0%, rgb(18, 18, 18) 100%)" }}>
      <Background />
      <LeftNavBar />
    </div>
  );
}