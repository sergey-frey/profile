<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import ExportCodeBlock from "../components/export-code-block.svelte";
	import PersonCodeBlock from "../components/person-code-block.svelte";
	import SkillsCodeBlock from "../components/skills-code-block.svelte";
	import Transition from "../shared/ui/transition.svelte";

	let tabSize = $state(50);

	onMount(() => {
		const isSmallScreen = window.matchMedia("(max-width: 500px)").matches;

		if (isSmallScreen) {
			tabSize = 20;
		}
	});
</script>

<main class="main">
	<section class="container">
		<Transition
			transition={(node) =>
				fly(node, {
					x: 100,
					duration: 1200,
				})}
		>
			<h1 class="title">/// SergeyFrey.module.js</h1>
		</Transition>

		<section class="code">
			<PersonCodeBlock {tabSize} />

			<SkillsCodeBlock {tabSize} />

			<ExportCodeBlock {tabSize} />
		</section>
	</section>
</main>

<footer class="footer"></footer>

<style lang="scss">
	.main {
		height: 100%;
		background-color: var(--code-bg);

		padding: 1rem;
	}

	.title {
		font-size: var(--h1-font-size);
		color: var(--comment-color);
		padding-top: 2rem;
	}

	.footer {
		padding: 2rem;
		background-color: var(--code-bg);
	}
</style>
