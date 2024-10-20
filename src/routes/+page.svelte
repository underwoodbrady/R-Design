<script>
	import BookConsultation from '$lib/components/BookConsultation.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<Hero />
<div class="px-xl py-3xl mb-4xl bg-white max-w-screen-lg mx-auto">
	<h3 class="text-black-12 text-4xl marcellus mb-lg">About Us</h3>
	<p class="text-lg mb-xl">
		We are a full-service seasonal staging and design team bringing the magic of the holidays to
		your home or office. From fully decorated custom Christmas trees, mantles, banisters and
		entryways to Thanksgiving tablescapes, and more, <span class="font-semibold">Spruce</span> offers a variety of services to help
		take the stress out of your holiday decorating. From planning and shopping of decor to go with
		your existing pieces to complete set-up, take down and storage of your decor for the following
		year.
	</p>
	<h3 class="text-black-12 text-4xl marcellus mb-lg">The Process</h3>
	<ol class="list-decimal space-y-sm list-inside text-lg">
		<li>
			Call <span class="text-accent-9">123-456-7890</span> or
			<a class="text-accent-9 underline">Contact Us</a> for a free consultation. We will reach out within
			24-hours to discuss your needs and best time to meet
		</li>
		<li>We will then come meet with you to discuss your decorating design plan</li>
		<li>
			Between 1-2 weeks after we have met a design plan will be created and reccomended to you
		</li>
		<li>
			If the plan is approved we will schedule you on our installation calendar. Spots fill up quick
			and it's never too early to start the process!
		</li>
	</ol>
</div>
<Gallery/>
<BookConsultation/>
<!-- <Services /> -->
<!-- <RecentProjects /> -->
