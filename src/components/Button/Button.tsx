import { ReactNode, forwardRef } from 'react'

interface Props {
	children?: ReactNode
	props?: ReactNode
	isPrimary: boolean
	isDisabled: boolean
	onClick: () => void
}

const Button = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
	const { isPrimary, children, onClick, isDisabled, ...restProps } = props

	return (
		<button
			className={`${isPrimary ? 'bg-gray-800' : ''}
				disabled:cursor-not-allowed focus:outline-none  disabled:opacity-75 px-6 py-2 text-sm rounded-md shadow-md font-semibold text-gray-50`}
			ref={forwardedRef}
			onClick={onClick}
			disabled={isDisabled}
			type="button"
			{...restProps}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'

export default Button
