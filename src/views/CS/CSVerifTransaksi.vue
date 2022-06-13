<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                   Verifikasi Pembayaran
                </h1>
            </div>
           
            </template>
            <div class=" flex justify-center">
                <table class="min-w-3">
                             <tr>
                              <td><span class="text-sm text-pink-600">Mobil</span></td>
                              <td>
                                <div>
                                      <img :src="model.FOTO_MOBIL"  class="w-48 h-48 object-contain" />
                                </div>
                                <span class="text-sm"> {{model.NAMA_MOBIL}}</span>
                                <span class="text-sm text-green-600"> ( Rp. {{numberFormatter.format(model.HARGA_SEWA_HARIAN_MOBIL)}} )</span>
                              </td>
                            </tr>
                            <tr>
                              <td> <span class="text-sm text-pink-600">Waktu Mulai</span></td>
                              <td><span class="text-sm">: {{tanggalMulai(model.TANGGAL_MULAI_SEWA)}}</span></td>
                            </tr>
                            <tr>
                              <td> <span class="text-sm text-pink-600">Jam Mulai</span></td>
                              <td><span class="text-sm">: {{jamMulai(model.TANGGAL_MULAI_SEWA)}}</span></td>
                            </tr>
                            <tr>
                              <td> <span class="text-sm text-pink-600">Waktu Selesai</span></td>
                              <td><span class="text-sm">: {{tanggalMulai(model.TANGGAL_SELESAI_SEWA)}}</span></td>
                            </tr>
                            <tr>
                              <td> <span class="text-sm text-pink-600">Jam Selesai</span></td>
                              <td><span class="text-sm">: {{jamMulai(model.TANGGAL_SELESAI_SEWA)}}</span></td>
                            </tr>
                            <tr>
                              <td><span class="text-sm text-pink-600">Lama Sewa</span></td>
                              <td> <span class="text-sm">: {{hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA)}} Hari</span></td>
                            </tr>
                            <div hidden v-for="value in dataAset" v-bind:key="value.ID_MOBIL">
                              <div v-if="model.ID_MOBIL == value.ID_MOBIL">{{model.HARGA_SEWA_HARIAN_MOBIL = value.HARGA_SEWA_HARIAN_MOBIL}}</div>
                              <div v-if="model.ID_MOBIL == value.ID_MOBIL">{{model.FOTO_MOBIL = value.FOTO_MOBIL}}</div>
                              <div v-if="model.ID_MOBIL == value.ID_MOBIL">{{model.NAMA_MOBIL = value.NAMA_MOBIL}}</div>
                            </div>
                            <div hidden v-for="value in dataPromo" v-bind:key="value.KODE_PROMO">
                              <div v-if="model.KODE_PROMO == value.KODE_PROMO">{{model.PERSENTASE = value.PERSENTASE}}</div>
                            </div>
                           

                            <tr v-if="model.KODE_PROMO != null">
                              <td>
                                <span class="text-sm text-pink-600">Promo</span>
                              </td>
                              <td> <span class="text-sm">: {{model.KODE_PROMO}}</span></td>
                             
                            </tr>
                            <tr v-if="model.KODE_PROMO != null">
                              <td>
                                <span class="text-sm text-pink-600">Potongan</span>
                                
                              </td>

                              <td> 
                                <span class="text-sm">: {{model.PERSENTASE}}%</span></td>
                              <td> 
                                <span class="text-sm text-green-600 animate-fade-in-down">Hemat Rp. {{numberFormatter.format(((totalHari * model.HARGA_SEWA_HARIAN_MOBIL)*model.PERSENTASE)/100) }}</span></td>
                            </tr>

                            <tr>
                              <td>
                                <span class="text-sm text-pink-600">Metode Pembayaran</span>
                                
                              </td>

                              <td> 
                                <span class="text-sm">: {{model.METODE_PEMBAYARAN}}</span></td>
                            </tr>

                            <div hidden>
                                {{hitungEkstensi(model.TANGGAL_SELESAI_SEWA,model.HARGA_SEWA_HARIAN_MOBIL,model.TANGGAL_MULAI_SEWA)}}
                                {{model.TANGGAL_PENGEMBALIAN = new Date()}}
                                <input type="datetime-local" hidden v-model="model.TANGGAL_PENGEMBALIAN">
                            </div>
                            
                            <tr v-if="terlambatNih == true">
                              <td><span class="text-sm text-pink-600">Biaya Ekstensi</span></td>
                              <td><span class="text-sm">: Rp. {{numberFormatter.format(model.BIAYA_EKSTENSI_SEWA = hitungEkstensi(model.TANGGAL_SELESAI_SEWA,model.HARGA_SEWA_HARIAN_MOBIL,model.TANGGAL_MULAI_SEWA))}}</span></td>
                              <td><span class="text-sm">3 Jam Keterlambatan = 1 hari biaya, anda telat {{biayaEkstensi}} Jam</span></td>
                              <input type="text" hidden v-model="model.BIAYA_EKSTENSI_SEWA">
                            </tr>
                            <tr>
                              <td><span class="text-sm text-blue-900">Total</span></td>
                              <td v-if="terlambatNih == true"><span class="text-sm">: Rp. {{ numberFormatter.format(model.TOTAL_PEMBAYARAN = model.TOTAL_BIAYA_SEWA + model.BIAYA_EKSTENSI_SEWA)}}</span></td>
                              <td v-else class="text-sm">: Rp. {{ numberFormatter.format(model.TOTAL_BIAYA_SEWA)}}</td>
                              <input type="text" hidden v-model="model.TOTAL_PEMBAYARAN">
                            </tr>
                          </table>
            </div>
            <div v-if="promoLoading" class="flex justify-center">Loading...</div>
            <form v-else @submit.prevent="verifikasiTransaksi">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div>
                          <!-- PEMBAYARAN -->
                            <div>
                                <label for="STATUS_TRANSAKSI" class="block text-sm font-medium text-gray-700">Ganti Status</label>
                                    <select id="STATUS_TRANSAKSI" v-model="model.STATUS_TRANSAKSI" name="STATUS_TRANSAKSI" autocomplete="STATUS_TRANSAKSI" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                                        <option>Valid</option>
                                        <option>Sedang berjalan</option>
                                        <option>Selesai</option>
                                    </select>
                                    
                            </div>

                            <div class="ml-2 mt-2">
                                <span>Keterangan:</span>
                                <table>
                                    <tr>
                                        <td><span class="text-sm text-pink-600">Valid</span></td>
                                        <td><span class="text-sm ">: Apabila transaksi diterima</span></td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-sm text-pink-600">Sedang berjalan </span></td>
                                        <td><span class="text-sm ">: Apabila transaksi masuk waktu transaksi</span></td>
                                    </tr>
                                   <tr>
                                       <td><span class="text-sm text-pink-600">Selesai</span></td>
                                        <td><span class="text-sm ">: Apabila transaksi selesai dan pembayaran sesuai</span></td>
                                   </tr>
                                    
                                </table>
                            </div>
                      </div>
                       <div v-if="model.METODE_PEMBAYARAN == 'Transfer ATM'" class=" animate-fade-in-down" >
                            <span class=" text-pink-600 text-xs mt-0">No ATM AJR : 190710426 (BNI)</span>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Verif</button>
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

