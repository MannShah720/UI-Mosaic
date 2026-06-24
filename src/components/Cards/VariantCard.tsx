import { Copy } from "lucide-react"

interface VariantCardProps {
  title: string;
  className?: string; // Change to optional
  children: React.ReactNode;
  needsBackground?: boolean;
  onCopy?: () => void;
}

export const VariantCard = ({ 
  title, 
  className = "", // Default to empty string
  children, 
  needsBackground = false, 
  onCopy 
}: VariantCardProps) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col h-full ${className}`}>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h2>
      {onCopy && (
        <button onClick={onCopy} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition" title="Copy Code">
          <Copy size={18} />
        </button>
      )}
    </div>
    {needsBackground ? (
      <div className="w-full min-h-32 h-auto p-4 rounded-lg bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        {children}
      </div>
    ) : (
      <div className="w-full min-h-32 h-auto p-4 rounded-lg border border-gray-300 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-center">
        {children}
      </div>
    )}
  </div>
)