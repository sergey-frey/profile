<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
	}

	const { children, ...props }: Props = $props();
</script>

<a {...props} class="code__link">{@render children()}</a>

<style lang="scss">
	.code__link {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
</style>
