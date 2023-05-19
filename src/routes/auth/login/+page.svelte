<script lang="ts">
	import {onMount} from 'svelte';
    import { page } from '$app/stores';

    let googleSignInButton: HTMLElement;

	const callbackRedirectUri = $page.url.searchParams.get('redirect');
	const queryParam = callbackRedirectUri ? `?redirect=${callbackRedirectUri}` : '';
	const dataLoginUri = `${import.meta.env.APP_BASE_URI}/auth/login${queryParam}`;

    onMount(async() => {
        google.accounts.id.initialize({
            client_id: import.meta.env.GOOG_CLIENT_ID,
            ux_mode: 'redirect',
            context: 'signin',
            login_uri: dataLoginUri,
        });

        google.accounts.id.renderButton(googleSignInButton, {
            width: '260',
            theme: 'filled_blue',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
            shape: 'rectangular',
            ux_mode: "redirect",
            logo_alignment: 'left',
        });
    });
</script>

<svelte:head>
	
</svelte:head>

<div class="login-options">
    <div class="google-signin-wrapper">
        <div class="g_id_signin" bind:this={googleSignInButton} />
    </div>
</div>

<style lang="postcss">
	.login-options {		
		display: flex;
        flex-flow: column nowrap;
		flex: 1;
        align-items: center;
        padding-top: var(--size-6);
	}

    .google-signin-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
    }
</style>
