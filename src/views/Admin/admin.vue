<!-- This example requires Tailwind CSS v2.0+ -->

<template>
<PageComponent>
  <template v-slot:header>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Aset</h1>
      <router-link 
      :to="{name:'TambahAset'}"
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
          Tambah Aset</router-link>
    </div>
  </template>
  <input type="text" v-model="searchAset"  placeholder="search"
  class="mb-2 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
  
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
    <ListAset 
    v-for="(value,ind) in data" 
    :key="value.ID_MOBIL"  
    :value="value"
    :search="searchAset"
    class="opacity-0 animate-fade-in-down"
    :style="{ animationDelay: `${ind*0.1}s` }"
    @delete = "deleteAset(value)"/>
  </div>
</PageComponent>
</template>

<script setup>
import store from '../../store/index';
import { computed } from 'vue';
import PageComponent from "../../components/PageComponent.vue";
import ListAset from "../../components/listAset.vue";

const data = computed(() => store.state.aset.data);

store.dispatch("getAset");


function deleteAset(value) {
  if (confirm(`Apakah anda yakin akan menghapus aset?`)) {
    store.dispatch("deleteAset",value.ID_MOBIL).then(() => {
       store.dispatch('getAset')
    });
  }
}

</script>

<script>
export default {
  data(){
    return{
      search:'',
      aset:[],
    }
  },
  computed: {
   
  }
}
</script>