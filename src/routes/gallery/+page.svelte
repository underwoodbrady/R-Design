<script lang="ts">
	import Button from '$lib/components/Button.svelte';
    import Check from 'virtual:icons/material-symbols/check-small-rounded';

	let options: string[] = ['Christmas', 'Whimsical', 'Sports', 'Theme Parties', 'Thanksgiving'];
	let selectedOption: number = 0;
</script>

<div class="px-xl py-3xl max-w-screen-xl mx-auto">
	<h3 class="text-primary-12 text-4xl marcellus mb-2xl">Gallery</h3>
	<div class="flex justify-between space-x-3xl">
		<div class="whitespace-nowrap">
			<h4 class="text-black-12 mb-md text-xl font-bold">Choose A Style</h4>
			<ul class="text-black-11 flex flex-col space-y-sm text-lg mb-xl">
				{#each options as style, i}
					<li class={selectedOption == i ? 'text-accent-9 font-semibold ' : ''}>
						<button
							on:click={() => {
								selectedOption = i;
							}}
							class="flex-center space-x-sm"
						>
							{#if selectedOption == i}
								<div class="w-5 h-5 rounded-full bg-accent-9 border-black-5 border flex-center justify-center text-black-1">
									<Check/>
								</div>
							{:else}
							<div class="w-5 h-5 rounded-full bg-black-1 border-black-5 border"></div>

							{/if}

							<p>{options[i]}</p>
						</button>
					</li>
				{/each}
			</ul>
			<Button>Book A Consultation</Button>
		</div>
		<div class="grid grid-cols-3 gap-md w-full">
		    <div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree1.png" alt="Tree" class="object-cover "/>
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree2.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree3.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree4.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree5.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree6.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree7.png" alt="Tree" class="object-cover "/>
				
			</div>
			<div class="w-full h-80 bg-primary-3 overflow-hidden">
				<img src="/tree1.png" alt="Tree" class="object-cover "/>
				
			</div>
		</div>
	</div>
</div>
