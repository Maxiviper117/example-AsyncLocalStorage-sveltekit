<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="container mx-auto px-4 py-6">
    <h1 class="mb-4 text-3xl font-bold">Protected Subpage</h1>
    <p class="text-lg">Hi, {data.user.name}!</p>
</div>