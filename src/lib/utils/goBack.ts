import { goto } from '$app/navigation';

export const goBack = (page: string) => {
	goto(page);
};
