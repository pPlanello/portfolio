'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface Props {
	text: string[]
	isLooped: boolean
	typedSpeedMs: number
	className?: string
}

export default function TypedText(props: Props): JSX.Element {
	const element = useRef(null)

	useEffect(() => {
		const typed = new Typed(element.current, {
			strings: [
				'Backend Developer',
				'Frontend Developer',
				'FullStack Developer',
			],
			typeSpeed: props.typedSpeedMs,
			loop: props.isLooped,
			startDelay: 23,
			backSpeed: props.typedSpeedMs * (3 / 4),
		})

		return () => typed.destroy()
	}, [])

	return <span className="text-blue-400" ref={element} />
}
