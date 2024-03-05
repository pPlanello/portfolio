import { TimelineCard } from '@/shared/interface/timeline.interface'

interface Props {
	title: string
	description: string
	timelineCards: TimelineCard[]
}

export default function Timeline(props: Props): JSX.Element {
	const { title, description, timelineCards } = props

	const isRightPosition = (index: number): boolean => {
		return index % 2 === 0
	}

	return (
		<>
			<div className="container mx-auto flex flex-col items-start md:flex-row my-1 md:my-1 overflow-y-auto h-64 scrollbar-hide">
				{/* Title */}
				<div className="flex flex-col w-full md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
					<h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
						{title}
					</h2>
					<h3 className="text-yellow-300 uppercase tracking-loose mb-4">
						Timeline
					</h3>
					<p className="text-sm md:text-base text-gray-50">{description}</p>
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
							{timelineCards.map((timelineCard, index) => (
								<>
									{isRightPosition(index) ? (
										<div className="mb-8 flex justify-between items-center w-full right-timeline">
											<div className="order-1 w-5/12"></div>
											<div className="order-1  w-5/12 px-1 py-4 text-left">
												<p className="mb-3 text-base text-yellow-300">
													{timelineCard.date}
												</p>
												<h4 className="font-bold text-lg md:text-2xl">
													{timelineCard.title}
												</h4>
												<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
													{timelineCard.subtitle}
												</h5>
												<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
													{timelineCard.description}
												</p>
											</div>
										</div>
									) : (
										<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
											<div className="order-1 w-5/12"></div>
											<div className="order-1 w-5/12 px-1 py-4 text-right">
												<p className="mb-3 text-base text-yellow-300">
													{timelineCard.date}
												</p>
												<h4 className="font-bold text-lg md:text-2xl">
													{timelineCard.title}
												</h4>
												<h5 className="mb-3 font-bold text-lg md:text-l text-gray-400">
													{timelineCard.subtitle}
												</h5>
												<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
													{timelineCard.description}
												</p>
											</div>
										</div>
									)}
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
