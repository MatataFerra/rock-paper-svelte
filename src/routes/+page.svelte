<script>
	import Battle from '$lib/components/Battle/Battle.svelte';
	import Cellphone from '$lib/components/Cellphone/Cellphone.svelte';
	import Elements from '$lib/components/Elements/Elements.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { steps } from '$lib/store';
</script>

<main
	class="flex items-center py-2 h-screen justify-center bg-gradient-to-t to-cyan-600 from-cyan-800 w-full"
>
	<Cellphone styles="flex flex-col scale-75 sm:scale-[0.7]">
		<section
			class="w-full md:w-4/12 px-4 h-full my-0 mx-auto rounded-lg bg-gradient-to-t to-cyan-500 from-cyan-700"
		>
			<Header />
			{#if $steps === 0}
				<Elements />
			{:else if $steps === 1}
				<Battle />
			{/if}
		</section>
	</Cellphone>
</main>

<style>
	* {
		-webkit-tap-highlight-color: transparent;
	}

	section {
		display: grid;
		grid-template-areas:
			'header'
			'body'
			'buttons';
		align-items: center;
		grid-template-rows: 20% 60% 20%;
		align-content: center;
		width: 100%;

		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	}
</style>
