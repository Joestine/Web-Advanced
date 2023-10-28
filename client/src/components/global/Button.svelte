<script>
    export let text;
    export let handleClick;

</script>

<button on:click={handleClick} class="bg-lime-600 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded">
    {text}
</button>