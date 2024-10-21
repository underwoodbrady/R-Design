<script lang="ts">
	export let alternate: boolean = false;
	export let accent: boolean = false;
	export let onClick: ()=>void = ()=>{};
</script>

<button
	class=" px-md py-sm rounded-sm font-medium border-2  {alternate
		? 'text-primary-9 hover:text-primary-10 active:text-primary-11'
		: accent ? 'bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1 border-accent-9 hover:border-accent-10 active:border-accent-11'
		: 'bg-primary-9 hover:bg-primary-10 active:bg-primary-11 text-primary-1 border-primary-9 hover:border-primary-10 active:border-primary-11'}"
		on:click = {onClick}
>
	<slot />
</button>
