<template>
  <div class="mx-auto">
    <div
      class="bg-white rounded-md overflow-hidden opacity-100 z-20 absolute left-0 right-0 w-2/3 mx-auto pb-5"
    >
      <div class="bg-gray-100 py-2 px-5 flex justify-between items-center">
        <p class="text-xl font-semibold">Chỉnh sửa bài viết</p>
        <div class="w-9 cursor-pointer" @click="$emit('close')">
          <i class="fa-solid fa-x text-xs ml-auto block w-fit"></i>
        </div>
      </div>
      <div class="px-5 pt-3">
        <p class="">Tiêu đề {{ boxId }}</p>
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
          Lưu
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetDetailBox } from "@/composables/useGetDetailBox";
import { ref, reactive, watch } from "vue";
let props = defineProps(["boxId"]);
watch(() => {
  console.log(props.boxId);
});
</script>
