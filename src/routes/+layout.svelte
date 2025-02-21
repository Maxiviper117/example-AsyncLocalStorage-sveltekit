<!-- src/routes/+layout.svelte -->
<script>
	import '../app.css';
	let { data, children } = $props();
</script>

<nav class="flex items-center justify-between p-4">
	<div class="flex gap-4">
		<a href="/" class="text-blue-500 hover:underline">Home</a>
		<a href="/auth" class="text-blue-500 hover:underline">Authenticate</a>
		<a href="/about" class="text-blue-500 hover:underline">About</a>
        <a href="/protected" class="text-blue-500 hover:underline">Protected</a>
	</div>
	{#if data.user}
		<form>
			<button
				formaction="/auth?/logout"
				formmethod="POST"
				class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Logout</button
			>
		</form>
	{:else}
		<p>You are not logged in.</p>
	{/if}
</nav>
<main class="min-h-screen px-4">
	{#if data.user}
		<p>Welcome, {data.user.name}!</p>
	{:else}
		<p>You are not logged in.</p>
	{/if}
	{@render children()}
</main>
