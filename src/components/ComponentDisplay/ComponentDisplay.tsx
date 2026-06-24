import {
  ButtonMinimal,
  ButtonBold,
  ButtonPlayful,
} from "../Button/Button"

interface ComponentDisplayProps {
  componentName: string
}

export const ComponentDisplay = ({
  componentName,
}: ComponentDisplayProps) => {
  if (componentName === "Button") {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Button Component</h1>
        <div className="grid grid-cols-3 gap-8">
          {/* Minimal */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-6">Shadcn</h2>
            <div className="space-y-4">
              <ButtonMinimal>Button</ButtonMinimal>
              <ButtonMinimal disabled>+</ButtonMinimal>
            </div>
            <button
              onClick={() => {
                const code = `<ButtonMinimal>Click Me</ButtonMinimal>`
                navigator.clipboard.writeText(code)
              }}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Copy Code
            </button>
          </div>

          {/* Bold */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-6">Bold</h2>
            <div className="space-y-4">
              <ButtonBold>Default</ButtonBold>
              <ButtonBold disabled>Disabled</ButtonBold>
              <ButtonBold>Click Me</ButtonBold>
            </div>
            <button
              onClick={() => {
                const code = `<ButtonBold>Click Me</ButtonBold>`
                navigator.clipboard.writeText(code)
              }}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Copy Code
            </button>
          </div>

          {/* Playful */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-6">Playful</h2>
            <div className="space-y-4">
              <ButtonPlayful>Default</ButtonPlayful>
              <ButtonPlayful disabled>Disabled</ButtonPlayful>
              <ButtonPlayful>Click Me</ButtonPlayful>
            </div>
            <button
              onClick={() => {
                const code = `<ButtonPlayful>Click Me</ButtonPlayful>`
                navigator.clipboard.writeText(code)
              }}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Copy Code
            </button>
          </div>
        </div>
      </div>
    )
  }

  return <div className="text-gray-500">Component not found</div>
}