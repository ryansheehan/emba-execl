<script lang="ts">
	import type { PageServerData, ActionData } from "./$types";
    import TodoForm from '$lib/components/todo-form.svelte';
    import {todos} from '$lib/stores/todo.store';

    export let data: PageServerData;
    export let form: ActionData;

    const {journal} = data;

    $: {
        if (form?.todo) {
            todos.addTodo(form?.todo);
        }
    }
</script>

<div class="journal-page-wrapper">
    {#if journal}
        <p>Show journal data</p>
    {:else}
        <a href="/journal/new">Start Week</a>
    {/if}

    <TodoForm />
</div>

<style lang="postcss">
    .journal-page-wrapper {
        max-inline-size: var(--size-content-3);
        margin-inline: auto;
    }
</style>
