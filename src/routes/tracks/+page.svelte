<script>
    export let data
    const { tracks } = data
</script>

<div class="container h-full mx-auto">
    <div class="grid grid-cols-4 gap-4 pt-4">
        {#each tracks as track}
        <a class="card bg-initial card-hover overflow-hidden" href="/">
            <header>
                <img class="w-full" src={track.thumbnail} alt="Track thumbnail">
            </header>
            <div class="p-4 space-y-2">
                <h3 class="h3">{track.title}</h3>
                <span class="badge variant-filled-primary">{track.dlc}</span>
            </div>
        </a>
        {/each}
    </div>
</div>

