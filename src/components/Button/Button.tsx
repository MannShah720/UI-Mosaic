interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const ButtonOutlined = ({ children, onClick, disabled = false }: ButtonProps) => (
  <button
    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 hover:text-gray-900 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export const ButtonSolid = ({
  children,
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) => (
  <button
    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
  >
    {leftIcon && <span className="mr-1">{leftIcon}</span>}
    {children}
    {rightIcon && <span className="ml-1">{rightIcon}</span>}
  </button>
)

export const ButtonSoft = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

export const ButtonElevated = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const ButtonGlass = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-gray-900 hover:from-white/50 hover:to-white/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}