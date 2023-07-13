import { useState, useEffect } from 'react'
import { BiErrorAlt, BiErrorCircle, BiError } from 'react-icons/bi'

export enum LevelType {
	ERROR = 'error',
	WARN = 'warning',
	INFO = 'info',
}

export interface ToastType {
	id: number
	toastType: LevelType
	title: string
	description: string
}

interface Props {
	toastList: ToastType[]
	autoDelete?: boolean
	autoDeleteTimeMs?: number
	className?: string
}

export default function Toast(props: Props): JSX.Element {
	const [toastList, setToastList] = useState(props.toastList || [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (
				props.autoDelete &&
				props.toastList !== undefined &&
				props.toastList.length &&
				toastList.length > 0
			) {
				deleteToast(props.toastList[0].id)
			}
		}, props.autoDeleteTimeMs)

		return () => {
			clearInterval(interval)
		}

		// eslint-disable-next-line
	}, [toastList, props.autoDelete, props.autoDeleteTimeMs, props.toastList])

	const deleteToast = (id: number) => {
		const listItemIndex = toastList.findIndex(e => e.id === id)
		const toastListItem = props.toastList.findIndex(e => e.id === id)
		toastList.splice(listItemIndex, 1)
		props.toastList.splice(toastListItem, 1)
		setToastList([...toastList])
	}

	return (
		<>
			<div className="fixed z-50">
				{toastList !== undefined &&
					toastList.map((toast, i) => (
						<div key={i} className="relative">
							<button onClick={() => deleteToast(toast.id)}>X</button>
							<div className="notification-image">
								{toast.toastType === LevelType.INFO && <BiErrorCircle />}
								{toast.toastType === LevelType.ERROR && <BiErrorAlt />}
								{toast.toastType === LevelType.WARN && <BiError />}
							</div>
							<div>
								<p className="notification-title">{toast.title}</p>
								<p className="notification-message">{toast.description}</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}
