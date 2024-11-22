<script lang="ts">
	import type { FieldType } from "../shared/types/field";
	import CodeAttr from "./code-attr.svelte";
	import CodeLink from "./code-link.svelte";
	import CodeNumber from "./code-number.svelte";
	import CodeString from "./code-string.svelte";

	interface Props {
		key: string;
		valueObject: FieldType;
	}

	const { key, valueObject }: Props = $props();
</script>

<div class="key_value">
	<CodeAttr>{key}</CodeAttr>:
	{#if valueObject.type === "string"}
		<CodeString style="word-break: keep-all;">"{valueObject.value}"</CodeString>
	{:else if valueObject.type === "number"}
		<CodeNumber>{valueObject.value}</CodeNumber>
	{:else if valueObject.type === "link"}
		<CodeString>
			"<CodeLink href={valueObject.href} target="_blank">
				{valueObject.value}
			</CodeLink>"
		</CodeString>
	{/if},
</div>
