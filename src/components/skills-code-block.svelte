<script lang="ts">
	import { fly } from "svelte/transition";
	import { skillsObject } from "../shared/constants/skills-object";
	import type { FieldValueType } from "../shared/types/field";
	import CodeKeyword from "../shared/ui/code-keyword.svelte";
	import CodeRow from "../shared/ui/code-row.svelte";
	import FieldValueViewer from "../shared/ui/field-value-viewer.svelte";
	import KeyValue from "../shared/ui/key-value.svelte";
	import Transition from "../shared/ui/transition.svelte";
	import { keys } from "../shared/utils/keys";

	interface Props {
		tabSize: number;
	}

	const { tabSize }: Props = $props();

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
	<section class="code__block code_skills">
		<CodeRow tabs={0} {tabSize} number={1}>
			<CodeKeyword>const</CodeKeyword>
			<h3 class="code__block__title" id="skills-block">Skills</h3>
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
