import type { TypeElements } from '$lib/types';
import { elements } from '$lib/utils/create';

export const randomComputerElement = () => {
	const random: number = Math.floor(Math.random() * 3);
	const randomElement = Object.keys(elements)[random];

	const selectElement = Object.keys(elements).find(
		(element) => element === randomElement
	) as keyof TypeElements;

	return elements[selectElement];
};

export const playerElementSelected = (e: CustomEvent<string>) => {
	return elements[e.detail as keyof TypeElements];
};
