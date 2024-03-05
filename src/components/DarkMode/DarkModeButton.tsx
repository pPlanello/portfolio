'use client'

import { useTheme } from 'next-themes'
import { IoMoon, IoSunnySharp } from 'react-icons/io5'

export default function DarkModeButton(): JSX.Element {
	const { systemTheme, theme, setTheme } = useTheme()

	const renderThemeChanger = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme

		if (currentTheme === 'dark') {
			return (
				<IoMoon
					className="w-6 h-6 text-main-theme"
					role="button"
					onClick={() => setTheme('light')}
				/>
			)
		} else {
			return (
				<IoSunnySharp
					className="w-6 h-6 text-main-theme-dark"
					role="button"
					onClick={() => setTheme('dark')}
				/>
			)
		}
	}

	return <>{renderThemeChanger()}</>
}
