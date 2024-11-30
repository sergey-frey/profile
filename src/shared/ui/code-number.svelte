<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<span class="code__number">{@render children()}</span>

<style lang="scss">
	.code__number {
		display: contents;
		color: var(--number-color);
	}
</style>
