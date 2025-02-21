<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Protected Home</h1>
<a href="/protected/subpage" class="text-blue-500 hover:underline">Go to Subpage</a>
