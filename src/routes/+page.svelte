<script>
	import Battle from '$lib/components/Battle/Battle.svelte';
	import Elements from '$lib/components/Elements/Elements.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Rules from '$lib/components/Rules/Rules.svelte';

	import { steps } from '$lib/store';
</script>

<main
	class="h-screen bg-gradient-to-t to-cyan-600 from-cyan-800 w-full flex flex-col"
>
	<Header />
	{#if $steps === 0}
		<Elements />
	{:else if $steps === 1}
		<Battle />
	{/if}
</main>

<style>
	* {
		-webkit-tap-highlight-color: transparent;
	}
</style>
