<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{route.params.id ? model.NAMA_MOBIL : "Tambah Aset" }}
                </h1>

                 <button 
            v-if="route.params.id"
            type="button"
            @click="deleteAset()"
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
                  Delete Aset
            </button>
            </div>
           
            </template>
            <div v-if="asetLoading" class="flex justify-center">Loading...</div>
            <form v-else @submit.prevent="tambahAset">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        
                        <!-- gambar -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Gambar</label>
                            <div class="mt-1 flex items-center">
                                <img class="w-64 h-48 object-contain" v-if="model.FOTO_MOBIL" :src="model.FOTO_MOBIL" :alt="model.NAMA_MOBIL"/>
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
                        <!-- NAMA_MOBIL -->
                        <div>
                            <label for="NAMA_MOBIL" class="block text-sm font-medium text-gray-700">Nama</label>
                            <input type="text" name="NAMA_MOBIL" id="NAMA_MOBIL" v-model="model.NAMA_MOBIL" autocomplete="NAMA_MOBIL" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                        <div class="flex">
                            <!-- TIPE_MOBIL -->
                            <div class="w-full">
                                <label for="TIPE_MOBIL" class="block text-sm font-medium text-gray-700">Tipe</label>
                                <input type="text" name="TIPE_MOBIL" id="TIPE_MOBIL" v-model="model.TIPE_MOBIL" autocomplete="TIPE_MOBIL" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- WARNA_MOBIL -->
                            <div class="w-full mx-2">
                                <label for="WARNA_MOBIL" class="block text-sm font-medium text-gray-700">Warna</label>
                                <input type="text" name="WARNA_MOBIL" id="WARNA_MOBIL" v-model="model.WARNA_MOBIL" autocomplete="WARNA_MOBIL" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- FASILITAS_MOBIL -->
                            <div class="w-full">
                                <label for="FASILITAS_MOBIL" class="block text-sm font-medium text-gray-700">Fasilitas</label>
                                <input type="text" name="FASILITAS_MOBIL" id="WARNA_MOBIL" v-model="model.FASILITAS_MOBIL" autocomplete="FASILITAS_MOBIL_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="flex">
                            <!-- jenis transmisi -->
                            <div>
                                <label for="JENIS_TRANSMISI_MOBIL" class="block text-sm font-medium text-gray-700">Jenis Transmisi (3 Huruf)</label>
                                <input type="text" name="JENIS_TRANSMISI_MOBIL" id="WARNA_MOBIL" v-model="model.JENIS_TRANSMISI_MOBIL" autocomplete="JENIS_TRANSMISI_MOBIL_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- KAPASITAS_PENUMPANG -->
                            <div class="mx-4">
                                <label for="KAPASITAS_PENUMPANG" class="block text-sm font-medium text-gray-700">Kapasitas Penumpang</label>
                                <input type="text" name="KAPASITAS_PENUMPANG" id="KAPASITAS_PENUMPANG" v-model="model.KAPASITAS_PENUMPANG" autocomplete="KAPASITAS_PENUMPANG_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <!--Volume VOLUME_BAHAN_BAKAR -->
                            <div>
                                <label for="JENIS_BAHAN_BAKAR_MOBIL" class="block text-sm font-medium text-gray-700">Jenis Bahan Bakar Mobil</label>
                                <input type="text" name="JENIS_BAHAN_BAKAR_MOBIL" id="WARNA_MOBIL" v-model="model.JENIS_BAHAN_BAKAR_MOBIL" autocomplete="JENIS_BAHAN_BAKAR_MOBIL_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="flex">
                            <!-- VOLUME_BAHAN_BAKAR -->
                            <div class="w-full mr-2">
                                <label for="VOLUME_BAHAN_BAKAR" class="block text-sm font-medium text-gray-700">Volume Bakar</label>
                                <input type="text" name="VOLUME_BAHAN_BAKAR" id="WARNA_MOBIL" v-model="model.VOLUME_BAHAN_BAKAR" autocomplete="VOLUME_BAHAN_BAKAR_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            

                            <!-- VOLUME_BAGASI_MOBIL -->
                            <div class="w-full">
                                <label for="VOLUME_BAGASI_MOBIL" class="block text-sm font-medium text-gray-700">Volume Bagasi</label>
                                <input type="text" name="VOLUME_BAGASI_MOBIL" id="VOLUME_BAGASI_MOBIL" v-model="model.VOLUME_BAGASI_MOBIL" autocomplete="VOLUME_BAGASI_MOBIL_aset" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>

                        

                        

                        <!-- no_stnk -->
                        <div>
                            <label for="NO_STNK" class="block text-sm font-medium text-gray-700">No STNK</label>
                            <input type="text" name="NO_STNK" id="NO_STNK" v-model="model.NO_STNK" autocomplete="NO_STNK" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="flex">
                            <!-- Kategori Aset -->
                        <div class="mr-2 col-span-6 sm:col-span-3 w-full">
                        <label for="KATEGORI_ASET" class="block text-sm font-medium text-gray-700">Kategori Aset</label>
                            <select id="KATEGORI_ASET" v-model="model.KATEGORI_ASET" name="KATEGORI_ASET" autocomplete="KATEGORI_ASET" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                <option>Perusahaan</option>
                                <option>Mitra</option>
                            </select>
                        </div>

                        <!-- Statis Aset -->
                        <div class="col-span-6 sm:col-span-3 w-full">
                        <label for="STATUS_KETERSEDIAAN" class="block text-sm font-medium text-gray-700">Status Ketersediaan</label>
                            <select id="STATUS_KETERSEDIAAN" v-model="model.STATUS_KETERSEDIAAN" name="STATUS_KETERSEDIAAN" autocomplete="STATUS_KETERSEDIAAN" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                <option>Tersedia</option>
                                <option>Tidak Tersedia</option>
                            </select>
                        </div>

                        </div>
                        <div v-if="model.KATEGORI_ASET == 'Mitra'" class="flex animate-fade-in-down">
                            <!-- Kontrak mulai -->
                            <div class=" mr-2">
                                <label for="ID_MITRA" class="block text-sm font-medium text-gray-700">Nama Pemilik</label>
                                <select id="ID_MITRA" v-model="model.ID_MITRA" name="ID_MITRA" autocomplete="ID_MITRA" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                    <option v-for="value in dataMitra" v-bind:key="value.ID_MITRA" :value="value.ID_MITRA">{{value.NAMA_MITRA}}</option>
                                </select>
                            </div>
                            <!-- Kontrak mulai -->
                            <div class=" mr-2">
                                <label for="KONTRAK_MULAI" class="block text-sm font-medium text-gray-700">Kontrak Mulai</label>
                                <input type="date" name="KONTRAK_MULAI" id="KONTRAK_MULAI" v-model="model.KONTRAK_MULAI" autocomplete="KONTRAK_MULAI" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500   shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- Kontrak Selesai -->
                            <div>
                                <label for="KONTRAK_SELESAI" class="block text-sm font-medium text-gray-700">Kontrak Selesai</label>
                                <input type="date" name="KONTRAK_SELESAI" id="KONTRAK_SELESAI" v-model="model.KONTRAK_SELESAI" autocomplete="KONTRAK_SELESAI" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500   shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        
                         <!-- tanggal servis -->
                            <div>
                                <label for="TANGGAL_SERVICE" class="block text-sm font-medium text-gray-700">Tanggal Servis</label>
                                <input type="date" name="TANGGAL_SERVICE" id="tanggal_service" v-model="model.TANGGAL_SERVICE" autocomplete="TANGGAL_SERVICE" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500  shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                        

                       

                        <!-- Harga Sewa Mobil -->
                        <div>
                            <label for="HARGA_SEWA_HARIAN_MOBIL" class="block text-sm font-medium text-gray-700">Harga Sewa Harian</label>
                            <input type="text" name="HARGA_SEWA_HARIAN_MOBIL" id="HARGA_SEWA_HARIAN_MOBIL" v-model="model.HARGA_SEWA_HARIAN_MOBIL" autocomplete="HARGA_SEWA_HARIAN_MOBIL" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
