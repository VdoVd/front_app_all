import axios from "axios";
import type {ClockInData, ClockInDateList, TabListData} from "@/common/data";
import {useUserStore} from "@/stores/userStore";

export interface loginResponseData {
    token: string;
    refreshToken: string;
    id: string;
    username: string;
    avatar: string;
    shareInfo: string;
    nickName: string;
    totalTime: number;
    clockinNumbers: number;
}

const useStore=useUserStore()
export const getHomeTabList=()=>{
    return  axios({
        url:'https://api-harmony-teach.itheima.net/hm/question/type',
    })

}

export const getIsClockIn=async ():Promise<ClockInData>=>{

    const res=await  axios({
        headers: {
            'Authorization':` Bearer ${(useStore.userLogin as loginResponseData).token}`,
            'Content-Type': 'application/json'
        },
        method: 'post',
        url: 'https://api-harmony-teach.itheima.net/hm/clockin'
    })

    return res.data.data
}

export const getClockInDate=async ():Promise<ClockInDateList>=>{
    const res=await axios({
        headers: {
            'Authorization':` Bearer ${(useStore.userLogin as loginResponseData).token}`,
        },
        method: 'get',
        url: 'https://api-harmony-teach.itheima.net/hm/clockinInfo'
    })
    return res.data.data
}