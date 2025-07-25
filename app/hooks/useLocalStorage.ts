import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, value: T): [T, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : value;
		} catch (error) {
			return value;
		}
	});

	useEffect(() => {
		const listener = (evt: any) => {
			if (evt.storageArea === localStorage && evt.key === key) setValue(JSON.parse(evt.newValue));
		};
		window.addEventListener('storage', listener);
		return () => window.removeEventListener('storage', listener);
	}, [key]);

	const setValue = (newValue: T): void => {
		try {
			window.localStorage.setItem(key, JSON.stringify(newValue));
			setStoredValue(newValue);
		} catch (error) {}
	};

	return [storedValue, setValue];
};
