import { ButtonShowcase } from "./pages/ButtonShowcase"
import { GroupButton } from "./pages/GroupButton"
import { ButtonPlayground } from "./pages/Playground/ButtonPlayground"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Sidebar } from "./components/Sidebar/Sidebar"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/playground/buttons" />} />
            <Route path="/playground/buttons" element={<ButtonPlayground />} />
            <Route path="/buttons/showcase" element={<ButtonShowcase />} />
            <Route path="/buttons/group" element={<GroupButton />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}