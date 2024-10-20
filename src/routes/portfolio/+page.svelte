<script lang="ts">
	let options: string[] = ['Christmas', 'Whimsical', 'Sports', 'Theme Parties', 'Thanksgiving'];
	let selectedOption: number = 0;
</script>

<div class="px-xl py-3xl">
	<h3 class="text-primary-12 text-4xl marcellus mb-2xl">Our Portfolio</h3>
	<div class="flex justify-between space-x-3xl">
		<div class="whitespace-nowrap">
			<ul class="text-black-11 flex flex-col space-y-sm text-lg">
				{#each options as style, i}
					<li class={selectedOption == i ? 'text-black-12 font-semibold' : ''}>
						<button
							on:click={() => {
								selectedOption = i;
							}}
						>
							{options[i]}
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<div class="grid grid-cols-3 gap-md w-full">
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
			<div class="w-full h-72 bg-primary-3"></div>
		</div>
	</div>
</div>
