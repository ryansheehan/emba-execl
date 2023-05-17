<script lang="ts">	
    import type { PageData } from './$types';
    export let data: PageData;

    const {user} = data;
</script>

{#if (user)}
    <p>Hello {user.given_name}</p>
    <a href="/auth/logout" data-sveltekit-preload-data="tap">Logout</a>
{:else}
    <a href="/auth/login" data-sveltekit-preload-data="tap">Login</a>
{/if}

<div>
    <a href="/unprotected">Unprotected</a>
    <a href="/protected">Protected</a>
</div>
