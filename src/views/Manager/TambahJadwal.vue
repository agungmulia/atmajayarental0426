<template>
    <div>
        <PageComponent>
            <template v-slot:header>
               <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">

                   {{route.params.id ? "Edit Jadwal" : "Tambah Jadwal" }}
                </h1>
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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
                      v-for="(value,ind) in dataJadwal" 
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

            <div v-if="jadwalLoading" class="flex justify-center">Loading...</div>
            

            <form v-else @submit.prevent="postJadwal">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <!-- Nama Pegawai -->
                        <div class="col-span-6 sm:col-span-3">
                        <label for="ID_PEGAWAI" class="block text-sm font-medium text-gray-700">ID Pegawai</label>
                        <select id="ID_PEGAWAI" v-model="model.ID_PEGAWAI" name="ID_PEGAWAI" autocomplete="ID_PEGAWAI" class="mt-1 w-full focus:ring-pink-500 focus:border-pink-500 block shadow-sm sm:text-sm text-sm border-gray-300 rounded-md">
                                <option v-for="value in data" v-bind:key="value.ID_PEGAWAI" :value="value.ID_PEGAWAI">{{value.NAMA_PEGAWAI}} - {{value.NAMA_JABATAN}}</option>
                            </select>
                      
                        </div>

                

                        <!-- Shift -->
                        <div class="col-span-6 sm:col-span-3">
                        <label for="ID_SHIFT" class="block text-sm font-medium text-gray-700">Shift</label>
                            <select id="ID_SHIFT" v-model="model.ID_SHIFT" name="ID_SHIFT" autocomplete="ID_SHIFT" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                <option value="1">Senin 1 08:00-15:00</option>
                                <option value="2">Senin 2 15:00-20:00</option>
                                <option value="3">Selasa 1 08:00-15:00</option>
                                <option value="4">Selasa 2 15:00-20:00</option>
                                <option value="5">Rabu 1 08:00-15:00</option>
                                <option value="6">Rabu 2 15:00-20:00</option>
                                <option value="7">Kamis 1 08:00-15:00</option>
                                <option value="8">Kamis 2 15:00-20:00</option>
                                <option value="9">Jumat 1 08:00-15:00</option>
                                <option value="10">Jumat 2 15:00-20:00</option>
                                <option value="11">Sabtu 1 08:00-15:00</option>
                                <option value="12">Sabtu 2 15:00-20:00</option>
                                <option value="13">Minggu 1 08:00-15:00</option>
                                <option value="14">Minggu 2 15:00-20:00</option>
                            </select>
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

store.dispatch("getPegawai");


const data = computed(() => store.state.pegawai.data);

const dataJadwal = computed(() => store.state.jadwal.data);

const route = useRoute();

const router = useRouter();

const asetLoading = computed(() => store.state.currentAset.loading)

let model = ref({
    NAMA_PEGAWAI: null,
    ID_PEGAWAI: null,
    ID_SHIFT: null,
    Hari: null,
});


watch(
    () => store.state.currentJadwal.data,
    (newVal,oldVal)=>{
        model.value = {
            ...JSON.parse(JSON.stringify(newVal)),
            status: newVal.status !== "draft",
        };
    }
)

store.dispatch("getJadwal");

if (route.params.id) {
   store.dispatch('cariJadwal',route.params.id);
}

function postJadwal(){
  if(route.params.id){
    if(confirm("Apakah anda yakin akan mengupdate Jadwal?")==true){
      store.dispatch("editJadwal", model.value).then(() => {
        router.push({
          name: "Jadwal",
        });
      });
    }
  }else{
    store.dispatch("postJadwal", model.value).then(() => {
      router.push({
        name: "Jadwal",
      });
    });
  }
    
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