export type creatorsTypes = 'rock' | 'paper' | 'scissors';

export type ProductProps = {
	src: string;
	alt: string;
	position?: string;
};

export interface Product {
	createElement(): ProductProps;
	beats(product: Product): StatesStrategies;
}

export type TypeElements = {
	rock: Product;
	paper: Product;
	scissors: Product;
};

export enum StatesStrategies {
	win = 'win',
	lose = 'lose',
	draw = 'draw'
}
