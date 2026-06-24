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
    id: "expand",
    title: "Expand",
    codeSnippet: `<button className="group flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-[rgb(255,65,65)] hover:w-[125px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]" type="button">
    <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:w-[30%] group-hover:pl-[20px]">
      <svg className="w-[17px] fill-white" viewBox="0 0 512 512">
        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
      </svg>
    </div>
    <div className="absolute right-0 w-0 opacity-0 text-white text-[1.2em] font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-[10px] whitespace-nowrap">
      Logout
    </div>
  </button>`,
    Component: () => (
      <button className="group flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-[rgb(255,65,65)] hover:w-[125px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]" type="button">
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:w-[30%] group-hover:pl-[20px]">
          <svg className="w-[17px] fill-white" viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="absolute right-0 w-0 opacity-0 text-white text-[1.2em] font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-[10px] whitespace-nowrap">
          Logout
        </div>
      </button>
    )
  },
  {
    id: "spin-expand",
    title: "Expand & Spin",
    codeSnippet: `<button className="group flex items-center justify-start w-[40px] h-[40px] gap-[10px] bg-[rgb(161,255,20)] rounded-[30px] text-[rgb(19,19,19)] font-semibold border-none relative cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.116)] pl-[7.5px] overflow-hidden transition-all duration-500 hover:w-[125px] hover:bg-[rgb(192,255,20)] active:scale-[0.97]" type="button">
    <div className="flex items-center justify-center shrink-0">
      <svg className="h-[25px] w-[25px] fill-[rgb(19,19,19)] transition-transform duration-1500 ease-out group-hover:rotate-[250deg]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
      </svg>
    </div>
    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap low-dpi:tracking-wide">
      Explore
    </span>
  </button>`,
    Component: () => (
      <button className="group flex items-center justify-start w-[40px] h-[40px] gap-[10px] bg-[rgb(161,255,20)] rounded-[30px] text-[rgb(19,19,19)] font-semibold border-none relative cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.116)] pl-[7.5px] overflow-hidden transition-all duration-500 hover:w-[125px] hover:bg-[rgb(192,255,20)] active:scale-[0.97]" type="button">
        <div className="flex items-center justify-center shrink-0">
          <svg className="h-[25px] w-[25px] fill-[rgb(19,19,19)] transition-transform duration-1500 ease-out group-hover:rotate-[250deg]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
        </div>
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          Explore
        </span>
      </button>
    )
  },
  {
    id: "bin-lid-flip",
    title: "Trash Flip",
    codeSnippet: `<button className="group flex flex-col items-center justify-center w-[55px] h-[55px] rounded-[15px] bg-[rgb(255,95,95)] cursor-pointer border-[3px] border-[rgb(255,201,201)] transition-all duration-300 hover:bg-[rgb(255,0,0)] active:scale-[0.9]" type="button">
    <svg className="w-[17px] origin-right transition-transform duration-300 group-hover:rotate-[45deg]" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
      <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3"></line>
    </svg>
    <svg className="w-[15px]" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_8_19" fill="white">
        <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
      </mask>
      <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
      <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
      <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
    </svg>
  </button>`,
    Component: () => (
      <button className="group flex flex-col items-center justify-center w-[55px] h-[55px] rounded-[15px] bg-[rgb(255,95,95)] cursor-pointer border-[3px] border-[rgb(255,201,201)] transition-all duration-300 hover:bg-[rgb(255,0,0)] active:scale-[0.9]" type="button">
        <svg className="w-[17px] origin-right transition-transform duration-300 group-hover:rotate-[45deg]" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
          <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3"></line>
        </svg>
        <svg className="w-[15px]" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_8_19" fill="white">
            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
          </mask>
          <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
          <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
          <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
        </svg>
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
    id: "explore",
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
        Pearl Button
      </p>
    </div>
  </button>`,
    Component: () => (
      <button className="group outline-none cursor-pointer border-0 relative rounded-[100px] bg-[#080808] transition-all duration-200 ease-in-out shadow-[inset_0_0.3rem_0.9rem_rgba(255,255,255,0.3),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.5),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] hover:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.4),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.7),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.7),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)] active:translate-y-[4px] active:shadow-[inset_0_0.3rem_0.5rem_rgba(255,255,255,0.5),inset_0_-0.1rem_0.3rem_rgba(0,0,0,0.8),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.4),0_3rem_3rem_rgba(0,0,0,0.3),0_1rem_1rem_-0.6rem_rgba(0,0,0,0.8)]" type="button">
        <div className="text-[25px] font-medium text-white/70 px-[45px] py-[32px] rounded-[inherit] relative overflow-hidden before:content-[''] before:absolute before:transition-all before:duration-300 before:ease-in-out before:-left-[15%] before:-right-[15%] before:bottom-[25%] before:-top-[100%] before:rounded-full before:bg-white/12 group-hover:before:-translate-y-[5%] after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:left-[6%] after:right-[6%] after:top-[12%] after:bottom-[40%] after:rounded-t-[22px] after:shadow-[inset_0_10px_8px_-10px_rgba(255,255,255,0.8)] after:bg-gradient-to-b after:from-white/30 after:via-transparent after:to-transparent group-hover:after:opacity-40 group-hover:after:translate-y-[5%]">
          <p className="flex items-center gap-[12px] m-0 transition-all duration-200 ease-in-out translate-y-[2%] [mask-image:linear-gradient(to_bottom,white_40%,transparent)] group-hover:-translate-y-[4%]">
            <span className="inline-block group-hover:hidden">✧</span>
            <span className="hidden group-hover:inline-block">✦</span>
            Pearl Button
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
]