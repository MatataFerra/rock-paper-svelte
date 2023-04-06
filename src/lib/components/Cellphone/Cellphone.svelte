<script lang="ts">
	export let styles: string;
</script>

<div class="device device-google-pixel-6-pro {styles}">
	<div class="device-frame">
		<slot class="device-screen h-full rounded-[inherit] overflow-hidden" />
	</div>
	<div class="device-stripe" />
	<div class="device-header" />
	<div class="device-sensors" />
	<div class="device-btns" />
	<div class="device-power" />
</div>
