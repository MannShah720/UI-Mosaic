import {type ReactNode} from "react"

interface LayoutProps {
  children: ReactNode
  selectedComponent: string
  onSelectComponent: (component: string) => void
}

const components = ["Button", "Modal", "Card"]

export const Layout = ({children, selectedComponent, onSelectComponent}: LayoutProps) => {
  return (
    <div className="flex h-screen bg-[#F5F5F7] antialiased">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200 p-6 flex flex-col overflow-y-auto z-10">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 mb-8 px-2">Mosaic UI</h1>
        <nav className="space-y-1">
          {components.map((component) => (
            <button
              key={component}
              onClick={() => onSelectComponent(component)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                selectedComponent === component
                  ? "bg-black text-white shadow-md"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {component}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}