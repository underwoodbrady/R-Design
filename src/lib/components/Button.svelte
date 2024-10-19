<script lang="ts">
	export let alternate: boolean = false;
</script>

<button
	class=" px-md py-sm rounded-sm font-medium border-2 border-primary-9 hover:border-primary-10 active:border-primary-11 {alternate
		? 'text-primary-9 hover:text-primary-10 active:text-primary-11'
		: 'bg-primary-9 hover:bg-primary-10 active:bg-primary-11 text-primary-1'}"
>
	<slot />
</button>