import store from '../store';
import { ref,computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import PageComponent from '../components/PageComponent.vue'

const route = useRoute();

const router = useRouter();

const asetLoading = computed(() => store.state.currentAset.loading)

let model = ref({
    NAMA_MOBIL: null,
    TIPE_MOBIL: null,
    FOTO_MOBIL: null,
    FOTO_MOBIL_URL: null,
    WARNA_MOBIL: null,
    JENIS_TRANSMISI_MOBIL: null,
    VOLUME_BAHAN_BAKAR:null,
    JENIS_BAHAN_BAKAR_MOBIL:null,
    VOLUME_BAGASI_MOBIL:null,
    FASILITAS_MOBIL:null,
    NO_STNK:null,
    STATUS_KETERSEDIAAN:null,
    KAPASITAS_PENUMPANG:null,
    TANGGAL_SERVICE:null,
    KONTRAK_MULAI:null,
    KONTRAK_SELESAI:null,
    KATEGORI_ASET:null,
    HARGA_SEWA_HARIAN_MOBIL:null,
    ID_MITRA: null
});

watch(
    () => store.state.currentAset.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

const dataMitra = computed(() => store.state.mitra.data);

store.dispatch("getMitra");

if (route.params.id) {
   store.dispatch('cariAset',route.params.id);
}

function onImageChoose(ev){
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        model.value.FOTO_MOBIL = reader.result;

        model.value.FOTO_MOBIL_URL = reader.result;
    };
    reader.readAsDataURL(file);
}

function confirmUpdate() {
    confirm("Anda yakin akan mengupdate data");
}

function tambahAset(){
    if (route.params.id){
       if (confirm("Apakah anda yakin akan mengupdate data aset?")==true){
            store.dispatch("tambahAset", model.value).then(() => {
                router.push({
                name: "Admin",
                });
            });
        }
    }else{
        store.dispatch("tambahAset", model.value).then(() => {
            router.push({
            name: "Admin",
            });
        });
    }
}

function deleteAset() {
  if (confirm(`Apakah anda yakin akan menghapus aset?`)) {
    store.dispatch("deleteAset",model.value.ID_MOBIL).then(() => {
        router.push({
            name:"Admin",
        });
    });
  }
}

</script>
<style>
    
</style>