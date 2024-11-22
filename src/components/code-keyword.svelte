<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<span class="code__keyword">{@render children()}</span>

<style lang="scss">
	.code__keyword {
		display: contents;
		color: var(--keyword-color);
	}
</style>
