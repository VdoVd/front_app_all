import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {ClockInData} from "@/common/data";

export const useClockInStore = defineStore('clockIn', () => {
    const clockIn = ref<ClockInData>({} as ClockInData)
    function set(data:ClockInData) {
        clockIn.value=data
    }

    return {
        clockIn,
        set
        }
    },

    {
        persist:true
    }

    )
