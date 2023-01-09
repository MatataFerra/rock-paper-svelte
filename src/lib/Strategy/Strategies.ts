import type { Product, StatesStrategies } from '$lib/types';
import { Paper, Rock, Scissors } from '../Factory/Products';

import type { Strategies } from './types';

class RockWinner implements Strategies {
	public process(element: Product): StatesStrategies {
		return new Rock().beats(element);
	}
}

class PaperWinner implements Strategies {
	public process(element: Product): StatesStrategies {
		return new Paper().beats(element);
	}
}

class ScissorsWinner implements Strategies {
	public process(element: Product): StatesStrategies {
		return new Scissors().beats(element);
	}
}

export { RockWinner, PaperWinner, ScissorsWinner };
