<template>
  <div
    class="modal fixed top-0 left-0 right-0 bottom-0 bg-gray-950 opacity-20 z-10 hidden"
  ></div>

  <div class="create hidden">
    <CreateBox @close="close()" />
  </div>
  <div class="home pb-10 pt-5">
    <div class="container mx-auto px-56 pt-4">
      <section class="flex justify-between items-center font-beVnPro">
        <div class="flex justify-center items-center">
          <p>Sắp xếp theo:</p>
          <select name="" id="" class="sort font-bold">
            <option value="date">Ngày tạo</option>
            <option value="name">Tên</option>
          </select>
          <div class="border-solid border-myYellow-400 border-2 rounded-md p-1 ms-2">
            <input type="text" placeholder="Tìm kiếm" class="outline-none search" />
            <i class="fa-solid fa-magnifying-glass searchBtn"></i>
          </div>
        </div>

        <div class="">
          <div class="flex justify-center items-center">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FBBC05" fill-opacity="0.29" />
              <g clip-path="url(#clip0_85_11)">
                <path
                  d="M20.1583 29.3589C25.2397 29.3589 29.3589 25.2397 29.3589 20.1583C29.3589 15.077 25.2397 10.9577 20.1583 10.9577C15.077 10.9577 10.9577 15.077 10.9577 20.1583C10.9577 25.2397 15.077 29.3589 20.1583 29.3589Z"
                  fill="#FBBC05"
                />
                <path
                  d="M20.1583 15.9119V24.4048"
                  stroke="#000001"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9119 20.1583H24.4048"
                  stroke="#000001"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_85_11">
                  <rect
                    width="19.8167"
                    height="19.8167"
                    fill="white"
                    transform="translate(10.25 10.25)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p class="font-bold cursor-pointer" @click="openCreate()">Thêm bài viết</p>
          </div>
        </div>
      </section>
      <section class="pt-4">
        <p class="text-2xl font-bold font-beVnPro">Danh sách bài viết của tôi</p>
        <p class="hidden">{{ state }}</p>
        <!-- <p>{{ listBox.length }}</p> -->
        <br />
        <div class="" v-if="listBox">
          <div class="" v-for="box in listBox">
            <div
              class="flex justify-between border-b-2 border-solid border-myYellow-400 py-2 hover:font-bold"
            >
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 42"
                  fill="none"
                >
                  <path
                    d="M0.75 37.6964V4.23305C0.75 3.29883 1.12584 2.40288 1.79484 1.74229C2.46384 1.0817 3.3712 0.710586 4.31731 0.710586H17.4807C18.2956 0.687143 19.094 0.940015 19.7431 1.4271C20.3921 1.91419 20.8527 2.60611 21.048 3.38766L22.1538 7.75551H43.5577C44.5038 7.75551 45.4112 8.12662 46.0802 8.78721C46.7492 9.4478 47.125 10.3438 47.125 11.278V37.6964C47.125 38.6306 46.7492 39.5266 46.0802 40.1872C45.4112 40.8478 44.5038 41.2189 43.5577 41.2189H4.31731C3.3712 41.2189 2.46384 40.8478 1.79484 40.1872C1.12584 39.5266 0.75 38.6306 0.75 37.6964Z"
                    fill="#FBBC05"
                  />
                </svg>
                <p
                  class="text-ellipsis overflow-hidden whitespace-nowrap w-[30vw] ps-4 cursor-default"
                >
                  <router-link
                    :to="{
                      name: 'detailBox',
                      params: {
                        title: box.url,
                      },
                      query: {
                        id: box.id,
                      },
                    }"
                  >
                    {{ box.title }}</router-link
                  >
                </p>
              </div>
              <div class="flex gap-36">
                <p class="cursor-default">
                  {{ box.dateCreated }}
                </p>
                <ul class="flex gap-6 text-myYellow-400 italic">
                  <li class="cursor-pointer">
                    <router-link
                      :to="{
                        name: 'editBox',
                        query: {
                          id: box.id,
                        },
                      }"
                      >Sửa</router-link
                    >
                  </li>
                  <li class="cursor-pointer" @click="deleteBox(box.id)">Xóa</li>
                  <!-- <li class="cursor-pointer">Ẩn</li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { storeUser } from "@/stores/storeUser";
import { useJwt } from "@/composables/useJwt";
import { useGetBoxUser } from "@/composables/useGetBoxUser";
import { useDeleteBox } from "@/composables/useDeleteBox";
import { reactive, onMounted, ref } from "vue";
import CreateBox from "@/components/CreateBox.vue";

// edit
let boxId = ref("");

onMounted(() => {
  try {
    let node = document.querySelectorAll(".note-editor.note-frame");
    node[1].remove();
    qrCode.append(document.getElementById(canvas));
    console.log(document.getElementById(canvas));
    node.onclick = function () {
      qrCode2.download({ name: "qr", extension: "png" });
    };
  } catch {}
  let sortOption = document.querySelector(".sort");
  sortOption.onchange = function () {
    if (sortOption.value == "date") {
      listBox.sort(function (a, b) {
        return b.id - a.id;
      });
    } else {
      listBox.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    console.log(listBox);
    testState();
  };
  let searchBtn = document.querySelector(".searchBtn");
  let search = document.querySelector(".search");
  searchBtn.onclick = async function () {
    await findBox(search.value);
  };
  search.onkeyup = async function (event) {
    if (event.key === "Enter") {
      await findBox(search.value);
    }
  };
  async function findBox(input) {
    listBox = listBox.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    console.log(listBox);
    testState();
    listBox = (await useGetBoxUser()).data;
    console.log(listBox);
  }
});
useJwt();

let user = storeUser();
let data = await useGetBoxUser();
// console.log(data);
let listBox = reactive({});
if (data.status === 200) {
  listBox = data.data;
}
let state = reactive({ state: 0 });
// delete box
async function deleteBox(boxId) {
  let deleteBoxResult = await useDeleteBox(boxId);
  let listBox2 = await useGetBoxUser();
  listBox = listBox2.data;
  console.log(listBox);
  testState();
}
async function testState() {
  state.state = Math.random() * 10;
}
function close() {
  let create = document.querySelector(".create");
  let modal = document.querySelector(".modal");
  create.classList.add("hidden");
  modal.classList.add("hidden");
}
function openCreate() {
  let create = document.querySelector(".create");
  let modal = document.querySelector(".modal");
  create.classList.remove("hidden");
  modal.classList.remove("hidden");
  modal.onclick = function () {
    create.classList.add("hidden");
    modal.classList.add("hidden");
  };
}
</script>

<style>
.home {
  position: relative;
  min-height: 100vh;
}
.home::after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../assets/Images/bghome.png");
  opacity: 0.2;
  content: "";
  z-index: -1;
  background-size: 20%, 25%, 25%;
}
.note-modal-backdrop {
  z-index: 10;
}
.note-image-btn,
.note-video-btn {
  background-color: cornflowerblue !important;
}
</style>
