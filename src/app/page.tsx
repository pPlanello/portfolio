'use client'
import Button from '@/components/Button/Button'
import {
	toastError,
	toastSuccess,
} from '@/components/Notification/toastNotifications'
import TypedText from '@/components/TypedText/TypedText'
import { useRef } from 'react'

const description =
	"I am a Telecommunications Engineer at UPM since 2020. In 2021 I did my maste's degree in Network Engineering and Telematic Services at UPM. Now a days I am Software Developer."

const rolesJobs = [
	'Software Developer',
	'Backend Developer',
	'Frontend Developer',
	'FullStack Developer',
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
		<div className="flex flex-col">
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
	)
}
