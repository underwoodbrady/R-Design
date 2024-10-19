<script lang="ts">
    export let title:string;
    export let text:string;
</script>
<div class="crimson-text">
    <slot/>
    <h4 class="font-bold text-iris-12 text-3xl text-center mb-3">{title}</h4>
    <p class=" text-lg text-mauve-11">{text}</p>
</div>
