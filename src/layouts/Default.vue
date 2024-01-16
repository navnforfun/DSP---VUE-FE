<template>
  <div class="bg-myRed-600 header">
    <div
      class="h-[80px] mx-auto flex justify-between items-center text-myYellow-300 font-beVnPro container px-12"
    >
      <div class="">
        <ul class="flex items-center">
          <li class="text-myYellow-400 font-westgate text-6xl font-bold pr-5">
            <router-link :to="{ name: 'home' }">DSP</router-link>
          </li>
          <li class="px-5 separate">
            <router-link :to="{ name: 'home' }">Trang chủ</router-link>
          </li>
          <li class="px-5 separate">
            <router-link :to="{ name: 'about' }">Giới thiệu</router-link>
          </li>
          <li class="px-5 separate">Trợ giúp</li>
        </ul>
      </div>
      <div class="">
        <div class="separate pl-5">
          <div class="cursor-default" v-if="user.id">
            <div class="user relative hover:selection: group">
              <a class="flex items-center justify-center gap-2">
                <img
                  v-bind:src="'http://localhost:5296/' + user.img"
                  width="30"
                  alt=""
                  class="rounded-2xl"
                />
                {{ user.name }}
              </a>
              <p
                class="absolute bg-white rounded-md px-2 py-1 text-myYellow-400 border-solid border-2 border-myYellow-300 text-sm hidden group-hover:block right-0 cursor-pointer"
                @click="logout()"
              >
                Đăng xuất
              </p>
            </div>
          </div>
          <div class="" v-else>
            <router-link :to="{ name: 'login' }">Vui lòng đăng nhập</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>
<script>
import { useRouter } from "vue-router";
import { storeUser } from "@/stores/storeUser";
export default {
  setup() {
    let router = useRouter();
    let user = storeUser();
    function logout() {
      localStorage.setItem("jwt", "");
      router.push({ name: "login" });
    }
    return { user, logout };
  },
};
</script>
<style scoped>
.header {
  background-image: url("../assets/Images/Trongdong.png");
}
.separate {
  border-style: solid;
  border-color: #e2c385;
  border-width: 0 0 0 1px;
  height: 25px;
}
</style>
