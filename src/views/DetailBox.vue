<template>
  <div class="home min-h-[100vh] container mx-auto px-56 pt-12 font-beVnPro">
    <div class="">
      <div class="bg-white shadow-sm rounded-md p-6">
        <div class="" v-if="!err">
          <p class="font-bold text-gray-400 text-xs">
            {{ box.dateCreated }}
          </p>
          <h3 class="font-bold text-2xl w-full break-words">
            {{ box.title }}
          </h3>
          <div class="border-solid border-b-2 border-myYellow-400 my-3"></div>
          <p class="min-h-[200px] break-words">
            {{ box.content }}
          </p>
          <div class="">
            <p class="font-bold inline-block">
              <i class="text-myYellow-400 relative bottom-[2.5px]">● </i
              >{{ files.length }} Tệp đính kèm
            </p>
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="file in files" class="border-b-2 border-solid border-gray-200">
                  <td class="w-9 pt-3 pb-2">
                    <img
                      width="35"
                      height="45"
                      v-bind:src="require(`../assets/Images/file_icon/${file.ext}`)"
                      alt=""
                    />
                  </td>
                  <td class="ps-3">{{ file.name }}</td>
                  <td class="text-gray-500 text-xs italic">{{ file.size }} MB</td>
                  <td
                    class="hover:text-myYellow-400 cursor-pointer"
                    @click="getFile($route.query.id, file.name)"
                  >
                    <i class="fa-solid fa-circle-down"></i>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="flex justify-between my-5 items-start">
              <div
                class="mr-7 flex items-center justify-end w-fit bg-myYellow-300 rounded-md p-2 cursor-pointer hover:font-bold"
                @click="getAllFile($route.query.id)"
              >
                <i class="fa-solid fa-download"></i>
                <p class="mt-1">Tải toàn bộ</p>
              </div>
              <div class="flex">
                <div class="">
                  <p class="font-bold">Chia sẻ bài viết này:</p>
                  <p class="text-xs text-gray-400 italic">chạm để tải QR về thiết bị</p>
                </div>
                <div class="qr">
                  <div class="" id="canvas"></div>
                </div>
              </div>
            </div>
          </div>
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
import { useGetFilesBox } from "@/composables/useGetFilesBox";
import { reactive, ref, onMounted, onUnmounted } from "vue";
import { useGenerateQr } from "@/composables/useGenerateQr";
import { useDownLoadFile } from "@/composables/useDownLoadFile";
export default {
  async setup() {
    onMounted(() => {
      // qrCode.append(document.getElementById("canvas"));
      useGenerateQr(
        `http://localhost/detailBox/${box.title}?id=` + route.currentRoute.value.query.id,
        "canvas"
      );
    });
    onUnmounted(() => {});
    useJwt();
    let user = storeUser();
    let route = useRouter();
    route.currentRoute.value.params;
    let box = reactive({});
    let err = ref(null);
    let data = await useGetDetailBox(route.currentRoute.value.query.id);

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

    let files = reactive({});
    let filesFetch = await useGetFilesBox(route.currentRoute.value.query.id);
    if (filesFetch.status == 200) {
      files = filesFetch.data;
    } else {
      err.value = filesFetch.data;
    }
    console.log(files);
    // file
    function getFile(boxId, fileName) {
      let link = `http://localhost:5296/api/Box/DowloadFile?boxId=${boxId}&fileName=${fileName}`;
      useDownLoadFile(link);
    }
    function getAllFile(boxId) {
      let link = `http://localhost:5296/api/Box/DowloadAllFile?boxId=${boxId}`;
      useDownLoadFile(link);
    }
    return {
      box,
      err,
      files,
      getFile,
      getAllFile,
    };
  },
};
</script>
