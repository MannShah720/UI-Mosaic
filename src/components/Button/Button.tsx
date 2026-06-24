import { Loader2 } from "lucide-react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
  isCircular?: boolean // Added prop
}

const BaseButton = ({
  children,
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  isCircular = false,
  className,
}: ButtonProps & {className: string}) => (
  <button
    className={`${className} inline-flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? (
      isCircular ? (
        <Loader2 className="animate-spin" size={18} />
      ) : (
        "Loading..."
      )
    ) : (
      <>
        {leftIcon}
        {children}
        {rightIcon}
      </>
    )}
  </button>
)

export const ButtonSolid = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700" />
)

export const ButtonSoft = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100" />
)

export const ButtonOutlined = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-100 hover:text-gray-900" />
)

export const ButtonBold = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-3 text-base font-bold rounded-lg bg-black text-white hover:bg-gray-900 active:bg-gray-800" />
)

export const ButtonPlayful = (props: ButtonProps) => (
  <BaseButton {...props} className="px-5 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700" />
)

export const ButtonGhost = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-900" />
)

export const ButtonElevated = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-0.5" />
)

export const ButtonDestructive = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700" />
)

export const ButtonGlass = (props: ButtonProps) => (
  <BaseButton {...props} className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-gray-900 hover:from-white/50 hover:to-white/20" />
)