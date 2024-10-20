<script lang="ts">
	export let options: string[];
	export let selectedOption: string = "";
</script>

<select aria-label="Select Service" name="services" class="px-4 py-2 rounded-[4px] bg-blue-100 border border-black-600 outline-none text-black-1200">
	{#each options as option}
		{#if selectedOption == option}
			<option value={option} selected>{option}</option>
		{:else}
			<option value={option}>{option}</option>
		{/if}
	{/each}
</select>
