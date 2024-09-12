'use client'

import Slider from '@/components/Slider/Slider'
import Timeline from '@/components/Timeline/Timeline'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'
import { TimelineCard } from '@/shared/interface/timeline.interface'

export default function ContactPage(): JSX.Element {
	const technologiesUsed: ImagesSlider[] = [
		{
			index: 0,
			src: '/images/technologies/spring.svg',
			label: 'Spring Framework',
		},
		{
			index: 1,
			src: '/images/technologies/aws.svg',
			label: 'Amazon Web Services',
		},
		{
			index: 2,
			src: '/images/technologies/reactjs.svg',
			label: 'React JS',
		},
		{
			index: 3,
			src: '/images/technologies/python.svg',
			label: 'Python',
		},
		{
			index: 4,
			src: '/images/technologies/typescript.svg',
			label: 'TypeScript',
		},
		{
			index: 5,
			src: '/images/technologies/git.svg',
			label: 'Git',
		},
		{
			index: 6,
			src: '/images/technologies/docker.svg',
			label: 'Docker',
		},
		{
			index: 7,
			src: '/images/technologies/java.svg',
			label: 'Java',
		},
		{
			index: 8,
			src: '/images/technologies/nextjs.svg',
			label: 'Next JS',
		},
		{
			index: 9,
			src: '/images/technologies/angular.svg',
			label: 'Angular',
		},
	]

	const timelineCards: TimelineCard[] = [
		{
			date: '2022 - Actually',
			title: 'BBVA',
			subtitle: 'Software developer',
			description:
				'I work as backend developer and DevOps developer. The main technologies used is: Java, Python, AWS, Git...',
		},
		{
			date: '2020-2021',
			title: "Master's Degree",
			subtitle: 'Student in UPM',
			description:
				'I was a student at the University Polytechnic of Madrid. The university degree name is "Degree in Engineering of Telecommunication Technologies and Services"',
		},
		{
			date: '2019-2020',
			title: 'GMV',
			subtitle: 'Fullstack developer',
			description:
				'I was a fullstack developer. I worked in project as frontend developer using Angular as main technologies. I worked in project as backend developer using Java and Springboot as main technologies.',
		},
		{
			date: '2014-2020',
			title: 'University Degree',
			subtitle: 'Student in UPM',
			description:
				'I was a student at the University Polytechnic of Madrid. The university degree name is "Degree in Engineering of Telecommunication Technologies and Services"',
		},
	]

	return (
		<>
			<section className="px-20">
				<div className="flex flex-col">
					<div className="items-center">
						<Slider images={technologiesUsed} distancePerImage={30} />
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="px-20">
				<div className="xl:px-20 lg:px-14 md:px-5 sm:px-1">
					<Timeline
						title="Experience & Studies"
						description="Here’s a summary about my profesional life."
						timelineCards={timelineCards}
					/>
				</div>
			</section>
		</>
	)
}
