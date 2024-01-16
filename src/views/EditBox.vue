<template>
  <div class="home pb-10 pt-5">
    <div class="mx-auto">
      <div
        class="bg-white rounded-md overflow-hidden opacity-100 z-20 left-0 right-0 w-2/3 mx-auto pb-5"
      >
        <div class="bg-myYellow-300 py-2 px-5 flex justify-between items-center">
          <p class="text-xl font-semibold">Chỉnh sửa bài viết</p>
        </div>
        <div class="px-5 pt-3">
          <p class="">Tiêu đề</p>
          <input
            type="text"
            placeholder="Nhập tiêu đề"
            class="outline-none border-solid border-myYellow-300 border-b-2 font-semibold w-full title-edit"
          />
        </div>
        <div class="px-5 pt-3">
          <p>Nội dung</p>
          <textarea id="summernote" class="content"></textarea>
        </div>
        <div class="px-5 pt-5 my-4">
          <div class="flex items-center">
            <form>
              <label for="files">Chọn tệp tải lên: </label>
              <input type="file" id="files" name="files" multiple class="file" />
            </form>
            <button
              class="bg-gray-300 p-3 rounded-md font-bold w-32"
              @click="uploadFile()"
            >
              <i class="fa-solid fa-cloud-arrow-up"></i> Tải lên
            </button>
          </div>
        </div>
        <div class="px-5">
          <p class="font-bold">Danh sách tệp hiện tại:</p>
          <!-- <p>state: {{ files.state }}</p>
          <p>{{ files.length }}</p> -->
          <p class="hidden">{{ xxx }}</p>
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(file, index) in files"
                :key="file.id"
                class="border-b-2 border-solid border-gray-200"
                :class="`file-index-${file.id}`"
              >
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
                  @click="deleteFile(file.id, $route.query.id, file.name)"
                >
                  <i class="fa-solid fa-trash-can text-red-400"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-5 flex">
          <p class="italic">Trạng thái bài viết:</p>
          <div class="w-2"></div>
          <select name="" id="" class="font-bold available-edit">
            <option value="true">Công khai</option>
            <option value="false">Ẩn</option>
          </select>
        </div>
        <div class="mt-12">
          <button
            @click="saveEdit()"
            class="bg-myYellow-300 font-bold mx-auto block px-6 py-3 rounded-md editBox w-52 text-xl"
          >
            <i class="fa-solid fa-floppy-disk"></i>
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetDetailBox } from "@/composables/useGetDetailBox";
import { useUpdateBox } from "@/composables/useUpdateBox";
import { useGetFilesBox } from "@/composables/useGetFilesBox";
import { useDeleteFile } from "@/composables/useDeleteFile";
import { useUploadFile } from "@/composables/useUploadFile";
import { ref, reactive, watch, onMounted, getCurrentInstance, computed } from "vue";
import { storeUser } from "@/stores/storeUser";

let route = useRouter();
let data = await useGetDetailBox(route.currentRoute.value.query.id);
let box = data.data;
let err = ref("");
console.log(data);
async function saveEdit() {
  let title = document.querySelector(".title-edit");
  let content = document.querySelector(".note-editable");
  let available = document.querySelector(".available-edit");
  await useUpdateBox(box.id, title.value, content.innerHTML, available.value);
  route.push({
    name: "detailBox",
    params: {
      title: box.title,
    },
    query: {
      id: box.id,
    },
  });
}
let files = reactive([]);
let filesFetch = await useGetFilesBox(route.currentRoute.value.query.id);
if (filesFetch.status == 200) {
  files = filesFetch.data;
} else {
  err.value = filesFetch.data;
}
console.log(files);
// delete file
async function deleteFile(id, boxId, fileName) {
  let fileDeleteResult = await useDeleteFile(id, boxId, fileName);
  // console.log(fileDeleteResult);
  // files[1].name = "delete";
  // console.log(files);
  updateListFile();
}
// upload file
async function uploadFile() {
  let listFile = document.querySelector(".file");
  let uploadFileResult = await useUploadFile(box.id, listFile.files);
  listFile.value = null;
  // console.log(uploadFileResult);
  updateListFile();
}
// re-render
async function updateListFile() {
  filesFetch = await useGetFilesBox(route.currentRoute.value.query.id);
  files = filesFetch.data;
  console.log(files);
  test();
}
//
let xxx = reactive({ x: 1 });
async function test() {
  xxx.x = Math.random() * 10;
  // files.state = Math.random() * 10;
  // text.files = files.length;
  // console.log(text);
}
onMounted(() => {
  $("#summernote").summernote({
    // placeholder: "Nhập nội dung tại đây",
    tabsize: 2,
    height: 250,
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "clear"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video"]],
      ["view", ["codeview", "help"]],
    ],
  });
  try {
    let node = document.querySelectorAll(".note-editor.note-frame");
    // console.log(node);

    node[1].remove();
    qrCode.append(document.getElementById(canvas));
    console.log(document.getElementById(canvas));
    node.onclick = function () {
      qrCode2.download({ name: "qr", extension: "png" });
    };
  } catch {
    // console.log("hhh");
  }
  let title = document.querySelector(".title-edit");
  let content = document.querySelector(".note-editable");
  let available = document.querySelector(".available-edit");
  title.value = box.title;
  content.innerHTML = box.content;
  available.value = box.sharedStatus;
});
</script>
