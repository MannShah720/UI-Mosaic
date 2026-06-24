import {Plus, ChevronRight} from "lucide-react"

import { useState } from "react"
import {
  ButtonSolid,
  ButtonSoft,
  ButtonOutlined,
  ButtonPlayful,
  ButtonElevated,
  ButtonGlass,
} from "../Button/Button"
import { CodeModal } from "../Modal/CodeModal"
import { buttonSnippets } from "../../data/codeSnippets"

interface ComponentDisplayProps {
  componentName: string
}

export const ComponentDisplay = ({ componentName }: ComponentDisplayProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState("")

  const handleViewCode = (code: string) => {
    setActiveCode(code)
    setModalOpen(true)
  }

  const ClipboardIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  )

  const VariantCard = ({title, code, children}: {title: string, code: string, children: React.ReactNode}) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <button
          onClick={() => handleViewCode(code)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition cursor-pointer shadow-sm"
          title="View Code"
        >
          <span>Copy</span>
          <ClipboardIcon />
        </button>
      </div>
      {/* Replaced flex-1 and py-4 with a fixed height (h-32) to enforce uniform row heights */}
      <div className="w-full h-32 flex items-center justify-center">
        {children}
      </div>
    </div>
  )

  if (componentName === "Button") {
    return (
      <div className="max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
          Button
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VariantCard title="Outlined" code={buttonSnippets.outlined}>
            <ButtonOutlined>Button</ButtonOutlined>
          </VariantCard>

          <VariantCard title="Soft" code={buttonSnippets.soft}>
            <ButtonSoft>Button</ButtonSoft>
          </VariantCard>

          <VariantCard title="Playful" code={buttonSnippets.playful}>
            <ButtonPlayful>Button</ButtonPlayful>
          </VariantCard>

          <VariantCard title="Solid" code={buttonSnippets.solid}>
            <ButtonSolid>Button</ButtonSolid>
          </VariantCard>

          <VariantCard title="Solid (Start Icon)" code={buttonSnippets.solidWithIcon}>
            <ButtonSolid leftIcon={<Plus />}>Add to cart</ButtonSolid>
          </VariantCard>

          <VariantCard title="Solid (End Icon)" code={buttonSnippets.solidWithEndIcon}>
            <ButtonSolid rightIcon={<ChevronRight />}>Go to checkout</ButtonSolid>
          </VariantCard>

          <VariantCard title="Elevated" code={buttonSnippets.elevated}>
            <ButtonElevated>Button</ButtonElevated>
          </VariantCard>

          <VariantCard title="Glass" code={buttonSnippets.glass}>
            <div className="w-full h-full rounded-lg bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center">
              <ButtonGlass>Button</ButtonGlass>
            </div>
          </VariantCard>
        </div>

        <CodeModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          code={activeCode}
        />
      </div>
    )
  }

  return <div className="text-gray-500 font-medium">Component not found</div>
}