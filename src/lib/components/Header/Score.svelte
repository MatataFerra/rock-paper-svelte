<script>
	import { score } from '$lib/store';
</script>

<nav class="flex flex-col bg-white rounded-lg border-2 items-center p-4 h-fit">
	<p class="uppercase text-sm">Score</p>
	<p class="text-4xl font-bold text-cyan-900">{$score}</p>
</nav>
