import {useState} from "react"
import {ButtonMinimal, ButtonBold, ButtonPlayful} from "../Button/Button"
import {CodeModal} from "../Modal/CodeModal"
import {buttonSnippets} from "../../data/codeSnippets"

interface ComponentDisplayProps {
  componentName: string
}

export const ComponentDisplay = ({componentName}: ComponentDisplayProps) => {
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
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
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
      <div className="space-y-4 flex-1 flex flex-col items-start justify-center">
        {children}
      </div>
    </div>
  )

  if (componentName === "Button") {
    return (
      <div className="max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">Button</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <VariantCard title="Minimal" code={buttonSnippets.minimal}>
            <ButtonMinimal>Button</ButtonMinimal>
          </VariantCard>

          <VariantCard title="Bold" code={buttonSnippets.bold}>
            <ButtonBold>Button</ButtonBold>
          </VariantCard>

          <VariantCard title="Playful" code={buttonSnippets.playful}>
            <ButtonPlayful>Button</ButtonPlayful>
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