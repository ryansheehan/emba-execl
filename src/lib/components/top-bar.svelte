<script lang="ts">    
    import {scrollWatcher} from '$lib/use/scroll-watcher';	
    import {user} from '$lib/stores/user.store';
   
    let sticking = false;

    const stickingCallback = (isOffScreen: boolean) => { 
        sticking = !isOffScreen
    };
</script>

<header class:sticking={sticking} use:scrollWatcher={{callback: stickingCallback, margin: '16px 0px 0px 0px'}}>
    <h1>Executive Leadership Journal</h1>
    {#if $user}
        <a href="/auth/logout" data-sveltekit-preload-data="tap">Logout</a>
    {/if}
</header>

<style lang="postcss">
    header {
        --_bg: transparent;

        position: sticky;
        top: 0;
        background-color: var(--_bg);
        min-block-size: var(--size-8);
        display: flex;
        justify-content: center;
        align-items: center;

        isolation:isolate;

        transition: background-color 200ms
    }

    header::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        box-shadow: var(--shadow-2);               
        transition: opacity 300ms ease;
        z-index: -1;     
    }

    header.sticking {
        --_bg: var(--brand);
    }

    header.sticking::after {
        content: '';        
        opacity: 1;
    }

    h1 {
        max-inline-size: none;
        
    }
</style>