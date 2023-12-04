<template>
  <div class="bg-myRed-600 flex justify-center pb-20 h-full">
    <div class="bg-slate-50 rounded-md mt-12 relative">
      <div
        class="bg-[url('../Images/bglogin.png')] h-[1000px] w-[380px] md:w-[600px] lg:w-[900px]"
      >
        <h3 class="font-danhDa text-myRed-600 text-6xl text-center pt-4 pb-12">
          Đăng nhập
        </h3>
        <div
          class="w-4/5 sm:w-3/5 h-16 bg-stone-50 border-myRed-600 border-solid border-[1px] rounded-full flex justify-center items-center gap-2 mx-auto cursor-pointer"
        >
          <div class="">
            <img src="../assets/Images/google.png" class="h-9" alt="" />
          </div>
          <div class="">
            <p class="font-beVnPro text-base">Đăng nhập với Google</p>
          </div>
        </div>
        <div
          class="border-myRed-600 w-4/5 border-solid border-t-[1px] mt-12 mx-auto"
        ></div>
        <div class="font-beVnPro w-4/5 mx-auto mt-8">
          <p class="mb-2 text-myRed-600 text-lg">Tên đăng nhập</p>
          <input
            v-model="username"
            type="text"
            placeholder="Nhập tên đăng nhập"
            class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
          />
        </div>
        <div class="font-beVnPro w-4/5 mx-auto mt-8">
          <p class="mb-2 text-myRed-600 text-lg">Mật khẩu</p>
          <input
            v-model="password"
            type="password"
            placeholder="Nhập mật khẩu"
            class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
          />
        </div>
        <div class="font-beVnPro w-4/5 mx-auto mt-8">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-myRed-600"
            ></div>
            <span class="ml-3 text-sm font-medium text-myRed-600 tracking-widest"
              >Nhớ mật khẩu</span
            >
          </label>
        </div>
        <div class="font-beVnPro w-3/5 mt-8 mx-auto">
          <div class="w-fit ml-auto">
            <a href="" class="ml-3 text-sm font-medium text-myRed-600 tracking-widest"
              >Quyên mật khẩu?</a
            >
          </div>
          <button
            class="w-full bg-myRed-600 text-stone-50 h-14 rounded-md text-3xl font-bold my-3"
            @click="myLogin()"
          >
            ĐĂNG NHẬP
          </button>
          <div class="text-right md:flex justify-end">
            <p>Bạn chưa có tài khoản?</p>
            <!-- <a href="http://localhost:8080/register" class="decoration-1 underline"
              >Đăng ký ngay</a
            > -->
            <router-link :to="{ name: 'register' }" class="decoration-1 underline"
              >Đăng ký ngay</router-link
            >
          </div>
        </div>
      </div>
      <div class="absolute bottom-2 right-2">
        <img src="../assets/Images/hoasen.png" class="h-52" alt="" srcset="" />
      </div>
    </div>
    <!-- xin nào -->
  </div>
</template>
<script>
import { login } from "@/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    let username = ref("");
    let password = ref("");

    async function myLogin() {
      let data = await login(username.value, password.value);
      if (data) {
        console.log(data);
      } else {
        console.log(data);
        alert("Oke");
      }
    }
    return {
      myLogin,
      username,
      password,
    };
  },
};
</script>
