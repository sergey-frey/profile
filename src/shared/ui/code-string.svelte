<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		children: Snippet;
	}

	const { children, ...props }: Props = $props();
</script>

<span {...props} class="code__string">{@render children()}</span>

<style lang="scss">
	.code__string {
		display: contents;
		color: var(--string-color);
	}
</style>
