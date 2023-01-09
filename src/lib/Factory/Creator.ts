import type { Product } from '$lib/types';

export abstract class Creator {
	public abstract factoryMethod(): Product;

	public someOperation(): Product {
		// Call the factory method to create a Product object.
		const product = this.factoryMethod();
		// Now, use the product.
		return product;
	}
}
