interface CodeModalProps {
  isOpen: boolean
  onClose: () => void
  code: string
}

export const CodeModal = ({isOpen, onClose, code}: CodeModalProps) => {
  if (!isOpen) return null

  return (
    // Added 'p-4' to the overlay to ensure the modal doesn't touch screen edges
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity">
      {/* Added max-h-[90vh] to keep it within the viewport */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] border border-gray-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
          <span className="text-sm font-semibold text-gray-900">Code Snippet</span>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Code Area: Added overflow-y-auto to allow vertical scrolling */}
        <div className="p-6 bg-[#1C1C1E] overflow-y-auto overflow-x-auto">
          <pre className="text-sm text-gray-200" style={{fontFamily: "Consolas, monospace"}}>
            <code>{code}</code>
          </pre>
        </div>
        
        {/* Footer */}
        <div className="px-5 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={() => {
              navigator.clipboard.writeText(code)
              onClose()
            }}
            className="px-5 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition shadow-sm cursor-pointer"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  )
}