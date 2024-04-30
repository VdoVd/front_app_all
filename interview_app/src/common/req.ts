import axios from "axios";
import type {TabListData} from "@/common/data";


export const getHomeTabList=()=>{

    return  axios({
        url:'https://api-harmony-teach.itheima.net/hm/question/type',
    })

}