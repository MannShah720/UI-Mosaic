import { useState } from "react"
import { Plus, ChevronRight, Loader2, Copy } from "lucide-react"
import {
  ButtonSolid, ButtonSoft, ButtonOutlined, ButtonBold, ButtonPlayful, 
  ButtonGhost, ButtonElevated, ButtonDestructive, ButtonGlass
} from "../Button/Button"
import { CodeModal } from "../Modal/CodeModal"

export const ComponentDisplay = ({ componentName }: {componentName: string}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState("")
  
  const [btnState, setBtnState] = useState<'none' | 'start' | 'end' | 'loading' | 'circular-loader'>('none')

  const isLoading = btnState === 'loading' || btnState === 'circular-loader'
  const isCircular = btnState === 'circular-loader'
  const leftIcon = btnState === 'start' ? <Plus size={16} /> : undefined
  const rightIcon = btnState === 'end' ? <ChevronRight size={16} /> : undefined

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

    return `${imports}\n<button className="${className}">\n  ${content}\n</button>`
  }

  const VariantCard = ({ title, className, children, needsBackground = false }: { title: string, className: string, children: React.ReactNode, needsBackground?: boolean }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <button 
          onClick={() => { setActiveCode(getCodeSnippet(className)); setModalOpen(true) }} 
          className="p-2 text-gray-400 hover:text-gray-900 transition"
          title="Copy Code"
        >
          <Copy size={18} />
        </button>
      </div>
      {/* If needsBackground is true, wrap the content in the gradient container */}
      {needsBackground ? (
        <div className="w-full h-32 rounded-lg bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center">
          {children}
        </div>
      ) : (
        <div className="w-full h-32 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )

  if (componentName === "Button") {
    return (
      <div className="max-w-6xl">
        {/* CONTROL PANEL */}
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-4 shadow-sm">
          <span className="font-semibold text-gray-900 text-2xl">Button</span>
          <select 
            value={btnState} 
            onChange={(e) => setBtnState(e.target.value as any)} 
            className="px-3 py-2 border rounded-lg text-sm bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="none">Default</option>
            <option value="start">Start Icon</option>
            <option value="end">End Icon</option>
            <option value="loading">Loading...</option>
            <option value="circular-loader">Circular Loader</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VariantCard title="Solid" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition cursor-pointer disabled:opacity-50">
            <ButtonSolid leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonSolid>
          </VariantCard>

          <VariantCard title="Soft" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition cursor-pointer disabled:opacity-50">
            <ButtonSoft leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonSoft>
          </VariantCard>

          <VariantCard title="Outlined" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 transition cursor-pointer disabled:opacity-50">
            <ButtonOutlined leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonOutlined>
          </VariantCard>

          <VariantCard title="Bold" className="px-4 py-3 text-base font-bold rounded-lg bg-black text-white hover:bg-gray-900 transition cursor-pointer disabled:opacity-50">
            <ButtonBold leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonBold>
          </VariantCard>

          <VariantCard title="Playful" className="px-5 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition cursor-pointer disabled:opacity-50">
            <ButtonPlayful leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonPlayful>
          </VariantCard>

          <VariantCard title="Ghost" className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 bg-transparent hover:bg-gray-100 transition cursor-pointer disabled:opacity-50">
            <ButtonGhost leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonGhost>
          </VariantCard>

          <VariantCard title="Elevated" className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100 transition cursor-pointer disabled:opacity-50">
            <ButtonElevated leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonElevated>
          </VariantCard>

          <VariantCard title="Destructive" className="px-4 py-2 text-sm font-medium rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer disabled:opacity-50">
            <ButtonDestructive leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonDestructive>
          </VariantCard>
          
          <VariantCard needsBackground title="Glass" className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 text-gray-900 transition cursor-pointer disabled:opacity-50">
            <ButtonGlass leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} isCircular={isCircular}>Button</ButtonGlass>
          </VariantCard>
        </div>
        
        <CodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} code={activeCode} />
      </div>
    )
  }
  return <div className="text-gray-500 font-medium">Component not found</div>
}