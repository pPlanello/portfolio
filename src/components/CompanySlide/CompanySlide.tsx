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
		</div>
	)
}
