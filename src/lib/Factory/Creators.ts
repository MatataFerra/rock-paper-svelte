import { Creator } from './Creator';
import { Paper, Rock, Scissors } from './Products';
import type { Product } from '$lib/types';

class CreateRock extends Creator {
	public factoryMethod(): Product {
		return new Rock();
	}
}

class CreatePaper extends Creator {
	public factoryMethod(): Product {
		return new Paper();
	}
}

class CreateScissors extends Creator {
	public factoryMethod(): Product {
		return new Scissors();
	}
}

export { CreateRock, CreatePaper, CreateScissors };
