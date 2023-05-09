<script lang="ts">
    import '../app.postcss'
    import {dev} from '$app/environment';
</script>

<svelte:head>
    {#if dev}
        <meta name="referrer" content="no-referrer-when-downgrade"/>
    {/if}
</svelte:head>

<div>
    <slot/>
</div>

<style lang="postcss">
    /**/

    div {
        min-block-size: 100vh;      
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;        
        padding-top: var(--size-4);
    }
</style>
