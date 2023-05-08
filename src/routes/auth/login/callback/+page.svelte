<script lang="ts">    
    import {handleCallback} from '$lib/auth';
    
    export const prerender=false;
    export const ssr=false;
    export const csr=false;
    
    handleCallback();
</script>

<a href="/" data-sveltekit-preload-data="tap">Home</a>