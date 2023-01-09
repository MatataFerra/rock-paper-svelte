import { winner, steps, conffeti, selectedItems } from '$lib/store';

export const resetGame = () => {
	winner.set('');
	steps.set(0);
	conffeti.set(false);
	selectedItems.set({
		userSelected: undefined,
		computerSelected: undefined
	});
};
