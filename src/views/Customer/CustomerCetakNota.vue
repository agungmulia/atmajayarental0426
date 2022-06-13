<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                   Nota Transaksi
                </h1>
            </div>
           
            </template>
            <div hidden v-for="value in dataAset" v-bind:key="value.ID_MOBIL">
                <div v-if="model.ID_MOBIL == value.ID_MOBIL">{{model.HARGA_SEWA_HARIAN_MOBIL = value.HARGA_SEWA_HARIAN_MOBIL}}</div>
                <div v-if="model.ID_MOBIL == value.ID_MOBIL">{{model.NAMA_MOBIL = value.NAMA_MOBIL}}</div>
            </div>
            <div hidden v-for="value in dataPromo" v-bind:key="value.KODE_PROMO" id="element">
                <div v-if="model.KODE_PROMO == value.KODE_PROMO">{{model.PERSENTASE = value.PERSENTASE}}</div>
            </div>
            <div hidden v-for="value in dataDriver" v-bind:key="value.ID_DRIVER" id="element">
                <div v-if="model.ID_DRIVER == value.ID_DRIVER">{{model.NAMA_DRIVER = value.NAMA_DRIVER}}</div>
            </div>
            <table class=" min-w-full  border-2" id="nota">
                <tr class=" border-2">
                    <th colspan="4">Atma Rental</th>    
                </tr>
                <tr>
                    <td colspan="3">{{idNota(model)}}</td>
                    <td>{{currentTime()}}</td>    
                </tr>
                <tr>
                    <td>Cust</td>
                    <td>{{namaCustomer.data.name}}</td>
                    <td>PRO:</td>
                    <td>{{model.KODE_PROMO}}</td>
                </tr>
                <tr>
                    <td>CS</td>
                    <td colspan="3">Marco Polo</td>
                </tr>
                <tr v-if="model.ID_DRIVER != null">
                    <td>DRV</td>
                    <td colspan="3">{{model.NAMA_DRIVER}}</td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div class="h-8 bg-pink-600"></div>
                    </td>
                </tr>
                <tr>
                    <th colspan="4">Nota Transaksi</th>    
                </tr>
                <tr class=" border-2">
                    <td>Tanggal Mulai</td>
                    <td>{{model.TANGGAL_MULAI_SEWA}}</td>
                </tr>
                <tr class=" border-2">
                    <td>Tanggal Selesai</td>
                    <td colspan="3">{{model.TANGGAL_SELESAI_SEWA}}</td>
                </tr>
                <tr class=" border-2">
                    <td>Tanggal Pengembalian</td>
                    <td colspan="3">{{model.TANGGAL_PENGEMBALIAN}}</td>
                </tr>
                <tr class=" font-bold">
                    <td>Item</td>
                    <td>Satuan</td> 
                    <td>Durasi</td> 
                    <td>Sub Total</td> 
                </tr>
                <tr class=" ">
                    <td>{{model.NAMA_MOBIL}}</td>
                    <td>Rp. {{numberFormatter.format(model.HARGA_SEWA_HARIAN_MOBIL)}}</td>
                    <td>{{hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA)}} Hari</td>
                    <td>Rp. {{numberFormatter.format(model.HARGA_SEWA_HARIAN_MOBIL*hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA))}}</td>
                </tr>
                <tr v-if="model.ID_DRIVEL != null" class=" ">
                    <td>{{model.NAMA_DRIVER}}</td>
                    <td>{{model.TARIF_DRIVER}}</td>
                    <td>{{hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA)}} Hari</td>
                    <td>{{numberFormatter.format(model.TARIF_DRIVER*hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA))}}</td>
                </tr>
                <tr class=" ">
                    <td colspan="3"></td>
                    <td v-if="model.ID_DRIVER != null" class=" font-bold">{{(model.TARIF_DRIVER*hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA))+(model.HARGA_SEWA_HARIAN_MOBIL*hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA))}}</td>
                     <td v-else class=" font-bold">Rp. {{numberFormatter.format(model.HARGA_SEWA_HARIAN_MOBIL*hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA))}}</td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div class="h-8 bg-pink-600"></div>
                    </td>
                </tr>
                <tr class=" border-2">
                    <td>
                        Cust
                    </td>
                    <td>
                        CS
                    </td>
                    <td>
                        Disc
                    </td>
                    <td>
                        Rp. {{numberFormatter.format(((hitungHari(model.TANGGAL_MULAI_SEWA,model.TANGGAL_SELESAI_SEWA)* model.HARGA_SEWA_HARIAN_MOBIL)*model.PERSENTASE)/100) }}
                    </td>
                </tr>
                <tr>
                    <td rowspan="2">
                       
                    </td>
                    <td rowspan="2">
                     
                    </td>
                    <td>
                        Denda
                    </td>
                    <td>
                        Rp. {{numberFormatter.format(model.BIAYA_EKSTENSI_SEWA)}}
                    </td>
                </tr>
                <tr class="">
                  
                    <td>
                        Total Pembayaran
                    </td>
                    <td class=" font-bold">
                        Rp. {{numberFormatter.format(model.TOTAL_PEMBAYARAN)}}
                    </td>
                </tr>
                <tr class=" divid">
                    <td>
                       {{model.NAMA_CUSTOMER}}Agung Mulia
                    </td>
                    <td>
                        {{model.NAMA_PEGAWAI}}Marco Polo
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
            <div v-if="promoLoading" class="flex justify-center">Loading...</div>

                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">     
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button @click="generatePDF()"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pink-500">
                            Cetak Nota</button>
                        </div>
                    </div>
                </div>
       
        </PageComponent>
    </div>
