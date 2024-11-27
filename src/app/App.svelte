<script lang="ts">
	import { fly } from "svelte/transition";
	import CodeKeyword from "../components/code-keyword.svelte";
	import CodeRow from "../components/code-row.svelte";
	import KeyValue from "../components/key-value.svelte";
	import type { FieldType } from "../shared/types/field";
	import Transition from "../shared/ui/transition.svelte";
	import { keys } from "../shared/utils/keys";

	import "@fontsource/b612-mono";

	const tabSize = 50;

	const object = {
		firstName: {
			type: "string",
			value: "Sergey",
		},
		lastName: {
			type: "string",
			value: "Frey",
		},
		experienceYears: {
			type: "number",
			value: 3,
		},
		github: {
			type: "link",
			value: "sergey-frey",
			href: "https://github.com/sergey-frey",
		},
		telegram: {
			type: "link",
			value: "@sergeyfrey",
			href: "https://t.me/sergeyfrey",
		},
	};

	const objectKeys = keys(object);
</script>

<main class="main">
	<Transition transition={(node) => fly(node, { y: 200, duration: 1200 })}>
		<section class="code">
			<CodeRow tabs={0} {tabSize} number={1}>
				<CodeKeyword>const</CodeKeyword>
				Person = {"{"}
			</CodeRow>

			{#each objectKeys as key, index}
				<CodeRow tabs={1} {tabSize} number={index + 2}>
					<KeyValue {key} valueObject={object[key] as FieldType} />
				</CodeRow>
			{/each}

			<CodeRow tabs={0} {tabSize} number={objectKeys.length + 2}>
				{"}"}
			</CodeRow>
		</section>
	</Transition>
</main>

<style lang="scss">
	.main {
		height: 100%;
		background-color: var(--code-bg);

		display: grid;
		place-content: center;

		padding: 1rem;
	}

	.code {
		color: var(--text-color);
		font-size: 2.1rem;
		line-height: 1.6;
		font-family: "B612 Mono", monospace;
	}

	@media (max-width: 900px) {
		.code {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 640px) {
		.code {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 530px) {
		.code {
			font-size: 1rem;
		}
	}

	@media (max-width: 460px) {
		.code {
			font-size: 0.9rem;
		}
	}
</style>
