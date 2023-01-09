import type { Product, ProductProps } from '$lib/types';
import { StatesStrategies } from '$lib/types';

class Rock implements Product {
	public createElement(): ProductProps {
		return {
			src: '/icon-rock.svg',
			alt: 'rock'
		};
	}

	public beats(product: Product): StatesStrategies {
		if (product instanceof Rock) return StatesStrategies.draw;
		if (product instanceof Scissors) return StatesStrategies.win;

		return StatesStrategies.lose;
	}
}

class Paper implements Product {
	public createElement(): ProductProps {
		return {
			src: '/icon-paper.svg',
			alt: 'paper'
		};
	}

	public beats(product: Product): StatesStrategies {
		if (product instanceof Paper) return StatesStrategies.draw;
		if (product instanceof Rock) return StatesStrategies.win;

		return StatesStrategies.lose;
	}
}

class Scissors implements Product {
	public createElement(): ProductProps {
		return {
			src: '/icon-scissors.svg',
			alt: 'scissors',
			position: 'col-start-1 col-end-3'
		};
	}

	public beats(product: Product): StatesStrategies {
		if (product instanceof Scissors) return StatesStrategies.draw;
		if (product instanceof Paper) return StatesStrategies.win;

		return StatesStrategies.lose;
	}
}

export { Rock, Paper, Scissors };
