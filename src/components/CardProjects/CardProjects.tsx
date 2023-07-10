import { getImageURLFromProjectRepository } from '@/shared/service/gitHubService'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
	id: number
	alt: string
	name: string
	description: string | null
	topics: string[]
	owner: string
}

export default function CardProjects(props: Props): JSX.Element {
	const [imageSrc, setImageSrc] = useState(
		getImageURLFromProjectRepository(props.owner, props.name),
	)

	useEffect(() => {
		setImageSrc(getImageURLFromProjectRepository(props.owner, props.name))
	}, [props.owner, props.name])

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<Image
				src={imageSrc}
				width={500}
				height={500}
				alt={props.alt}
				onError={() => setImageSrc('/images/not-found-project.jpg')}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{props.name}</div>
				<p className="text-gray-400 text-base">{props.description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{props.topics.map(topic => (
					<span
						key={topic}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>
						{topic}
					</span>
				))}
			</div>
		</div>
	)
}
