<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>


<h1>
    Protected Subpage
</h1>
<p>
    Hi, {data.user.name}!
</p>