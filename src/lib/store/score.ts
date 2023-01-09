import { StatesStrategies } from '$lib/types';
import { writable } from 'svelte/store';

export const score = writable(0);

export const updateScore = (winner: StatesStrategies) => {
	if (winner === StatesStrategies.win) {
		score.update((n) => n + 1);
	}
};
