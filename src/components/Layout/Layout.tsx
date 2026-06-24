import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  selectedComponent: string
  onSelectComponent: (component: string) => void
}

const components = ["Button", "Modal", "Card"]

export const Layout = ({
  children,
  selectedComponent,
  onSelectComponent,
}: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-8">Mosaic UI</h1>
        <nav className="space-y-2">
          {components.map((component) => (
            <button
              key={component}
              onClick={() => onSelectComponent(component)}
              className={`w-full text-left px-4 py-2 rounded transition ${
                selectedComponent === component
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
            >
              {component}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}