<template>
      <PageComponent>
        <template v-slot:header>
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>   
        </template>      
         <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-4 sm:px-0 flex justify-center">
              <img class="w-[70%] h-[70%] animate-fade-in-down" src="../../dashboard.png" alt="">
            </div>
            <!-- /End replace -->
          </div>
        </main>
      </PageComponent>
</template>
<script setup>
import PageComponent from '../../components/PageComponent.vue';
</script>

<script>
export default {
    name: "Admin"
}
</script>
<style>
    
</style>