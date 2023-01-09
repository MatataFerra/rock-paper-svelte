<script>
	import { winner, resetGame } from '$lib/store';
	export let loading = false;

	const reset = () => {
		resetGame();
	};
</script>

<section class="flex flex-col justify-center gap-4 w-full">
	{#if loading}
		<h1 class="text-center text-5xl font-bold text-white">You {$winner}</h1>
		<button class="button-28" on:click={reset}>Play Again</button>
	{/if}
</section>

<style scoped>
	section {
		grid-column: 1 / 3;
	}
	.button-28 {
		appearance: none;
		background-color: transparent;
		border: 2px solid #1a1a1a;
		border-radius: 15px;
		box-sizing: border-box;
		color: #3b3b3b;
		cursor: pointer;
		display: inline-block;
		font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-size: 16px;
		font-weight: 600;
		line-height: normal;
		margin: 0 auto;
		min-height: 60px;
		min-width: 0;
		outline: none;
		padding: 16px 24px;
		text-align: center;
		text-decoration: none;
		transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		width: 80%;
		will-change: transform;
	}

	.button-28:disabled {
		pointer-events: none;
	}

	.button-28:hover {
		color: #fff;
		background-color: #1a1a1a;
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
	}

	.button-28:active {
		box-shadow: none;
		transform: translateY(0);
	}
</style>
