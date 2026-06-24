import {useState} from "react"
import {NavLink} from "react-router-dom"
import {ChevronDown,ChevronRight} from "lucide-react"
import {navItems} from "../../constants/navItems"

export const Sidebar = () => {
  const [isPlaygroundOpen,setIsPlaygroundOpen] = useState(true)

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-slate-800 p-6 h-screen">
      <h1 className="font-bold text-xl mb-8 dark:text-white">Mosaic UI</h1>
      {navItems.map((section) => (
        <div key={section.category} className="mb-8">
          {section.type === "dropdown" ? (
            <>
              <button
                onClick={() => setIsPlaygroundOpen(!isPlaygroundOpen)}
                className="flex items-center justify-between w-full text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 hover:text-gray-600 dark:hover:text-slate-300 transition"
              >
                {section.category}
                {isPlaygroundOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
              </button>
              <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${isPlaygroundOpen ? "max-h-40" : "max-h-0"}`}>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
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
  )
}