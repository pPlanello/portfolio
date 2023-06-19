export type ValidationFunction<FieldValueType = any> = (
	value: FieldValueType | null | undefined,
) => string | null

export const required = (): ValidationFunction<any> => value =>
	value && value.toString().length ? null : `The field '_field_' is required`

export const minLength =
	(minLength: number): ValidationFunction<string> =>
	value =>
		value && value.length >= minLength
			? null
			: `The field '_field_' should be greater than ${minLength} characters.`

export const emailValidation = (): ValidationFunction<string> => value =>
	value && value.match(/\S+@\S+\.\S+/)
		? null
		: `The field '_field_' should be a valid email address`
