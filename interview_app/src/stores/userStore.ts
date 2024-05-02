import {defineStore} from "pinia";
import type {loginResponseData} from "@/common/data";
import {ref} from "vue";

export const useUserStore=defineStore('userStore',
    ()=>{



        const userLogin=ref({})

        function storeLogin(data:loginResponseData){
            // console.log('存储登录信息:'+JSON.stringify(data))
            userLogin.value=data
        }

        function getUserLogin(){
            // console.log('获取登录信息:'+JSON.stringify(userLogin.value))
            return userLogin.value
        }

        return {
            userLogin ,
            storeLogin,
            getUserLogin
        }
    },
    {
        persist:true
    }
)

export const tokenStore=defineStore('tokenStore',()=>{
    const token=ref('kkkkk')
    function storeToken(data:string){
        token.value=data
    }
    function getToken(){
        return token.value
    }
    return {
        token,
        storeToken,
        getToken
    }

})



