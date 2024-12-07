<script lang="ts">
	import { getContext } from "svelte";
	import { fly } from "svelte/transition";
	import { ContextKeys } from "../shared/constants/context-keys";
	import { skillsObject } from "../shared/constants/skills-object";
	import type { FieldValueType } from "../shared/types/field";
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

	const skillsObjectKeys = keys(skillsObject);
</script>

<Transition
	transition={(node) =>
		fly(node, {
			y: 200,
			duration: 1200,
			delay: 400,
		})}
>
	<section class="code__block code_skills" id="skills-block">
		<CodeRow tabs={0} {tabSize} number={1}>
			<CodeKeyword>const</CodeKeyword>
			<h3 class="code__block__title">Skills</h3>
			= {"{"}
		</CodeRow>

		{#snippet arrayItemRender(item: FieldValueType)}
			<CodeRow tabs={1} {tabSize}>
				<FieldValueViewer
					{tabSize}
					{arrayItemRender}
					propertyValueObject={item}
				/>
			</CodeRow>
		{/snippet}

		{#each skillsObjectKeys as key, index}
			<CodeRow tabs={1} {tabSize} number={index + 2}>
				<KeyValue {key} afterKeyContent={"["}>
					<FieldValueViewer
						{tabSize}
						{arrayItemRender}
						propertyValueObject={skillsObject[key]}
					/>
				</KeyValue>
			</CodeRow>
		{/each}

		<CodeRow tabs={0} {tabSize}>
			{"}"}
		</CodeRow>
	</section>
</Transition>
