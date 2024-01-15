<template>
  <div class="">
    <Suspense>
      <template #default>
        <component :is="layout"> <router-view /> </component>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants/index";

export default {
  setup() {
    let route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
<style></style>
