<script>
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
</script>

<div
	class="relative w-full  px-xl"
>
    <div class="relative z-10  flex-center flex-col-reverse md:flex-row justify-center md:justify-between md:space-x-xl max-w-screen-xl mx-auto md:h-[640px] h-[calc(100vh-92px)] max-h-[1080px]">
        <div class="w-full md:w-7/12 text-center md:text-left">
            <h2 class="text-accent-11 text-lg md:text-2xl font-medium mb-md">
                Servicing The Greater Seattle Area
            </h2>
            <h3 class="marcellus text-primary-12 text-2xl md:text-5xl leading-tight mb-2xl">
                Transform your space with the magic of professionally styled decor
            </h3>
            <div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
                <Button
                    onClick={() => {
                        document.getElementById('bookconsultation')?.scrollIntoView();
                    }}>Book A Consultation</Button
                >
                <Button
                    alternate
                    onClick={() => {
                        goto('/gallery');
                    }}>See Our Work</Button
                >
            </div>
        </div>
        <div
            class="w-6/12 md:w-5/12 max-h-[520px] overflow-hidden flex items-center justify-center md:justify-end mb-2xl md:mb-0"
        >
            <img src="/tree8.png" alt="Decorated Christmas Tree" class="object-cover" />
        </div>
    </div>

    <div class="hidden md:block absolute inset-0 ">
		<img src="topleft.svg" alt="Staging" class="absolute -left-8 -top-4 w-48" />
		<img src="bottomleft.svg" alt="Staging" class="absolute -left-6 -bottom-4 w-28" />
		<img src="bottomright.svg" alt="Staging" class="absolute -right-6 -bottom-4 w-28" />
	</div>
</div>
