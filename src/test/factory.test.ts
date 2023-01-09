import { describe, expect, test } from 'vitest';
import Factory from '$lib/Factory';
import { Paper, Rock } from '$lib/Factory/Products';
import { StatesStrategies } from '../lib/types/index';

describe('Test Factory', () => {
	test('Rock can be instanced', () => {
		const element = Factory('rock');

		expect(element).toBeInstanceOf(Rock);
	});

	test("Rock can't be instanced as well", () => {
		const element = Factory('rock');

		expect(element).not.toBeInstanceOf(Paper);
	});

	test('Rock has the right shape when is instanced', () => {
		const element = Factory('rock');

		expect(element).toMatchObject({
			createElement: expect.any(Function),
			beats: expect.any(Function)
		});
	});

	test('Rock can be created', () => {
		const element = Factory('rock');

		const createRock = element.createElement();

		expect(createRock).toMatchObject({
			alt: 'rock',
			src: '/icon-rock.svg'
		});
	});

	test('Rock beats scissors', () => {
		const rock = Factory('rock');
		const scissors = Factory('scissors');

		expect(rock.beats(scissors)).toBe(StatesStrategies.win);
	});

	test('Rock loses to paper', () => {
		const rock = Factory('rock');
		const paper = Factory('paper');

		expect(rock.beats(paper)).toBe(StatesStrategies.lose);
	});

	test('Rock ties with rock', () => {
		const rock = Factory('rock');
		const rock2 = Factory('rock');

		expect(rock.beats(rock2)).toBe(StatesStrategies.draw);
	});
});
