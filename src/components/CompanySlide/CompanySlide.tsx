import { Key } from 'react'

interface Props {
	id: Key
	title: string
	description: string
	background?: string
}

export default function CompanySlide(props: Props): JSX.Element {
	return (
		<div key={props.id} className="w-full bg-gray-100 rounded-lg">
			<div className="p-12 md:pr-24 md:pl-16 md:py-12">
				<p className="text-gray-600">{props.description}</p>
			</div>
			<svg
				className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-600 -ml-12"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
		</div>
	)
}
