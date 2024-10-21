<script>
	import { goto } from "$app/navigation";
	import Button from "./Button.svelte";

</script>

<div class="px-xl py-2xl md:py-3xl bg-white">
    <h3 class="text-blue-12 text-4xl marcellus mb-2xl text-center">Our Recent Work</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl w-full max-w-screen-xl mx-auto">
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree1.png" alt="Tree" class="object-cover w-full h-full"/>
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree8.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree3.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree4.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree9.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree10.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree7.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-96 bg-primary-3 overflow-hidden">
            <img src="/tree11.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
    </div>
    <div class="w-full flex justify-center">

        <Button onClick={()=>{goto('/gallery')}}>See Full Gallery</Button>
    </div>
</div>
