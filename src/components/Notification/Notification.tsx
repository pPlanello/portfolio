'use client'
import { Toaster } from 'react-hot-toast'

export default function Notification(): JSX.Element {
	return (
		<Toaster
			position="top-center"
			reverseOrder={false}
			toastOptions={{ duration: 3000 }}
		/>
	)
}
