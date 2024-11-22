<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<span class="code__attr">{@render children()}</span>

<style lang="scss">
	.code__attr {
		display: contents;
		color: var(--attr-color);
	}
</style>
