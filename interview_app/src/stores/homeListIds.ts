import {defineStore} from "pinia";
import {ref} from "vue";

export const useIdsStore=defineStore('idsStore',()=>{
    const ids=ref<number[]>([])
    function storeIds(data:number[]){
        ids.value=data
    }
    function getIds(){
        return ids.value
    }
    return {
        ids,
        storeIds,
        getIds
    }
})