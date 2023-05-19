<script lang="ts">	
    import type { PageData } from './$types';
    export let data: PageData;

    const {user} = data;
</script>

<div class="main-wrapper">
    {#if (user)}
        <p>Hello {user.name}</p>
        <a href="/auth/logout" data-sveltekit-preload-data="tap">Logout</a>
    {:else}
        <a href="/auth/login" data-sveltekit-preload-data="tap">Login</a>
    {/if}
    
    <div>
        <a href="/unprotected">Unprotected</a>
        <a href="/protected">Protected</a>
    </div>

    <button class="shadow-hover">test</button>
</div>

<style lang="postcss">
    .main-wrapper {
        /* background-color: var(--red-12); */
        block-size: 1200px;
    }

    button {
        margin-inline-start: var(--size-4);
        margin-block-start: var(--size-4);
    }
</style>


