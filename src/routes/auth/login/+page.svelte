<script lang="ts">   
    import {page} from '$app/stores';

    const callbackRedirectUri = $page.url.searchParams.get('redirect');
    const queryParam = `?redirect=${callbackRedirectUri}`;    
    const dataLoginUri = `${import.meta.env.APP_BASE_URI}/auth/login${queryParam}`;
</script>

<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div class="login-options">
    <div id="g_id_onload"
        data-client_id="{import.meta.env.GOOG_CLIENT_ID}"
        data-context="signin"
        data-ux_mode="redirect"
        data-login_uri="{dataLoginUri}"
        data-nonce=""
        data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
    </div>
</div>

<style lang="postcss">
    .login-options {
        align-self: center;
    }
</style>
