import React from "react"

export interface ButtonVariant {
  id: string;
  title: string;
  codeSnippet: string;
  Component: React.ComponentType;
}

export const buttonVariants: ButtonVariant[] = [
  {
    id: "slide-fill",
    title: "Slide & Invert",
    codeSnippet: `<button className="group relative px-[25px] py-[15px] border-none rounded-[15px] text-[#212121] z-[1] bg-[#e8e8e8] font-black text-[17px] shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] overflow-hidden transition-all duration-250 hover:text-[#e8e8e8] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-[15px] before:bg-[#212121] before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full" type="button">
    Hover me
    </button>`,
    Component: () => (
        <button className="group relative px-[25px] py-[15px] border-none rounded-[15px] text-[#212121] z-[1] bg-[#e8e8e8] font-black text-[17px] shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] overflow-hidden transition-all duration-250 hover:text-[#e8e8e8] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-[15px] before:bg-[#212121] before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:before:w-full" type="button">
        Hover me
        </button>
    )
  },
  {
    id: "go-back",
    title: "Slide & Cover",
    codeSnippet: `<button className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button">
  <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
      <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
      <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
    </svg>
  </div>
  <p className="translate-x-2">Go Back</p>
</button>`,
    Component: () => (
      <button className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button">
        <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
          </svg>
        </div>
        <p className="translate-x-2">Go Back</p>
      </button>
    )
  },
  {
    id: "slide-invert",
    title: "Arrow Slide",
    codeSnippet: `<button className="group relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 w-[12rem] h-auto font-sans" type="button">
    <span className="relative block m-0 w-[3rem] h-[3rem] bg-[#282936] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" aria-hidden="true">
      <span className="absolute top-0 bottom-0 m-auto left-[0.625rem] w-[1.125rem] h-[0.125rem] bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white group-hover:translate-x-[1rem] before:absolute before:content-[''] before:-top-[0.29rem] before:right-[0.0625rem] before:w-[0.625rem] before:h-[0.625rem] before:border-t-[0.125rem] before:border-r-[0.125rem] before:border-white before:rotate-45"></span>
    </span>
    <span className="absolute inset-0 py-[0.75rem] px-0 ml-[1.85rem] text-[#282936] font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
      Learn More
    </span>
  </button>`,
    Component: () => (
      <button className="group relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 w-[12rem] h-auto font-sans" type="button">
        <span className="relative block m-0 w-[3rem] h-[3rem] bg-[#282936] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" aria-hidden="true">
          <span className="absolute top-0 bottom-0 m-auto left-[0.625rem] w-[1.125rem] h-[0.125rem] bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white group-hover:translate-x-[1rem] before:absolute before:content-[''] before:-top-[0.29rem] before:right-[0.0625rem] before:w-[0.625rem] before:h-[0.625rem] before:border-t-[0.125rem] before:border-r-[0.125rem] before:border-white before:rotate-45"></span>
        </span>
        <span className="absolute inset-0 py-[0.75rem] px-0 ml-[1.85rem] text-[#282936] font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          Learn More
        </span>
      </button>
    )
  },
  {
    id: "slide-up-1",
    title: "Slide Up 1",
    codeSnippet: `<button className="group outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-[0_0.625em_1em_0_rgba(30,143,255,0.35)] overflow-hidden cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0.625em_1em_0_rgba(33,220,98,0.35)] active:scale-95" type="button">
    <div className="w-full bg-[#1e90ff] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-50px]">
      <span className="flex items-center justify-between h-[50px] padding px-[1.125em] py-[0.75em]">
        <p className="text-[17px] font-bold text-white">Hover Me</p>
        <p className="text-[17px] font-bold text-white">:)</p>
      </span>
    </div>
    <div className="w-full bg-[#21dc62] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-50px]">
      <span className="flex items-center justify-between h-[50px] padding px-[1.125em] py-[0.75em]">
        <p className="text-[17px] font-bold text-white">Thanks</p>
        <p className="text-[17px] font-bold text-white">:D</p>
      </span>
    </div>
  </button>`,
    Component: () => (
      <button className="group outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-[0_0.625em_1em_0_rgba(30,143,255,0.35)] overflow-hidden cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0.625em_1em_0_rgba(33,220,98,0.35)] active:scale-95" type="button">
        <div className="w-full bg-[#1e90ff] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-50px]">
          <span className="flex items-center justify-between h-[50px] px-[1.125em] py-[0.75em]">
            <p className="text-[17px] font-bold text-white">Hover Me</p>
            <p className="text-[17px] font-bold text-white">:)</p>
          </span>
        </div>
        <div className="w-full bg-[#21dc62] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-50px]">
          <span className="flex items-center justify-between h-[50px] px-[1.125em] py-[0.75em]">
            <p className="text-[17px] font-bold text-white">Thanks</p>
            <p className="text-[17px] font-bold text-white">:D</p>
          </span>
        </div>
      </button>
    )
  },
  {
    id: "slide-up-2",
    title: "Slide Up 2",
    codeSnippet: `<button className="group relative bg-transparent text-[#e8e8e8] text-[17px] font-semibold rounded-[10px] w-[150px] h-[60px] border-none uppercase cursor-pointer overflow-hidden shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none active:scale-95" type="button">
    <span className="before:content-['Hello!'] before:flex before:items-center before:justify-center before:w-full before:h-full before:pointer-events-none before:bg-gradient-to-br before:from-[#7b4397] before:to-[#dc2430] before:translate-y-[90%] before:z-[99] before:relative before:origin-bottom before:transition-all before:duration-600 before:ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:before:translate-y-0"></span>
    <span className="after:content-['Hover_me'] after:flex after:items-center after:justify-center after:bg-[#333] after:w-full after:h-full after:pointer-events-none after:origin-top after:translate-y-[-100%] after:transition-all after:duration-600 after:ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:after:translate-y-[-200%] block w-full h-full"></span>
    </button>`,
    Component: () => (
        <button className="group relative bg-transparent text-[#e8e8e8] text-[17px] font-semibold rounded-[10px] w-[150px] h-[60px] border-none uppercase cursor-pointer overflow-hidden shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none active:scale-95" type="button">
        <span className="before:content-['Hello!'] before:flex before:items-center before:justify-center before:w-full before:h-full before:pointer-events-none before:bg-gradient-to-br before:from-[#7b4397] before:to-[#dc2430] before:translate-y-[90%] before:z-[99] before:relative before:origin-bottom before:transition-all before:duration-600 before:ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:before:translate-y-0"></span>
        <span className="after:content-['Hover_me'] after:flex after:items-center after:justify-center after:bg-[#333] after:w-full after:h-full after:pointer-events-none after:origin-top after:translate-y-[-100%] after:transition-all after:duration-600 after:ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:after:translate-y-[-200%] block w-full h-full"></span>
        </button>
    )
  },
  {
    id: "rounded-fill",
    title: "Rounded Fill",
    codeSnippet: `const PayButton = () => (
    <button className="relative flex items-center justify-center w-[130px] h-[40px] bg-[#0f0f0f] border-none text-white font-semibold gap-[8px] cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.103)] overflow-hidden transition-all duration-300 active:translate-x-[5px] active:translate-y-[5px] before:absolute before:content-[''] before:w-[130px] before:h-[130px] before:bg-white before:rounded-full before:left-[-100%] before:top-0 before:transition-all before:duration-300 before:mix-blend-difference hover:before:translate-x-[100%] hover:before:-translate-y-[50%] hover:before:rounded-none" type="button">
      Pay
      <svg className="w-[16px]" viewBox="0 0 576 512">
        <path className="fill-white" d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
      </svg>
    </button>
  );`,
    Component: () => (
      <button className="relative flex items-center justify-center w-[130px] h-[40px] bg-[#0f0f0f] border-none text-white font-semibold gap-[8px] cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.103)] overflow-hidden transition-all duration-300 active:translate-x-[5px] active:translate-y-[5px] before:absolute before:content-[''] before:w-[130px] before:h-[130px] before:bg-white before:rounded-full before:left-[-100%] before:top-0 before:transition-all before:duration-300 before:mix-blend-difference hover:before:translate-x-[100%] hover:before:-translate-y-[50%] hover:before:rounded-none" type="button">
        Pay
        <svg className="w-[16px]" viewBox="0 0 576 512">
          <path className="fill-white" d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
        </svg>
      </button>
    )
  },
  {
    id: "slanted-fill",
    title: "Slanted Fill",
    codeSnippet: `<button className="group relative font-sans font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-none bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-[#f8f8ff] overflow-hidden active:scale-[0.95] transition-transform before:absolute before:top-0 before:left-[-10%] before:w-[120%] before:h-full before:bg-black before:skew-x-[30deg] before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.3,1,0.8,1)] hover:before:translate-x-[100%]">
<span className="relative z-10 flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400">
  <svg className="w-[1.2em] h-[1.2em] mr-[0.5em]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path>
  </svg>
  Code
</span>
</button>`,
    Component: () => (
      <button className="group relative font-sans font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-none bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-[#f8f8ff] overflow-hidden active:scale-[0.95] transition-transform before:absolute before:top-0 before:left-[-10%] before:w-[120%] before:h-full before:bg-black before:skew-x-[30deg] before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.3,1,0.8,1)] hover:before:translate-x-[100%]">
        <span className="relative z-10 flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400">
          <svg className="w-[1.2em] h-[1.2em] mr-[0.5em]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path>
          </svg>
          Code
        </span>
      </button>
    )
  },
  {
    id: "progressive-fill",
    title: "Progressive Fill",
    codeSnippet: `<button type="submit" className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:content-[''] before:absolute before:w-full before:transition-all before:duration-700 before:-left-full hover:before:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square hover:before:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
    Explore
    <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800"></path>
    </svg>
  </button>`,
    Component: () => (
      <button type="button" className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:content-[''] before:absolute before:w-full before:transition-all before:duration-700 before:-left-full hover:before:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square hover:before:scale-150 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
        Explore
        <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800"></path>
        </svg>
      </button>
    )
  },
  {
    id: "rim-light",
    title: "Rim Light",
    codeSnippet: `<button className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></span>
    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
      <div className="relative z-10 flex items-center space-x-2">
        <span className="transition-all duration-500 group-hover:translate-x-1">Let's get started</span>
        <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path>
        </svg>
      </div>
    </span>
  </button>`,
    Component: () => (
      <button className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></span>
        <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
          <div className="relative z-10 flex items-center space-x-2">
            <span className="transition-all duration-500 group-hover:translate-x-1">Let's get started</span>
            <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path>
            </svg>
          </div>
        </span>
      </button>
    )
  },
  {
    id: "shiny-button",
    title: "Shiny 1",
    codeSnippet: `<button className="group relative px-[30px] py-[16px] text-[17px] text-white bg-black/80 rounded-[20px] backdrop-blur-[15px] cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.15)] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-sans tracking-[0.5px] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-black/75 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:tracking-[1.5px] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_5px_15px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.15)] active:bg-white/20 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-[600ms] hover:before:left-full after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] after:opacity-0 after:transition-opacity after:duration-[400ms] after:ease-in-out hover:after:opacity-100" type="button">
    <span className="relative z-10 font-medium">Ooh Shiny!</span>
  </button>`,
    Component: () => (
      <button className="group relative px-[30px] py-[16px] text-[17px] text-white bg-black/80 rounded-[20px] backdrop-blur-[15px] cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.15)] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-sans tracking-[0.5px] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-black/75 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:tracking-[1.5px] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_5px_15px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.15)] active:bg-white/20 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-[600ms] hover:before:left-full after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] after:opacity-0 after:transition-opacity after:duration-[400ms] after:ease-in-out hover:after:opacity-100" type="button">
        <span className="relative z-10 font-medium">Ooh Shiny!</span>
      </button>
    )
  },
  {
    id: "shine-shift",
    title: "Shiny 2",
    codeSnippet: `// Use this inside your global css file 
@keyframes shine {
    0% { left: -100px; }
    60%, 100% { left: 100%; }
}

// Tailwind 
<button className="group relative flex items-center justify-center gap-[10px] px-[1.25rem] py-[0.5rem] bg-[rgb(0,107,179)] text-white font-bold text-[15px] border-[3px] border-[#ffffff4d] rounded-full cursor-pointer overflow-hidden outline-none shadow-[0px_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#fff9] before:content-[''] before:absolute before:top-0 before:left-[-100px] before:w-[100px] before:h-full before:opacity-60 before:bg-[linear-gradient(120deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)] hover:before:animate-[shine_1.5s_ease-out_infinite]" type="button">
    Apply Now
    <svg className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[4px]" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
    </svg>
</button>`,
    Component: () => (
      <button className="group relative flex items-center justify-center gap-[10px] px-[1.25rem] py-[0.5rem] bg-[rgb(0,107,179)] text-white font-bold text-[15px] border-[3px] border-[#ffffff4d] rounded-full cursor-pointer overflow-hidden outline-none shadow-[0px_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#fff9] before:content-[''] before:absolute before:top-0 before:left-[-100px] before:w-[100px] before:h-full before:opacity-60 before:bg-[linear-gradient(120deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)] hover:before:animate-[shine_1.5s_ease-out_infinite]" type="button">
        Apply Now
        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[4px]" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
        </svg>
      </button>
    )
  },
  {
    id: "transform",
    title: "Transform",
    codeSnippet: `<button className="group relative flex items-center gap-[4px] px-[36px] py-[16px] border-[4px] border-transparent rounded-[100px] font-semibold text-[greenyellow] shadow-[0_0_0_2px_greenyellow] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[#212121] hover:rounded-[12px] active:scale-[0.95] active:shadow-[0_0_0_4px_greenyellow]">
<svg viewBox="0 0 24 24" className="absolute w-[24px] fill-[greenyellow] z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] left-[-25%] group-hover:left-[16px] group-hover:fill-[#212121]" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
</svg>
<span className="relative z-[1] -translate-x-[12px] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[12px]">Contact Us</span>
<span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[20px] h-[20px] bg-[greenyellow] rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
<svg viewBox="0 0 24 24" className="absolute w-[24px] fill-[greenyellow] z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] right-[16px] group-hover:right-[-25%] group-hover:fill-[#212121]" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
</svg>
</button>`,
    Component: () => (
      <button className="group relative flex items-center gap-[4px] px-[36px] py-[16px] border-[4px] border-transparent rounded-[100px] font-semibold text-[greenyellow] shadow-[0_0_0_2px_greenyellow] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[#212121] hover:rounded-[12px] active:scale-[0.95] active:shadow-[0_0_0_4px_greenyellow]">
        <svg viewBox="0 0 24 24" className="absolute w-[24px] fill-[greenyellow] z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] left-[-25%] group-hover:left-[16px] group-hover:fill-[#212121]" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="relative z-[1] -translate-x-[12px] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[12px]">Contact Us</span>
        <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[20px] h-[20px] bg-[greenyellow] rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
        <svg viewBox="0 0 24 24" className="absolute w-[24px] fill-[greenyellow] z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] right-[16px] group-hover:right-[-25%] group-hover:fill-[#212121]" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    )
  },

  {
    id: "peel-button",
    title: "Peel",
    codeSnippet: `<button className="relative text-[1.2em] px-[1.4em] py-[0.7em] bg-[#BF0426] border-none rounded-[0.5em] text-[#DEDEDE] shadow-[0.5em_0.5em_0.5em_rgba(0,0,0,0.3)] active:shadow-[0.2em_0.2em_0.3em_rgba(0,0,0,0.3)] active:translate-x-[0.1em] active:translate-y-[0.1em] before:absolute before:content-[''] before:h-0 before:w-0 before:top-0 before:left-0 before:bg-[linear-gradient(135deg,#212121_0%,#212121_50%,#96041F_50%,#BF0426_60%)] before:rounded-br-[0.5em] before:shadow-[0.2em_0.2em_0.2em_rgba(0,0,0,0.3)] before:transition-all before:duration-300 hover:before:w-[1.6em] hover:before:h-[1.6em]">
    <b>Peel me!</b>
  </button>`,
    Component: () => (
      <button className="relative text-[1.2em] px-[1.4em] py-[0.7em] bg-[#BF0426] border-none rounded-[0.5em] text-[#DEDEDE] shadow-[0.5em_0.5em_0.5em_rgba(0,0,0,0.3)] active:shadow-[0.2em_0.2em_0.3em_rgba(0,0,0,0.3)] active:translate-x-[0.1em] active:translate-y-[0.1em] before:absolute before:content-[''] before:h-0 before:w-0 before:top-0 before:left-0 before:bg-[linear-gradient(135deg,#212121_0%,#212121_50%,#96041F_50%,#BF0426_60%)] before:rounded-br-[0.5em] before:shadow-[0.2em_0.2em_0.2em_rgba(0,0,0,0.3)] before:transition-all before:duration-300 hover:before:w-[1.6em] hover:before:h-[1.6em]">
        <b>Peel me!</b>
      </button>
    )
  }
]