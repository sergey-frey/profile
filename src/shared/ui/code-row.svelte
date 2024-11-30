<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    tabs: number;
    tabSize: number;
    number?: number;
    children: Snippet;
  }

  const { tabs, tabSize, number, children }: Props = $props();
</script>

<div class="code__row" style={`--tabs: ${tabs}; --tab-size: ${tabSize}px;`}>
  <!-- <span class="code__row__number">
		{#if number !== undefined}{number}{/if}
	</span> -->

  <div class="code__row__content">
    {@render children()}
  </div>
</div>

<style lang="scss">
  .code__row {
    display: flex;

    // &__number {
    // 	opacity: 0.4;

    // 	display: flex;
    // 	padding: 0 2rem 0 0;

    // 	user-select: none;
    // }

    &__content {
      margin-left: calc(var(--tabs) * var(--tab-size));
    }
  }
</style>
