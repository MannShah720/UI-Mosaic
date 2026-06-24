import { ButtonShowcase } from "./pages/ButtonShowcase"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { ComponentDisplay } from "./components/ComponentDisplay/ComponentDisplay"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/buttons/playground" />} />
            <Route path="/buttons/playground" element={<ComponentDisplay componentName="Button" />} />
            <Route path="/buttons/showcase" element={<ButtonShowcase />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}