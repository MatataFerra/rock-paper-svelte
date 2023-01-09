import type { Product, StatesStrategies } from '$lib/types';
import type { Strategies } from './types';

/**
 * The Context defines the interface of interest to clients.
 */
export class Context {
	private strategy: Strategies;

	constructor(strategy: Strategies) {
		this.strategy = strategy;
	}

	public setStrategy(strategy: Strategies) {
		this.strategy = strategy;
	}

	public executeStrategy = (element: Product): StatesStrategies => {
		return this.strategy.process(element);
	};
}
