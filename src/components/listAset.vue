<template>
<div>
        <div 
      class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[100%]">
      <img :src="value.FOTO_MOBIL"  class="w-full h-48 object-contain" />
      <h4 class="mt-4 text-lg font-bold">{{value.NAMA_MOBIL}}</h4>
      <table>
        <tr>
          <td><span class=" text-pink-600">Tipe</span></td>
          <td><span class=" text-gray-500">: {{value.TIPE_MOBIL}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Warna</span></td>
          <td><span class=" text-gray-500">: {{value.WARNA_MOBIL}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Jenis</span></td>
          <td><span class=" text-gray-500">: {{value.JENIS_TRANSMISI_MOBIL}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Fasilitas</span></td>
          <td><span class=" text-gray-500 text-xs">: {{value.FASILITAS_MOBIL}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">NO STNK</span></td>
          <td><span class=" text-gray-500">: {{value.NO_STNK}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Bahan Bakar</span></td>
          <td><span class=" text-gray-500">: {{value.JENIS_BAHAN_BAKAR_MOBIL}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Kapasitas Penumpang</span></td>
          <td><span class=" text-gray-500">: {{value.KAPASITAS_PENUMPANG}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Valume Bahan Bakar</span></td>
          <td><span class=" text-gray-500">: {{value.VOLUME_BAHAN_BAKAR}}</span></td>
        </tr>
        <tr>
          <td><span class=" text-pink-600">Volume Bagasi</span></td>
          <td><span class=" text-gray-500">: {{value.VOLUME_BAGASI_MOBIL}}</span></td>
        </tr>
        <tr v-if="value.KONTRAK_MULAI != null">
          <td><span class=" text-pink-600">Kontrak Mulai</span></td>
          <td><span class=" text-gray-500">: {{value.KONTRAK_MULAI}}</span></td>
        </tr>
        <tr v-if="value.KONTRAK_MULAI != null">
          <td><span class=" text-pink-600">Kontrak Selesai</span></td>
          <td><span class=" text-gray-500">: {{value.KONTRAK_SELESAI}}</span></td>
        </tr>
      </table>
      <div>
        <span :class="[value.STATUS_KETERSEDIAAN === 'Tersedia'  ? 'my-1 justify-center flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500' : 'my-1 justify-center flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500', 'px-3 py-2 rounded-md text-sm font-medium']">
          {{value.STATUS_KETERSEDIAAN === 'Tersedia' ? 'Tersedia' : 'Tidak Tersedia'}}
        </span>
      </div>
      <div v-if="value.ID_MITRA != null">
        <span class="my-1 justify-center flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
          Mitra
        </span>
      </div>

      <div class="flex justify-between items items-center mt-3">
        <router-link 
        class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        :to="{name:'EditAset',params:{id:value.ID_MOBIL}}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>Edit</router-link>
          <button v-if="value.ID_MOBIL" type="button" @click="emit('delete' , value)" class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
    </div>
</div>
</template>
<script setup>
const {value} = defineProps({
    value: Object,
})

const emit = defineEmits(['delete']);

</script>
<style>
    
</style>