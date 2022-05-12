<script lang="ts">
  export let navItem: { title: string; slug: string };
  export let active: boolean = false;
</script>

<style lang="postcss">
  .link-is-not-active {
    @apply border-transparent hover:border-light-black;
  }

  .link-is-active {
    @apply border-current font-semibold text-primary;
  }
</style>

<a
  id={navItem.slug}
  class="no-underline block border-l pl-4 -ml-px {active
    ? 'link-is-active'
    : 'link-is-not-active'}"
  href="#{navItem.slug}">{navItem.title}</a
>
