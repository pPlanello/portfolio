interface Props {
	title: string
	value: string
	description?: string
	className?: string
}

export default function CardStats(props: Props): JSX.Element {
	return (
		<div
			className={`${props.className} bg-gray-600 dark:bg-gray-600 rounded-2xl shadow-lg m-2 p-4 flex flex-col`}
		>
			<p className="text-gray-400 text-lg pb-5 items-start">{props.title}</p>
			<div className="text-8xl ml-auto mt-auto">
				{props.value}
				<span className="text-3xl text-gray-400">{props.description}</span>
			</div>
		</div>
	)
}
