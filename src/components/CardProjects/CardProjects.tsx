import {
	getBranchesBy,
	getCommitsBy,
	getImageURLFromProjectRepository,
} from '@/shared/service/gitHubService'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoMdGitCommit, IoMdGitBranch } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
import Link from 'next/link'

interface Props {
	id: number
	alt: string
	name: string
	description: string | null
	topics: string[]
	owner: string
	gitHubURL: string
	websiteURL: string | null
}

export default function CardProjects(props: Props): JSX.Element {
	const [commits, setCommits] = useState(0)
	const [branches, setBranches] = useState(0)
	const [languages, setLanguages] = useState([])
	const [imageSrc, setImageSrc] = useState(
		getImageURLFromProjectRepository(props.owner, props.name),
	)

	const isWebSite = props.websiteURL !== null && props.websiteURL.length > 0

	useEffect(() => {
		setImageSrc(getImageURLFromProjectRepository(props.owner, props.name))

		getCommitsBy(props.owner, props.name).then(response => {
			if (response.status !== 200) {
				setCommits(0)
			}

			setCommits(response.data.length)
		})

		getBranchesBy(props.owner, props.name).then(response => {
			if (response.status !== 200) {
				setBranches(0)
			}

			setBranches(response.data.length)
		})
	}, [props.owner, props.name])

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
			<Image
				src={imageSrc}
				width={500}
				height={500}
				alt={props.alt}
				onError={() => setImageSrc('/images/not-found-project.jpg')}
			/>

			{/* title */}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{props.name}</div>
			</div>

			{/* commits */}
			<div className="pt-2 pb-1">
				<div className="float-right px-2">
					<p className="inline-flex pr-1">{commits}</p>
					<span className="inline-flex">
						<IoMdGitCommit size={15} />
					</span>
				</div>

				<div className="float-right px-2">
					<p className="inline-flex pr-1">{branches}</p>
					<span className="inline-flex">
						<IoMdGitBranch size={15} />
					</span>
				</div>
			</div>

			{/* description */}
			<div className="px-6 py-4">
				<p className="text-gray-400 text-base">{props.description}</p>
			</div>

			{/* topics */}
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

			{/* buttons */}
			<div className="px-6 pt-4 pb-2 content-end space-x-6">
				<Link href={props.gitHubURL} passHref={true} target="_blank">
					<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
						<BsGithub size={20} />
						<span className="pl-1">Github</span>
					</button>
				</Link>

				{isWebSite && (
					<Link href={props.websiteURL!} passHref={true} target="_blank">
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
							<TbWorldWww size={20} />
							<span className="pl-1">Website</span>
						</button>
					</Link>
				)}
			</div>
		</div>
	)
}
