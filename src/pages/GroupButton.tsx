import { useState } from "react"
import { VariantCard } from "../components/Cards/VariantCard"
import { CodeModal } from "../components/Modal/CodeModal"
import { groupVariants } from "../data/groupSnippets"

export const GroupButton = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [activeCode, setActiveCode] = useState("")
  
    return (
      <div className="max-w-6xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Custom Buttons</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupVariants.map(({ id, title, codeSnippet, Component }) => (
            <VariantCard
              key={id}
              title={title}
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