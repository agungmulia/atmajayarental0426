import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Admin/dashboard.vue'

import Admin from "../views/Admin/admin.vue";
import Driver from "../views/Admin/driver.vue";
import Pegawai from "../views/pegawai.vue";

import Mitra from "../views/Admin/mitra.vue"
import TambahMitra from "../views/Admin/TambahMitra.vue"

import TambahAset from "../views/TambahAset.vue";
import TambahPegawai from "../views/TambahPegawai.vue"
import TambahDriver from "../views/Admin/TambahDriver.vue";
import Manager from "../views/Manager/manager.vue";

import ManagerLayout from "../components/ManagerLayout.vue"
import CustomerLayout from "../components/CustomerLayout.vue"
import CustomerServiceLayout from "../components/CustomerServiceLayout.vue"
import DashboardLayout from '../components/DashboardLayout.vue'

import CustomerService from "../views/CS/CSVerifikasi.vue"
import VerifTransaksi from "../views/CS/CSVerifTransaksi.vue"

import TambahJadwal from '../views/Manager/TambahJadwal.vue'
import Jadwal from '../views/Manager/jadwal.vue'
import EditJadwal from '../views/Manager/EditJadwal.vue'
  
import Promo from '../views/Manager/Promo.vue'
import TambahPromo from '../views/Manager/TambahPromo.vue'
import EditPromo from '../views/Manager/EditPromo.vue'

import Customer from '../views/Customer/CustomerDashboard.vue'
import Pembayaran from '../views/Customer/CustomerPembayaran.vue'
import Transaksi from '../views/Customer/CustomerTransaksi.vue'
import CetakNota from '../views/Customer/CustomerCetakNota.vue'

import Register from '../views/Customer/register.vue'
import Login from '../views/Customer/login.vue'
import AuthLayout from '../components/AuthLayout.vue'

import store from "../store";

const routes = [
    {
        path: "/",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
          {
            path: "/login",
            name: "Login",
            component: Login,
          },
          {
            path: "/register",
            name: "Register",
            component: Register,
          },
        ],
      },

    {
        path: '/Customer',
        redirect: '/Customer',
        name: 'Customer',
        component: CustomerLayout,
        meta: { requiresAuth: true,isCustomer: true },
        children: [
            {path:'/Customer', name: 'Customer',component: Customer},
            {path:'/Customer/pembayaran', name: 'Pembayaran',component: Pembayaran},
            {path:'/Customer/transaksi', name: 'Transaksi',component: Transaksi},
            {path:'/Customer/CetakNota/:id', name: 'CetakNota',component: CetakNota},
            {
                path:"/Customer:id",
                name:'EditTransaksi',
                component: Customer
            },
        ]
    },

    {
        path: '/CustomerService',
        redirect: '/CustomerService',
        name: 'CustomerService',
        component: CustomerServiceLayout,
        meta: { requiresAuth: true },
        children: [
            {path:'/CustomerService', name: 'CustomerService',component: CustomerService},
            {path:'/CustomerService/Verifikasi/:id', name: 'VerifTransaksi',component: VerifTransaksi},
            // {path:'/Customer/transaksi', name: 'Transaksi',component: Transaksi},
            // {
            //     path:"/Customer:id",
            //     name:'EditTransaksi',
            //     component: Customer
            // },
        ]
    },


    {
        path: '/Admin',
        redirect: '/Admin',
        name: 'Dashboard',
        component: DashboardLayout,
        meta: { requiresAuth: true,isCustomer :false },
        children: [
            {path:'/Admin', name: 'Dashboard',component: Dashboard},
            {
                path: '/Admin/aset',
                name: 'Admin',
                component: Admin
            },
            {
                path: '/Admin/Pegawai',
                name: 'Pegawai',
                component: Pegawai
            },
            {
                path:'/Admin/TambahPegawai',
                name:'TambahPegawai',
                component: TambahPegawai
            },
            {
                path:"/Admin/Pegawai:id",
                name:'EditPegawai',
                component: TambahPegawai
            },
            {
                path:'/Admin/Aset',
                name:'TambahAset',
                component: TambahAset
            },
            {
                path:"/Admin/:id",
                name:'EditAset',
                component: TambahAset
            },
            {
                path: '/Admin/Driver',
                name: 'Driver',
                component: Driver
            },
            {
                path:'/Admin/TambahDriver',
                name:'TambahDriver',
                component: TambahDriver
            },

            {
                path:"/Admin/Mitra/:id",
                name:'EditMitra',
                component: TambahMitra
            },
            {
                path: '/Admin/Mitra',
                name: 'Mitra',
                component: Mitra
            },
            {
                path:'/Admin/Mitra/TambahMitra',
                name:'TambahMitra',
                component: TambahMitra
            },
        ]
    },
    
    {
        path: '/Manager',
        redirect: '/Manager',
        name: 'Manager',
        component: ManagerLayout,
        meta: { requiresAuth: true },
        children:[
            {path:'/Manager', name: 'Manager',component: Manager},
            {
                path:'/Manager/Jadwal', 
                name: 'Jadwal',
                component: Jadwal
            },
            {
                path:'/Manager/Jadwal/TambahJadwal', 
                name: 'TambahJadwal',
                component: TambahJadwal
            },
            {
                path:'/Manager/Promo', 
                name: 'Promo',
                component: Promo
            },
            {
                path:'/Manager/EditPromo', 
                name: 'EditPromo',
                component: EditPromo
            },
            {
                path:'/Manager/TambahPromo', 
                name: 'TambahPromo',
                component: TambahPromo
            },
            {
                path:'/Manager/Jadwal/TambahJadwal:{id}', 
                name: 'EditJadwal-Edit',
                component: TambahJadwal
            },
            {
                path:'/Manager/Jadwal/EditJadwal', 
                name: 'EditJadwal',
                component: EditJadwal
            },
        ]
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
      next({ name: "Login" });
    } else if (store.state.user.token && to.meta.isGuest && store.state.user.data.role == "customer") {
      next({ name: "Customer" });
    }else{
        next();
    }
  });

export default router;