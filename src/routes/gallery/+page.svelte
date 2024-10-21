<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Check from 'virtual:icons/material-symbols/check-small-rounded';

	let options: string[] = ['All', 'Christmas', 'Whimsical', 'Theme Parties', 'Thanksgiving'];
	let selectedOption: number = 0;

	interface GalleryImage {
		src: string;
		categories: string[];
	}

	let images: GalleryImage[] = [
		{ src: '/tree1.png', categories: ['All', 'Christmas'] },
		{ src: '/tree2.png', categories: ['All', 'Christmas'] },
		{ src: '/tree3.png', categories: ['All', 'Christmas'] },
		{ src: '/tree4.png', categories: ['All', 'Whimsical'] },
		{ src: '/tree6.png', categories: ['All', 'Theme Parties'] },
		{ src: '/tree7.png', categories: ['All', 'Theme Parties'] },
		{ src: '/tree8.png', categories: ['All', 'Whimsical'] },
		{ src: '/tree9.png', categories: ['All', 'Christmas'] },
		{ src: '/tree10.png', categories: ['All', 'Christmas'] },
		{ src: '/tree11.png', categories: ['All', 'Theme Parties'] },
	];

	let filteredImages: GalleryImage[] = [];
	let selectedCategory: string = 'Christmas';

	$: {
		selectedCategory = options[selectedOption];
		filteredImages = images.filter((img) => img.categories.includes(selectedCategory));
	}
</script>

<div class="px-lg md:px-xl">

<div class=" py-3xl max-w-screen-xl mx-auto">
	<h3 class="text-primary-12 text-4xl marcellus mb-2xl">Gallery</h3>
	<div class="flex flex-col md:flex-row justify-between space-y-2xl md:space-y-0 md:space-x-3xl">
		<div class="whitespace-nowrap">
			<h4 class="text-black-12 mb-md text-xl font-bold">Choose A Style</h4>
			<ul class="text-black-11 flex flex-row flex-wrap gap-sm md:gap-0 md:space-x-0 md:flex-col md:space-y-sm text-lg mb-xl">
				{#each options as style, i}
					<li class={selectedOption == i ? 'text-accent-9 font-semibold ' : ''}>
						<button
							on:click={() => {
								selectedOption = i;
							}}
							class="flex-center space-x-sm"
						>
							{#if selectedOption == i}
								<div
									class="w-5 h-5 rounded-full bg-accent-9 border-black-5 border flex-center justify-center text-black-1"
								>
									<Check />
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
		<div class="grid grid-cols-2 md:grid-cols-3 gap-md w-full">
			{#if filteredImages.length == 0}
			<div class="w-full h-full flex-center justify-center col-start-1 md:col-start-2">

			<p class="text-center text-black-11 text-lg">Nothing here yet!</p>
		</div>

			{:else}
			{#each filteredImages as image}
			  <div class="w-full h-[400px] bg-primary-3 overflow-hidden">
				<img src={image.src} alt="Tree" class="object-cover w-full h-full"/>
			  </div>
			{/each}
			  {/if}
		  </div>
	</div>
</div>
</div>
