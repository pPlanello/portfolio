import Navbar from '@/components/NavBar/NavBar'
import Notification from '@/components/Notification/Notification'
import './globals.css'
import { Inter } from 'next/font/google'
import DarkModeProvider from '@/components/DarkMode/DarkModeProvider'

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
			<body
				className={`bg-main-theme dark:bg-main-theme-dark text-main-theme-dark dark:text-main-theme ${inter.className}`}
			>
				<div className="bg-[#d6c0a7] dark:bg-[#a16d4e] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] dark:blur-[20rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#d1cbfd] dark:bg-[#51528b] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] dark:blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<DarkModeProvider>
					<Notification />
					<Navbar />
					<main className="flex min-h-screen flex-col pt-24">{children}</main>
				</DarkModeProvider>
			</body>
		</html>
	)
}
