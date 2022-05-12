<script context="module">
  export const load = async ({ fetch, url }) => {
    const slug = url.pathname.replace(/\//g, "__");
    const res = await fetch(`/api/${slug}.docs.json`);
    try {
      const data = await res.clone().json();
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
  import OnThisPageNav from "$lib/components/navigation/on-this-page-nav.svelte";
  export let docsMeta;

  $: docsMetaStore.set(docsMeta);
</script>

<div class="pb-10 lg:flex lg:pt-10">
  <div class="hidden lg:block lg:w-1/4 lg:pt-12">
    <div class="sticky top-24 self-start">
      <Search showEditInGitpod={false} />
      <Menu {MENU} />
    </div>
  </div>
  <div class="lg:w-1/2 lg:pl-4">
    <div class="block lg:hidden">
      <Search showEditInGitpod={false} />
    </div>
    <MobileMenu {MENU} />
    <div class="lg:border-l border-r border-divider">
      <slot />
    </div>
  </div>
  <div
    class="lg:w-1/4 pl-8 hidden lg:block max-w-none flex-auto min-w-0 lg:pt-12"
  >
    <OnThisPageNav />
  </div>
</div>
