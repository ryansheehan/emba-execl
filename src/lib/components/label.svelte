<script lang="ts">
    export let text: string;
    let forProp: string;
    export { forProp as for };
</script>

<div>
    <label for={forProp} {...$$props}>{text}</label>
    <slot/>
</div>

<style lang="postcss">
    div {
        display: inline-flex;
        flex-flow: column nowrap;
    }

    label {
        font-size: var(--font-size-0);
    }
</style>