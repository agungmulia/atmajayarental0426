<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{route.params.id ? "Edit Pegawai" : "Tambah Pegawai" }}
                </h1>

                 <button 
            v-if="route.params.id"
            type="button"
            @click="deletePegawai()"
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
                  Delete Pegawai
            </button>
            </div>
           
            </template>
            <div v-if="pegawaiLoading" class="flex justify-center">Loading...</div>
            <form v-else>
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <!-- gambar -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Gambar</label>
                            <div class="mt-1 flex items-center">
                                <img class="w-64 h-48 object-contain" v-if="model.FOTO_PEGAWAI" :src="model.FOTO_PEGAWAI" :alt="model.NAMA_PEGAWAI"/>
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
                        <!-- NAMA PEGAWAI -->
                        <div>
                            <label for="NAMA_PEGAWAI" class="block text-sm font-medium text-gray-700">Nama</label>
                            <input type="text" name="NAMA_PEGAWAI" id="NAMA_PEGAWAI" v-model="model.NAMA_PEGAWAI" autocomplete="NAMA_PEGAWAI" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <!-- Role -->
                        <div class="col-span-6 sm:col-span-3">
                        <label for="ID_ROLE" class="block text-sm font-medium text-gray-700">Role</label>
                            <select id="ID_ROLE" v-model="model.ID_ROLE" name="ID_ROLE" autocomplete="ID_ROLE" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                <option value="1">Manager</option>
                                <option value="2">Admin</option>
                                <option value="3">Customer Service</option>
                            </select>
                        </div>

                        <!-- ALAMAT PEGAWAI -->
                        <div>
                            <label for="ALAMAT_PEGAWAI" class="block text-sm font-medium text-gray-700">Alamat</label>
                            <input type="text" name="ALAMAT_PEGAWAI" id="ALAMAT_PEGAWAI" v-model="model.ALAMAT_PEGAWAI" autocomplete="TIPE_MOBIL_aset" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <!-- NO_TELP_PEGAWAI -->
                        <div>
                            <label for="NO_TELP_PEGAWAI" class="block text-sm font-medium text-gray-700">No Telp</label>
                            <input type="text" name="NO_TELP_PEGAWAI" id="NO_TELP_PEGAWAI" v-model="model.NO_TELP_PEGAWAI" autocomplete="NO_TELP_PEGAWAI_aset" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        
                        <!-- JENIS KELAMIN -->
                        <div class="col-span-6 sm:col-span-3">
                        <label for="JENIS_KELAMIN" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                            <select id="JENIS_KELAMIN" v-model="model.JENIS_KELAMIN" name="JENIS_KELAMIN" autocomplete="JENIS_KELAMIN" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>

                        <!-- tanggal LAHIR -->
                        <div>
                            <label for="TANGGAL_LAHIR" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                            <input type="date" name="TANGGAL_LAHIR" id="tanggal_service" v-model="model.TANGGAL_LAHIR" autocomplete="TANGGAL_LAHIR" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <!-- EMAIL PEGAWAI -->
                        <div>
                            <label for="EMAIL_PEGAWAI" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" name="EMAIL_PEGAWAI" id="EMAIL_PEGAWAI" v-model="model.EMAIL_PEGAWAI" autocomplete="EMAIL_PEGAWAI" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                         <!-- PASSWORD PEGAWAI -->
                        <div>
                            <label for="PASSWORD_PEGAWAI" class="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="PASSWORD_PEGAWAI" id="PASSWORD_PEGAWAI" v-model="model.PASSWORD_PEGAWAI" autocomplete="EMAIL_PEGAWAI" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" @click="confirmUpdate()"
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
    NAMA_PEGAWAI: null,
    ALAMAT_PEGAWAI: null,
    TANGGAL_LAHIR: null,
    FOTO_MOBIL_URL: null,
    JENIS_KELAMIN: null,
    NO_TELP_PEGAWAI: null,
    EMAIL_PEGAWAI:null,
    FOTO_PEGAWAI:null,
    PASSWORD_PEGAWAI:null,
});

watch(
    () => store.state.currentPegawai.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

if (route.params.id) {
   store.dispatch('cariPegawai',route.params.id);
}

function onImageChoose(ev){
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        model.value.FOTO_PEGAWAI = reader.result;

    };
    reader.readAsDataURL(file);
}

function tambahPegawai(){
    
}

function deletePegawai() {
  if (confirm(`Apakah anda yakin akan menghapus aset?`)) {
    store.dispatch("deletePegawai",model.value.ID_PEGAWAI).then(() => {
        router.push({
            name:"Pegawai",
        });
    });
  }
}

function confirmUpdate() {
    if (route.params.id){
       if (confirm("Apakah anda yakin akan mengupdate data pegawai?")==true){
            store.dispatch("tambahPegawai", model.value).then(() => {
                router.push({
                name: "Pegawai",
                });
            });
        }
    }else{
        store.dispatch("tambahPegawai", model.value).then(() => {
            router.push({
            name: "Pegawai",
            });
        });
    }
}

</script>
<style>
    
</style>