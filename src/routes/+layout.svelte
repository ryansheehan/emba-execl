<script lang="ts">
    import '../app.postcss'
    import {dev} from '$app/environment';
    import TopBar from '$lib/components/top-bar.svelte';
</script>

<svelte:head>
    {#if dev}
        <meta name="referrer" content="no-referrer-when-downgrade"/>
    {/if}
</svelte:head>

<div class="root">
    <TopBar/>
    <div class="root-content">
        <slot/>
    </div>
</div>

<style lang="postcss">
    /**/

    .root {       
        min-block-size: 100vh;         
        display: flex;        
        flex-flow: column nowrap;
        justify-content: flex-start; 
        align-items: stretch;               
    }

    .root-content {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
    }
</style>
