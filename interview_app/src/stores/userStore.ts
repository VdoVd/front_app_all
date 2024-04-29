import {defineStore} from "pinia";
import type {loginResponseData} from "@/common/data";
import {ref} from "vue";

export const useUserStore=defineStore('userStore',
    ()=>{
        const userLogin=ref({})

        function storeLogin(data:loginResponseData){
            userLogin.value=data
        }

        return {
            userLogin,
            storeLogin
        }
    }
)