</template>

<script setup>
import store from '../../store';
import { ref,computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import PageComponent from '../../components/PageComponent.vue'

// var element = document.getElementById('element');
// html2pdf(element);

const numberFormatter = Intl.NumberFormat('en-US');

const data = computed(() => store.state.pegawai.data);

const dataDriver = computed(() => store.state.driver.data);

const dataPromo = computed(() => store.state.promo.data);

const dataAset = computed(() => store.state.aset.data);
store.dispatch("getDriver");

store.dispatch("getPromo");

store.dispatch("getAset");

store.dispatch("getUser");

const namaCustomer =  store.state.user;

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
    NAMA_DRIVER:null,
    NAMA_MOBIL:null,
    HARGA_SEWA_HARIAN_MOBIL: null,
    TOTAL_BIAYA_SEWA: null,
    ID_DRIVER: null,
    ID_TRANSAKSI:null,
    TANGGAL_MULAI_SEWA: null,
    TANGGAL_SELESAI_SEWA:null,
    METODE_PEMBAYARAN: null,
    BIAYA_EKSTENSI_SEWA: null,
    TOTAL_PEMBAYARAN:null,
    TANGGAL_PENGEMBALIAN: null,
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

function tambahPembayaran(){
    store.dispatch("tambahPembayaran", model.value).then(() => {
    router.push({
      name: "Customer",
    });
  });
}


</script>
<script>
import { ref } from "vue";
import jsPDF from 'jspdf';
import vueHtml2pdfVue from 'vue-html2pdf/src/vue-html2pdf.vue';




var element = document.getElementById("element")

export default {
  data(){
    return{
      search:'',
      pegawai:[],
      totalHari:null,
      biayaEkstensi: null,
      terlambatNih: false,
      totalHargaNih: null,
      idNotaNih:null,
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

    currentTime(){
      var d1 = new Date();
    
      return d1.getDate()+'-'+d1.getMonth()+'-'+d1.getFullYear()+','+d1.getHours()+':'+d1.getMinutes();
    },

    idNota(value){
        var tanggal = new Date(value.TANGGAL_PENGEMBALIAN);
        var cekSewa
        if(value.ID_MOBIL!=null && value.ID_DRIVER!=null ){
            cekSewa = '01'
        }else{
            cekSewa = '00'
        }
        this.idNotaNih = 'TRN'+tanggal.getUTCFullYear().toString().slice(-2)+tanggal.getMonth()+tanggal.getDate()+cekSewa+'-'+value.ID_TRANSAKSI;
        return 'TRN'+tanggal.getUTCFullYear().toString().slice(-2)+tanggal.getMonth()+tanggal.getDate()+cekSewa+'-'+value.ID_TRANSAKSI
    },
    generatePDF() {
      var element = document.getElementById("nota");
      html2pdf(element,{
          margin: 10,
          filename: this.idNotaNih,
            
      });
    },
  }
}
</script>
<style>
    
</style>