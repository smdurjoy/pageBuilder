<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data: any;
    socialsExist?: boolean;
  }>(),
  {
    socialsExist: true,
  },
);
</script>

<template>
  <footer class="mt-20 container mx-auto px-4 sm:px-6">
    <img :src="data?.footer.logo" class="mx-auto sm:mx-0" />

    <div
      class="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 xl:grid-cols-4 sm:gap-y-10 mt-10"
    >
      <div v-for="(col, idx) in data?.footer.nav" :key="idx">
        <h3 class="text-gold-light text-lg font-bold mb-4">{{ col.title }}</h3>
        <div class="flex flex-col space-y-2">
          <NuxtLink
            v-for="(link, linkIdx) in col.items"
            :key="linkIdx"
            class="text-cream hover:text-cream/80 transition-colors cursor-pointer"
            :href="link.link"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <h3 class="text-gold-light text-lg font-bold mb-4">
          {{ data?.footer.contact.title }}
        </h3>
        <ul class="space-y-6">
          <li
            v-for="(info, infoIdx) in data?.footer.contact.items"
            :key="infoIdx"
            class="text-cream flex flex-col hover:text-cream/80 transition-colors cursor-pointer"
          >
            <span>{{ info.title }}</span>
            <span>{{ info.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      :class="[
        'flex flex-col gap-4 sm:gap-0 sm:flex-row mt-10 items-center',
        props.socialsExist ? 'sm:justify-between' : 'sm:justify-end',
      ]"
      dir="ltr"
    >
      <div v-if="props.socialsExist" class="flex gap-3 items-center">
        <NuxtLink
          v-for="(icon, idx) in data?.footer.socials"
          :key="idx"
          class="rounded-full p-2.5 bg-navy border border-white/12 hover:border-cream hover:text-black transition-colors cursor-pointer"
          :href="icon.link"
        >
          <img
            :src="icon.icon"
            :alt="icon.name"
            :class="
              icon.name === 'instagram' ? 'instagram-icon h-4 w-4' : 'h-4 w-4'
            "
          />
        </NuxtLink>
      </div>

      <p class="text-cream text-sm">
        {{ data?.footer.copyright }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.instagram-icon {
  filter: brightness(0) invert(1);
  transition: filter 180ms ease;
}
</style>
