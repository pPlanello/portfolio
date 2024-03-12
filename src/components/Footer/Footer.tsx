'use client'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { IoIosMail, IoLogoGithub, IoIosArrowForward } from 'react-icons/io'
import { BsPersonSquare } from 'react-icons/bs'
import className from './Footer.module.css'
import { useState } from 'react'

const navigation = [
	{ id: 1, title: 'Home', link: '/' },
	{ id: 2, title: 'Projects', link: '/projects' },
	{ id: 3, title: 'About', link: '/about' },
	{ id: 5, title: 'Contact', link: '/contact' },
]

const iconsFooter = [
	{
		id: 1,
		title: 'Email',
		image: <IoIosMail size={25} />,
	},
	{
		id: 2,
		title: 'Linkedin',
		image: <FaLinkedin size={25} />,
		link: 'https://es.linkedin.com/in/pablo-planell%C3%B3-san-segundo-upm',
		tag: '',
	},
	{
		id: 3,
		title: 'GitHub',
		image: <IoLogoGithub size={25} />,
		link: 'https://github.com/pPlanello',
		tag: '',
	},
]

export default function Footer(): JSX.Element {
	const [spanEmailText, setSpanEmailText] = useState('Copy Email')
	const year = new Date().getFullYear()
	return (
		<footer className="bg-main-theme dark:bg-main-theme-dark pt-9">
			<section className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 p-10 bg-slate-500 rounded-lg w-full flex items-center justify-center">
					<div className="justify-self-start items-start">
						<h4 className="pb-6 text-2xl font-bold">
							Interesting to hiring me?
						</h4>
						<Link href="/contact" className="flex items-center pb-3">
							Request to meet us <IoIosArrowForward />
						</Link>
					</div>
					<div className="justify-self-end items-end">
						<BsPersonSquare size={300} />
					</div>
				</div>
			</section>
			<section className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-4">
					<nav className="flex flex-wrap justify-self-start -mx-5 -my-2">
						<Link className="pr-5" href="/">
							<h1 className="font-bold text-4xl">
								pPlanello
								<span className="text-primary-color dark:text-primary-color-dark">
									Dev
								</span>
							</h1>
						</Link>
						{navigation.map(navigation => (
							<div
								key={navigation.id}
								className="p-4 text-gray-400 hover:text-gray-500"
							>
								<Link href={navigation.link}>
									<p>{navigation.title}</p>
								</Link>
							</div>
						))}
					</nav>
					<div className="flex justify-end space-x-6 items-center">
						{iconsFooter.map(icon => (
							<div key={icon.id}>
								{icon.link ? (
									<Link
										className={`text-gray-400 hover:text-gray-500 ${className.link_info} items-center`}
										href={icon.link}
										target="_blank"
									>
										{icon.image}
									</Link>
								) : (
									<div
										className={`text-gray-400 hover:text-gray-500 ${className.link_info} items-center hover:cursor-pointer`}
										onClick={() => {
											setSpanEmailText('Copied')
											navigator.clipboard.writeText('pablo.planello@gmail.com')
											setTimeout(() => setSpanEmailText('Copy Email'), 3000)
										}}
									>
										{icon.image}
										<span className="mt-1 text-primary-color dark:text-primary-color-dark">
											{spanEmailText}
										</span>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="flex flex-col flex-initial justify-self-start space-x-6 items-start">
						<p className="text-base leading-6 text-gray-400">
							© {year}, Pablo Planello
						</p>
						<p className="text-base leading-6 text-gray-600">
							All Rights Reserved
						</p>
					</div>
					<div className="flex justify-self-center space-x-6 items-end">
						<h1 className="text-3xl font-bold">
							PP
							<span className="text-primary-color dark:text-primary-color-dark">
								D
							</span>
						</h1>
					</div>
					<div className="flex flex-col flex-initial justify-self-end space-x-6 items-end">
						<p className="text-base leading-6 text-gray-400">
							Created with love
						</p>
						<p className="text-base leading-6 text-gray-600">Made in Spain</p>
					</div>
				</div>
			</section>
		</footer>
	)
}
