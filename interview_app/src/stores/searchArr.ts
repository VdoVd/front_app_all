import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useSearchStore = defineStore('search', () => {
    const searchArr = ref<string[]>([])
    function clear() {
        searchArr.value=[]
    }

    function add(value:string) {
        searchArr.value.push(value)
    }

    function pop(){
        if(searchArr.value.length!=0)
        searchArr.value.pop()
    }

    return { searchArr, clear,add,pop }
},
    {
        persist:true
    }

)
