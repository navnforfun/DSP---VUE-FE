<template>
  <div class="home">
    <div class="container mx-auto px-56 pt-12 font-beVnPro">
      <div class="bg-white shadow-sm rounded-md p-6">
        <div class="" v-if="!err">
          <p class="font-bold text-gray-400 text-xs">{{ box.dateCreated }}</p>
          <h3 class="font-bold text-2xl w-full break-words">{{ box.title }}</h3>
          <div class="border-solid border-b-2 border-myYellow-400 my-3"></div>
          <p class="min-h-[200px] break-words">
            {{ box.content }}
          </p>
        </div>
        <div class="" v-else>
          {{ err }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { storeUser } from "@/stores/storeUser";
import { useJwt } from "@/composables/useJwt";
import { useGetDetailBox } from "@/composables/useGetDetailBox";
import { reactive, ref } from "vue";
export default {
  async setup() {
    useJwt();
    let user = storeUser();
    let route = useRouter();
    route.currentRoute.value.params;
    let box = reactive({});
    let err = ref(null);
    let data = await useGetDetailBox(route.currentRoute.value.query.id);
    console.log(data);

    if (data.status == 200) {
      box = data.data;
    } else {
      err.value = data.data;
    }

    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    let d = new Date(box.dateCreated);
    box.dateCreated = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
      "/"
    );

    return {
      box,
      err,
    };
  },
};
</script>
