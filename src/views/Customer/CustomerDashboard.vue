<template>
        <PageComponent>
        <template v-slot:header>
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>   
            <span class="text-sm text-pink-600">Anda hanya dapat melakukan satu transaksi per peminjaman
            </span>
        </template>      
         <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->

            
            <form @submit.prevent="tambahTransaksi">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-2 sm:p-6">
                      <div class="flex ">
                         <label for="Sopir" class="block font-medium text-pink-600 mr-4">Rental</label>               
                                <div class="mr-2">
                                    <input 
                                    @click="cariDriver = false , 
                                    cariMobil = false, 
                                    model.TANGGAL_MULAI_SEWA = null,
                                    model.ID_DRIVER = null,
                                    model.TANGGAL_SELESAI_SEWA = null" 
                                    class="mr-2" 
                                    type="radio" 
                                    id="one" 
                                    value="One" 
                                    v-model="picked" />
                                    <label for="one">Tanpa Supir</label>
                                </div>
                                
                                <div>
                                    <input 
                                    @click="cariMobil = false,
                                    model.TANGGAL_MULAI_SEWA = null,
                                    model.TANGGAL_SELESAI_SEWA = null" 
                                    class="mr-2" 
                                    type="radio" 
                                    id="two" 
                                    value="Two" 
                                    v-model="picked" />
                                    <label for="two">Dengan Supir</label>
                                </div>
                      </div>
                      <div class=" animate-fade-in-down" v-if="picked === 'One'">
                          <label class="text-sm text-pink-600">Perhatian, untuk peminjaman tanpa supir pastikan anda memiliki SIM</label>
                      </div>
                      <hr>
                      <div>
                        <div class=" animate-fade-in-down" v-if="picked === 'Two'">
                          <button @click="cariDriver = true" type="button"><span class="text-sm text-pink-600">Cari Driver</span></button>
                           
                        </div>
                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3" v-if="cariDriver === true && picked === 'Two'">
                          <div v-for="variabel in data" v-bind:key="variabel.ID_DRIVER">
                             
                            <div class="animate-fade-in-down flex">
                              <input class="mr-2" type="radio" :id="variabel.ID_DRIVER" :value="variabel.ID_DRIVER" v-model="model.ID_DRIVER" />
                              <label class=" cursor-pointer" :for="variabel.ID_DRIVER">
                                <div class="flex">
                                  <img class="h-[140px] w-[140px] object-cover rounded-lg" :src="variabel.FOTO_DRIVER" alt="" />
                                  <div>
                                    <div class="ml-2">
                                      <span>{{variabel.NAMA_DRIVER}}</span>
                                    </div>
                                    <div class="ml-2">
                                      <span class=" text-black text-sm">{{variabel.ALAMAT_DRIVER}}</span>
                                    </div>
                                    <div class="ml-2">
                                        <span :class="[variabel.JENIS_KELAMIN_DRIVER === 'Laki-laki' ? 'inline-flex rounded-full bg-blue-500 px-2 text-xs font-semibold leading-5 text-white'  : 'inline-flex rounded-full bg-pink-500 px-2 text-xs font-semibold leading-5 text-white']">{{ variabel.JENIS_KELAMIN_DRIVER }}</span>
                                    </div>
                                    <div class="ml-2">
                                      <span :class="[variabel.BAHASA_ASING == 1 ? 'inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white'  : 'inline-flex rounded-full bg-red-500 px-2 text-xs font-semibold leading-5 text-white']">{{ variabel.BAHASA_ASING == 1 ? "Berbahasa Asing":"Tidak Berbahasa Asing" }}</span>
                                    </div>
                                  </div>
                                </div>
                              </label>
                                                         
                            </div>                        
                          </div>             
                        </div>
                 
                        <div class="flex mt-6 ">
                          <div class="flex-nowrap lg:flex">
                              <!-- Tangggal Mulai Sewa -->
                            <div class="lg:w-full col-span-6 sm:col-span-3">
                            <label for="TANGGAL_MULAI_SEWA" class="block text-sm font-medium text-gray-700">Waktu Mulai Rental</label>
                                  <input type="datetime-local" name="TANGGAL_MULAI_SEWA" id="TANGGAL_MULAI_SEWA" v-model="model.TANGGAL_MULAI_SEWA" autocomplete="KODE_PROMO" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                          </div>

                          <div class="flex-nowrap lg:flex ml-4">
                              <!-- Tanggal Selesai Sewa -->
                            <div class=" lg:w-full col-span-6 sm:col-span-3">
                            <label for="TANGGAL_SELESAI_SEWA" class="block text-sm font-medium text-gray-700">Waktu Selesai Rental</label>
                                  <input type="datetime-local" name="TANGGAL_SELESAI_SEWA" id="TANGGAL_SELESAI_SEWA" v-model="model.TANGGAL_SELESAI_SEWA" autocomplete="JENIS_PROMO" 
                                class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                          </div>
                        </div> 
                        <!-- PERSENTASE -->
                           
                          <div class="mt-2 w-full col-span-6 sm:col-span-3">
                            <label for="STATUS_KETERSEDIAAN" class="block text-sm font-medium text-gray-700">Promo</label>
                            <select id="STATUS_KETERSEDIAAN" v-model="model.KODE_PROMO" name="STATUS_KETERSEDIAAN" autocomplete="STATUS_KETERSEDIAAN" class="mt-1 w-full focus:ring-pink-500 focus:border-pink-500 block shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                                <option v-for="variabel2 in dataPromo" v-bind:key="variabel2.KODE_PROMO" :value="variabel2.KODE_PROMO">{{variabel2.KODE_PROMO}} - {{variabel2.KETERANGAN_PROMO}}</option>
                            </select>
                          </div>
                          <button type="button" @click.prevent="model.KODE_PROMO = null, model.PERSENTASE= null"
                            class="inline-flex justify-center my-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none">
                            Reset Promo</button>
                      </div>
                  
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
                          <label class="text-sm text-pink-600">Isi seluruh data untuk melanjutkan transaksi</label>
                            <button type="button" @click.prevent="cekData(), cekWaktu(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA)"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Cari Mobil</button>
                        </div>
                        <div v-if="cariMobil == true" class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                          <div class=" container animate-fade-in-down" v-for="value in dataAset" v-bind:key="value.ID_MOBIL">
                            <div class="flex">
                              <input class="mr-2" type="radio" :id="value.NAMA_MOBIL" :value="value.ID_MOBIL"  v-model="model.ID_MOBIL"/>
                                <label class=" cursor-pointer bg-pink-600" :for="value.NAMA_MOBIL">
                                      <div 
                                      class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[100%]">
                                      <img :src="value.FOTO_MOBIL"  class="w-full h-48 object-contain" />
                                      <div class="flex justify-between">
                                        <h4 class=" text-lg font-bold">{{value.NAMA_MOBIL}}</h4>
                                        <span class="text-lg text-green-600">Rp. {{numberFormatter.format(value.HARGA_SEWA_HARIAN_MOBIL) }}</span>
                                      </div>
                                      <h3 class="text-md"><span class="pr-[70px]">Tipe</span>: {{value.TIPE_MOBIL}}</h3>
                                      <h3 class=" text-md"><span class="pr-[55px]">Warna</span>: {{value.WARNA_MOBIL}}</h3>
                                      <h3 class="text-md"><span class="pr-[65px]">Jenis</span>: {{value.JENIS_TRANSMISI_MOBIL}}</h3>
                                      <div class="flex">
                                        <div><h3 class=" text-md">Fasilitas</h3></div><span class="pl-[45px]">: {{value.FASILITAS_MOBIL}}</span>
                                      </div>
                              
                                      <h3 class="mt-2 text-md"><span class="pr-[10px]">Bahan Bakar</span>: {{value.JENIS_BAHAN_BAKAR_MOBIL}}</h3>
                                      <h3 class="mt-2 text-md"><span class="pr-[27px]">Kapasitas</span>  : {{value.KAPASITAS_PENUMPANG}}</h3>    
                                    </div>
                                </label>
                            </div>
                            </div> 
                          </div>
                              

                        <div v-if=" model.TANGGAL_MULAI_SEWA != null && model.TANGGAL_SELESAI_SEWA != null && model.ID_MOBIL != null" class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="button" @click="totalHarga = true"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Lihat Rincian</button>
                        </div>

                        <div class="mt-4 animate-fade-in-down" v-if="totalHarga == true && model.TANGGAL_MULAI_SEWA != null && model.TANGGAL_SELESAI_SEWA != null">
                          <span class="text-lg text-pink-600">Rincian Transaksi</span>
                          <hr>
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
                            <div hidden v-for="value in data" v-bind:key="value.ID_DRIVER">
                              <div v-if="model.ID_DRIVER == value.ID_DRIVER">{{model.NAMA_DRIVER = value.NAMA_DRIVER}}</div>
                               <div v-if="model.ID_DRIVER == value.ID_DRIVER">{{model.TARIF_DRIVER = value.TARIF_DRIVER}}</div>
                            </div>
                           
                          
                            <tr v-if="model.KODE_PROMO != null">
                              <td>
                                <span class="text-sm text-pink-600">Promo</span>
                              </td>
                              <td> <span class="text-sm">: {{model.KODE_PROMO}}</span></td>
                              <td><span class="text-xs text-red-500">Perhatian untuk promo akan diverifikasi kembali apakah promo valid</span></td>
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
                            <tr v-if="model.ID_DRIVER != null">
                              <td>
                                <span class="text-sm text-pink-600">Driver</span>
                              </td>
                              <td> <span class="text-sm">: {{model.NAMA_DRIVER}}</span></td>
                            </tr>
                            <tr>
                              <td><span class="text-sm to-blue-900">Total</span></td>
                              <td><span class="text-sm">: Rp. {{numberFormatter.format(((totalHari * model.HARGA_SEWA_HARIAN_MOBIL)+model.TARIF_DRIVER) - ((totalHari * model.HARGA_SEWA_HARIAN_MOBIL)*model.PERSENTASE)/100 )}}</span></td>
                            </tr>
                          </table>
                          <div hidden>
                            {{model.TOTAL_BIAYA_SEWA = ((totalHari * model.HARGA_SEWA_HARIAN_MOBIL) - ((totalHari * model.HARGA_SEWA_HARIAN_MOBIL)*model.PERSENTASE)/100) }}
                            {{model.ID_CUSTOMER = dataCustomer[0].ID_CUSTOMER}}
                          </div>
                          <input hidden type="text" v-model="model.TOTAL_BIAYA_SEWA" :placeholder="model.TOTAL_BIAYA_SEWA">
                          <input hidden type="text" v-model="model.ID_CUSTOMER" :placeholder="model.ID_CUSTOMER">
                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Lanjutkan</button>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            <!-- /End replace -->
          </div>
        </main>
      </PageComponent>
