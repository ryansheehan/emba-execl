<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance action="?/addTodo">
    <div>
        <input name="title" />
        <button type="submit">I Got This!</button>
    </div>
</form>

<style lang="postcss">
    div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        position: relative;
    }

    input {
        border-radius: 32px;        
        flex: 1;        
        padding-inline-end: 87px;
    }

    button {
        position: absolute;        
        right: 0;
        border-width: 0;
        padding-block: var(--size-1);
        padding-inline: var(--size-2);        
        border-radius: 0 32px 32px 0;
        box-shadow: none;
        background-color: var(--brand);
        transition: background-color 250ms;
    }

    button:hover, button:focus-visible {
        --_highlight-size: 0px;
        background-color: var(--brand-hover);
    }

    button:active {
        background-color: var(--brand-active);
    }

</style>