'use client'
import { Toaster, useToasterStore } from 'react-hot-toast'

export default function Notification(): JSX.Element {
	const { toasts } = useToasterStore()

	return <Toaster position="top-center" reverseOrder={false} />
}
