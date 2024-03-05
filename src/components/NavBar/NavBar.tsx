'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import DarkModeButton from '../DarkMode/DarkModeButton'

const navigation = [
	{ id: 1, title: 'Home', link: '/' },
	{ id: 2, title: 'Projects', link: '/projects' },
	{ id: 3, title: 'About', link: '/about' },
	{ id: 5, title: 'Contact', link: '/contact' },
]

export default function Navbar(): JSX.Element {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
				<Link href="/">
					<h1 className="font-bold text-4xl">
						pPlanello
						<span className="text-primary-color dark:text-primary-color-dark">
							Dev
						</span>
					</h1>
				</Link>

				<ul className="hidden sm:flex">
					{navigation.map(navigation => (
						<li
							key={navigation.id}
							className="p-4 hover:text-primary-color dark:hover:text-primary-color-dark"
							onClick={handleNav}
						>
							<Link href={navigation.link}>
								<p>{navigation.title}</p>
							</Link>
						</li>
					))}
					<li className="p-4">
						<DarkModeButton />
					</li>
				</ul>

				{/* Mobile DarkModeButton */}
				<div className="block sm:hidden z-10">
					{nav ? <DarkModeButton /> : <></>}
				</div>

				{/* Mobile MenuButton */}
				<div
					onClick={handleNav}
					className="block sm:hidden z-10 hover:text-primary-color dark:hover:text-primary-color-dark"
				>
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>

				{/* Mobile Menu */}
				<div
					className={`sm:hidden absolute top-0 bottom-0 ${
						nav ? 'left-0 right-0' : 'right-[-100%] right-0'
					} flex justify-center items-center w-full h-screen bg-nav-mobile-theme dark:bg-nav-mobile-theme-dark
					text-center ease-in duration-300`}
				>
					<ul>
						{navigation.map(navigation => (
							<li
								key={navigation.id}
								className="p-4 text-4xl hover:text-primary-color dark:hover:text-primary-color-dark"
								onClick={handleNav}
							>
								<Link href={navigation.link}>
									<p>{navigation.title}</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
