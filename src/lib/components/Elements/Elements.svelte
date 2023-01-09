<script lang="ts">
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import {
		playerElementSelected,
		randomComputerElement
	} from '$lib/utils/selectElements';
	import { pAlt, pSrc, rAlt, rSrc, sAlt, sPos, sSrc } from '$lib/utils/create';
	import Element from './Element.svelte';
	import Loader from '../Loader/Loader.svelte';
	import LoaderLayout from '../Layout/LoaderLayout.svelte';
	import ElementsLayout from '../Layout/ElementsLayout.svelte';
	import { selectedItems, steps, winner } from '$lib/store';
	import { setWinner } from '$lib/utils/setWinner';
	import type { StatesStrategies } from '$lib/types';

	let loading = false;

	const click = async (e: CustomEvent) => {
		loading = true;
		const player = playerElementSelected(e);
		const computer = randomComputerElement();

		const userResult: StatesStrategies = setWinner(e.detail, computer);

		await tick();
		winner.set(userResult);

		selectedItems.set({
			userSelected: player,
			computerSelected: computer
		});

		setTimeout(() => {
			loading = false;
			steps.set(1);
		}, 1000);
	};
</script>

{#if loading}
	<LoaderLayout>
		<Loader />
	</LoaderLayout>
{:else}
	<ElementsLayout>
		<Element src={rSrc} alt={rAlt} strategy="rock" on:selection={click} />
		<Element src={pSrc} alt={pAlt} strategy="paper" on:selection={click} />
		<Element
			src={sSrc}
			alt={sAlt}
			positionGrid={sPos}
			strategy="scissors"
			on:selection={click}
		/>
	</ElementsLayout>
{/if}
