import{u as r,a}from"./userStore-CWKKMDdA.js";const o=r(),i=async()=>(await a({headers:{Authorization:` Bearer ${o.userLogin.token}`,"Content-Type":"application/json"},method:"post",url:"https://api-harmony-teach.itheima.net/hm/clockin"})).data.data,h=async()=>(await a({headers:{Authorization:`Bearer ${o.userLogin.token}`},method:"get",url:"https://api-harmony-teach.itheima.net/hm/clockinInfo"})).data.data,c=async t=>{const e=await a.post("https://api-harmony-teach.itheima.net/hm/userInfo/avatar",t,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${o.userLogin.token}`}});return console.log(JSON.stringify(e)),e.data.data},u=async()=>(await a({headers:{Authorization:`Bearer ${o.userLogin.token}`},method:"get",url:"https://api-harmony-teach.itheima.net/hm/userInfo"})).data.data,d=async(t,e)=>{const n=await a({headers:{Authorization:`Bearer ${o.userLogin.token}`,"Content-Type":"application/json"},method:"post",url:"https://api-harmony-teach.itheima.net/hm/userInfo/profile",data:{avatar:t,nickName:e}});return console.log(`updateAvatarAndNickName:${JSON.stringify(n)}`),n.data},p=async()=>(await a({headers:{Authorization:`Bearer ${o.userLogin.token}`},method:"get",url:"https://api-harmony-teach.itheima.net/hm/studyInfo"})).data,m=async t=>{const e=await a({method:"get",url:`http://dict.youdao.com/dictvoice?audio=${t}&type=1`});let n=new Blob([e.data]);console.log(`blob:${JSON.stringify(n)}`)};export{h as a,u as b,d as c,i as g,m as p,p as s,c as u};