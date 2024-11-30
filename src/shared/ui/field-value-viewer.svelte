<script lang="ts">
	import type { Snippet } from "svelte";
	import type { FieldValueType } from "../types/field";
	import CodeLink from "./code-link.svelte";
	import CodeNumber from "./code-number.svelte";
	import CodeRow from "./code-row.svelte";
	import CodeString from "./code-string.svelte";

	interface Props {
		tabSize: number;
		propertyValueObject: FieldValueType;
		arrayItemRender?: Snippet<[FieldValueType]>;
	}

	const { propertyValueObject, tabSize, arrayItemRender }: Props = $props();
</script>

{#if propertyValueObject.type === "string"}
	<CodeString style="word-break: keep-all;">
		"{propertyValueObject.value}"
	</CodeString>,
{:else if propertyValueObject.type === "number"}
	<CodeNumber>{propertyValueObject.value}</CodeNumber>,
{:else if propertyValueObject.type === "link"}
	<CodeString>
		"<CodeLink href={propertyValueObject.href} target="_blank">
			{propertyValueObject.value}
		</CodeLink>"
	</CodeString>,
{:else if propertyValueObject.type === "array"}
	{@const arrayItems = propertyValueObject.value}

	{#each arrayItems as item}
		{#if arrayItemRender}
			{@render arrayItemRender(item)}
		{/if}
	{/each}

	<CodeRow tabs={0} {tabSize}>{"],"}</CodeRow>
{/if}