</template>
<script setup>

import store from '../../store';
import { ref,computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import PageComponent from '../../components/PageComponent.vue'


const numberFormatter = Intl.NumberFormat('en-US');

const data = computed(() => store.state.driver.data);

const dataPromo = computed(() => store.state.promo.data);

const dataAset = computed(() => store.state.aset.data);

const dataCustomer = computed(() => store.state.customer.data);

const roleTes =  store.state.user;


const route = useRoute();

const router = useRouter();

const transaksiLoading = computed(() => store.state.currentTransaksi.loading)

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
    ID_CUSTOMER: null,
    TARIF_DRIVER:null,
    NAMA_DRIVER:null,
    TANGGAL_MULAI_SEWA: null,
    TANGGAL_SELESAI_SEWA:null,
    role:null
});


store.dispatch("getDriver");

store.dispatch("getPromo");

store.dispatch("getUser").then(() => {
    store.dispatch('getCustomer',roleTes.data.email);
  });

store.dispatch("getAsetTersedia");

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

function tambahTransaksi(){
    store.dispatch("tambahTransaksi", model.value).then(() => {
    router.push({
      name: "Transaksi",
    });
  });
}

</script>

<script>
import { ref } from "vue";


export default {
  data() {
    return {
      picked: 'One',
      cariDriver: false,
      cariMobil: false,
      totalHarga: false,
      driverNih: null,
      totalHari: null,
      waktuNih: null,
      modelInput: null,
      promoInput:null,
      tanggalMulaiSewa :null
    }
  },

  methods: {
    cekData(){
      this.cariMobil = true;
      if(this.model.TANGGAL_MULAI_SEWA == null || this.model.TANGGAL_SELESAI_SEWA == null ){
        this.cariMobil = false;
        alert("Pastikan Semua Data Terisi!");
      }
    },

    cekWaktu(value1,value2){
      var d1 = new Date(value1);
      var d2 = new Date(value2);
      var d3 = new Date();

      var Difference_In_Time = d2.getTime() - d1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.totalHari = Difference_In_Days;

      if(this.totalHari <= 0 || d1 < d3 || d2 < d3){
        this.cariMobil = false;
        alert("Pastikan Tanggal Rental Benar (Minimal 1 Hari)!");
      }

      if(d1.getHours() < 7 || d1.getHours() > 20 || d2.getHours() < 7 || d2.getHours() > 20){
        this.cariMobil = false;
        alert("Pastikan waktu Rental Benar (07:00-20:00)!");
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

    tanggalMulai(value){
      var bulan = new  Date(value)

      return bulan.getDate()+'-'+(bulan.getMonth()+1)+'-'+bulan.getFullYear();
    },

    jamMulai(value){
      var bulan = new  Date(value)

      return bulan.getHours()+':'+bulan.getMinutes();
    }
  },
  mounted(){
    console.log(this.$userId);
  }
}
</script>

<style>
    
</style>