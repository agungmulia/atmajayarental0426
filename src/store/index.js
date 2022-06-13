import {createStore} from "vuex";
import axiosClient from '../axios'

// token : 

const store = createStore({
    state: {
        user: {
            data:{},
            token:sessionStorage.getItem("TOKEN"),
        },

        customer: {
            loading: false,
            data: [],
            message:''
        },

        pegawai: {
            loading: false,
            data: [],
            message:''
        },
        
        aset: {
            loading: false,
            data: [],
            message:''
        },

        jadwal: {
            loading: false,
            data: [],
            message:''
        },

        promo: {
            loading: false,
            data: [],
            message:''
        },

        transaksi: {
            loading: false,
            data: [],
            message:''
        },

        driver: {
            loading: false,
            data: [],
            message:''
        },

        mitra: {
            loading: false,
            data: [],
            message:''
        },

        currentCustomer:{
            loading:false,
            data:{}
        },

        currentDriver:{
            loading:false,
            data:{}
        },
        
        currentPromo:{
            loading:false,
            data:{}
        },

        
        currentAset:{
            loading:false,
            data:{}
        },

        currentJadwal:{
            loading:false,
            data:{}
        },

        currentPegawai:{
            loading:false,
            data:{}
        },

        currentTransaksi:{
            loading:false,
            data:{}
        },

        currentDriver:{
            loading:false,
            data:{}
        },

        currentMitra:{
            loading:false,
            data:{}
        },
    },
    getters:{},
    actions:{
        register({commit}, user) {
            return axiosClient.post('/register', user)
              .then(({data}) => {
                commit('setUser', data.user);
                commit('setToken', data.token)
                return data;
              })
          },
          login({commit}, user) {
            return axiosClient.post('/login', user)
              .then(({data}) => {
                commit('setUser', data.user);
                commit('setToken', data.token);
                return data;
              })
          },
          logout({commit}) {
            return axiosClient.post('/logout')
              .then(response => {
                commit('logout')
                return response;
              })
          },


        deleteAset({},ID_MOBIL){
            return axiosClient.delete(`/mobil/${ID_MOBIL}`);
        },

        deleteMitra({},ID_MITRA){
            return axiosClient.delete(`/mitra/${ID_MITRA}`);
        },

        deletePegawai({},ID_PEGAWAI){
            return axiosClient.delete(`/pegawai/${ID_PEGAWAI}`);
        },

        deleteJadwal({},ID_SHIFT){
            return axiosClient.delete(`/jadwal/${ID_SHIFT}`);
        },

        deletePromo({},KODE_PROMO){
            return axiosClient.delete(`/promo/${KODE_PROMO}`);
        },

        deleteDriver({},ID_DRIVER){
            return axiosClient.delete(`/driver/${ID_DRIVER}`);          
        },

        cariMitra({commit},id){
            commit("setCurrentMitraLoading",true);
            return axiosClient
            .get(`/mitra/${id}`)
            .then((res)=>{
                commit("setCurrentMitra",res.data);
                commit("setCurrentMitraLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentMitraLoading",false);
                throw err;
            });
        },

        cariAset({commit},id){
            commit("setCurrentAsetLoading",true);
            return axiosClient
            .get(`/mobil/${id}`)
            .then((res)=>{
                commit("setCurrentAset",res.data);
                commit("setCurrentAsetLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentAsetLoading",false);
                throw err;
            });
        },

        cariTransaksi({commit},id){
            commit("setCurrentTransaksiLoading",true);
            return axiosClient
            .get(`/transaksi/${id}`)
            .then((res)=>{
                commit("setCurrentTransaksi",res.data);
                commit("setCurrentTransaksiLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentTransaksiLoading",false);
                throw err;
            });
        },

        cariPegawai({commit},id){
            commit("setCurrentPegawaiLoading",true);
            return axiosClient
            .get(`/pegawai/${id}`)
            .then((res)=>{
                commit("setCurrentPegawai",res.data);
                commit("setCurrentPegawaiLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentPegawaiLoading",false);
                throw err;
            });
        },

        cariJadwal({commit},id){
            commit("setCurrentJadwalLoading",true);
            return axiosClient
            .get(`/jadwal/${id}`)
            .then((res)=>{
                commit("setCurrentJadwal",res.data);
                commit("setCurrentJadwalLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentJadwalLoading",false);
                throw err;
            });
        },

        cariPromo({commit},id){
            commit("setCurrentPromoLoading",true);
            return axiosClient
            .get(`/promo/${id}`)
            .then((res)=>{
                commit("setCurrentPromo",res.data);
                commit("setCurrentPromoLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentPromoLoading",false);
                throw err;
            });
        },

        cariDriver({commit},id){
            commit("setCurrentDriverLoading",true);
            return axiosClient
            .get(`/driver/${id}`)
            .then((res)=>{
                commit("setCurrentDriver",res.data);
                commit("setCurrentDriverLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentDriverLoading",false);
                throw err;
            });
        },
        
        tambahCustomer({ commit } , customer){
            let response
            response = axiosClient.post("/customer",customer).then((res) => {
                commit("tambahCustomer", res.data);
                return res;
            })
            .catch((err) => {
                commit("customerMessage", err.response);
                throw err;
            });
        },

        tambahMitra({ commit } , mitra){
            let response;
            if(mitra.ID_MITRA){
                response = axiosClient
                .put(`/mitra/${mitra.ID_MITRA}`,aset)
                .then((res) => {
                    commit("editMitra", res.data);
                    return res;   
                })
                .catch((err)=>{
                    commit("mitraMessage", err.res.data.message);
                    throw err;           
                }); 
                
            }else{
                response = axiosClient.post("/mitra",mitra).then((res) => {
                    commit("tambahMitra", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("mitraMessage", err.response);
                    throw err;
                });
            }
        },

        tambahAset({ commit } , aset){
            let response;
            if(aset.ID_MOBIL){
                response = axiosClient
                .put(`/mobil/${aset.ID_MOBIL}`,aset)
                .then((res) => {
                    commit("editAset", res.data);
                    return res;   
                })
                .catch((err)=>{
                    commit("asetMessage", err.res.data.message);
                    throw err;           
                }); 
                
            }else{
                response = axiosClient.post("/mobil",aset).then((res) => {
                    commit("tambahAset", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("asetMessage", err.response);
                    throw err;
                });
            }
        },

        verifikasiTransaksi({ commit } , transaksi){
            let response;
            if(transaksi.ID_TRANSAKSI){
                response = axiosClient
                .put(`/verifikasi/${transaksi.ID_TRANSAKSI}`,transaksi)
                .then((res) => {
                    commit("editTransaksi", res.data);
                    return res;   
                })
                .catch((err)=>{
                    commit("transaksiMessage", err.response);
                    throw err;           
                }); 
                
            }
        },

        tambahPembayaran({ commit } , transaksi){
            let response;
            if(transaksi.ID_TRANSAKSI){
                response = axiosClient
                .put(`/pembayaran/${transaksi.ID_TRANSAKSI}`,transaksi)
                .then((res) => {
                    commit("editTransaksi", res.data);
                    return res;   
                })
                .catch((err)=>{
                    commit("transaksiMessage", err.response);
                    throw err;           
                }); 
                
            }
        },
        tambahTransaksi({ commit } , transaksi){
            let response;
            if(transaksi.ID_TRANSAKSI){
                response = axiosClient
                .put(`/transaksi/${transaksi.ID_TRANSAKSI}`,transaksi)
                .then((res) => {
                    commit("editTransaksi", res.data);
                    return res;   
                })
                .catch((err)=>{
                    commit("transaksiMessage", err.res.data.message);
                    throw err;           
                }); 
                
            }else{
                response = axiosClient.post("/transaksi",transaksi).then((res) => {
                    commit("tambahTransaksi", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("transaksiMessage", err.response);
                    throw err;
                });
            }
        },

       
        tambahPegawai({ commit } , pegawai){
            let response;
            if(pegawai.ID_PEGAWAI){
                response = axiosClient
                .put(`/pegawai/${pegawai.ID_PEGAWAI}`,pegawai)
                .then((res) => {
                    commit("editPegawai", res.data);    
                    return res;   
                })
                .catch((err)=>{
                    commit("pegawaiMessage", err.res.data.message);
                    throw err;           
                }); 
                
            }else{
                response = axiosClient.post("/pegawai",pegawai).then((res) => {
                    commit("tambahPegawai", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("pegawaiMessage", err.response);
                    throw err;
                });
            }
        },

        postJadwal({ commit } , jadwal){
            let response;
            response = axiosClient.post("/jadwal",jadwal).then((res) => {
                commit("tambahJadwal", res.data);
                return res;
            })
            .catch((err) => {
                commit("jadwalMessage", err.response);
                throw err;
            });
        },

        editJadwal({ commit } , jadwal){
            let response;
                response = axiosClient
                .put(`/jadwal/${jadwal.ID_SHIFT}/${jadwal.ID_PEGAWAI}`,jadwal)
                .then((res) => {
                    commit("editJadwal", res.data);    
                    return res;   
                })
                .catch((err)=>{
                    commit("jadwalMessage", err.data);
                    throw err;           
                }); 
                
            
        },

        tambahDriver({ commit } , driver){
            let response;
            if(driver.ID_DRIVER){
                response = axiosClient
                .put(`/driver/${driver.ID_DRIVER}`,driver)
                .then((res) => {
                    commit("editPromo", res.data);    
                    return res;   
                })
                .catch((err)=>{
                    commit("driverMessage", err.data);
                    throw err;           
                }); 
                
            }else{
                response = axiosClient.post("/driver",driver).then((res) => {
                    commit("tambahDriver", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("driverMessage", err.response);
                    throw err;
                });
            }
        },

        editPromo({ commit } , promo){
            let response;
            if(promo.KODE_PROMO){
                response = axiosClient
                .put(`/promo/${promo.KODE_PROMO}`,promo)
                .then((res) => {
                    commit("editPromo", res.data);    
                    return res;   
                })
                .catch((err)=>{
                    commit("promoMessage", err.data);
                    throw err;           
                });            
            }
        },


        tambahPromo({ commit } , promo){
            let response;
            
                response = axiosClient.post("/promo",promo).then((res) => {
                    commit("tambahPromo", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("promoMessage", err.response);
                    throw err;
                });

        },

        getUser({commit}) {
            return axiosClient.get('/user')
            .then(res => {
                  commit('setUser', res.data)
            })
          },

        getDriver({ commit }, {url = null} = {}) {
            commit('setDriverLoading', true)
            url = url || "/driver";
            return axiosClient.get(url).then((res) => {
              commit('setDriverLoading', false)
              commit("setDriver", res.data);
              return res;
            });
          },

        getPegawai({ commit }, {url = null} = {}) {
            commit('setPegawaiLoading', true)
            url = url || "/pegawai";
            return axiosClient.get(url).then((res) => {
              commit('setPegawaiLoading', false)
              commit("setPegawai", res.data);
              return res;
            });
          },

        getJadwal({ commit }, {url = null} = {}) {
            commit('setJadwalLoading', true)
            url = url || "/jadwal";
            return axiosClient.get(url).then((res) => {
                commit('setJadwalLoading', false)
                commit("setJadwal", res.data);
                return res;
            });
        },

        getTransaksi({ commit }, {url = null} = {}) {
            commit('setTransaksiLoading', true)
            url = url || "/transaksi";
            return axiosClient.get(url).then((res) => {
                commit('setTransaksiLoading', false)
                commit("setTransaksi", res.data);
                return res;
            });
        },

        getAset({ commit }, {url = null} = {}) {
            commit('setAsetLoading', true)
            url = url || "/mobil";
            return axiosClient.get(url).then((res) => {
              commit('setAsetLoading', false)
              commit("setAset", res.data);
              return res;
            });
          },

          getAsetTersedia({ commit }, {url = null} = {}) {
            commit('setAsetLoading', true)
            url = url || "/mobilTersedia";
            return axiosClient.get(url).then((res) => {
              commit('setAsetLoading', false)
              commit("setAset", res.data);
              return res;
            });
          },

        getPromo({ commit }, {url = null} = {}) {
            commit('setPromoLoading', true)
            url = url || "/promo";
            return axiosClient.get(url).then((res) => {
                commit('setPromoLoading', false)
                commit("setPromo", res.data);
                return res;
            });
        },

        getMitra({ commit }, {url = null} = {}) {
            commit('setMitraLoading', true)
            url = url || "/mitra";
            return axiosClient.get(url).then((res) => {
                commit('setMitraLoading', false)
                commit("setMitra", res.data);
                return res;
            });
        },

        getTransaksiByCustomer({commit},email){
            commit("setTransaksiLoading",true);
            return axiosClient
            .get(`/transaksiByCustomerEmail/${email}`)
            .then((res)=>{
                commit("setTransaksi",res.data);
                commit("setTransaksiLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentTransaksiLoading",false);
                throw err;
            });
        },

        getCustomer({commit},email){
            commit("setCurrentCustomerLoading",true);
            return axiosClient
            .get(`/customer/${email}`)
            .then((res)=>{
                commit("setCustomer",res.data);
                commit("setCustomerLoading",false);
                return res;
            })
            .catch((err)=>{
                commit("setCurrentTransaksiLoading",false);
                throw err;
            });
        },

        
    },
    mutations:{
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
    
        setUser: (state, user) => {
            state.user.data = user;
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        asetMessage:(state,response) => {
             state.aset.message = response.data.message ;
            console.log(state.aset.message);       
            confirm(Object.values(state.aset.message) );
        },

        transaksiMessage:(state,response) => {
            state.aset.message = response.data.message ;
       },

        jadwalMessage:(state,response) => {
            state.jadwal.message = response.data.message ;
           console.log(state.jadwal.message);
           
           confirm(Object.values(state.aset.message) );
       },

        pegawaiMessage:(state,response) => {
            state.pegawai.message = response.data.message ;
           console.log(state.pegawai.message);
           
           confirm(Object.values(state.pegawai.message) );
       },

       driverMessage:(state,response) => {
            state.driver.message = response.data.message ;
            console.log(state.driver.message);
            confirm(Object.values(state.driver.message) );
        },

       promoMessage:(state,response) => {
            state.promo.message = response.data.message ;
            console.log(state.promo.message);       
            confirm(Object.values(state.promo.message) );
        },

        customerMessage:(state,response) => {
            state.customer.message = response.data.message ;      
            confirm(Object.values(state.customer.message) );
        },

        mitraMessage:(state,response) => {
            state.mitra.message = response.data.message ;
            console.log(state.mitra.message);       
            confirm(Object.values(state.mitra.message) );
        },

        tambahCustomer:(state,customer) => {
            state.customer = [...state.customer, customer.data];
            confirm(customer.message);
        },

        tambahMitra:(state,mitra) => {
            state.mitra = [...state.mitra, mitra.data];
            console.log(state.mitra.message);
            confirm(mitra.message);
        },

        tambahAset:(state,customer) => {
            state.customer = [...state.customer, customer.data];
            console.log(state.customer.message);
            confirm(customer.message);
        },

        tambahAset:(state,aset) => {
            state.aset = [...state.aset, aset.data];
            console.log(state.aset.message);
            confirm(aset.message);
        },

        tambahPromo:(state,promo) => {
            state.promo = [...state.promo, promo.data];
            console.log(state.promo.message);
            confirm(promo.message);
        },

        tambahTransaksi:(state,transaksi) => {
            state.transaksi = [...state.transaksi, transaksi.data];
            console.log(state.transaksi.message);
            confirm(transaksi.message);
        },

        tambahJadwal:(state,jadwal) => {
            state.jadwal = [...state.jadwal, jadwal.data];
            console.log(state.jadwal.message);
            confirm(jadwal.message);
        },

        tambahPegawai:(state,pegawai) => {
            state.pegawai = [...state.pegawai, pegawai.data];
            confirm(pegawai.message);
        },

        tambahDriver:(state,driver) => {
            state.driver = [...state.driver, driver.data];
            confirm(driver.message);
        },

        editAset:(state,aset) => {
            state.aset = state.aset.data.map((s) => {
                if(s.ID_MOBIL == aset.data.ID_MOBIL){
                    return aset.data;     
                }
                return s;
            })
            confirm(aset.message);
        },

        editJadwal:(state,jadwal) => {
            state.jadwal = state.jadwal.data.map((s) => {
                if(s.ID_SHIFT == jadwal.data.ID_SHIFT && s.ID_PEGAWAI == jadwal.data.ID_PEGAWAI){
                    return jadwal.data;     
                }
                return s;
            })
            confirm(jadwal.message);
        },

        editMitra:(state,mitra) => {
            state.mitra = state.mitra.data.map((s) => {
                if(s.ID_MITRA == mitra.data.ID_MITRA){
                    return mitra.data;     
                }
                return s;
            })
            confirm(mitra.message);
        },

        

        editPegawai:(state,pegawai) => {
            state.pegawai = state.pegawai.data.map((s) => {
                if(s.ID_PEGAWAI == pegawai.data.ID_PEGAWAI){
                    return pegawai.data;     
                }
                return s;
            })
            confirm(pegawai.message);
        },

        editPromo:(state,promo) => {
            state.promo = state.promo.data.map((s) => {
                if(s.KODE_PROMO == promo.data.KODE_PROMO){
                    return promo.data;     
                }
                return s;
            })
            confirm(promo.message);
        },

        editDriver:(state,driver) => {
            state.driver = state.driver.data.map((s) => {
                if(s.ID_DRIVER == driver.data.ID_DRIVER){
                    return driver.data;     
                }
                return s;
            })
            confirm(driver.message);
            console.log(driver.message);
        },

        editTransaksi:(state,transaksi) => {
            state.transaksi = state.transaksi.data.map((s) => {
                if(s.ID_TRANSAKSI == transaksi.data.ID_TRANSAKSI){
                    return transaksi.data;     
                }
                return s;
            })
            confirm(transaksi.message);
            console.log(transaksi.message);
        },

        setCurrentAsetLoading:(state,loading)=>{
            state.currentAset.loading = loading;
        },

        setCurrentPegawaiLoading:(state,loading)=>{
            state.currentPegawai.loading = loading;
        },

        setCurrentPromoLoading:(state,loading)=>{
            state.currentPromo.loading = loading;
        },

        setCurrentMitraLoading:(state,loading)=>{
            state.currentMitra.loading = loading;
        },

        setCurrentJadwalLoading:(state,loading)=>{
            state.currentJadwal.loading = loading;
        },

        setCurrentDriverLoading:(state,loading)=>{
            state.currentDriver.loading = loading;
        },

        setCurrentCustomerLoading:(state,loading)=>{
            state.currentCustomer.loading = loading;
        },

        setCurrentTransaksiLoading:(state,loading)=>{
            state.currentTransaksi.loading = loading;
        },

        setCurrentTransaksi:(state,transaksi)=>{
            state.currentTransaksi.data = transaksi.data;
        },

        setCurrentJadwal:(state,jadwal)=>{
            state.currentJadwal.data = jadwal.data;
        },

        setCurrentAset:(state,aset)=>{
            state.currentAset.data = aset.data;
        },

        setCurrentMitra:(state,mitra)=>{
            state.currentMitra.data = mitra.data;
        },

        setCurrentPegawai:(state,pegawai)=>{
            state.currentPegawai.data = pegawai.data;
        },

        setCurrentPromo:(state,promo)=>{
            state.currentPromo.data = promo.data;
        },

        setCurrentDriver:(state,driver)=>{
            state.currentDriver.data = driver.data;
        },

        setAsetLoading: (state, loading) => {
            state.aset.loading = loading;
          },

        setMitra: (state, mitra) => {
            state.mitra.data = mitra.data;
        },

        setMitraLoading: (state, loading) => {
        state.mitra.loading = loading;
        },

        setJadwal: (state, jadwal) => {
            state.jadwal.data = jadwal.data;
        },

        setJadwalLoading: (state, loading) => {
        state.jadwal.loading = loading;
        },

        setCustomer: (state, customer) => {
            state.customer.data = customer.data;
        },

        setCustomerLoading: (state, loading) => {
        state.customer.loading = loading;
        },

        setPromo: (state, promo) => {
            state.promo.data = promo.data;
        },

        setPromoLoading: (state, loading) => {
        state.promo.loading = loading;
        },

        setDriver: (state, driver) => {
            state.driver.data = driver.data;
        },

        setDriverLoading: (state, loading) => {
        state.driver.loading = loading;
        },

        setAset: (state, aset) => {
            state.aset.data = aset.data;
        },


        setPegawaiLoading: (state, loading) => {
            state.pegawai.loading = loading;
          },

        setPegawai: (state, pegawai) => {
            state.pegawai.data = pegawai.data;
        },

        setTransaksiLoading: (state, loading) => {
            state.transaksi.loading = loading;
          },

        setTransaksi: (state, transaksi) => {
            state.transaksi.data = transaksi.data;
        },
    },
    modules:{}
})

export default store;