<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto bg-gray-500 rounded-3xl" src="/src/AJR.png" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <router-link :to="{name: 'Login'}" class="font-medium text-pink-600 hover:text-pink-500"> Sign in if you have an account</router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="tambahCustomer">
            <div>
                <label for="NAMA_CUSTOMER" class="block text-sm font-medium text-gray-700"> Nama </label>
                <div class="mt-1">
                    <input v-model="model.NAMA_CUSTOMER" id="NAMA_CUSTOMER" name="NAMA_CUSTOMER" type="text" autocomplete="NAMA_CUSTOMER" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                </div>
            </div>

            <div>
                <label for="ALAMAT_CUSTOMER" class="block text-sm font-medium text-gray-700"> Alamat </label>
                <div class="mt-1">
                    <input v-model="model.ALAMAT_CUSTOMER" id="ALAMAT_CUSTOMER" name="ALAMAT_CUSTOMER" type="text" autocomplete="ALAMAT_CUSTOMER" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                </div>
            </div>

            <div>
                <label for="NO_TELP_CUSTOMER" class="block text-sm font-medium text-gray-700"> No Telpon </label>
                <div class="mt-1">
                    <input v-model="model.NO_TELP_CUSTOMER" id="NO_TELP_CUSTOMER" name="NO_TELP_CUSTOMER" type="text" autocomplete="NO_TELP_CUSTOMER" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                </div>
            </div>

            <div class="flex">
                <div class="w-full">
                    <label for="TANGGAL_LAHIR" class="block text-sm font-medium text-gray-700"> Tangal Lahir </label>
                    <div class="mt-1">
                        <input v-model="model.TANGGAL_LAHIR" id="TANGGAL_LAHIR" name="TANGGAL_LAHIR" type="date" autocomplete="TANGGAL_LAHIR" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                    </div>
                </div>

                <div class="ml-1 w-full">
                    <label for="JENIS_KELAMIN" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                        <select v-model="model.JENIS_KELAMIN" id="JENIS_KELAMIN"  name="JENIS_KELAMIN" autocomplete="JENIS_KELAMIN" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                            <option>Laki-laki</option>
                            <option>Perempuan</option>
                        </select>
                </div>
            </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input v-model="model.EMAIL_CUSTOMER" id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input v-model="model.PASSWORD_CUSTOMER" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
            </div>
          </div>

          

          <div>
              <label class="block text-sm font-medium text-gray-700">Tanda Pengenal <span class="text-pink-600">( Wajib )</span>  </label>
              <div
                  @dragenter.prevent="OnDragEnter" 
                  @dragleave.prevent="OnDragLeave" 
                  @dragover.prevent
                  @drop.prevent="OnDrop"
                  :class="{dragging : isDragging}"
                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center h-full">
                        <img class="w-full h-full object-contain" v-if="model.KTP_CUSTOMER" :src="model.KTP_CUSTOMER" :alt="model.KTP_CUSTOMER"/>
                      <span v-else class=" h-12 w-12  overflow-hidden">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </span>
                      
                      <div class="flex text-sm text-gray-600 justify-center">
                     
                      <p class="pl-1">Drag and Drop your File</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
              </div>
          </div>

          <div>
              <label class="block text-sm font-medium text-gray-700">Surat Izin Mengemudi <span class="text-pink-600">( Opsional )</span>  </label>
              <div
                  @dragenter.prevent="OnDragEnterSIM" 
                  @dragleave.prevent="OnDragLeaveSIM" 
                  @dragover.prevent
                  @drop.prevent="OnDropSIM"
                  :class="{dragging : isDraggingSIM}"
                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center h-full">
                        <img class="w-full h-full object-contain" v-if="model.SIM_CUSTOMER" :src="model.SIM_CUSTOMER" :alt="model.SIM_CUSTOMER"/>
                      <span v-else class=" h-12 w-12  overflow-hidden">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </span>
                      
                      <div class="flex text-sm text-gray-600 justify-center">
                     
                      <p class="pl-1">Drag and Drop your File</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
              </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>       
          </div>

          <div class="hidden">
            {{model.email = model.EMAIL_CUSTOMER}}
            {{model.name = model.NAMA_CUSTOMER}}
            {{model.password = model.PASSWORD_CUSTOMER}}
             <input v-model="model.email" type="text" />
            <input v-model="model.name" type="text" />
             <input v-model="model.password" type="text" />
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Sign in</button>
          </div>
        </form>

       
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '../../store';
import { ref, computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import PageComponent from '../../components/PageComponent.vue'

const route = useRoute();

const router = useRouter();

const driverLoading = computed(() => store.state.currentDriver.loading)

let model = ref({
    ID_CUSTOMER: null,
    NAMA_CUSTOMER: null,
    ALAMAT_CUSTOMER: null,
    TANGGAL_LAHIR: null,
    name:null,
    email:null,
    password:null,
    FOTO_CUSTOMER: null,
    JENIS_KELAMIN: null,
    NO_TELP_CUSTOMER: null,
    EMAIL_CUSTOMER:null,
    PASSWORD_CUSTOMER:null,
    SIM_CUSTOMER:null,
    KTP_CUSTOMER:null,
});

watch(
    () => store.state.currentDriver.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

if (route.params.id) {
   store.dispatch('cariDriver',route.params.id);
}

function onImageChoose(ev){
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        model.value.FOTO_CUSTOMER = reader.result;

    };
    reader.readAsDataURL(file);
}

function tambahCustomer(){
    store.dispatch("tambahCustomer", model.value).then(() => {
    router.push({
      name: "Login",
    });
  });
}

function deleteDriver() {
  if (confirm(`Apakah anda yakin akan menghapus aset?`)) {
    store.dispatch("deleteDriver",model.value.ID_DRIVER).then(() => {
        router.push({
            name:"Driver",
        });
    });
  }
}

</script>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      picked: 'One',
      isDragging: false,
      isDraggingSIM: false,
      isDraggingKesehatan: false,
      isDraggingNAPZA: false,
    }
  },
  methods:{
      OnDragEnter(e) {
          e.preventDefault();

          this.isDragging = true;
      },
      OnDragLeave(e) {
          e.preventDefault();

          this.isDragging = false;
      },

      OnDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;

            const file = e.dataTransfer.files[0];
            const reader = new FileReader();

            console.log(file);
            reader.onload = () => {
                this.model.KTP_CUSTOMER = reader.result;

            };
            reader.readAsDataURL(file);
        },

        OnDragEnterSIM(e) {
            e.preventDefault();

            this.isDraggingSIM = true;
        },
        OnDragLeaveSIM(e) {
            e.preventDefault();

            this.isDraggingSIM = false;
        },

        OnDropSIM(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDraggingSIM = false;

            const file = e.dataTransfer.files[0];
            const reader = new FileReader();

            console.log(file);
            reader.onload = () => {
                this.model.SIM_CUSTOMER = reader.result;

            };
            reader.readAsDataURL(file);
        },

        OnDragEnterKesehatan(e) {
            e.preventDefault();

            this.isDraggingKesehatan = true;
        },
        OnDragLeaveKesehatan(e) {
            e.preventDefault();

            this.isDraggingKesehatan = false;
        },

        OnDropKesehatan(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDraggingKesehatan = false;

            const file = e.dataTransfer.files[0];
            const reader = new FileReader();

            console.log(file);
            reader.onload = () => {
                this.model.SURAT_KESEHATAN = reader.result;

            };
            reader.readAsDataURL(file);
        },

        OnDragEnterNAPZA(e) {
            e.preventDefault();

            this.isDraggingNAPZA = true;
        },
        OnDragLeaveNAPZA(e) {
            e.preventDefault();

            this.isDraggingNAPZA = false;
        },

        OnDropNAPZA(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDraggingNAPZA = false;

            const file = e.dataTransfer.files[0];
            const reader = new FileReader();

            console.log(file);
            reader.onload = () => {
                this.model.SURAT_BEBAS_NAPZA = reader.result;

            };
            reader.readAsDataURL(file);
        },
  },
  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return { active, toggleActive };
  },
}
</script>
<style>
.dragging {
    background: #D9DADA;
}
</style>
