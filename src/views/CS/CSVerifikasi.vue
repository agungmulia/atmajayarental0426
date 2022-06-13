<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<PageComponent>
      <template v-slot:header>
    <div class="flex justify-between items-center">
      <div class=" lg:w-[50%]">
        <h1 class="text-3xl font-bold text-gray-900">Verifikasi</h1>
      </div>
    </div>
  </template>
  <div class="px-4 sm:px-6 lg:px-0">
    <div class="mt-8 flex flex-col">
      <div class="min-my-3 min-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"> 
          
          
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">     
              
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Mobil</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Promo</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Waktu Mulai</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Waktu Selesai</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Lama Waktu</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Harga</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">       
                <tr 
                class="animate-fade-in-down" 
                v-for="(value,ind) in dataTransaksi" 
                :style="{ animationDelay: `${ind*0.1}s` }"
                :key="value.ID_TRANSAKSI">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div class="text-gray-600">
                          <h4 class="font-bold text-base">{{value.NAMA_MOBIL}}</h4>
                          <div class="flex justify-center">
                            <img :src="value.FOTO_MOBIL"  class="w-48 h-30 object-contain" />
                          </div>
                          
                          <span class="text-sm text-green-600 flex justify-center">Rp. {{numberFormatter.format(value.HARGA_SEWA_HARIAN_MOBIL) }}</span>
                        
                        </div>
                  </td>
                  <td v-if="value.KODE_PROMO != null" class="w-[20%] px-3 py-4 text-sm text-gray-500">
 
                      <span class=" text-lg">{{ value.KODE_PROMO }}</span>
                      <div class=" text-xs">
                        {{ value.KETERANGAN_PROMO }}
                      </div>
                  </td>
                  <td v-else class="w-[20%] px-3 py-4 text-sm text-gray-500">
                  <span class=" text-lg">Tanpa Promo</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{tanggalMulai(value.TANGGAL_MULAI_SEWA)}} ({{jamMulai(value.TANGGAL_MULAI_SEWA)}})</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{tanggalMulai(value.TANGGAL_SELESAI_SEWA)}} ({{jamMulai(value.TANGGAL_SELESAI_SEWA)}})</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{hitungHari(value.TANGGAL_MULAI_SEWA,value.TANGGAL_SELESAI_SEWA)}} Hari</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-green-600">Rp. {{numberFormatter.format((totalHari * value.HARGA_SEWA_HARIAN_MOBIL) - ((totalHari * value.HARGA_SEWA_HARIAN_MOBIL)*value.PERSENTASE)/100) }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div :class="[value.STATUS_TRANSAKSI == 'Selesai' ? ' text-cyan-500' : value.STATUS_TRANSAKSI == 'Sedang berjalan' ? ' text-indigo-600' : ' text-emerald-600']">{{value.STATUS_TRANSAKSI}}</div>
                  </td>
                  
                  <td class=" whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                    <div>
                      <router-link 
                      class="text-pink-600 hover:text-pink-900 text-lg"
                      :to="{name:'VerifTransaksi',params:{id:value.ID_TRANSAKSI}}">
                      Verif</router-link>
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

const dataTransaksi = computed(() => store.state.transaksi.data);

const numberFormatter = Intl.NumberFormat('en-US');

store.dispatch("getTransaksi");

</script>

<script>
import { ref } from "vue";
export default {
  data(){
    return{
      search:'',
      pegawai:[],
      totalHari:null,
    }
  },
 
  methods: {
    tanggalMulai(value){
      var bulan = new  Date(value)

      return bulan.getDate()+' - '+(bulan.getMonth()+1)+' - '+bulan.getFullYear();
    },

    jamMulai(value){
      var bulan = new  Date(value)

      return bulan.getHours()+':'+bulan.getMinutes();
    },

    hitungHari(value1,value2){
      var d1 = new Date(value1);
      var d2 = new Date(value2);
      var d3 = new Date();

      var Difference_In_Time = d2.getTime() - d1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.totalHari = Math.round(Difference_In_Days);
     
      return this.totalHari;
    },
  }
}
</script>