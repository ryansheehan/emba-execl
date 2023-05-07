<script lang="ts">
    import {logout} from '$lib/auth';

    export const ssr = false;

    logout();
</script>

<p>You have been logged out.</p>