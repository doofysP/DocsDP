<!-- source: https://github.com/stackblitz/docs/tree/main/.vitepress/theme/components -->
<script setup lang="ts">

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
  link: string;
}>();

</script>

<template>
  <a class="link" :href="link">
    <img v-if="icon" alt="" :src="icon" class="icon" />
    <span class="text">
      <span class="title">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
@import '../styles/vars';

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 64px;
  border-radius: 8px;
  border: solid 2px #4482e02c;
  padding: 10px 24px 10px 18px;
  gap: 16px;
  text-align: left;
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg);
  transition: box-shadow 0.1s ease, transform 0.1s ease;

  &:hover {
    border-color: var(--vp-c-brand);
    transform: translateY(-2px);
    color: var(--vp-c-text-1);
  }

  &:focus-visible {
    outline: solid 2px var(--sb-foreground-highlight-high);
    outline-offset: -2px;
  }
}

.text {
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 20px;
}

.icon {
  flex: none;
  width: 24px;
  height: 24px;
  object-fit: contain;
  object-position: center;
}

.title {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.description {
  display: block;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-2);
  transition: color 0.1s ease;

  .link:hover &,
  .link:focus & {
    color: inherit;
  }
}
</style>