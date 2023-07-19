import { ToastCustom } from '@/shared/interface/toast.interface'
import toast, { Toast } from 'react-hot-toast'
import { BiErrorCircle, BiErrorAlt, BiError } from 'react-icons/bi'
import { FaRegCheckCircle } from 'react-icons/fa'

export const toastSuccess = (toastCustom: ToastCustom) => {
	toast.custom((t: Toast) => (
		<div
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
			<div className="flex-1 w-0 p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0 m-auto">
						<FaRegCheckCircle color="green" size={25} />
					</div>
					<div className="ml-3 flex-1">
						<p className="text-sm font-medium text-gray-900">
							{toastCustom.title}
						</p>
						<p className="mt-1 text-sm text-gray-500">
							{toastCustom.description}
						</p>
					</div>
				</div>
			</div>
			<div className="flex border-l border-gray-200">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Close
				</button>
			</div>
		</div>
	))
}

export const toastInfo = (toastCustom: ToastCustom) => {
	toast.custom((t: Toast) => (
		<div
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
			<div className="flex-1 w-0 p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0 m-auto">
						<BiErrorCircle color="blue" size={25} />
					</div>
					<div className="ml-3 flex-1">
						<p className="text-sm font-medium text-gray-900">
							{toastCustom.title}
						</p>
						<p className="mt-1 text-sm text-gray-500">
							{toastCustom.description}
						</p>
					</div>
				</div>
			</div>
			<div className="flex border-l border-gray-200">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Close
				</button>
			</div>
		</div>
	))
}

export const toastWarn = (toastCustom: ToastCustom) => {
	toast.custom((t: Toast) => (
		<div
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
			<div className="flex-1 w-0 p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0 m-auto">
						<BiError color="#ffa500" size={25} />
					</div>
					<div className="ml-3 flex-1">
						<p className="text-sm font-medium text-gray-900">
							{toastCustom.title}
						</p>
						<p className="mt-1 text-sm text-gray-500">
							{toastCustom.description}
						</p>
					</div>
				</div>
			</div>
			<div className="flex border-l border-gray-200">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Close
				</button>
			</div>
		</div>
	))
}

export const toastError = (toastCustom: ToastCustom) => {
	toast.custom((t: Toast) => (
		<div
			role="alert"
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			} rounded border-s-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-900`}
		>
			<div className="float-right">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="w-full border border-transparent rounded-none rounded-r-lg content-end justify-center text-sm font-medium text-red-100 hover:text-red-200 focus:outline-none focus:ring-2 focus:text-red-200"
				>
					X
				</button>
			</div>
			<div className="flex items-center gap-2 text-red-800 dark:text-red-100">
				<BiError color="red" size={25} />

				<strong className="block font-medium"> {toastCustom.title} </strong>
			</div>

			<p className="mt-2 text-sm text-red-700 dark:text-red-200">
				{toastCustom.description}
			</p>
		</div>
	))
}
