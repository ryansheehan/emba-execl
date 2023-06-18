<script lang="ts">
	import { enhance } from "$app/forms";
    import Label from './label.svelte';
    import Input from './input.svelte';
    import Button from './button.svelte';

    export let action: string;
</script>

<form method="POST" use:enhance {action}>
    <div>
        <Label for="showUp" text="Show Up">
            <Input id="showUp"/>
        </Label>
        <Label for="speakUp" text="Speak Up">
            <Input id="speakUp"/>
        </Label>
        <Label for="syncUp" text="Sync Up">
            <Input id="syncUp"/>
        </Label>
        <Button type="submit">Start</Button>
    </div>
</form>

<style lang="postcss">
    div {
        display: flex;
        flex-flow: column nowrap;
    }
</style>