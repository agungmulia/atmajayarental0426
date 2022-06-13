<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<PageComponent>
      <template v-slot:header>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Pegawai</h1>
      <div>
        <router-link 
        :to="{name:'EditJadwal'}"
        class="mr-4 py-2 px-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
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
            Edit Jadwal
        </router-link>

        <router-link 
          :to="{name:'TambahJadwal'}"
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
              Tambah Jadwal
          </router-link>
      </div>
    </div>
  </template>
  <div class=" px-4 sm:px-6 lg:px-0">
    <span>Customer Service</span>
    <div class="mt-8 flex flex-col">  
      <div class="-my-3 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"> 
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">HARI</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Senin</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Selasa</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rabu</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Kamis</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Jumat</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Sabtu</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Minggu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                    <div class="flex items-center">
                      <div class="text-gray-900">
                        <div class="font-medium text-gray-900">Shift 1</div>
                        <div class="text-sm text-gray-500"><span>08:00-15:00</span></div>
                      </div>            
                    </div>
                  </td>
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 1 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- selasa -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 3 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Rabu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 5 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Kamis -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 7 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Jumat -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 9 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Sabtu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 11  && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Minggu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 13 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                    <div class="flex items-center">
                      <div class="text-gray-900">
                        <div class="font-medium text-gray-900">Shift 2</div>
                        <div class="text-sm text-gray-500"><span>08:00-15:00</span></div>
                      </div>            
                    </div>
                  </td>
                    
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 2  && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- selasa -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 4 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Rabu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 6 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Kamis -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 8 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Jumat -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 10 && value.HARI==='Jumat' && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>

                    <!-- Sabtu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 12 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>

                    <!-- Minggu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 14 && value.NAMA_JABATAN === 'Customer Service'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-6 px-4 sm:px-6 lg:px-0">
    <span>Admin</span>
    <div class="mt-8 flex flex-col">  
      <div class="-my-3 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"> 
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">HARI</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Senin</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Selasa</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rabu</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Kamis</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Jumat</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Sabtu</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Minggu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                    <div class="flex items-center">
                      <div class="text-gray-900">
                        <div class="font-medium text-gray-900">Shift 1</div>
                        <div class="text-sm text-gray-500"><span>08:00-15:00</span></div>
                      </div>            
                    </div>
                  </td>
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 1 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- selasa -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 3 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Rabu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 5 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Kamis -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 7 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Jumat -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 9 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Sabtu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 11  && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Minggu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 13 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                    <div class="flex items-center">
                      <div class="text-gray-900">
                        <div class="font-medium text-gray-900">Shift 2</div>
                        <div class="text-sm text-gray-500"><span>08:00-15:00</span></div>
                      </div>            
                    </div>
                  </td>
                    
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 2  && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- selasa -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 4 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Rabu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 6 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Kamis -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 8 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Jumat -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 10 && value.HARI==='Jumat' && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Sabtu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 12 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
                    </td>
                    <!-- Minggu -->
                    <td>
                      <tr 
                      class="animate-fade-in-down" 
                      v-for="(value,ind) in data" 
                      :style="{ animationDelay: `${ind*0.1}s` }"
                      :key="value.ID_SHIFT">
                        <td v-if="value.ID_SHIFT === 14 && value.NAMA_JABATAN === 'Admin'" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div  class="font-medium text-gray-900">{{ value.NAMA_PEGAWAI }}</div>
                        </td>   
                      </tr>
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

const data = computed(() => store.state.jadwal.data);

store.dispatch("getJadwal");

function deletePegawai(value) {
  if (confirm(`Apakah anda yakin akan menghapus pegawai?`)) {
    store.dispatch("deletePegawai",value.ID_PEGAWAI).then(() => {
       store.dispatch('getPegawai')
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
    return this.store.state.jadwal.data.filter((value) => {
      return value.NAMA_PEGAWAI.match(this.search);
      });
    }
  }
}
</script>