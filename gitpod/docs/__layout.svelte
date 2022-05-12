<script context="module">
  export const load = async ({ fetch, url }) => {
    const slug = url.pathname.replace(/\//g, "__");
    const res = await fetch(`/api/${slug}.docs.json`);
    try {
      const data = await res.json();
      return { props: { docsMeta: data } };
    } catch (e) {
      return {
        error: e,
      };
    }
  };
</script>

<script lang="ts">
  import Menu from "$lib/components/docs/menu.svelte";
  import MobileMenu from "$lib/components/docs/mobile-menu/index.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import "$lib/assets/markdown-commons.scss";
  import { MENU } from "$lib/contents/docs/menu";
  import { docsMeta as docsMetaStore } from "$lib/stores/docs-meta";
  export let docsMeta;

  $: docsMetaStore.set(docsMeta);
</script>

<div class="pb-10 lg:flex lg:pt-10">
  <div class="hidden lg:block lg:w-1/4 lg:pt-24">
    <Menu {MENU} />
  </div>
  <div class="lg:w-3/4 lg:pl-4">
    <Search showEditInGitpod={true} />
    <MobileMenu {MENU} />
    <slot />
  </div>
</div>
