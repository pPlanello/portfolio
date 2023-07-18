'use client'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

import Button from '@/components/Button/Button'
import Input, { InputEvaluation, InputType } from '@/components/Input/Input'
import { ContactForm } from '@/shared/interface/contactForm.interface'
import { isAllFieldsFilled } from '@/utils/forms/evaluationForm'
import {
	emailValidation,
	minLength,
	required,
} from '@/utils/forms/functionsEvaluations'

export default function ContactPage(): JSX.Element {
	const [contactForm, setContactForm] = useState<ContactForm>({
		email: '',
		subject: '',
		message: '',
	})
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const sendButtonRef = useRef<HTMLButtonElement>(null)

	const onChangeValue = (inputValue: InputEvaluation) => {
		inputValue.event.preventDefault()

		if (inputValue.isValid) {
			contactForm[inputValue.field] = inputValue.value
			setContactForm(contactForm)
		}

		setIsDisabled(!isAllFieldsFilled(contactForm))
	}

	const onSendForm = () => {
		fetch('/api/email-sender', {
			method: 'POST',
			body: JSON.stringify(contactForm),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				// TODO: toast
				toast.success('Pruebilla')
				console.log('Success:', data)
			})
			.catch(error => {
				// TODO: toast
				console.error('Error:', error)
			})
	}

	return (
		<div className="w-full max-w-xs bg-white shadow-md rounded justify-center display">
			<h2 className="text-black font-bold text-center pt-6 text-3xl">
				Contact
			</h2>
			<form className=" px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<Input
						id="email"
						label="Email"
						placeholder="Email"
						inputType={InputType.Email}
						onChangeValue={onChangeValue}
						evaluations={[required(), emailValidation()]}
					/>
				</div>

				<div className="mb-4">
					<Input
						id="subject"
						label="Subject"
						placeholder="Subject"
						inputType={InputType.Text}
						onChangeValue={onChangeValue}
						evaluations={[required(), minLength(5)]}
					/>
				</div>

				<div className="mb-4">
					<Input
						id="message"
						label="Message"
						placeholder="Message"
						inputType={InputType.TextArea}
						onChangeValue={onChangeValue}
						evaluations={[required(), minLength(5)]}
					/>
				</div>
				<div className="flex items-center justify-end">
					<Button
						ref={sendButtonRef}
						isPrimary={true}
						onClick={onSendForm}
						isDisabled={isDisabled}
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	)
}
