'use client'
import { useEffect, useState } from 'react'

import { getAllRepositories } from '@/shared/service/gitHubService'
import { Repository } from '@/shared/interface/repository.interface'
import CardProjects from '@/components/CardProjects/CardProjects'
import { dummyRepository } from '@/utils/repository-dummy'

export default function ProjectsPage(): JSX.Element {
	const [projects, setProjects] = useState<Repository[]>([])

	useEffect(() => {
		getAllRepositories('pPlanello')
			.then(response => {
				if (response.status !== 200) {
					setProjects(dummyRepository)
				}
				setProjects(response.data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
			{projects.length > 0 &&
				projects.map(project => (
					<CardProjects
						key={project.id}
						id={project.id}
						alt={project.name}
						name={project.name}
						description={project.description}
						topics={project.topics}
						owner={project.owner.login}
					/>
				))}
		</div>
	)
}
