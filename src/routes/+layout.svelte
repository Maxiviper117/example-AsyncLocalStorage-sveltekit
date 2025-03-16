<!-- src/routes/+layout.svelte -->
<script>
	import { Inspect } from 'svelte-inspect-value';
	import '../app.css';
	let { data, children } = $props();
</script>

<Inspect value={data} />

<nav class="flex items-center justify-between bg-gray-800 p-4 text-white">
	<div class="flex gap-4">
		<a href="/" class="rounded px-3 py-2 hover:bg-gray-700">Home</a>
		<a href="/about" class="rounded px-3 py-2 hover:bg-gray-700">About</a>
		<a href="/auth" class="rounded px-3 py-2 hover:bg-gray-700">Authenticate</a>
		{#if data.user}
			<a href="/protected" class="rounded px-3 py-2 hover:bg-gray-700">Protected</a>
		{/if}
	</div>
	{#if data.user}
		<form>
			<button
				formaction="/auth?/logout"
				formmethod="POST"
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>
				Logout
			</button>
		</form>
	{:else}
		<p class="px-3 py-2">You are not logged in.</p>
	{/if}
</nav>

<main class="min-h-screen bg-gray-100 px-4 py-6">
	{#if data.user}
		<p class="mb-4">Welcome, {data.user.name}!</p>
	{:else}
		<p class="mb-4">You are not logged in.</p>
	{/if}
	{@render children()}
</main>
