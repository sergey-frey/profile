<script lang="ts">
	import { getContext } from "svelte";
	import { fly } from "svelte/transition";
	import { ContextKeys } from "../shared/constants/context-keys";
	import { personObject } from "../shared/constants/person-object";
	import CodeKeyword from "../shared/ui/code-keyword.svelte";
	import CodeRow from "../shared/ui/code-row.svelte";
	import FieldValueViewer from "../shared/ui/field-value-viewer.svelte";
	import KeyValue from "../shared/ui/key-value.svelte";
	import Transition from "../shared/ui/transition.svelte";
	import { keys } from "../shared/utils/keys";

	const tabSize = getContext(ContextKeys.tabSize) as number | undefined;

	if (tabSize === undefined) {
		throw new Error("CodeBlock Error: tabSize is undefined");
	}

	const personObjectKeys = keys(personObject);
</script>

<Transition
	transition={(node) =>
		fly(node, {
			y: 200,
			duration: 1200,
			delay: 200,
		})}
>
	<section class="code__block code_person">
		<CodeRow tabs={0} {tabSize} number={1}>
			<CodeKeyword>const</CodeKeyword>
			<h3 class="code__block__title" id="person-block">Person</h3>
			= {"{"}
		</CodeRow>

		{#each personObjectKeys as key, index}
			<CodeRow tabs={1} {tabSize} number={index + 2}>
				<KeyValue {key}>
					<FieldValueViewer {tabSize} propertyValueObject={personObject[key]} />
				</KeyValue>
			</CodeRow>
		{/each}

		<CodeRow tabs={0} {tabSize}>
			{"}"}
		</CodeRow>
	</section>
</Transition>
