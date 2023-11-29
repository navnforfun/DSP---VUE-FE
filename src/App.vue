<template>
	<div class="">
		<component :is="layout"> <router-view /> </component>
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
			layout: computed(
				() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"
			),
		};
	},
};
</script>
<style></style>
