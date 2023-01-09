import { Context } from './Context';
import type { Product } from '$lib/types';
import type { PossibleStrategies } from './types';
import { PaperWinner, RockWinner, ScissorsWinner } from './Strategies';

export default function Strategy(
	possibleStrategies: PossibleStrategies,
	element: Product
) {
	const strategies = {
		paper: new PaperWinner(),
		rock: new RockWinner(),
		scissors: new ScissorsWinner()
	};

	const context = new Context(strategies[possibleStrategies]);

	return context.executeStrategy(element);
}
