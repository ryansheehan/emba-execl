<script lang="ts">
    import {login} from '$lib/auth/client';
            
    export const prerender=false;
    export const ssr=false;
    export const csr=false;
    
    login();
</script>
