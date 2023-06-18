<script lang="ts">	
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

    <div class="card">
        <TodoForm />
    </div>
</div>

<style lang="postcss">
    .main-wrapper {
        /* background-color: var(--red-12); */
        block-size: 1200px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .card {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--size-2);
        justify-content: flex-start;
        inline-size: 300px;
        margin-block-start: var(--size-4);
        padding: var(--size-2);

        background-color: var(--surface-4);
        min-block-size: var(--size-content-3);
    }

</style>


