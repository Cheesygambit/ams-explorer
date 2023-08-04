<script>
    export let data
    const { tracks } = data
</script>

<div class="container h-full mx-auto">
    <div class="pt-4 pr-4 pl-4"> <!--Menüleiste unter Header-->
        <aside class="alert variant-soft-primary">
            <!-- Icon -->
            <div class="text-6xl">🚧</div>
            <!-- Message -->
            <div class="alert-message">
                <h3 class="h3">Work in progress</h3>
                <p>You are looking at only a part of what the finished product will look like. Please keep this in mind.</p>
            </div>
            <!-- Actions -->
            <div class="alert-actions !hidden">(buttons)</div>
        </aside>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-4"> <!--Place where the grid goes-->
        {#each tracks as track, i}
        <a class="card bg-initial card-hover overflow-hidden" href="/">
            <header class="relative inline-block">
                <img class="w-full" src={track.thumbnail} alt="Track thumbnail">
                <span class="badge variant-filled-primary absolute z-10 top-3 left-3">{track.dlc}</span>
            </header>
            <div class="p-4 text-center">
                <h4 class="h4">{track.title}</h4>
            </div>
            <footer class="text-center p-2 space-y-2">
                <hr>
                <span class="chip variant-filled">{track.layouts.id}</span>
            </footer>
        </a>
        {/each}
    </div>
</div>

