import React from "react"

export interface IconVariant {
  id: string;
  title: string;
  codeSnippet: string;
  Component: React.ComponentType;
}

export const iconVariants: IconVariant[] = [
  {
    id: "trash-lid",
    title: "Trash Lid",
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
    id: "expand-delete",
    title: "Expand Delete",
    codeSnippet: `<button className="group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-[#141414] shadow-[0px_0px_20px_rgba(0,0,0,0.164)] transition-all duration-300 hover:w-[140px] hover:bg-[#ff4545]">
<svg className="w-[12px] fill-white transition-all duration-300 group-hover:w-[50px] group-hover:translate-y-[60%]" viewBox="0 0 448 512">
  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
</svg>
<span className="absolute -top-[20px] text-[2px] text-white opacity-0 transition-all duration-300 group-hover:translate-y-[30px] group-hover:text-[13px] group-hover:opacity-100">
  Delete
</span>
</button>`,
    Component: () => (
      <button className="group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-[#141414] shadow-[0px_0px_20px_rgba(0,0,0,0.164)] transition-all duration-300 hover:w-[140px] hover:bg-[#ff4545]">
        <svg className="w-[12px] fill-white transition-all duration-300 group-hover:w-[50px] group-hover:translate-y-[60%]" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
        <span className="absolute -top-[20px] text-[2px] text-white opacity-0 transition-all duration-300 group-hover:translate-y-[30px] group-hover:text-[13px] group-hover:opacity-100">
          Delete
        </span>
      </button>
    )
  },
  {
    id: "reveal",
    title: "Expand to Text",
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
    id: "spinning-compass",
    title: "Spinning Compass",
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
    id: "neo-morphic",
    title: "Neomorphic",
    codeSnippet: `<div className="relative h-[100px] w-[100px]">
  <input type="checkbox" className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" />
  <span className="absolute left-1/2 top-1/2 -ml-[34.4px] -mt-[34.4px] block h-[68.8px] w-[68.8px] rounded-full bg-[#eaeaea] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_15px_25px_-4px_rgba(0,0,0,0.5),inset_0_-3px_4px_-1px_rgba(0,0,0,0.2),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_3px_4px_-1px_rgba(255,255,255,0.2),inset_0_0_5px_1px_rgba(255,255,255,0.8),inset_0_20px_30px_0_rgba(255,255,255,0.2)] peer-active:blur-[0.5px] peer-active:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.4),inset_0_-8px_30px_1px_rgba(255,255,255,0.9),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_8px_25px_0_rgba(0,0,0,0.4),inset_0_0_10px_1px_rgba(255,255,255,0.6)] peer-checked:blur-[0.5px] peer-checked:shadow-[0_10px_25px_-4px_rgba(0,0,0,0.4),inset_0_-8px_25px_-1px_rgba(255,255,255,0.9),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_8px_20px_0_rgba(0,0,0,0.2),inset_0_0_5px_1px_rgba(255,255,255,0.6)]"></span>
  <span className="pointer-events-none absolute flex h-full w-full items-center justify-center text-[28px] font-bold opacity-90 transition-colors duration-300 ease-out text-[rgba(0,0,0,0.9)] peer-active:text-[26px] peer-active:text-[rgba(0,0,0,0.45)] peer-checked:text-[rgba(0,0,0,0.8)]">
    ☼
  </span>
</div>`,
    Component: () => (
      <div className="relative h-[100px] w-[100px]">
        <input type="checkbox" className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" />
        <span className="absolute left-1/2 top-1/2 -ml-[34.4px] -mt-[34.4px] block h-[68.8px] w-[68.8px] rounded-full bg-[#eaeaea] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_15px_25px_-4px_rgba(0,0,0,0.5),inset_0_-3px_4px_-1px_rgba(0,0,0,0.2),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_3px_4px_-1px_rgba(255,255,255,0.2),inset_0_0_5px_1px_rgba(255,255,255,0.8),inset_0_20px_30px_0_rgba(255,255,255,0.2)] peer-active:blur-[0.5px] peer-active:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.4),inset_0_-8px_30px_1px_rgba(255,255,255,0.9),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_8px_25px_0_rgba(0,0,0,0.4),inset_0_0_10px_1px_rgba(255,255,255,0.6)] peer-checked:blur-[0.5px] peer-checked:shadow-[0_10px_25px_-4px_rgba(0,0,0,0.4),inset_0_-8px_25px_-1px_rgba(255,255,255,0.9),0_-10px_15px_-1px_rgba(255,255,255,0.6),inset_0_8px_20px_0_rgba(0,0,0,0.2),inset_0_0_5px_1px_rgba(255,255,255,0.6)]"></span>
        <span className="pointer-events-none absolute flex h-full w-full items-center justify-center text-[28px] font-bold opacity-90 transition-colors duration-300 ease-out text-[rgba(0,0,0,0.9)] peer-active:text-[26px] peer-active:text-[rgba(0,0,0,0.45)] peer-checked:text-[rgba(0,0,0,0.8)]">
          ☼
        </span>
      </div>
    )
  },
  {
    id: "notification-bell",
    title: "Notification Bell",
    codeSnippet: `<button className="group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-[#2c2c2c] shadow-[2px_2px_10px_rgba(0,0,0,0.13)] transition-colors duration-300 hover:bg-[#383838] active:scale-[0.8]">
<style>{\`
  @keyframes bellRing {
    0%, 100% { transform-origin: top; }
    15% { transform: rotateZ(10deg); }
    30% { transform: rotateZ(-10deg); }
    45% { transform: rotateZ(5deg); }
    60% { transform: rotateZ(-5deg); }
    75% { transform: rotateZ(2deg); }
  }
\`}</style>
<svg className="w-[18px] fill-white group-hover:[animation:bellRing_0.9s_both]" viewBox="0 0 448 512">
  <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
</svg>
</button>`,
    Component: () => (
      <button className="group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-[#2c2c2c] shadow-[2px_2px_10px_rgba(0,0,0,0.13)] transition-colors duration-300 hover:bg-[#383838] active:scale-[0.8]">
        <style>{`
          @keyframes bellRing {
            0%, 100% { transform-origin: top; }
            15% { transform: rotateZ(10deg); }
            30% { transform: rotateZ(-10deg); }
            45% { transform: rotateZ(5deg); }
            60% { transform: rotateZ(-5deg); }
            75% { transform: rotateZ(2deg); }
          }
        `}</style>
        <svg className="w-[18px] fill-white group-hover:[animation:bellRing_0.9s_both]" viewBox="0 0 448 512">
          <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
        </svg>
      </button>
    )
  },
  {
    id: "clipboard-copy",
    title: "Copy to Clipboard",
    codeSnippet: `<button className="group relative flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[10px] border-none bg-[#353434] text-[#CCCCCC] outline-none transition-colors duration-300 hover:bg-[#464646] hover:text-[#8bb9fe] active:outline-[1px] active:outline-[rgb(141,141,141)]">
  <div className="pointer-events-none absolute -top-[35px] left-1/2 flex -translate-x-1/2 items-center whitespace-nowrap rounded-[4px] bg-[#f4f3f3] px-[7px] py-[7px] text-[12px] text-[rgb(50,50,50)] opacity-0 transition-all duration-300 group-hover:opacity-100 font-mono">
    <span className="group-focus:hidden">Copy to clipboard</span>
    <span className="hidden group-focus:block">Copied!</span>
    <div className="absolute -bottom-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rotate-45 bg-[#f4f3f3] z-[-1]"></div>
  </div>
  <svg className="clipboard group-focus:hidden" height="20" width="20" viewBox="0 0 6.35 6.35">
    <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
  </svg>
  <svg className="checkmark hidden group-focus:block" height="18" width="18" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 2.121 0z"></path>
  </svg>
</button>`,
    Component: () => (
      <button className="group relative flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[10px] border-none bg-[#353434] text-[#CCCCCC] outline-none transition-colors duration-300 hover:bg-[#464646] hover:text-[#8bb9fe] active:outline-[1px] active:outline-[rgb(141,141,141)]">
        <div className="pointer-events-none absolute -top-[35px] left-1/2 flex -translate-x-1/2 items-center whitespace-nowrap rounded-[4px] bg-[#f4f3f3] px-[7px] py-[7px] text-[12px] text-[rgb(50,50,50)] opacity-0 transition-all duration-300 group-hover:opacity-100 font-mono">
          <span className="group-focus:hidden">Copy to clipboard</span>
          <span className="hidden group-focus:block">Copied!</span>
          <div className="absolute -bottom-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rotate-45 bg-[#f4f3f3] z-[-1]"></div>
        </div>
        <svg className="clipboard group-focus:hidden" height="20" width="20" viewBox="0 0 6.35 6.35">
          <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
        </svg>
        <svg className="checkmark hidden group-focus:block" height="18" width="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 2.121 0z"></path>
        </svg>
      </button>
    )
  }
]