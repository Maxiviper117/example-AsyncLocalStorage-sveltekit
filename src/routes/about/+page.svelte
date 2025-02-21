<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<div class="container mx-auto p-10">
		<h1 class="mb-4 text-4xl font-bold">About Us</h1>
		<p class="mb-4">
			Welcome to our About page! This page provides information about our mission, team, and values.
		</p>
		<p>
			Our application is built with SvelteKit to provide a fast and modern user experience. We are
			committed to delivering high quality and innovative solutions.
		</p>
	</div>
</section>
