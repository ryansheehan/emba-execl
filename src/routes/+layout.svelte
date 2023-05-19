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

<div>
    <TopBar />
    <slot/>
</div>

<style lang="postcss">
    /**/

    div {        
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;                
    }
</style>
