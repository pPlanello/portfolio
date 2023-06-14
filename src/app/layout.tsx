import Navbar from '@/components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="flex min-h-screen flex-col justify-between p-24">
					{children}
				</main>
			</body>
		</html>
	)
}
