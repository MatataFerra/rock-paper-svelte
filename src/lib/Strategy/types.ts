import type { Product, StatesStrategies } from '$lib/types';

export type PossibleStrategies = 'rock' | 'paper' | 'scissors';

export interface Strategies {
	process(element: Product): StatesStrategies;
}
