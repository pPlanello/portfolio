'use client'

import Slider from '@/components/Slider/Slider'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'
import Image from 'next/image'

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
		<>
			<section className="p-20">
				<div className="flex flex-col">
					<div className="items-center">
						<Slider images={technologiesUsed} distancePerImage={30} />
					</div>
				</div>
			</section>
			{/* Timeline */}
			<section className="bg-black text-white p-20">
				{/* Title */}
				<div className="container mx-auto flex flex-col items-start md:flex-row my-1 md:my-1 overflow-y-auto h-64 scrollbar-hide">
					<div className="flex flex-col w-full md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
						<p className="ml-2 text-yellow-300 uppercase tracking-loose">
							Timeline
						</p>
						<p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
							Experience & Studies
						</p>
						<p className="text-sm md:text-base text-gray-50 mb-4">
							Here’s a summary about my profesional life.
						</p>
					</div>
					{/* Timeline list */}
					<div className="ml-0 md:ml-12 lg:w-2/3 sticky">
						<div className="container mx-auto w-full h-full">
							<div className="relative wrap overflow-hidden p-10 h-full">
								{/* line */}
								<div
									className="border-2-2 border-yellow-555 absolute h-full border"
									style={{
										right: '50%',
										border: '2px solid #FFC100',
										borderRadius: '1%',
									}}
								></div>
								<div
									className="border-2-2 border-yellow-555 absolute h-full border"
									style={{
										left: '50%',
										border: '2px solid #FFC100',
										borderRadius: '1%',
									}}
								></div>
								{/* content */}
								<div className="mb-8 flex justify-between items-center w-full right-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="order-1  w-5/12 px-1 py-4 text-left">
										<p className="mb-3 text-base text-yellow-300">
											2022 - Actually
										</p>
										<h4 className="font-bold text-lg md:text-2xl">BBVA</h4>
										<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
											Software developer
										</h5>
										<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
											I work as backend developer and DevOps developer. The main
											technologies used is: Java, Python, AWS, Git
										</p>
									</div>
								</div>
								<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="order-1 w-5/12 px-1 py-4 text-right">
										<p className="mb-3 text-base text-yellow-300">2020-2021</p>
										<h4 className="font-bold text-lg md:text-2xl">
											Master's Degree
										</h4>
										<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
											Student in UPM
										</h5>
										<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
											I was a student at the University Polytechnic of Madrid.
											The master degree name is "Master's Degree in Network
											Engineering and Telematic Services"
										</p>
									</div>
								</div>
								<div className="mb-8 flex justify-between items-center w-full right-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="order-1  w-5/12 px-1 py-4 text-left">
										<p className="mb-3 text-base text-yellow-300">2019-2020</p>
										<h4 className="font-bold text-lg md:text-2xl">GMV</h4>
										<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
											Fullstack developer
										</h5>
										<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
											I was a fullstack developer. I worked in project as
											frontend developer using Angular as main technologies. I
											worked in project as backend developer using Java and
											Springboot as main technologies.
										</p>
									</div>
								</div>
								<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
									<div className="order-1 w-5/12"></div>
									<div className="order-1 w-5/12 px-1 py-4 text-right">
										<p className="mb-3 text-base text-yellow-300">2020-2021</p>
										<h4 className="font-bold text-lg md:text-2xl">
											University Degree
										</h4>
										<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
											Student in UPM
										</h5>
										<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
											I was a student at the University Polytechnic of Madrid.
											The university degree name is "Degree in Engineering of
											Telecommunication Technologies and Services"
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
