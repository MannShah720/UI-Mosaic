import React from "react"

export interface ButtonVariant {
  id: string;
  title: string;
  codeSnippet: string;
  Component: React.ComponentType;
}

export const buttonVariants: ButtonVariant[] = [
  {
    id: "github-star",
    title: "GitHub Star",
    codeSnippet: `<button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
  <div className="flex items-center">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
    <span className="ml-1 text-white">Star on GitHub</span>
  </div>
  <div className="ml-2 flex items-center gap-1 text-sm md:flex">
    <svg className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fillRule="evenodd"></path>
    </svg>
    <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">6</span>
  </div>
</button>`,
    Component: () => (
      <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
        <div className="flex items-center">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
            <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
          </svg>
          <span className="ml-1 text-white">Star on GitHub</span>
        </div>
        <div className="ml-2 flex items-center gap-1 text-sm md:flex">
          <svg className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fillRule="evenodd"></path>
          </svg>
          <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">6</span>
        </div>
      </button>
    )
  },
  {
    id: "go-back",
    title: "Slide",
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
    title: "Shiny",
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
  }
]