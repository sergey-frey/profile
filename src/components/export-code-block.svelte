<script lang="ts">
	import { fly } from "svelte/transition";
	import CodeKeyword from "../shared/ui/code-keyword.svelte";
	import CodeLink from "../shared/ui/code-link.svelte";
	import CodeRow from "../shared/ui/code-row.svelte";
	import Transition from "../shared/ui/transition.svelte";
	import { getContext } from "svelte";
	import { ContextKeys } from "../shared/constants/context-keys";

	const tabSize = getContext(ContextKeys.tabSize) as number | undefined;

	if (tabSize === undefined) {
		throw new Error("CodeBlock Error: tabSize is undefined");
	}
</script>

<Transition
	transition={(node) =>
		fly(node, {
			y: 200,
			duration: 1200,
			delay: 600,
		})}
>
	<section class="code__block code_export">
		<CodeRow tabs={0} {tabSize} number={1}>
			<CodeKeyword>export</CodeKeyword>
			{"{"}
		</CodeRow>

		<CodeRow tabs={1} {tabSize} number={2}>
			<CodeLink href="#person-block">Person</CodeLink>,
		</CodeRow>

		<CodeRow tabs={1} {tabSize} number={2}>
			<CodeLink href="#skills-block">Skills</CodeLink>,
		</CodeRow>

		<CodeRow tabs={0} {tabSize}>
			{"}"}
		</CodeRow>
	</section>
</Transition>
