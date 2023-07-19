import { ToastCustom } from '@/shared/interface/toast.interface'
import toast, { Toast } from 'react-hot-toast'
import { BiErrorAlt } from 'react-icons/bi'
import { FaRegCheckCircle } from 'react-icons/fa'

export const toastSuccess = (toastCustom: ToastCustom) => {
	toast.custom((t: Toast) => (
		<div
			role="alert"
			className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900"
		>
			<div className="flex items-start gap-4">
				<span className="text-green-600">
					<FaRegCheckCircle size={25} />
				</span>

				<div className="flex-1">
					<strong className="block font-medium text-gray-900 dark:text-white">
						{toastCustom.title}
					</strong>

					<p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
						{toastCustom.description}
					</p>
				</div>

				<button
					className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
					onClick={() => toast.dismiss(t.id)}
				>
					X
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
					className="w-full border border-transparent rounded-none rounded-r-lg content-end justify-center text-sm font-medium focus:outline-none focus:ring-2 text-red-600 hover:text-red-800 focus:text-red-800 dark:text-red-100  dark:hover:text-red-300  dark:focus:text-red-300"
				>
					X
				</button>
			</div>
			<div className="flex items-center gap-2 text-red-800 dark:text-red-100">
				<span className="text-red-800 dark:text-red-300">
					<BiErrorAlt size={25} />
				</span>

				<strong className="block font-medium"> {toastCustom.title} </strong>
			</div>

			<p className="mt-2 text-sm text-red-600 dark:text-red-200">
				{toastCustom.description}
			</p>
		</div>
	))
}
