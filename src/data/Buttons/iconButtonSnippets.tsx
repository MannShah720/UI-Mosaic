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
]