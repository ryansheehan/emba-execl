<script lang="ts">
	import type { PageServerData } from "./$types";
    
    export let data: PageServerData;

    const {journal} = data;
</script>

<div>
    {#if journal}
        <p>Show journal data</p>
    {:else}
        <a href="/journal/new">Start Week</a>
    {/if}
</div>