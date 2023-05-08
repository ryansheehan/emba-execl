<script lang="ts">
    import {logout} from '$lib/auth/client';
        
    export const ssr = false;
    
    logout();
</script>