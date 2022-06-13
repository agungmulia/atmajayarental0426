<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                 <h1> {{route.params.id ? "Edit Promo" : "Tambah Promo" }}</h1>
              
            </div>
           
            </template>
        
            <div v-if="promoLoading" class="flex justify-center">Loading...</div>
            

            <form v-else @submit.prevent="tambahPromo">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="flex">
                         <!-- kode promo -->
                        <div class="w-full col-span-6 sm:col-span-3">
                        <label for="KODE_PROMO" class="block text-sm font-medium text-gray-700">Kode Promo</label>
                              <input type="text" name="KODE_PROMO" id="KODE_PROMO" v-model="model.KODE_PROMO" autocomplete="KODE_PROMO" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <!-- JENIS PROMO -->
                        <div class="w-full mx-4 col-span-6 sm:col-span-3">
                        <label for="JENIS_PROMO" class="block text-sm font-medium text-gray-700">Jenis Promo</label>
                              <input type="text" name="JENIS_PROMO" id="JENIS_PROMO" v-model="model.JENIS_PROMO" autocomplete="JENIS_PROMO" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <!-- PERSENTASE -->
                        <div class="w-full col-span-6 sm:col-span-3">
                        <label for="PERSENTASE" class="block text-sm font-medium text-gray-700">Persentase</label>
                              <input type="text" name="PERSENTASE" id="PERSENTASE" v-model="model.PERSENTASE" autocomplete="PERSENTASE" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                      </div>
                       

                        <!-- KETERANGAN -->
                        <div class="col-span-6 sm:col-span-3">
                        <label for="KETERANGAN_PROMO" class="block text-sm font-medium text-gray-700">Keterangan</label>
                              <textarea type="text" name="KETERANGAN_PROMO" id="KETERANGAN_PROMO" v-model="model.KETERANGAN_PROMO" autocomplete="KETERANGAN_PROMO" 
                            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
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
import { ref,computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import PageComponent from '../../components/PageComponent.vue'



const data = computed(() => store.state.pegawai.data);

const route = useRoute();

const router = useRouter();

const asetLoading = computed(() => store.state.currentAset.loading)

let model = ref({
    KODE_PROMO: null,
    JENIS_PROMO: null,
    KETERANGAN: null,
    PERSENTASE: null,
});

watch(
    () => store.state.currentPromo.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

if (route.params.id) {
   store.dispatch('cariPromo',route.params.id);
}

function tambahPromo(){
    store.dispatch("tambahPromo", model.value).then(() => {
    router.push({
      name: "Promo",
    });
  });
}


</script>
<script>
export default {
  data(){
    return{
      value1:true,
      search:'',
      pegawai:[],
    }
  },
  computed: {
    searchPegawai: function(){
    return this.store.state.pegawai.data.filter((value) => {
      return value.NAMA_PEGAWAI.match(this.search);
      });
    }
  }
}
</script>
<style>
    
</style>