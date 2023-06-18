<script lang="ts"> 
    import {browser} from '$app/environment';
    import {goto} from '$app/navigation';
    import {user} from '$lib/stores/user.store';

    if (browser) {
        user.logout();
        goto('/');
    }
</script>
