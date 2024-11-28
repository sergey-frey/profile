<script lang="ts">
  import { fly } from "svelte/transition";
  import CodeKeyword from "../components/code-keyword.svelte";
  import CodeRow from "../components/code-row.svelte";
  import KeyValue from "../components/key-value.svelte";
  import PropertyValueViewer from "../components/property-value-viewer.svelte";
  import { personObject } from "../shared/constants/person-object";
  import { skillsObject } from "../shared/constants/skills-object";
  import type { FieldType } from "../shared/types/field";
  import Transition from "../shared/ui/transition.svelte";
  import { keys } from "../shared/utils/keys";
  import { onMount } from "svelte";

  let tabSize = $state(50);

  const personObjectKeys = keys(personObject);
  const skillsObjectKeys = keys(skillsObject);

  onMount(() => {
    const isSmallScreen = window.matchMedia("(max-width: 500px)").matches;

    if (isSmallScreen) {
      tabSize = 20;
    }
  });
</script>

<main class="main">
  <section class="container">
    <h1 class="title">/// Sergey Frey</h1>

    <section class="code">
      <Transition transition={(node) => fly(node, { y: 200, duration: 1200 })}>
        <section class="code__block code_person">
          <CodeRow tabs={0} {tabSize} number={1}>
            <CodeKeyword>const</CodeKeyword>
            Person = {"{"}
          </CodeRow>

          {#each personObjectKeys as key, index}
            <CodeRow tabs={1} {tabSize} number={index + 2}>
              <KeyValue {key}>
                <PropertyValueViewer
                  {tabSize}
                  propertyValueObject={personObject[key]}
                />
              </KeyValue>
            </CodeRow>
          {/each}

          <CodeRow tabs={0} {tabSize} number={personObjectKeys.length + 2}>
            {"}"}
          </CodeRow>
        </section>
      </Transition>

      <Transition
        transition={(node) => fly(node, { y: 200, duration: 1200, delay: 200 })}
      >
        <section class="code__block code_skills">
          <CodeRow tabs={0} {tabSize} number={1}>
            <CodeKeyword>const</CodeKeyword>
            Skills = {"{"}
          </CodeRow>

          {#snippet arrayItemRender(item: FieldType)}
            <CodeRow tabs={1} {tabSize}>
              <PropertyValueViewer {tabSize} propertyValueObject={item} />
            </CodeRow>
          {/snippet}

          {#each skillsObjectKeys as key, index}
            <CodeRow tabs={1} {tabSize} number={index + 2}>
              <KeyValue {key} afterKeyContent={"["}>
                <PropertyValueViewer
                  {tabSize}
                  {arrayItemRender}
                  propertyValueObject={skillsObject[key]}
                />
              </KeyValue>
            </CodeRow>
          {/each}

          <CodeRow tabs={0} {tabSize} number={personObjectKeys.length + 2}>
            {"}"}
          </CodeRow>
        </section>
      </Transition>
    </section>
  </section>
</main>

<footer class="footer"></footer>

<style lang="scss">
  .main {
    height: 100%;
    background-color: var(--code-bg);

    padding: 1rem;
  }

  .title {
    font-size: var(--h1-font-size);
    color: var(--comment-color);
    padding-top: 2rem;
  }

  .code {
    place-self: center;

    &__block {
      color: var(--text-color);
      font-size: 1.8rem;
      line-height: 1.6;
    }

    &_person {
      margin-top: 5rem;
    }

    &_skills {
      margin-top: 5rem;
    }
  }

  .footer {
    padding: 2rem;
    background-color: var(--code-bg);
  }

  @media (max-width: 900px) {
    .code__block {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 640px) {
    .code__block {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 530px) {
    .code__block {
      font-size: 1rem;
    }
  }

  @media (max-width: 460px) {
    .code__block {
      font-size: 0.9rem;
    }
  }
</style>
