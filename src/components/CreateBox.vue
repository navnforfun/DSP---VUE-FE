<template>
  <div class="mx-auto">
    <div
      class="bg-white rounded-md overflow-hidden opacity-100 z-20 absolute left-0 right-0 w-2/3 mx-auto pb-5"
    >
      <div class="bg-gray-100 py-2 px-5 flex justify-between items-center">
        <p class="text-xl font-semibold">Bài viết mới</p>
        <div class="w-9 cursor-pointer" @click="$emit('close')">
          <i class="fa-solid fa-x text-xs ml-auto block w-fit"></i>
        </div>
      </div>
      <div class="px-5 pt-3">
        <p class="">Tiêu đề</p>
        <input
          type="text"
          placeholder="Nhập tiêu đề"
          class="outline-none border-solid border-myYellow-300 border-b-2 font-semibold w-full title"
        />
      </div>
      <div class="px-5 pt-3">
        <p>Nội dung</p>
        <textarea id="summernote" class="content"></textarea>
      </div>
      <div class="px-5 pt-5">
        <form>
          <label for="files">Chọn tệp tải lên: </label>
          <input type="file" id="files" name="files" multiple class="file" /><br /><br />
        </form>
      </div>
      <div class="px-5 flex">
        <p class="italic">Trạng thái bài viết:</p>
        <div class="w-2"></div>
        <select name="" id="" class="font-bold available">
          <option value="true">Công khai</option>
          <option value="false">Ẩn</option>
        </select>
      </div>
      <div class="mt-12">
        <button
          class="bg-myYellow-300 font-bold mx-auto block px-6 py-3 rounded-md createBox"
        >
          Tạo mới
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useCreateBox } from "@/composables/useCreateBox";
import { startDis, stopDis } from "@/composables/useExtend";
let router = useRouter();
onMounted(() => {
  let createBox = document.querySelector(".createBox");
  let title = document.querySelector(".title");
  let content = document.querySelector(".content");
  let file = document.querySelector(".file");
  let available = document.querySelector(".available");
  createBox.onclick = function () {
    startDis(".createBox");

    console.log(title.value);
    console.log(content.value);
    console.log(file.files);
    console.log(available.value);

    useCreateBox(title.value, content.value, available.value, file.files).then(function (
      res
    ) {
      if (res.status == 200) {
        stopDis(".createBox");
        router.push({
          name: "detailBox",
          params: {
            title: title.value,
          },
          query: {
            id: res.data.id,
          },
        });
      } else {
        stopDis(".createBox");
        alert(res.statusText);
      }
    });
  };

  try {
    let node = document.querySelectorAll(".note-editor.note-frame");
    console.log(node);

    node[-1].remove();
    qrCode.append(document.getElementById(canvas));
    console.log(document.getElementById(canvas));
    node.onclick = function () {
      qrCode2.download({ name: "qr", extension: "png" });
    };
  } catch {
    console.log("hhh");
  }
  $("#summernote").summernote({
    placeholder: "Nhập nội dung tại đây",
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
  console.log("Khoi tao summer note");
});
</script>
