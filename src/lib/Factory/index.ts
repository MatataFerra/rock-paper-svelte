import type { Product, creatorsTypes } from '$lib/types';
import type { Creator } from './Creator';
import { CreatePaper, CreateRock, CreateScissors } from './Creators';

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function Factory(type: creatorsTypes): Product {
	let creator: Creator;

	switch (type) {
		case 'rock':
			creator = new CreateRock();
			break;
		case 'paper':
			creator = new CreatePaper();
			break;
		case 'scissors':
			creator = new CreateScissors();
			break;
		default:
			throw new Error('Invalid type');
	}

	return creator.factoryMethod();
}

export default Factory;
