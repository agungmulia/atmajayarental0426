<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<PageComponent>
      <template v-slot:header>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Promo</h1>
      <router-link 
      :to="{name:'TambahPromo'}"
      class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Tambah Promo</router-link>
    </div>
  </template>
  <div class="px-4 sm:px-6 lg:px-0">
    <div class="mt-8 flex flex-col">
      <div class="-my-3 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
           
            <table class="min-w-full divide-y divide-gray-300">
             
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Kode Promo</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Jenis Promo</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Keterangan</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Persen</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
                
              </thead>
              
              <tbody class="divide-y divide-gray-200 bg-white">
               
                <tr 
                class="animate-fade-in-down" 
                v-for="(value,ind) in data" 
                :style="{ animationDelay: `${ind*0.1}s` }"
                :key="value.KODE_PROMO">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div class="text-gray-500">{{ value.KODE_PROMO }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ value.JENIS_PROMO }}</div>
                  </td>
                  <td class="w-[30%]  px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ value.KETERANGAN_PROMO }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ value.PERSENTASE }}%</td>
                  
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex">
                    <div class="mr-2">
                      <button v-if="value.KODE_PROMO" type="button" @click="deletePromo(value)" class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
                  </button>
                    </div>
                    <div class="mt-1">
                      <router-link 
                      class="text-pink-600 hover:text-pink-900 "
                      :to="{name:'EditPromo',params:{id:value.KODE_PROMO}}">
                      Edit</router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../../components/PageComponent.vue"
import store from '../../store';
import { computed } from "vue";

const data = computed(() => store.state.promo.data);

store.dispatch("getPromo");

function deletePromo(value) {
  if (confirm(`Apakah anda yakin akan menghapus promo?`)) {
    store.dispatch("deletePromo",value.KODE_PROMO).then(() => {
       store.dispatch('getPromo')
    });
  }
}
</script>

<script>
export default {
  data(){
    return{
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