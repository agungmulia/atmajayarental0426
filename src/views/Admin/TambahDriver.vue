<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{route.params.id ? "Tampil/Edit Driver" : "Tambah Driver" }}
                </h1>

                 <button 
            v-if="route.params.id"
            type="button"
            @click="deleteDriver()"
            class="py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-600">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 -mt-1 inline-block "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg> 
                  Delete Driver
            </button>
            </div>
           
            </template>
            <div v-if="driverLoading" class="flex justify-center">Loading...</div>
            <form v-else @submit.prevent="tambahDriver">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <!-- Foto Profil -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Foto Profil</label>
                            <div class="mt-1 flex items-center">
                                <img class="w-64 h-48 object-contain" v-if="model.FOTO_DRIVER" :src="model.FOTO_DRIVER" :alt="model.NAMA_DRIVER"/>
                                <span v-else class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[80%] w-[80%] text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
            
                                <button 
                                type="button" 
                                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md
                                shaddow-md text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                <input type="file" @change="onImageChoose" class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"/>Ganti</button>
                            </div>
                        </div>
                        <!-- NAMA Driver -->
                            <div class="mr-2 w-full">
                                <label for="NAMA_DRIVER" class="block text-sm font-medium text-gray-700">Nama</label>
                                <input type="text" name="NAMA_DRIVER" id="NAMA_DRIVER" v-model="model.NAMA_DRIVER" autocomplete="NAMA_DRIVER" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        <div class="flex">
                            <!-- tanggal LAHIR -->
                            <div class="mr-2">
                                <label for="TANGGAL_LAHIR_DRIVER" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                <input type="date" name="TANGGAL_LAHIR_DRIVER" id="TANGGAL_LAHIR_DRIVER" v-model="model.TANGGAL_LAHIR_DRIVER" autocomplete="TANGGAL_LAHIR" 
                                class="mt-1 w-[90%] focus:ring-pink-500 focus:border-pink-500 block shadow-sm text-sm border-gray-300 rounded-md">
                            </div>
                            
                           <!-- EMAIL DRIVER -->
                           <div class="w-full mr-2">
                               <label for="EMAIL_DRIVER" class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="text" name="EMAIL_DRIVER" id="EMAIL_DRIVER" v-model="model.EMAIL_DRIVER" autocomplete="EMAIL_DRIVER" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                           </div> 

                           <!-- PASSWORD DRIVER -->
                        <div class="w-full">
                            <label for="PASSWORD_DRIVER" class="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="PASSWORD_DRIVER" id="PASSWORD_DRIVER" v-model="model.PASSWORD_DRIVER" autocomplete="EMAIL_DRIVER" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                        </div>
                        </div>

                        <!-- ALAMAT DRIVER -->
                        <div>
                            <label for="ALAMAT_DRIVER" class="block text-sm font-medium text-gray-700">Alamat</label>
                            <input type="text" name="ALAMAT_DRIVER" id="ALAMAT_DRIVER" v-model="model.ALAMAT_DRIVER" autocomplete="TIPE_MOBIL_aset" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="flex justify-center">
                            <!-- JENIS KELAMIN -->
                            <div class="mr-4">
                                <label for="JENIS_KELAMIN_DRIVER" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                    <select id="JENIS_KELAMIN_DRIVER" v-model="model.JENIS_KELAMIN_DRIVER" name="JENIS_KELAMIN_DRIVER" autocomplete="JENIS_KELAMIN_DRIVER" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                                        <option>Laki-laki</option>
                                        <option>Perempuan</option>
                                    </select>
                            </div>

                            <!-- Berbahasa asing -->
                            <div>
                                <label for="BAHASA_ASING" class="block text-sm font-medium text-gray-700">Berbahasa Asing</label>
                                <div>
                                    <input class="mr-2" type="radio" id="one" value="1" v-model="model.BAHASA_ASING" />
                                    <label for="one">Ya</label>
                                </div>
                                
                                <div>
                                    <input class="mr-2" type="radio" id="zero" value="0" v-model="model.BAHASA_ASING" />
                                    <label for="zero">Tidak</label>
                                </div>
                            </div>

                            <!-- NO_TELP_DRIVER -->
                            <div class="ml-4">
                                <label for="NO_TELP_DRIVER" class="block text-sm font-medium text-gray-700">No Telp</label>
                                <input type="text" name="NO_TELP_DRIVER" id="NO_TELP_DRIVER" v-model="model.NO_TELP_DRIVER" autocomplete="NO_TELP_DRIVER_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>
                        </div>

                        <div class="flex">
                            <!-- STATUS KETERSEDIAAN -->
                            <div>
                                <label for="STATUS_KETERSEDIAAN" class="block text-sm font-medium text-gray-700">Ketersediaan</label>
                                    <select id="STATUS_KETERSEDIAAN" v-model="model.STATUS_KETERSEDIAAN" name="STATUS_KETERSEDIAAN" autocomplete="STATUS_KETERSEDIAAN" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                                        <option value="Tersedia">Tersedia</option>
                                        <option value="Tidak Tersedia">Tidak Tersedia</option>
                                    </select>
                            </div>

                            <!-- TARIF_DRIVER -->
                            <div class="ml-4 w-full">
                                <label for="TARIF_DRIVER" class="block text-sm font-medium text-gray-700">Tarif Driver</label>
                                <input type="text" name="TARIF_DRIVER" id="TARIF_DRIVER" v-model="model.TARIF_DRIVER" autocomplete="TARIF_DRIVER" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- raTING -->
                            <div class="ml-4">
                                <label for="RATING" class="block text-sm font-medium text-gray-700">Rating</label>
                                <input type="text" name="RATING" id="RATING" v-model="model.RATING" autocomplete="RATING" disabled
                                class="mt-1  focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        
                        <!-- SIM -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700"> Surat Izin Mengemudi </label>
                            <div
                                @dragenter.prevent="OnDragEnter" 
                                @dragleave.prevent="OnDragLeave" 
                                @dragover.prevent
                                @drop.prevent="OnDrop"
                                :class="{dragging : isDragging}"
                                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center h-full">
                                     <img class="w-full h-full object-contain" v-if="model.SIM_DRIVER" :src="model.SIM_DRIVER" :alt="model.SIM_DRIVER"/>
                                    <span v-else class=" h-12 w-12  overflow-hidden">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    
                                    <div class="flex text-sm text-gray-600 justify-center">
                                    <label for="SIM_DRIVER" class="relative cursor-pointer  rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                                        <span>Upload a file</span>
                                        <input id="SIM_DRIVER" name="SIM_DRIVER" type="file" class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700"> SKCK </label>
                            <div
                            @dragenter.prevent="OnDragEnterSKCK" 
                            @dragleave.prevent="OnDragLeaveSKCK" 
                            @dragover.prevent
                            @drop.prevent="OnDropSKCK"
                            :class="{dragging : isDraggingSKCK}"
                             class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center  justify-cente h-full">
                                <img class="w-full h-full object-contain" v-if="model.SKCK" :src="model.SKCK" :alt="model.SKCK"/>
                                    <span v-else class=" h-12 w-12  overflow-hidden">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                <div class="flex text-sm text-gray-600">
                                <label for="SKCK" class="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                                    <span>Upload a file</span>
                                    <input id="SKCK" name="SKCK" type="file" class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700"> Surat Kesehatan </label>
                            <div 
                            @dragenter.prevent="OnDragEnterKesehatan" 
                            @dragleave.prevent="OnDragLeaveKesehatan" 
                            @dragover.prevent
                            @drop.prevent="OnDropKesehatan"
                            :class="{dragging : isDraggingKesehatan}"
                            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center h-full">
                                <img class="w-full h-full object-contain" v-if="model.SURAT_KESEHATAN" :src="model.SURAT_KESEHATAN" :alt="model.SURAT_KESEHATAN"/>
                                    <span v-else class=" h-12 w-12  overflow-hidden">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                <div class="flex text-sm text-gray-600  justify-center">
                                <label for="SURAT_KESEHATAN" class="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                                    <span>Upload a file</span>
                                    <input id="SURAT_KESEHATAN" name="SURAT_KESEHATAN" type="file" class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700"> Surat Bebas NAPZA </label>
                            <div
                            @dragenter.prevent="OnDragEnterNAPZA" 
                            @dragleave.prevent="OnDragLeaveNAPZA" 
                            @dragover.prevent
                            @drop.prevent="OnDropNAPZA"
                            :class="{dragging : isDraggingNAPZA}" 
                            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="h-full space-y-1 text-center">
                                <img class="w-full h-full object-contain" v-if="model.SURAT_BEBAS_NAPZA" :src="model.SURAT_BEBAS_NAPZA" :alt="model.SURAT_BEBAS_NAPZA"/>
                                    <span v-else class=" h-12 w-12  overflow-hidden">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                <div class="flex text-sm text-gray-600 justify-center">
                                <label for="SURAT_BEBAS_NAPZA" class="relative cursor-pointer rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                                    <span>Upload a file</span>
                                    <input id="SURAT_BEBAS_NAPZA" name="SURAT_BEBAS_NAPZA" type="file" class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                        </div>



                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </PageComponent>
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
    ID_DRIVER: null,
    NAMA_DRIVER: null,
    ALAMAT_DRIVER: null,
    TANGGAL_LAHIR_DRIVER: null,
    FOTO_DRIVER: null,
    JENIS_KELAMIN_DRIVER: null,
    NO_TELP_DRIVER: null,
    EMAIL_DRIVER:null,
    PASSWORD_DRIVER:null,
    SIM_DRIVER:null,
    SKCK:null,
    SURAT_KESEHATAN: null,
    SURAT_BEBAS_NAPZA: null,
    STATUS_KETERSEDIAAN:null,
    BAHASA_ASING:null,
    TARIF_DRIVER:null,
    RATING:null
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
        model.value.FOTO_DRIVER = reader.result;

    };
    reader.readAsDataURL(file);
}

function tambahDriver(){
    if (route.params.id){
       if (confirm("Apakah anda yakin akan mengupdate data driver?")==true){
            store.dispatch("tambahDriver", model.value).then(() => {
                router.push({
                name: "Driver",
                });
            });
        }
    }else{
        store.dispatch("tambahDriver", model.value).then(() => {
            router.push({
            name: "Driver",
            });
        });
    }
    
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
      isDraggingSKCK: false,
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
                this.model.SIM_DRIVER = reader.result;

            };
            reader.readAsDataURL(file);
        },

        OnDragEnterSKCK(e) {
            e.preventDefault();

            this.isDraggingSKCK = true;
        },
        OnDragLeaveSKCK(e) {
            e.preventDefault();

            this.isDraggingSKCK = false;
        },

        OnDropSKCK(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDraggingSKCK = false;

            const file = e.dataTransfer.files[0];
            const reader = new FileReader();

            console.log(file);
            reader.onload = () => {
                this.model.SKCK = reader.result;

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