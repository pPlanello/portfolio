import { validateValue } from '@/utils/forms/evaluationForm'
import { ValidationFunction } from '@/utils/forms/functionsEvaluations'
import { ChangeEvent, useState } from 'react'

interface Props {
	id: string
	inputType: InputType
	label: string
	placeholder?: string
	className?: string
	evaluations?: Array<ValidationFunction<any>>
	onChangeValue: (value: InputEvaluation) => void
}

export interface InputEvaluation extends Record<string, unknown> {
	field: string
	value: string
	isValid: boolean
	event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}

export enum InputType {
	Button = 'button',
	Checkbox = 'checkbox',
	Color = 'color',
	Date = 'date',
	DateLocal = 'datetime-local',
	Email = 'email',
	File = 'file',
	Hidden = 'hidden',
	Image = 'image',
	Month = 'month',
	Number = 'number',
	Password = 'password',
	Radio = 'radio',
	Range = 'range',
	Reset = 'reset',
	Search = 'search',
	Submit = 'submit',
	Tel = 'tel',
	Text = 'text',
	Time = 'time',
	Url = 'url',
	Week = 'week',
	TextArea = 'textarea',
}

export default function Input(props: Props): JSX.Element {
	const [isValid, setIsValid] = useState(true)
	const [textError, setTextError] = useState('Format invalid')
	const isTextArea = props.inputType === InputType.TextArea

	const handlerChangeToEvaluateValue = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		event.preventDefault()
		const value = event.target.value
		setIsValid(true)

		if (props.evaluations) {
			const { isValid, errorMessage } = validateValue(
				props.evaluations,
				props.label,
				value,
			)

			setIsValid(isValid)
			setTextError(errorMessage)
		}

		props.onChangeValue({ field: props.id, value, isValid, event })
	}

	return (
		<>
			<label className="block text-gray-700 text-sm font-bold mb-2 ml-2">
				{props.label}:
			</label>

			{!isTextArea && (
				<input
					id={props.id}
					className={`${props.className} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
					type={props.inputType}
					placeholder={props.placeholder ? props.placeholder : props.inputType}
					onChange={handlerChangeToEvaluateValue}
				/>
			)}

			{isTextArea && (
				<textarea
					id={props.label}
					className="resize-y he shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Message"
					onChange={handlerChangeToEvaluateValue}
				/>
			)}

			{!isValid && <span className="text-red-600">{textError}</span>}
		</>
	)
}
