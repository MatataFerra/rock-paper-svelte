<script lang="ts">
	import Element from '../Elements/Element.svelte';

	import { confetti } from '@neoconfetti/svelte';
	import ElementsLayout from '../Layout/ElementsLayout.svelte';
	import { selectedItems } from '$lib/store/elements';
	import Results from '../Results/Results.svelte';
	import { StatesStrategies } from '$lib/types';
	import { winner, conffeti as confettiStore, updateScore } from '$lib/store';
	import BattleElementsContainer from './BattleElementsContainer.svelte';

	const userItem = $selectedItems.userSelected?.createElement();
	const computerItem = $selectedItems.computerSelected?.createElement();

	let loading = false;

	setTimeout(() => {
		if ($winner === StatesStrategies.win) {
			confettiStore.set(true);
		}
		updateScore($winner as StatesStrategies);

		loading = true;
	}, 1500);
</script>

{#if $confettiStore}
	<div use:confetti={{ particleCount: 300, force: 0.5 }} />
{/if}

<ElementsLayout customStyles="gap-y-16">
	<BattleElementsContainer>
		<Element src={userItem?.src} alt={userItem?.alt} strategy={userItem?.alt} />
		<p class="text">Your choice</p>
	</BattleElementsContainer>

	{#if loading}
		<BattleElementsContainer>
			<Element
				src={computerItem?.src}
				alt={computerItem?.alt}
				strategy={computerItem?.alt}
			/>
			<p class="text">Our Choice</p>
		</BattleElementsContainer>
	{:else}
		<BattleElementsContainer>
			<Element />
			<p class="text">Drums...</p>
		</BattleElementsContainer>
	{/if}
</ElementsLayout>
<Results {loading} />

<style scoped>
	.text {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
	}
</style>
