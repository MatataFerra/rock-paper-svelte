import Strategy from '$lib/Strategy';
import type { PossibleStrategies } from '$lib/Strategy/types';
import type { StatesStrategies } from '$lib/types';
import type { Product } from '../types';

export const setWinner = (
	user: PossibleStrategies,
	computer: Product
): StatesStrategies => {
	const winner = Strategy(user, computer);

	return winner;
};
