<script lang="ts">
	import Element from '../Elements/Element.svelte';
	import ElementsLayout from '../Layout/ElementsLayout.svelte';
	import { selectedItems } from '$lib/store/elements';

	const userItem = $selectedItems.userSelected?.createElement();
	const computerItem = $selectedItems.computerSelected?.createElement();

	let loading = false;

	setTimeout(() => {
		loading = true;
	}, 1500);
</script>

<ElementsLayout>
	<Element src={userItem?.src} alt={userItem?.alt} strategy={userItem?.alt} />
	{#if loading}
		<Element
			src={computerItem?.src}
			alt={computerItem?.alt}
			strategy={computerItem?.alt}
		/>
	{:else}
		<Element />
	{/if}
</ElementsLayout>
