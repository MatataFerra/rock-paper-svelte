<script>
	import Score from './Score.svelte';
</script>

<header
	class="w-full items-center rounded-lg border-white border-2 mx-auto p-2 flex justify-between"
>
	<img src="/logo.svg" alt="logo" class="w-1/5" />
	<Score />
</header>

<style>
	header {
		grid-area: header;
	}
</style>
