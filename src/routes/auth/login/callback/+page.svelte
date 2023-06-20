<script lang="ts">
    import {user} from '$lib/stores/user.store';
    import {browser} from '$app/environment';
    import {goto} from '$app/navigation';
    import {todos} from '$lib/stores/todo.store';
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
    
    const todoData = data.todos;
    todos.refreshActive(todoData);

    if(browser) {
        const {redirectTo, profile} = data;        
        user.login(profile!);
        goto(redirectTo);        
    }
</script>