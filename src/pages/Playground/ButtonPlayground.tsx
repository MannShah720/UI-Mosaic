import {useState} from "react"
import {Plus, ChevronRight} from "lucide-react"
import {CodeModal} from "../../components/Modal/CodeModal"
import {VariantCard} from "../../components/Cards/VariantCard"
import {getButtonPlaygroundVariants} from "../../data/buttonPlaygroundSnippets"

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

export const ButtonPlayground = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState("")
  
  const [btnState, setBtnState] = useState<"none" | "start" | "end" | "loading" | "circular-loader">("none")
  const [radius, setRadius] = useState<keyof typeof radiusMap>("md")
  const [size, setSize] = useState<keyof typeof sizeMap>("md")

  const isLoading = btnState === "loading" || btnState === "circular-loader"
  const isCircular = btnState === "circular-loader"
  const leftIcon = btnState === "start" ? <Plus size={16} /> : undefined
  const rightIcon = btnState === "end" ? <ChevronRight size={16} /> : undefined
  
  const radiusClass = radiusMap[radius]
  const sizeClass = sizeMap[size]

  const variants = getButtonPlaygroundVariants({
    btnState,
    radiusClass,
    sizeClass,
    leftIcon,
    rightIcon,
    isLoading,
    isCircular
  })

  return (
    <div className="max-w-6xl">
      {/* CONTROL PANEL */}
      <div className="mb-8 p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm flex flex-wrap items-end gap-6 transition-colors">
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Button Controls</h3>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">State</label>
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

      {/* RENDER VARIANTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variants.map(({id, title, needsBackground, codeSnippet, Component}) => (
          <VariantCard
            key={id}
            title={title}
            needsBackground={needsBackground}
            onCopy={() => {
              setActiveCode(codeSnippet)
              setModalOpen(true)
            }}
          >
            <Component />
          </VariantCard>
        ))}
      </div>
      
      <CodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} code={activeCode} />
    </div>
  )
}