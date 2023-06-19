import { ValidationFunction } from './functionsEvaluations'

/**
 * Evaluates if all the fields in the form are filled
 *
 * @param form object to evaluate
 * @returns true if all fields are filled
 */
export const isAllFieldsFilled = (form: object): boolean => {
	return !Object.values(form).some(elem => elem === '')
}

/**
 * Return the first evaluation that is not valid
 *
 * @param validators to evaluate the value
 * @param value to be evaluated
 * @returns error message if any validation fails
 */
export const validateValue = (
	validators: Array<ValidationFunction<any>>,
	field: string,
	value: string,
): EvaluationForm => {
	const errors =
		(validators
			.map(validator => validator(value)?.replace('_field_', field))
			.filter(Boolean) as string[]) || []

	return {
		isValid: errors.length === 0,
		errorMessage: errors.find(error => error !== '') || '',
	}
}

export type EvaluationsForm = Array<() => EvaluationForm>

interface EvaluationForm {
	isValid: boolean
	errorMessage: string
}
