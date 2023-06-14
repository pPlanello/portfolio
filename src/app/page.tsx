const description =
	"I am a Telecommunications Engineer at UPM since 2020. In 2021 I did my maste's degree in Network Engineering and Telematic Services at UPM. Now a days I am Software Developer."

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="items-center">
				<h3 className="text-3xl">Hello, my name is</h3>
				<h1 className="font-bold text-5xl">Pablo Planelló San Segundo</h1>
				<h3 className="text-3xl">
					And I am <span></span>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
