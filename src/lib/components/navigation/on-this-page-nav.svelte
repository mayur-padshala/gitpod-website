<script lang="ts">
  import { docsMeta } from "$lib/stores/docs-meta";
  import type { DocsMeta } from "$lib/types/docs-meta";
  import SubNavItem from "./sub-nav-item.svelte";

  //check for markdown headers in docsMeta
  function checkHeaders(obj: DocsMeta) {
    if (obj.headings.length > 0) {
      return true;
    }
    return false;
  }
</script>

{#if checkHeaders($docsMeta)}
  <div
    class="on-this-page top-24 self-start sticky overflow-x-hidden overflow-y-auto text-sm"
  >
    <div class="font-semibold">On this Page</div>
    <ul class="">
      {#each $docsMeta.headings as heading}
        <li>
          <a id={heading.slug} class="no-underline" href="#{heading.slug}"
            >{heading.title}</a
          >
          {#if heading.children?.length > 0}
            <ul
              class="ml-2 border-l space-y-6 lg:space-y-2 dark:border-divider"
            >
              {#each heading.children as child}
                <li>
                  <SubNavItem
                    navItem={{ title: child.title, slug: child.slug }}
                  />
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}
