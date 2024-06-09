import { Key } from 'react'
import Image from 'next/image'

interface Props {
	id: Key
	title: string
	description: string
	imageSrc?: string
	background?: string
}

export default function CompanySlide(props: Props): JSX.Element {
	return (
		<div key={props.id} className="h-full">
			<div className="flex flex-row items-center justify-center w-full h-full">
				<div className="flex-shrink-0 p-6">
					<Image
						key={props.id}
						src={`/images/companies/${props.title}.png`}
						alt={props.title}
						width={100}
						height={100}
					/>
				</div>
				<div className="items-start p-12 md:pr-24 md:pl-16 md:py-12">
					<p className="text-gray-600">{props.description}</p>
				</div>
			</div>
		</div>
	)
}
