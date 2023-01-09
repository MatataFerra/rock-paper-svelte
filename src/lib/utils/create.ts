import Factory from '$lib/Factory';
import type { TypeElements } from '$lib/types';

const rock = Factory('rock');
const paper = Factory('paper');
const scissors = Factory('scissors');

const { alt: rAlt, src: rSrc } = rock.createElement();
const { alt: pAlt, src: pSrc } = paper.createElement();
const { alt: sAlt, src: sSrc, position: sPos } = scissors.createElement();

const elements: TypeElements = {
	rock,
	paper,
	scissors
};

export {
	rock,
	paper,
	scissors,
	rAlt,
	rSrc,
	pAlt,
	pSrc,
	sAlt,
	sSrc,
	sPos,
	elements
};
