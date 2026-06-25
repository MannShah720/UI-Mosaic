import React from "react"
import {Loader2} from "lucide-react"
import {
  ButtonSolid, ButtonSoft, ButtonOutlined, ButtonBold, ButtonPlayful, 
  ButtonGhost, ButtonElevated, ButtonDestructive, ButtonGlass
} from "../../components/Button/Button"

interface GeneratorParams {
  btnState: "none" | "start" | "end" | "loading" | "circular-loader";
  radiusClass: string;
  sizeClass: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  isLoading: boolean;
  isCircular: boolean;
}

export interface ButtonPlaygroundVariant {
  id: string;
  title: string;
  needsBackground?: boolean;
  codeSnippet: string;
  Component: React.ComponentType;
}

const getCodeSnippet = (className: string, btnState: string, radiusClass: string, sizeClass: string, defaultText: string = "Button") => {
  let imports = ""
  let content = defaultText
  
  if (btnState === "loading") {
    content = "Loading..."
  } else if (btnState === "circular-loader") {
    imports = `import {Loader2} from "lucide-react";\n`
    content = `<Loader2 className="animate-spin" size={18} />`
  } else if (btnState === "start") {
    imports = `import {Plus} from "lucide-react";\n`
    content = `<Plus size={16} />\n  ${defaultText}`
  } else if (btnState === "end") {
    imports = `import {ChevronRight} from "lucide-react";\n`
    content = `${defaultText}\n  <ChevronRight size={16} />`
  }

  return `${imports}\n<button className="${className} ${radiusClass} ${sizeClass}">\n  ${content}\n</button>`
}

const getLightUpCodeSnippet = (btnState: string, radiusClass: string, sizeClass: string) => {
  let imports = ""
  let content = "Button"
  
  if (btnState === "loading") {
    content = "Loading..."
  } else if (btnState === "circular-loader") {
    imports = `import {Loader2} from "lucide-react";\n`
    content = `<Loader2 className="animate-spin" size={18} />`
  } else if (btnState === "start") {
    imports = `import {Plus} from "lucide-react";\n`
    content = `<Plus size={16} />\n  Button`
  } else if (btnState === "end") {
    imports = `import {ChevronRight} from "lucide-react";\n`
    content = `Button\n  <ChevronRight size={16} />`
  }

  return `${imports}\n<button className="p-[3px] relative cursor-pointer disabled:opacity-50 group">\n  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 ${radiusClass}" />\n  <div className="inline-flex items-center justify-center gap-2 bg-black relative transition duration-200 text-white hover:bg-transparent ${radiusClass} ${sizeClass}">\n    ${content}\n  </div>\n</button>`
}

export const getButtonPlaygroundVariants = (params: GeneratorParams): ButtonPlaygroundVariant[] => {
  const {btnState, radiusClass, sizeClass, leftIcon, rightIcon, isLoading, isCircular} = params

  return [
    {
      id: "solid",
      title: "Solid",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonSolid leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonSolid>
      )
    },
    {
      id: "outlined",
      title: "Outlined",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonOutlined leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonOutlined>
      )
    },
    {
      id: "soft",
      title: "Soft",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonSoft leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonSoft>
      )
    },
    {
      id: "bold-solid",
      title: "Bold Solid",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-900 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonBold leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonBold>
      )
    },
    {
      id: "bold-outlined",
      title: "Bold Outlined",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 shadow-[0_0_0_3px_#000000_inset] dark:shadow-[0_0_0_3px_#ffffff_inset] bg-transparent border border-black dark:border-white dark:text-white text-black font-bold cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass, "Button"),
      Component: () => {
        const content = isLoading ? (isCircular ? <Loader2 className="animate-spin" size={18} /> : "Loading...") : (<>{leftIcon} Button {rightIcon}</>)
        return (
          <button className={`inline-flex items-center justify-center gap-2 shadow-[0_0_0_3px_#000000_inset] dark:shadow-[0_0_0_3px_#ffffff_inset] bg-transparent border border-black dark:border-white dark:text-white text-black font-bold cursor-pointer disabled:opacity-50 ${radiusClass} ${sizeClass}`} disabled={isLoading}>
            {content}
          </button>
        )
      }
    },
    {
      id: "ghost",
      title: "Ghost",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 text-gray-600 bg-transparent hover:bg-gray-100 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonGhost leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonGhost>
      )
    },
    {
      id: "gradient-1",
      title: "Gradient 1",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonPlayful leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonPlayful>
      )
    },
    {
      id: "gradient-2",
      title: "Gradient 2",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass, "Button"),
      Component: () => {
        const content = isLoading ? (isCircular ? <Loader2 className="animate-spin" size={18} /> : "Loading...") : (<>{leftIcon} Button {rightIcon}</>)
        return (
          <button className={`inline-flex items-center justify-center gap-2 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer disabled:opacity-50 ${radiusClass} ${sizeClass}`} disabled={isLoading}>
            {content}
          </button>
        )
      }
    },
    {
      id: "elevated",
      title: "Elevated",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonElevated leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonElevated>
      )
    },
    {
      id: "destructive",
      title: "Destructive",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonDestructive leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonDestructive>
      )
    },
    {
      id: "glass",
      title: "Glass",
      needsBackground: true,
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 text-gray-900 transition cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass),
      Component: () => (
        <ButtonGlass leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonGlass>
      )
    },
    {
      id: "sketch",
      title: "Sketch",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 border border-black bg-white text-black font-medium hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass, "Button"),
      Component: () => {
        const content = isLoading ? (isCircular ? <Loader2 className="animate-spin" size={18} /> : "Loading...") : (<>{leftIcon} Button {rightIcon}</>)
        return (
          <button className={`inline-flex items-center justify-center gap-2 border border-black bg-white text-black font-medium hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer disabled:opacity-50 ${radiusClass} ${sizeClass}`} disabled={isLoading}>
            {content}
          </button>
        )
      }
    },
    {
      id: "invert",
      title: "Invert",
      codeSnippet: getCodeSnippet("inline-flex items-center justify-center gap-2 bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 cursor-pointer disabled:opacity-50", btnState, radiusClass, sizeClass, "Button"),
      Component: () => {
        const content = isLoading ? (isCircular ? <Loader2 className="animate-spin" size={18} /> : "Loading...") : (<>{leftIcon} Button {rightIcon}</>)
        return (
          <button className={`inline-flex items-center justify-center gap-2 bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 cursor-pointer disabled:opacity-50 ${radiusClass} ${sizeClass}`} disabled={isLoading}>
            {content}
          </button>
        )
      }
    },
    {
      id: "light-up",
      title: "Light Up",
      codeSnippet: getLightUpCodeSnippet(btnState, radiusClass, sizeClass),
      Component: () => {
        const content = isLoading ? (isCircular ? <Loader2 className="animate-spin" size={18} /> : "Loading...") : (<>{leftIcon} Button {rightIcon}</>)
        return (
          <button className="p-[3px] relative cursor-pointer disabled:opacity-50 group" disabled={isLoading}>
            <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 ${radiusClass}`} />
            <div className={`inline-flex items-center justify-center gap-2 bg-black relative transition duration-200 text-white hover:bg-transparent ${radiusClass} ${sizeClass}`}>
              {content}
            </div>
          </button>
        )
      }
    }
  ]
}