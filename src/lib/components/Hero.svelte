<script>
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
</script>

<div
	class="relative w-full  px-lg md:px-xl"
>
    <div class=" z-10  flex-center flex-col-reverse md:flex-row justify-center md:justify-between md:space-x-xl max-w-screen-xl mx-auto min-h-[640px] h-[calc(100vh-92px)] max-h-[1080px]">
        <div class="block md:hidden absolute h-full w-full inset-0">
            <img src="/tree8.png" alt="Tree Thing" class="absolute inset-0 w-full h-full object-cover"/>
            <div class="absolute w-full h-full bg-black/45 z-10"/>
        </div>
        <div class="relative z-20 w-full text-center flex-center flex-col justify-center">
            <h2 class="text-black-1 md:text-accent-1 text-lg md:text-xl font-medium uppercase mb-sm md:mb-sm">
                Available Now
            </h2>
            <h3 class="arapey text-black-1 md:text-primary-1 text-3xl md:text-5xl leading-tight mb-2xl md:mb-xl">
                Holiday 2024
            </h3>
            <div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
                <Button
                    onClick={() => {
                        document.getElementById('bookconsultation')?.scrollIntoView();
                    }}>Book A Consultation</Button
                >
         
       
            </div>
        </div>
    </div>

    <div class="hidden md:block absolute inset-0 overflow-hidden ">
		<img src="tempbg.jpg" alt="Staging" class="absolute w-full h-full object-cover" />
		<div class="absolute w-full h-full bg-black/35"/>
	</div>
</div>
