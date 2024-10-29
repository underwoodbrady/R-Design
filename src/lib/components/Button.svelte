<script lang="ts">
	export let alternate: boolean = false;
	export let accent: boolean = false;
	export let extended:boolean = false
	export let loading:boolean = false;
	export let onClick: ()=>void = ()=>{};
	import Loading from 'virtual:icons/mdi/loading';

</script>

<button
	class=" px-md py-sm rounded-sm font-medium border-2 {extended ? ' w-full flex justify-center' : ''}  {alternate
		? 'text-primary-9 hover:text-primary-10 active:text-primary-11'
		: accent ? 'bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1 border-accent-9 hover:border-accent-10 active:border-accent-11'
		: 'bg-[#BCDBD6] hover:bg-primary-10 active:bg-primary-11 text-black-12 border-[#BCDBD6] hover:border-primary-10 active:border-primary-11'}"
		on:click = {onClick}
>
	{#if loading}
	<Loading class="animate-spin"/>
	{:else}

	<slot />
	{/if}
</button>
