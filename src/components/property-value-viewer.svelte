<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import type { FieldType } from "../shared/types/field";
  import CodeLink from "./code-link.svelte";
  import CodeNumber from "./code-number.svelte";
  import CodeRow from "./code-row.svelte";
  import CodeString from "./code-string.svelte";

  interface Props {
    tabSize: number;
    propertyValueObject: FieldType;
    arrayItemRender?: Snippet<[FieldType]>;
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
    <!-- <CodeRow tabs={1} {tabSize}>
      <CodeString style="word-break: keep-all;">
        "{item.value}"
      </CodeString>,
    </CodeRow> -->
    {#if arrayItemRender}
      {@render arrayItemRender(item)}
    {/if}
  {/each}

  <CodeRow tabs={0} {tabSize}>{"],"}</CodeRow>
{/if}
