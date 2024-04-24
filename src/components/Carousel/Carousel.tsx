import { Key, useEffect, useState } from 'react'
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'

interface Props {
	slides: Array<JSX.Element>
	autoSlide: boolean
	autoSlideInterval: number
}

export default function Carousel(props: Props): JSX.Element {
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	const slidesSize = props.slides ? props.slides.length : 0
	const lastSlide = slidesSize - 1

	const prevSlide = () => {
		setCurrentSlide(currentSlide => {
			return currentSlide === 0 ? lastSlide : currentSlide - 1
		})
	}
	const nextSlide = () => {
		setCurrentSlide(currentSlide => {
			return currentSlide === lastSlide ? 0 : currentSlide + 1
		})
	}

	useEffect(() => {
		if (props.autoSlide) {
			const slideInterval = setInterval(nextSlide, props.autoSlideInterval)
			return () => clearInterval(slideInterval)
		}
	}, [currentSlide])

	return (
		<>
			<div className="overflow-hidden relative">
				{/* Slides */}
				<div className="w-full flex flex-row">
					{props.slides &&
						props.slides.map((slide: any, index: number) => (
							<div
								key={index}
								className="w-full flex-shrink-0 h-full transition-transform ease-out duration-500"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{slide}
							</div>
						))}
				</div>
				{/* Buttons actions Slider */}
				<div className="absolute z-10 inset-0 flex items-center justify-between p-4">
					<button
						onClick={prevSlide}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<GoChevronLeft size={40} />
					</button>
					<button
						onClick={nextSlide}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<GoChevronRight size={40} />
					</button>
				</div>
			</div>
			{/* Circle index */}
			<div className="z-100 mt-8 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{props.slides &&
						props.slides.map((_: any, i: number) => (
							<div
								key={i}
								className={`transition-all w-3 h-3 bg-white rounded-full ${
									currentSlide === i ? 'p-2' : 'bg-opacity-50'
								}`}
								onClick={() => setCurrentSlide(i)}
							/>
						))}
				</div>
			</div>
		</>
	)
}
