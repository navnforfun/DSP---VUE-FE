<template>
  <div class="bg-myRed-600">
    <div
      class="h-[80px] mx-auto flex justify-between items-center text-myYellow-300 font-beVnPro container px-12"
    >
      <div class="">
        <ul class="flex items-center">
          <li class="text-myYellow-400 font-westgate text-6xl font-bold pr-5">
            <router-link :to="{ name: 'home' }">DSP</router-link>
          </li>
          <li class="px-5 separate">Trang chủ</li>
          <li class="px-5 separate">Giới thiệu</li>
          <li class="px-5 separate">Trợ giúp</li>
        </ul>
      </div>
      <div class="">
        <div class="separate pl-5">
          <!-- <a href="http://localhost:8080/login"> Vui lòng đăng nhập</a> -->

          <a class="flex items-center justify-center gap-2">
            <img
              v-bind:src="'http://localhost:5296/' + user.img"
              width="30"
              alt=""
              class="rounded-2xl"
            />
            {{ user.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <slot />
  <div class="py-6"></div>
</template>
<script>
import { useRouter } from "vue-router";
import { storeUser } from "@/stores/storeUser";
export default {
  setup() {
    let user = storeUser();
    return { user };
  },
};
</script>
<style scoped>
.separate {
  border-style: solid;
  border-color: #e2c385;
  border-width: 0 0 0 1px;
  height: 25px;
}
</style>
