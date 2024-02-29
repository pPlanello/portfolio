'use client'
import { useState, useEffect, useRef } from 'react'
import className from './Slider.module.css'
import Image from 'next/image'
import { ImagesSlider } from '@/shared/interface/imageSlider.interface'

interface Props {
	images: ImagesSlider[]
	distancePerImage?: number
}

export default function Slider(props: Props): JSX.Element {
	const [currentIndex, setCurrentIndex] = useState(0)

	const distancePerImage = props.distancePerImage || 70
	const numberImages = props.images.length || 0
	const angle = (2 * Math.PI) / numberImages
	const radius = distancePerImage * props.images.length

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currentIndex + 1 === numberImages) {
				setCurrentIndex(0)
			}

			setCurrentIndex((currentIndex + 1) % numberImages)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [currentIndex])

	return (
		<div className={className.container}>
			<div className={className.slider}>
				<div
					className={className.slider_viewport}
					style={{
						transform: `translateZ(${-radius}px) rotateY(${
							-currentIndex * angle
						}rad)`,
					}}
				>
					{props.images.map(image => {
						const indexAngle = image.index * angle
						const z = Math.cos(indexAngle) * radius
						const x = Math.sin(indexAngle) * radius
						return (
							<Image
								key={image.index}
								className={className.slider_image}
								style={{
									transform: `translateZ(${z}px) translateX(${x}px) rotateY(${indexAngle}rad)`,
									opacity: `${image.index === currentIndex ? 1 : 0.02}`,
								}}
								src={image.src}
								alt={image.label}
								width={500}
								height={500}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
