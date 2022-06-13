<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{route.params.id ? "Edit Mitra" : "Tambah Mitra" }}
                </h1>

                 <button 
            v-if="route.params.id"
            type="button"
            @click="deleteMitra()"
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
                  Delete Mitra
            </button>
            </div>
           
            </template>
            <div v-if="mitraLoading" class="flex justify-center">Loading...</div>
            <form v-else @submit.prevent="tambahMitra">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <!-- NAMA mITRA -->
                            <div class="mr-2 w-full">
                                <label for="NAMA_MITRA" class="block text-sm font-medium text-gray-700">Nama</label>
                                <input type="text" name="NAMA_MITRA" id="NAMA_MITRA" v-model="model.NAMA_MITRA" autocomplete="NAMA_MITRA" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <!-- ALAMAT DRIVER -->
                        <div>
                            <label for="ALAMAT_MITRA" class="block text-sm font-medium text-gray-700">Alamat</label>
                            <textarea type="text" name="ALAMAT_MITRA" id="ALAMAT_MITRA" v-model="model.ALAMAT_MITRA" autocomplete="ALAMAT_MITRA" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>

                        <div class="flex">
                            <!-- NOTELP DRIVER -->
                           <div class="w-full mr-2">
                               <label for="NO_TELEPON_MITRA" class="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <input type="text" name="NO_TELEPON_MITRA" id="NO_TELEPON_MITRA" v-model="model.NO_TELEPON_MITRA" autocomplete="NO_TELEPON_MITRA" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
                           </div> 
                            
                           <!-- NO KTP mitra -->
                           <div class="w-full">
                               <label for="NO_KTP_MITRA" class="block text-sm font-medium text-gray-700">Nomor KTP</label>
                                <input type="text" name="NO_KTP_MITRA" id="NO_KTP_MITRA" v-model="model.NO_KTP_MITRA" autocomplete="NO_KTP_MITRA" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm text-sm border-gray-300 rounded-md">
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

const mitraLoading = computed(() => store.state.currentMitra.loading)

let model = ref({
    ID_MITRA: null,
    NAMA_MITRA: null,
    ALAMAT_MITRA: null,
    NO_KTP_MITRA: null,
    NO_TELEPON_MITRA: null,
});

watch(
    () => store.state.currentMitra.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

if (route.params.id) {
   store.dispatch('cariMitra',route.params.id);
}


function tambahMitra(){
  if (route.params.id){
       if (confirm("Apakah anda yakin akan mengupdate data mitra?")==true){
            store.dispatch("tambahMitra", model.value).then(() => {
              router.push({
                name: "Mitra",
              });
            });
        }
    }else{
        store.dispatch("tambahMitra", model.value).then(() => {
          router.push({
            name: "Mitra",
          });
        });
    }
    
}

function deleteMitra() {
  if (confirm(`Apakah anda yakin akan menghapus aset?`)) {
    store.dispatch("deleteMitra",model.value.ID_MITRA).then(() => {
        router.push({
            name:"Mitra",
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