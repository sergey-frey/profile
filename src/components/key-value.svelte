<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import CodeAttr from "./code-attr.svelte";

  interface Props {
    key: string;
    afterKeyContent?: string;
    children: Snippet;
  }

  const { key, afterKeyContent, children }: Props = $props();
</script>

<div class="key_value">
  <CodeAttr>{key}</CodeAttr>:{afterKeyContent}{@render children()}
</div>
