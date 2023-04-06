<script>
	export let customStyles = '';
</script>

<section
	class="w-full lg:mx-auto lg:my-0 relative grid grid-cols-2 items-center content-center justify-items-center {customStyles}"
>
	<slot />
</section>

<style>
	section {
		grid-area: body;
	}
</style>
