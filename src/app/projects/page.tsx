'use client'
import { useEffect, useState } from 'react'

import { getAllRepositories } from '@/shared/service/gitHubService'
import { Repository } from '@/shared/interface/repository.interface'

export default function ProjectsPage(): JSX.Element {
	const [projects, setProjects] = useState<Repository[]>([])

	useEffect(() => {
		getAllRepositories('pPlanello').then(response => {
			const data = response.data
			console.log(data)
			setProjects(data)
		})
	}, [])

	return <p>Projects Component</p>
}
