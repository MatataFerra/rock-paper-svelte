<script>
	import { fade } from 'svelte/transition';
	export let customStyles = '';
</script>

<section
	class="relative h-full p-4 grid grid-cols-2 items-center content-center justify-items-center {customStyles}"
>
	<slot />
</section>
