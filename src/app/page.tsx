'use client'
import Button from '@/components/Button/Button'
import {
	toastError,
	toastSuccess,
} from '@/components/Notification/toastNotifications'
import TypedText from '@/components/TypedText/TypedText'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'
import Image from 'next/image'
import { BsPersonSquare } from 'react-icons/bs'
import { useRef } from 'react'
import CardStats from '@/components/CardStats/CardStats'
import Carousel from '@/components/Carousel/Carousel'
import CompanySlide from '@/components/CompanySlide/CompanySlide'

const description =
	"I am a Telecommunications Engineer at UPM since 2020. In 2021 I did my maste's degree in Network Engineering and Telematic Services at UPM. Now a days I am Software Developer."

const rolesJobs = [
	'Software Developer',
	'Backend Developer',
	'Frontend Developer',
	'FullStack Developer',
]

const technologiesUsed: ImagesSlider[] = [
	{
		index: 0,
		src: '/images/spring-boot.png',
		label: 'Spring Boot',
	},
	{
		index: 1,
		src: '/images/angular.png',
		label: 'Angular',
	},
	{
		index: 2,
		src: '/images/react.png',
		label: 'React JS',
	},
	{
		index: 3,
		src: '/images/python.png',
		label: 'Python',
	},
	{
		index: 4,
		src: '/images/aws.png',
		label: 'AWS',
	},
	{
		index: 5,
		src: '/images/git.png',
		label: 'Git',
	},
]

export default function Home() {
	const downloadCvButtonRef = useRef<HTMLButtonElement>(null)
	const downloadCV = () => {
		fetch('/api/download-cv')
			.then(data => {
				data
					.blob()
					.then(blob => {
						const url = URL.createObjectURL(blob)
						const link = document.createElement('a')
						link.href = url
						link.download = 'Pablo_Planello_CV.pdf'
						link.click()
						URL.revokeObjectURL(url)
					})
					.catch(error => {
						console.error('Error:', error)

						toastError({
							title: 'Error downloading CV',
							description: 'There was an error downloading CV',
						})
					})

				setTimeout(() => {
					toastSuccess({
						title: 'Download CV',
						description: 'CV PDF was download successfully',
					})
				}, 10000)
			})
			.catch(error => {
				console.error('Error:', error)

				toastError({
					title: 'Error downloading CV',
					description: 'There was an error downloading CV',
				})
			})
	}

	const yearsWorked = (new Date().getFullYear() - 2019).toString()

	const companySlides: Array<JSX.Element> = [
		<CompanySlide
			key={1}
			id={1}
			title={'BBVA'}
			description={'BBVA Description'}
			timeWorked={'2022-Actually'}
		/>,
		<CompanySlide
			key={2}
			id={2}
			title={'GMV'}
			description={'GMV Description'}
			timeWorked={'2019-2020'}
		/>,
	]

	return (
		<>
			{/* Intro */}
			<section className="p-20">
				<div className="flex-col px-20 grid grid-cols-2">
					<div className="items-center">
						<h3 className="text-3xl">Hello, my name is</h3>
						<h1 className="font-bold text-5xl">Pablo Planelló San Segundo</h1>
						<h3 className="text-3xl">
							And I am{' '}
							<TypedText
								text={rolesJobs}
								typedSpeedMs={85}
								isLooped={true}
								className="text-primary-color dark:text-primary-color-dark"
							/>
						</h3>
						<p>{description}</p>
						<div className="mt-4 ml-4">
							<Button
								ref={downloadCvButtonRef}
								isPrimary={true}
								isDisabled={false}
								onClick={downloadCV}
							>
								Download CV
							</Button>
						</div>
					</div>
					<div className="justify-self-end items-end">
						<BsPersonSquare size={300} />
					</div>
				</div>
			</section>
			{/* Jobs worked */}
			<section className="p-20 bg-main-theme dark:bg-main-theme-dark">
				<Carousel
					autoSlide={false}
					autoSlideInterval={7000}
					slides={companySlides}
				/>
			</section>
			{/* Profile stats */}
			<section className="p-20">
				<div className="flex flex-col">
					<div className="px-20 grid grid-cols-3 gap-4">
						<CardStats
							title="Companies worked:"
							value="2"
							className="col-span-1"
						/>
						<CardStats
							title="Studies:"
							value="Master"
							description=""
							className="col-span-2"
						/>
					</div>
					<div className="px-20 grid grid-cols-3">
						<CardStats
							title="Work experience:"
							value={yearsWorked}
							description="years"
						/>
						<div className="flex flex-col items-center m-2">
							<BsPersonSquare size={250} />
						</div>
						<CardStats title="Technologies learned:" value="+10" />
					</div>
					<div className="px-20 grid grid-cols-3">
						<CardStats title="Profesional project:" value="4" />
						<CardStats title="Workmates:" value=">30" description="people" />
						<CardStats title="Personal project:" value="+14" />
					</div>
				</div>
			</section>
			{/* About me */}
			<section className="p-20">
				<div className="flex flex-col gap-12 max-w-7xl w-5/6 px-20">
					<div className="flex flex-col gap-3">
						<h2 className="title text-left text-3xl">Sobre mi</h2>
						<p className="text-lg">
							Hola me llamo Pablo Planelló San Segundo y soy un desarrollador de
							la pera me gusta que no se entienda una mierda estas pruebas
						</p>
					</div>
					<div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
						{/* Studies */}
						<div className="flex flex-col gap-3">
							<h3 className="text-left text-2xl font-medium">Estudios:</h3>
							<ul className="marker:text-primary list-disc text-lg flex flex-wrap flew-row gap-5 lg:flex-col lg:gap-4">
								<li className="ml-5">
									Máster de Ingenería
									<span className="italic opacity-70 text-base block">
										Universidad Politécnica de Madrid
										<span className="block">2021</span>
									</span>
								</li>
								<li className="ml-5">
									Grado de Ingenería
									<span className="italic opacity-70 text-base block">
										Universidad Politécnica de Madrid
										<span className="block">2020</span>
									</span>
								</li>
							</ul>
						</div>
						{/* Technologies */}
						<div className="flex flex-col gap-5">
							<h3 className="text-left text-2xl font-medium">Tecnologías:</h3>
							<div className="flex flex-wrap gap-6">
								{technologiesUsed.map(image => (
									<div
										key={image.index}
										className="flex flex-col items-center justify-center gap-1"
									>
										<Image
											key={image.index}
											src={image.src}
											alt={image.label}
											width={44}
											height={48}
										/>
										<p className="text-center">{image.label}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
