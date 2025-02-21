<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<div class="container mx-auto px-4 py-6">
		<h1 class="mb-6 text-3xl font-bold">About Us</h1>
		<p class="mb-4">
			Welcome to our About page! This page provides information about our mission, team, and values.
		</p>
		<p>
			Our application is built with SvelteKit to provide a fast and modern user experience. We are
			committed to delivering high quality and innovative solutions.
		</p>
	</div>
</section>
