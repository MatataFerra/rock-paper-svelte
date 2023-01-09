import { describe, expect, test } from 'vitest';
import { Paper, Rock, Scissors } from '$lib/Factory/Products';
import { StatesStrategies } from '../lib/types/index';
import Strategy from '$lib/Strategy';

describe('Test Strategy', () => {
	test('Rock choose right strategy against scissors', () => {
		const scissors = new Scissors();
		const strategy = Strategy('rock', scissors);

		expect(strategy).toBe(StatesStrategies.win);
	});

	test('Rock choose right strategy against paper', () => {
		const paper = new Paper();
		const strategy = Strategy('rock', paper);

		expect(strategy).toBe(StatesStrategies.lose);
	});

	test('Rock choose right strategy against rock', () => {
		const rock = new Rock();
		const strategy = Strategy('rock', rock);

		expect(strategy).toBe(StatesStrategies.draw);
	});
});
