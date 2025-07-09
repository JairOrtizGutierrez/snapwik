import { useState } from 'react';

export const useForm = <T>(values: T) => {
	const [formState, setFormState] = useState(values);
	const onInputChange = ({ target }: any) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};
	return { formState, setFormState, onInputChange };
};
