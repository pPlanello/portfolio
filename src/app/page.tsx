'use client'
import Button from '@/components/Button/Button'
import {
	toastError,
	toastSuccess,
} from '@/components/Notification/toastNotifications'
import TypedText from '@/components/TypedText/TypedText'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'
import Image from 'next/image'
import { useRef } from 'react'

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
	const sendButtonRef = useRef<HTMLButtonElement>(null)
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

	return (
		<>
			<section className="p-20">
				<div className="flex flex-col px-20">
					<div className="items-center">
						<h3 className="text-3xl">Hello, my name is</h3>
						<h1 className="font-bold text-5xl">Pablo Planelló San Segundo</h1>
						<h3 className="text-3xl">
							And I am{' '}
							<TypedText
								text={rolesJobs}
								typedSpeedMs={85}
								isLooped={true}
								className="text-blue-500"
							/>
						</h3>
						<p>{description}</p>
						<div className="mt-4 ml-4">
							<Button
								ref={sendButtonRef}
								isPrimary={true}
								isDisabled={false}
								onClick={downloadCV}
							>
								Download CV
							</Button>
						</div>
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
