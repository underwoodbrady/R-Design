<script>
	import Button from "./Button.svelte";

</script>
<div class="w-full md:h-[640px] h-[calc(100vh-92px)] max-h-[1080px] px-xl flex-center flex-col-reverse md:flex-row justify-center md:justify-between md:space-x-xl">
    <div class="w-full md:w-7/12 text-center md:text-left">
        <h2 class="text-accent-11 text-lg md:text-2xl font-medium  mb-md">Servicing The Greater Seattle Area</h2>
        <h3 class="marcellus text-primary-12 text-2xl md:text-5xl leading-tight mb-2xl">Transform your space with the magic of professionally styled decor</h3>
        <div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
            <Button>Book A Consultation</Button>
            <Button alternate>See Our Work</Button>
        </div>
    </div>
    <div class="w-6/12 md:w-5/12 max-h-[520px] overflow-hidden flex items-center justify-center md:justify-end mb-2xl md:mb-0">
        <img src="/tree1.png" alt="Decorated Christmas Tree" class="object-cover"/>
    </div>
</div>