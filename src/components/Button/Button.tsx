import { ArrowUp } from "lucide-react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const ButtonMinimal = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 hover:text-gray-900 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const ButtonBold = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="px-4 py-3 text-base font-bold rounded-lg bg-black text-white hover:bg-gray-900 active:bg-gray-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const ButtonPlayful = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="px-5 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}