<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="px-xl py-3xl max-w-screen-lg mx-auto">
	<h3 class="text-primary-12 text-4xl marcellus mb-2xl text-center">Our Services</h3>
	<div
		class="relative z-10 flex-center flex-col md:flex-row space-y-lg md:space-y-0 md:space-x-md mb-xl"
	>
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow rounded-md">
			<h2 class="text-3xl font-medium text-black-12 marcellus mb-xl">
				<span class="text-[#C0C0C0]">Silver</span> Package
			</h2>
			<ul class=" list-disc text-lg flex-center flex-col flex-1 px-lg space-y-sm">
				<li>We Decorate With The Decor You Already Have</li>
			</ul>
			<div class="w-full h-[1px] bg-black-5 my-lg" />
			<p class="text-xl text-black-12">
				Pricing Starting at <span class="text-2xl font-medium">$150</span>
			</p>
		</div>
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow rounded-md">
			<h2 class="text-3xl font-medium text-black-12 marcellus mb-xl">
				<span class=" text-[#FFD700]">Gold</span> Package
			</h2>
			<ul class=" list-disc text-lg flex-center flex-col flex-1 px-lg space-y-sm">
				<li>Decoratating With The Decor You Already Have</li>
				<li>Additions of new decorations (ribbons, ornaments, ect.)</li>
			</ul>
			<div class="w-full h-[1px] bg-black-5 my-lg" />
			<p class="text-xl text-black-12">
				Pricing Starting at <span class="text-2xl font-medium">$250</span>
			</p>
		</div>
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow rounded-md">
			<h2 class="text-3xl font-medium text-black-12 marcellus mb-xl">
				<span class=" ">Full</span> Package
			</h2>
			<ul class="list-disc text-lg flex-center flex-col flex-1 px-lg space-y-sm">
				<li>Shopping of NEW decor based on style desired by client</li>
				<li>Full assembly and staging of decor</li>
				<li>We can store the decor for you in off seasons</li>
			</ul>
			<div class="w-full h-[1px] bg-black-5 my-lg" />
			<p class="text-xl text-black-12">
				Pricing Starting at <span class="text-2xl font-medium">$350</span>
			</p>
		</div>
	</div>
	<div class="relative z-10 flex justify-center">
		<Button
			onClick={() => {
				goto('/').then(() => {
					document.getElementById('bookconsultation')?.scrollIntoView();
				});
			}}>Book A Consultation</Button
		>
	</div>
	<div class="absolute inset-0">
		<img src="bottomleft.svg" alt="Staging" class="absolute -left-6 -bottom-4 w-28" />
		<img src="bottomright.svg" alt="Staging" class="absolute -right-0 md:-right-6 -bottom-4 w-28" />
	</div>
</div>
