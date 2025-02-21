<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="container mx-auto px-4 py-6">
	<h1 class="mb-6 text-3xl font-bold">Protected Home</h1>
	<a href="/protected/subpage" class="text-blue-500 hover:underline">Go to Subpage</a>
</div>
