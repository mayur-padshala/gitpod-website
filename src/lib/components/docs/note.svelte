<script lang="ts">
</script>

<style lang="postcss">
  div :global(p) {
    @apply m-0 p-0;
  }
</style>

<div
  class="shadow-medium my-8 p-4 rounded-xl bg-card border border-secondary border-l-[12px]"
>
  <div class="flex text-xl font-bold">
    <span class="mr-1">💡</span>
    <span class="dark:text-secondary">Note</span>
  </div>
  <div class="my-4 not-prose">
    <slot />
  </div>
</div>
