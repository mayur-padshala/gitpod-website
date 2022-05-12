<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
  import { getStartedItems } from "$lib/contents/docs/landing-page/get-started";
</script>

<Card size="medium" background="white" class="flex">
  <div class="flex p-12 items-center gap-12">
    <img src="/images/docs/book.png" alt="book" />
    <div>
      <div class="text-[28px] font-semibold">
        How would you like to get started with Gitpod?
      </div>
      <p>
        Learn how to spin up dev environments the way that suits you best –
        reading, watching or start directly with a template.
      </p>
      <div class="flex gap-4 justify-center">
        {#each getStartedItems as getStartedItem}
          <LinkButton
            sveltekit:prefetch
            href={getStartedItem.href}
            variant="cta">{getStartedItem.label}</LinkButton
          >
        {/each}
      </div>
    </div>
  </div>
</Card>
