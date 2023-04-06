<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { steps } from '$lib/store';
	import { colorElement } from '$lib/utils/colorElement';

	type Colors = keyof typeof colorElement;

	const dispatch = createEventDispatcher();
	export let src = '';
	export let alt = '';
	export let positionGrid = '';
	export let strategy = '';

	let color = colorElement[strategy as Colors];

	// on:click={onSelection}

	function onSelection() {
		dispatch('selection', strategy);
	}
</script>

<article
	role="presentation"
	class="active:scale-95 hover:scale-105 transition-all cursor-pointer element-size-md md:element-size-sm
    z-50 rounded-full shadow-lg flex justify-center items-center justify-items-center
    {positionGrid}
	{src ? `bg-white border-[16px] ${color}` : 'animate-pulse bg-gray-500'}
	{$steps > 1 && 'active:opacity-70 active:scale-95 scale-100 opacity-100'}
    "
	on:click={onSelection}
>
	{#if src}<img {src} {alt} class="w-fit select-none" />
	{:else}<div class="w-fit" />{/if}

	<!-- <img {src} {alt} class="w-fit" /> -->
</article>
