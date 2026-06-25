import React from "react"

export interface ThematicVariant {
  id: string;
  title: string;
  codeSnippet: string;
  Component: React.ComponentType;
}

export const thematicVariant: ThematicVariant[] = [
  
  {
    id: "neumorphic-button",
    title: "Neumorphic",
    codeSnippet: `<button className="bg-[#e0e0e0] text-[#4d4d4d] border-2 border-[#cecece] rounded-[50px] px-[40px] py-[15px] text-[18px] cursor-pointer transition-all duration-200 ease-in-out shadow-[inset_4px_4px_10px_#bcbcbc,inset_-4px_-4px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff] focus:outline-none focus:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff]" type="button">
    Neumorphic
  </button>`,
    Component: () => (
      <div className="w-full h-full rounded-lg flex items-center justify-center bg-[#e0e0e0]">
        <button className="bg-[#e0e0e0] text-[#4d4d4d] border-2 border-[#cecece] rounded-[50px] px-[40px] py-[15px] text-[18px] cursor-pointer transition-all duration-200 ease-in-out shadow-[inset_4px_4px_10px_#bcbcbc,inset_-4px_-4px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff] focus:outline-none focus:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff]" type="button">
          Neumorphic
        </button>
      </div>
    )
  },
  {
    id: "pearl-button",
    title: "Pearl",
    codeSnippet: `<button className="group outline-none cursor-pointer border-0 relative rounded-[100px] bg-[#080808] transition-all duration-200 ease-in-out shadow-[inset_0_0.3rem_0.9rem_rgba(255,255,255,0.3),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.5),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] hover:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.4),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.7),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] active:translate-y-[4px] active:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.5),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.8),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.4),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)]" type="button">
    <div className="text-[25px] font-medium text-white/70 px-[45px] py-[32px] rounded-[inherit] relative overflow-hidden before:content-[''] before:absolute before:transition-all before:duration-300 before:ease-in-out before:-left-[15%] before:-right-[15%] before:bottom-[25%] before:-top-[100%] before:rounded-full before:bg-white/12 group-hover:before:-translate-y-[5%] after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:left-[6%] after:right-[6%] after:top-[12%] after:bottom-[40%] after:rounded-t-[22px] after:shadow-[inset_0_10px_8px_-10px_rgba(255,255,255,0.8)] after:bg-gradient-to-b after:from-white/30 after:via-transparent after:to-transparent group-hover:after:opacity-40 group-hover:after:translate-y-[5%]">
      <p className="flex items-center gap-[12px] m-0 transition-all duration-200 ease-in-out translate-y-[2%] [mask-image:linear-gradient(to_bottom,white_40%,transparent)] group-hover:-translate-y-[4%]">
        <span className="inline-block group-hover:hidden">✧</span>
        <span className="hidden group-hover:inline-block">✦</span>
        Pearl
      </p>
    </div>
  </button>`,
    Component: () => (
      <button className="group outline-none cursor-pointer border-0 relative rounded-[100px] bg-[#080808] transition-all duration-200 ease-in-out shadow-[inset_0_0.3rem_0.9rem_rgba(255,255,255,0.3),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.5),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] hover:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.4),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.7),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] active:translate-y-[4px] active:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.5),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.8),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.4),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)]" type="button">
        <div className="text-[25px] font-medium text-white/70 px-[45px] py-[32px] rounded-[inherit] relative overflow-hidden before:content-[''] before:absolute before:transition-all before:duration-300 before:ease-in-out before:-left-[15%] before:-right-[15%] before:bottom-[25%] before:-top-[100%] before:rounded-full before:bg-white/12 group-hover:before:-translate-y-[5%] after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:left-[6%] after:right-[6%] after:top-[12%] after:bottom-[40%] after:rounded-t-[22px] after:shadow-[inset_0_10px_8px_-10px_rgba(255,255,255,0.8)] after:bg-gradient-to-b after:from-white/30 after:via-transparent after:to-transparent group-hover:after:opacity-40 group-hover:after:translate-y-[5%]">
          <p className="flex items-center gap-[12px] m-0 transition-all duration-200 ease-in-out translate-y-[2%] [mask-image:linear-gradient(to_bottom,white_40%,transparent)] group-hover:-translate-y-[4%]">
            <span className="inline-block group-hover:hidden">✧</span>
            <span className="hidden group-hover:inline-block">✦</span>
            Pearl
          </p>
        </div>
      </button>
    )
  },
  {
    id: "tactile-render",
    title: "Tactile Render",
    codeSnippet: `<button className="group relative cursor-pointer rounded-[100em] bg-black/75 shadow-[-0.15em_-0.15em_0.15em_-0.075em_rgba(5,5,5,0.25),0.0375em_0.0375em_0.0675em_0_rgba(5,5,5,0.1)] after:content-[''] after:absolute after:z-0 after:w-[calc(100%+0.3em)] after:h-[calc(100%+0.3em)] after:-top-[0.15em] after:-left-[0.15em] after:rounded-[inherit] after:bg-[linear-gradient(-135deg,rgba(5,5,5,0.5),transparent_20%,transparent_100%)] after:blur-[0.0125em] after:opacity-25 after:mix-blend-multiply" type="button">
    <div className="relative z-[1] rounded-[inherit] transition-all duration-300 ease-out will-change-[box-shadow] shadow-[0_0.05em_0.05em_-0.01em_rgba(5,5,5,1),0_0.01em_0.01em_-0.01em_rgba(5,5,5,0.5),0.15em_0.3em_0.1em_-0.01em_rgba(5,5,5,0.25)] group-hover:shadow-[0_0_0_0_transparent]">
      <div className="relative z-[1] rounded-[inherit] px-[1.5em] py-[1em] bg-[linear-gradient(135deg,rgba(230,230,230,1),rgba(180,180,180,1))] transition-all duration-300 ease-in-out overflow-clip [clip-path:inset(0_0_0_0_round_100em)] shadow-[inset_0_0_0_0_rgba(5,5,5,0.1),inset_-0.05em_-0.05em_0.05em_0_rgba(5,5,5,0.25),inset_0_0_0_0_rgba(5,5,5,0.1),inset_0_0_0.05em_0.2em_rgba(255,255,255,0.25),inset_0.025em_0.05em_0.1em_0_rgba(255,255,255,1),inset_0.12em_0.12em_0.12em_rgba(255,255,255,0.25),inset_-0.075em_-0.25em_0.25em_0.1em_rgba(5,5,5,0.25)] group-hover:[clip-path:inset(clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_round_100em)] group-hover:shadow-[inset_0.1em_0.15em_0.05em_0_rgba(5,5,5,0.75),inset_-0.025em_-0.03em_0.05em_0.025em_rgba(5,5,5,0.5),inset_0.25em_0.25em_0.2em_0_rgba(5,5,5,0.5),inset_0_0_0.05em_0.5em_rgba(255,255,255,0.15),inset_0_0_0_0_rgba(255,255,255,1),inset_0.12em_0.12em_0.12em_rgba(255,255,255,0.25),inset_-0.075em_-0.12em_0.2em_0.1em_rgba(5,5,5,0.25)] group-active:scale-[0.975]">
        <span className="relative z-[4] font-sans tracking-[-0.05em] font-medium text-transparent block select-none bg-[linear-gradient(135deg,rgba(25,25,25,1),rgba(75,75,75,1))] bg-clip-text [text-shadow:rgba(0,0,0,0.1)_0_0_0.1em] transition-transform duration-250 ease-out group-hover:scale-[0.975]">
          Press me
        </span>
      </div>
    </div>
  </button>`,
    Component: () => (
      <button className="group relative cursor-pointer rounded-[100em] bg-black/75 shadow-[-0.15em_-0.15em_0.15em_-0.075em_rgba(5,5,5,0.25),0.0375em_0.0375em_0.0675em_0_rgba(5,5,5,0.1)] after:content-[''] after:absolute after:z-0 after:w-[calc(100%+0.3em)] after:h-[calc(100%+0.3em)] after:-top-[0.15em] after:-left-[0.15em] after:rounded-[inherit] after:bg-[linear-gradient(-135deg,rgba(5,5,5,0.5),transparent_20%,transparent_100%)] after:blur-[0.0125em] after:opacity-25 after:mix-blend-multiply" type="button">
        <div className="relative z-[1] rounded-[inherit] transition-all duration-300 ease-out will-change-[box-shadow] shadow-[0_0.05em_0.05em_-0.01em_rgba(5,5,5,1),0_0.01em_0.01em_-0.01em_rgba(5,5,5,0.5),0.15em_0.3em_0.1em_-0.01em_rgba(5,5,5,0.25)] group-hover:shadow-[0_0_0_0_transparent]">
          <div className="relative z-[1] rounded-[inherit] px-[1.5em] py-[1em] bg-[linear-gradient(135deg,rgba(230,230,230,1),rgba(180,180,180,1))] transition-all duration-300 ease-in-out overflow-clip [clip-path:inset(0_0_0_0_round_100em)] shadow-[inset_0_0_0_0_rgba(5,5,5,0.1),inset_-0.05em_-0.05em_0.05em_0_rgba(5,5,5,0.25),inset_0_0_0_0_rgba(5,5,5,0.1),inset_0_0_0.05em_0.2em_rgba(255,255,255,0.25),inset_0.025em_0.05em_0.1em_0_rgba(255,255,255,1),inset_0.12em_0.12em_0.12em_rgba(255,255,255,0.25),inset_-0.075em_-0.25em_0.25em_0.1em_rgba(5,5,5,0.25)] group-hover:[clip-path:inset(clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_clamp(1px,0.0625em,2px)_round_100em)] group-hover:shadow-[inset_0.1em_0.15em_0.05em_0_rgba(5,5,5,0.75),inset_-0.025em_-0.03em_0.05em_0.025em_rgba(5,5,5,0.5),inset_0.25em_0.25em_0.2em_0_rgba(5,5,5,0.5),inset_0_0_0.05em_0.5em_rgba(255,255,255,0.15),inset_0_0_0_0_rgba(255,255,255,1),inset_0.12em_0.12em_0.12em_rgba(255,255,255,0.25),inset_-0.075em_-0.12em_0.2em_0.1em_rgba(5,5,5,0.25)] group-active:scale-[0.975]">
            <span className="relative z-[4] font-sans tracking-[-0.05em] font-medium text-transparent block select-none bg-[linear-gradient(135deg,rgba(25,25,25,1),rgba(75,75,75,1))] bg-clip-text [text-shadow:rgba(0,0,0,0.1)_0_0_0.1em] transition-transform duration-250 ease-out group-hover:scale-[0.975]">
              Press me
            </span>
          </div>
        </div>
      </button>
    )
  },
  {
    id: "liquid-glass",
    title: "Liquid Glass",
    codeSnippet: `<button className="relative px-6 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
Liquid Glass
</button>`,
    Component: () => (
      <div className="p-10 rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-emerald-500 flex items-center justify-center">
        <button className="relative px-6 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
          Liquid Glass
        </button>
      </div>
    )
  },
  {
    id: "keyboard-button",
    title: "Keyboard Button",
    codeSnippet: `<button className="group relative border-none bg-transparent p-0 outline-none cursor-pointer font-sans">
<span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-lg translate-y-[2px] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-hover:duration-250 group-active:translate-y-[1px] group-active:duration-75"></span>
<span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[#1c2534] via-[#364761] to-[#1c2534]"></span>
<div className="relative flex items-center justify-center px-[28px] py-[12px] text-[1.25rem] text-white bg-[#1c2534] rounded-lg -translate-y-[4px] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-[6px] group-hover:duration-250 group-active:-translate-y-[2px] group-active:duration-75">
  <span className="select-none">Click me</span>
</div>
</button>`,
    Component: () => (
      <button className="group relative border-none bg-transparent p-0 outline-none cursor-pointer font-sans">
        <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-lg translate-y-[2px] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-hover:duration-250 group-active:translate-y-[1px] group-active:duration-75"></span>
        <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[#1c2534] via-[#364761] to-[#1c2534]"></span>
        <div className="relative flex items-center justify-center px-[28px] py-[12px] text-[1.25rem] text-white bg-[#1c2534] rounded-lg -translate-y-[4px] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-[6px] group-hover:duration-250 group-active:-translate-y-[2px] group-active:duration-75">
          <span className="select-none">Click me</span>
        </div>
      </button>
    )
  }
]