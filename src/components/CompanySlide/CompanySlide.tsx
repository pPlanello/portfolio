import { Key } from 'react'
import Image from 'next/image'

interface Props {
	id: Key
	title: string
	description: string
	timeWorked: string
	imageSrc?: string
	background?: string
}

export default function CompanySlide(props: Props): JSX.Element {
	return (
		<div key={props.id} className="h-full">
			<div className="flex flex-row items-center justify-center w-full h-full">
				<div className="hidden sm:block sm:basis-56 mx-14 my-5">
					<Image
						key={props.id}
						src={`/images/companies/${props.title}.jpg`}
						alt={props.title}
						width={100}
						height={100}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
						<h3 className="text-2xl font-bold uppercase text-gray-900">
							{props.title}
						</h3>
						<span className="text-l/relaxed text-gray-400">
							{props.timeWorked}
						</span>

						<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Recusandae dolores, possimus pariatur animi temporibus nesciunt
							praesentium dolore sed nulla ipsum eveniet corporis quidem,
							mollitia itaque minus soluta, voluptates neque explicabo tempora
							nisi culpa eius atque dignissimos. Molestias explicabo corporis
							voluptatem?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
