import { writable } from 'svelte/store';
import type { Product } from '../types/index';

type SelectedItems = {
	userSelected?: Product;
	computerSelected?: Product;
};

export const elements = writable([]);
export const winner = writable('');

export const selectedItems = writable<SelectedItems>({
	userSelected: undefined,
	computerSelected: undefined
});