const numberFormatter = Intl.NumberFormat('en-US');

const data = computed(() => store.state.pegawai.data);

const dataPromo = computed(() => store.state.promo.data);

const dataAset = computed(() => store.state.aset.data);
store.dispatch("getDriver");

store.dispatch("getPromo");

store.dispatch("getAset");

const route = useRoute();

const router = useRouter();

const asetLoading = computed(() => store.state.currentAset.loading)

let model = ref({
    KODE_PROMO: null,
    JENIS_PROMO: null,
    KETERANGAN: null,
    PERSENTASE: null,
    ID_MOBIL:null,
    FOTO_MOBIL: null,
    NAMA_MOBIL:null,
    HARGA_SEWA_HARIAN_MOBIL: null,
    TOTAL_BIAYA_SEWA: null,
    ID_DRIVER: null,
    TANGGAL_MULAI_SEWA: null,
    TANGGAL_SELESAI_SEWA:null,
    METODE_PEMBAYARAN: null,
    BIAYA_EKSTENSI_SEWA: null,
    TOTAL_PEMBAYARAN:null,
    TANGGAL_PENGEMBALIAN: null,
    STATUS_TRANSAKSI:null,
});

watch(
    () => store.state.currentTransaksi.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

if (route.params.id) {
   store.dispatch('cariTransaksi',route.params.id);
}

function verifikasiTransaksi(){
    store.dispatch("verifikasiTransaksi", model.value).then(() => {
    router.push({
      name: "CustomerService",
    });
  });
}


</script>
<script>
import { ref } from "vue";
export default {
  data(){
    return{
      search:'',
      pegawai:[],
      totalHari:null,
      biayaEkstensi: null,
      terlambatNih: false,
      totalHargaNih: null
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
    

    hitungEkstensi(value,value1){
      var bulan = new Date(value)
      var sekarang = new Date()

      this.biayaEkstensi =  sekarang.getHours()-bulan.getHours();
      if(this.biayaEkstensi>=3){
          this.terlambatNih = true;
          return Math.round(this.biayaEkstensi/3)*value1;
      }
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

    currentTime(value){
      var d1 = new Date();
    
      return value = d1;
    },
  }
}
</script>
<style>
    
</style>