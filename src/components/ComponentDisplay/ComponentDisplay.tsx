import { useState } from "react"
import { Plus, ChevronRight, Loader2 } from "lucide-react"
import {
  ButtonSolid, ButtonSoft, ButtonOutlined, ButtonBold, ButtonPlayful, 
  ButtonGhost, ButtonElevated, ButtonDestructive, ButtonGlass
} from "../Button/Button"
import { CodeModal } from "../Modal/CodeModal"
import { VariantCard } from "../Cards/VariantCard"

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}

const sizeMap = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
}

export const ComponentDisplay = ({ componentName }: {componentName: string}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState("")
  
  const [btnState, setBtnState] = useState<'none' | 'start' | 'end' | 'loading' | 'circular-loader'>('none')
  const [radius, setRadius] = useState<keyof typeof radiusMap>('md')
  const [size, setSize] = useState<keyof typeof sizeMap>('md')

  const isLoading = btnState === 'loading' || btnState === 'circular-loader'
  const isCircular = btnState === 'circular-loader'
  const leftIcon = btnState === 'start' ? <Plus size={16} /> : undefined
  const rightIcon = btnState === 'end' ? <ChevronRight size={16} /> : undefined
  
  const radiusClass = radiusMap[radius]
  const sizeClass = sizeMap[size]

  const getCodeSnippet = (className: string) => {
    let imports = ""
    let content = "Button"
    
    if (btnState === 'loading') {
      content = "Loading..."
    } else if (btnState === 'circular-loader') {
      imports = `import {Loader2} from "lucide-react";\n`
      content = `<Loader2 className="animate-spin" size={18} />`
    } else if (btnState === 'start') {
      imports = `import {Plus} from "lucide-react";\n`
      content = `<Plus size={16} />\n  Button`
    } else if (btnState === 'end') {
      imports = `import {ChevronRight} from "lucide-react";\n`
      content = `Button\n  <ChevronRight size={16} />`
    }

    return `${imports}\n<button className="${className} ${radiusClass} ${sizeClass}">\n  ${content}\n</button>`
  }

  if (componentName === "Button") {
    return (
      <div className="max-w-6xl">
        {/* CONTROL PANEL */}
        <div className="mb-8 p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm flex flex-wrap items-end gap-6 transition-colors">
          <div className="flex items-center justify-between w-full mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Button Controls</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Interaction State</label>
            <select value={btnState} onChange={(e) => setBtnState(e.target.value as any)} className="px-3 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 w-48">
              <option value="none">Default</option>
              <option value="start">Start Icon</option>
              <option value="end">End Icon</option>
              <option value="loading">Loading...</option>
              <option value="circular-loader">Circular Loader</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Corner Radius</label>
            <select value={radius} onChange={(e) => setRadius(e.target.value as any)} className="px-3 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 w-48">
              <option value="none">Sharp (None)</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="full">Full</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Size Scale</label>
            <select value={size} onChange={(e) => setSize(e.target.value as any)} className="px-3 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 w-48">
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VariantCard title="Solid" onCopy={() => { setActiveCode(getCodeSnippet("bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonSolid leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonSolid>
          </VariantCard>

          <VariantCard title="Soft" onCopy={() => { setActiveCode(getCodeSnippet("bg-blue-50 text-blue-700 hover:bg-blue-100 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonSoft leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonSoft>
          </VariantCard>

          <VariantCard title="Outlined" onCopy={() => { setActiveCode(getCodeSnippet("border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonOutlined leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonOutlined>
          </VariantCard>

          <VariantCard title="Bold" onCopy={() => { setActiveCode(getCodeSnippet("bg-black text-white hover:bg-gray-900 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonBold leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonBold>
          </VariantCard>

          <VariantCard title="Playful" onCopy={() => { setActiveCode(getCodeSnippet("bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonPlayful leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonPlayful>
          </VariantCard>

          <VariantCard title="Ghost" onCopy={() => { setActiveCode(getCodeSnippet("text-gray-600 bg-transparent hover:bg-gray-100 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonGhost leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonGhost>
          </VariantCard>

          <VariantCard title="Elevated" onCopy={() => { setActiveCode(getCodeSnippet("bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonElevated leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonElevated>
          </VariantCard>

          <VariantCard title="Destructive" onCopy={() => { setActiveCode(getCodeSnippet("bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonDestructive leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonDestructive>
          </VariantCard>
          
          <VariantCard needsBackground title="Glass" onCopy={() => { setActiveCode(getCodeSnippet("bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 text-gray-900 transition cursor-pointer disabled:opacity-50")); setModalOpen(true) }}>
            <ButtonGlass leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular} radiusClass={radiusClass} sizeClass={sizeClass}>Button</ButtonGlass>
          </VariantCard>
        </div>
        
        <CodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} code={activeCode} />
      </div>
    )
  }
  return <div className="text-gray-500 font-medium">Component not found</div>
}