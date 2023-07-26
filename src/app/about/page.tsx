'use client'

import Slider from '@/components/Slider/Slider'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'

export default function ContactPage(): JSX.Element {
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
			label: 'Amazon Web Services',
		},
		{
			index: 5,
			src: '/images/git.png',
			label: 'Git',
		},
	]

	return (
		<div className="flex flex-col">
			<div className="items-center">
				<h1 className="font-bold text-3xl">Lenguage and Technologies used:</h1>
				<Slider images={technologiesUsed} />
			</div>
		</div>
	)
}
