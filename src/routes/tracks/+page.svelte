<script>
    export let data
    const { tracks } = data
</script>

<div class="container h-full mx-auto justify-center my-8">
    <div class="flex pt-5 space-x-5 justify-center">
        {#each tracks as track}
        <a style="display:block" class="text-center card variant-soft block card-hover p-6" href="/">
            <div class="space-y-2">
                <img src={track.thumbnail} width="300" height="auto" alt="Track thumbnail">
                <h3 class="h3">{track.title}</h3>
                <span class="badge variant-filled-primary">{track.dlc}</span>
            </div>
        </a>
        {/each}
    </div>
</div>