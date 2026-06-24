import { useState } from "react"
import { Layout } from "./components/Layout/Layout"
import { ComponentDisplay } from "./components/ComponentDisplay/ComponentDisplay"

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Button")

  return (
    <Layout
      selectedComponent={selectedComponent}
      onSelectComponent={setSelectedComponent}
    >
      <ComponentDisplay componentName={selectedComponent} />
    </Layout>
  )
}

export default App