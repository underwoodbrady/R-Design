<script>

	import Button from "$lib/components/Button.svelte";

</script>
<div class="px-xl py-3xl">
	<h3 class="text-primary-12 text-4xl marcellus mb-2xl text-center">Our Services</h3>
	<div class="flex-center space-x-md mb-xl">
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow">
			<h2 class="text-3xl font-medium text-black-12 marcellus mb-lg">
				 <span class="text-[#C0C0C0]">Silver</span> Package
			</h2>
			<ul class=" list-disc text-lg flex-center flex-col flex-1 px-xl">
				<li>We Decorate With The Decor You Already Have</li>
			</ul>
            <div class="w-full h-[2px] bg-black-5 my-lg"/>
            <p class="text-xl text-black-12">Pricing Starting at <span class="text-2xl font-medium">$150</span></p>
		</div>
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow">
            <h2 class="text-3xl font-medium text-black-12 marcellus mb-lg">
                 <span class=" text-[#FFD700]">Gold</span> Package
            </h2>
			<ul class=" list-disc text-lg flex-center flex-col flex-1 px-xl">
				<li>Decoratating With The Decor You Already Have</li>
				<li>Additions of new decorations (ribbons, ornaments, ect.)</li>
			</ul>
            <div class="w-full h-[2px] bg-black-5 my-lg"/>
            <p class="text-xl text-black-12">Pricing Starting at <span class="text-2xl font-medium">$250</span></p>
		</div>
		<div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow">
			<h2 class="text-3xl  font-medium text-black-12 marcellus mb-lg">
                <span class=" ">Full</span> Package
            </h2>
			<ul class="list-disc text-lg flex-center flex-col  flex-1 px-xl space-y-sm">
				<li>Shopping of NEW decor based on style desired by client</li>
				<li>Full assembly and staging of decor</li>
				<li>We can store the decor for you in off seasons</li>
			</ul>
            <div class="w-full h-[2px] bg-black-5 my-lg"/>
            <p class="text-xl text-black-12">Pricing Starting at <span class="text-2xl font-medium">$350</span></p>
		</div>
	</div>
    <div class="flex justify-center">
        <Button>Book A Consultation</Button>
    </div>
</div>
