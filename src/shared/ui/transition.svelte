<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import { type TransitionConfig } from "svelte/transition";

	interface Props {
		children: Snippet;
		transition: (node: Element) => TransitionConfig;
	}

	const { children, transition }: Props = $props();

	let canAnimate = $state(false);

	onMount(() => {
		canAnimate = true;
	});
</script>

{#if canAnimate}
	<div transition:transition>
		{@render children()}
	</div>
{/if}
