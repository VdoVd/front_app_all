import axios from "axios";
import type {ClockInData, ClockInDateList, response, StudyData, TabListData, updateUserData} from "@/common/data";
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
            'Authorization':`Bearer ${(useStore.userLogin as loginResponseData).token}`,
        },
        method: 'get',
        url: 'https://api-harmony-teach.itheima.net/hm/clockinInfo'
    })
    return res.data.data
}

export const upLoadFile=async (formData:FormData):Promise<response<string>> =>{

    const res=await axios.post('https://api-harmony-teach.itheima.net/hm/userInfo/avatar',formData,{

        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization":`Bearer ${(useStore.userLogin as loginResponseData).token}`,
        }

    })
    console.log(JSON.stringify(res))
    // const res=await axios({
    //     headers: {
    //         'Authorization':`Bearer ${(useStore.userLogin as loginResponseData).token}`,
    //         'Content-Type': 'multipart/form-data'
    //     },
    //     url: 'https://api-harmony-teach.itheima.net/hm/userInfo/avatar',
    //
    // })
    return res.data.data

}

export const getUserData=async ():Promise<updateUserData> =>{

    const res=await axios({
        headers: {
            'Authorization':`Bearer ${(useStore.userLogin as loginResponseData).token}`,
        },
        method: 'get',
        url: 'https://api-harmony-teach.itheima.net/hm/userInfo'
    })

    return res.data.data
}

export const updateAvatarAndNickName=async (avatar:string,nickName:string):Promise<string>=>{
    const res=await axios({
        headers: {
            'Authorization':`Bearer ${(useStore.userLogin as loginResponseData).token}`,
            'Content-Type': 'application/json'
        },
        method: 'post',
        url: 'https://api-harmony-teach.itheima.net/hm/userInfo/profile',
        data:{
            avatar:avatar,
            nickName:nickName
        }
    })
    console.log(`updateAvatarAndNickName:${JSON.stringify(res)}`)
    return res.data
}

export const studyTime=async ():Promise<response<StudyData>> =>{
    const res=await axios({
        headers: {
            'Authorization':`Bearer ${(useStore.userLogin as loginResponseData).token}`,
        },
        method: 'get',
        url: 'https://api-harmony-teach.itheima.net/hm/studyInfo'
    })
    return res.data
}

