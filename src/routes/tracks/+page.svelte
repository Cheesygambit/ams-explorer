<script>
    export let data
    const { tracks } = data
</script>

<div class="container h-full mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {#each tracks as track}
        <a class="card bg-initial card-hover overflow-hidden" href="/">
            <header class="relative inline-block">
                <img class="w-full" src={track.thumbnail} alt="Track thumbnail">
                <span class="badge variant-filled-primary absolute z-10 top-3 left-3">{track.dlc}</span>
            </header>
            <div class="p-2 text-center">
                <h3 class="h3">{track.title}</h3>
            </div>
        </a>
        {/each}
    </div>
</div>

