<script>
	import Service from './Service.svelte';
</script>

<div class="px-9 py-16 bg-iris-3">
	<h3 class="caveat text-center font-bold text-4xl text-iris-12 mb-16">
		What Services Do I Offer?
	</h3>
	<div class="mb-12">
		<Service
			title="Home Staging"
			text="From Bozeman to beyond, Sydney Shock Interior Designs has transformed homes of all sizes and budgets into comfortable and livable spaces. Sydney Shock is the trusted resource for homeowners, developers, investors, and real estate agents in Montana and all around."
		>
			<div class="h-64 w-full overflow-hidden mb-9">
				<img src="/service1.png" alt="Hero" class="w-full h-full object-cover" />
			</div>
		</Service>
	</div>
	<div class="mb-12">
		<Service
			title="Rentals/AirBnbs"
			text="From Bozeman to beyond, Sydney Shock Interior Designs has transformed homes of all sizes and budgets into comfortable and livable spaces. Sydney Shock is the trusted resource for homeowners, developers, investors, and real estate agents in Montana and all around."
		>
			<div class="h-64 w-full overflow-hidden mb-9">
				<img src="/service2.png" alt="Hero" class="w-full h-full object-cover" />
			</div>
		</Service>
	</div>

	<Service
		title="Consultations"
		text="From Bozeman to beyond, Sydney Shock Interior Designs has transformed homes of all sizes and budgets into comfortable and livable spaces. Sydney Shock is the trusted resource for homeowners, developers, investors, and real estate agents in Montana and all around."
	>
		<div class="h-64 w-full overflow-hidden mb-9">
			<img src="/hero1.jpg" alt="Hero" class="w-full h-full object-cover" />
		</div>
	</Service>
</div>
