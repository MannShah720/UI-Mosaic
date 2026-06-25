import {useState} from "react"
import {NavLink} from "react-router-dom"
import {ChevronDown, ChevronRight, Menu, X} from "lucide-react"
import {navItems} from "../../constants/navItems"

export const Sidebar = () => {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* MOBILE HAMBURGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 shadow-sm cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* MOBILE BACKDROP OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* SIDEBAR ELEMENT */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 w-64 border-r border-gray-200 dark:border-slate-800 p-6 h-screen bg-white dark:bg-slate-950 transition-transform duration-300 transform md:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="font-bold text-xl mb-8 dark:text-white pt-12 md:pt-0">Mosaic UI</h1>
        
        {navItems.map((section) => (
          <div key={section.category} className="mb-8">
            {section.type === "dropdown" ? (
              <>
                <button
                  onClick={() => setIsPlaygroundOpen(!isPlaygroundOpen)}
                  className="flex items-center justify-between w-full text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 hover:text-gray-600 dark:hover:text-slate-300 transition cursor-pointer"
                >
                  {section.category}
                  {isPlaygroundOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${isPlaygroundOpen ? "max-h-40" : "max-h-0"}`}>
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({isActive}) =>
                          `w-full block text-left px-3 py-2 rounded-lg text-sm transition ${
                            isActive
                              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                              : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{section.category}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({isActive}) =>
                          `w-full block text-left px-3 py-2 rounded-lg text-sm transition ${
                            isActive
                              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                              : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </aside>
    </>
  )
}