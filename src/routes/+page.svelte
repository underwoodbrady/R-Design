<script lang='ts'>
	import BookConsultation from '$lib/components/BookConsultation.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
    import Plan from 'virtual:icons/mdi/planner-outline';
    import Tree from 'virtual:icons/mdi/pine-tree-variant';
    import Lights from 'virtual:icons/mdi/string-lights';
    import Ornaments from 'virtual:icons/mdi/ornament';
    import Delivery from 'virtual:icons/mdi/truck-delivery-outline';
    import Decoration from 'virtual:icons/mdi/house-heart';
    import Storage from 'virtual:icons/mdi/stopwatch-secure-outline';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<Hero />
<div class="px-xl py-2xl md:mb-4xl bg-white max-w-screen-lg mx-auto">
	<h3 class="text-black-12 text-4xl marcellus mb-lg">About Us</h3>
	<p class="text-lg">
		We are a full-service seasonal staging and design team bringing the magic of the holidays to
		your home or office. From fully decorated custom Christmas trees, mantles, banisters and
		entryways to Thanksgiving tablescapes, and more, Spruce offers a variety of services to help
		take the stress out of your holiday decorating. From planning and shopping of decor to go with
		your existing pieces to complete set-up, take down and storage of your decor for the following
		year.
	</p>

</div>
<div class="px-xl py-3xl bg-accent-3 md:mb-4xl">
	<h3 class="text-accent-12 text-4xl marcellus mb-xl text-center">The Process</h3>
	<div class="grid grid-cols-2 gap-md md:flex-center md:justify-between max-w-screen-xl mx-auto uppercase">
		<div class="flex-center flex-col space-y-md">
			<Plan class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium ">Design Plan</p>
		</div>
		<div class="flex-center flex-col space-y-md">
			<Tree class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Tree</p>
		</div>
		<div class="flex-center flex-col space-y-md">
			<Lights class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Lighting</p>
		</div>
		<div class="flex-center flex-col space-y-md">
			<Ornaments class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Ornaments</p>
		</div>
		<div class="flex-center flex-col space-y-md">
			<Delivery class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Delivery</p>
		</div>
		<div class="flex-center flex-col space-y-md">
			<Decoration class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Decoration</p>
		</div>
		<div class="hidden md:flex-center flex-col space-y-md">
			<Storage class="text-accent-12 w-20 h-20"/>
			<p class="text-accent-12 text-lg font-medium">Storage</p>
		</div>
	</div>
</div>
<div class="px-xl py-2xl md:mb-4xl bg-white max-w-screen-lg mx-auto">
	<h3 class="text-black-12 text-4xl marcellus mb-lg">How do I get started?</h3>
	<ol class="list-decimal space-y-sm list-inside text-lg">
		<li>
			Call <span class="text-accent-9">123-456-7890</span> or use the
			<button class="text-accent-9 underline" on:click={()=>{ document.getElementById('bookconsultation')?.scrollIntoView();}}>Contact Us</button> form for a free consultation. We'll respond within 24 hours to discuss your needs and arrange a meeting time.
		</li>
		<li>We will visit you to go over your decorating design plan.</li>
		<li>
			Within 1-2 weeks after our meeting, we will develop and propose a design plan.
		</li>
		<li>
			Once the plan is approved, we'll add you to our installation calendar. Schedule early, as spots fill up quickly!
		</li>
	</ol>
</div>
<Gallery/>
<BookConsultation {form}/>
<!-- <Services /> -->
<!-- <RecentProjects /> -->
