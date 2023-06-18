<script lang="ts">
    import {user} from '$lib/stores/user.store';
    import {browser} from '$app/environment';
    import {goto} from '$app/navigation';
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
    

    if(browser) {
        const {redirectTo, profile} = data;        
        user.login(profile!);
        goto(redirectTo);
    }
</script>