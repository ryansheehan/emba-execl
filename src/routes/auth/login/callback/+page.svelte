<script lang="ts">
    import {handleCallback} from '$lib/auth/client';
        
    export const prerender=false;
    export const ssr=false;
    export const csr=false;
    
    console.log('callback page');
    handleCallback();
</script>