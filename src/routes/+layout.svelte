<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>


<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">amsEXPLORER</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<a
					class="navbar_item"
					href="/cars">
					Cars
				</a>
				<a
					class="navbar_item"
					href="/tracks">
					Tracks
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.game-automobilista2.com/"
					target="_blank"
					rel="noreferrer"
				>
					Automobilista 2 Website
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://racecraft.online"
					target="_blank"
					rel="noreferrer"
				>
					Racecraft.Online
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/cheesygambit/ams-explorer"
					target="_blank"
					rel="noreferrer"
				>
					AMS-Explorer GitHub
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.navbar_item {
		padding-right: 10px;
		padding-left: 10px;
	}
</style>