/* empty css               *//* empty css                 *//* empty css                */import{a as v,u as V}from"./userStore-CWKKMDdA.js";import{d as j,r as p,c as k,a as B,o as C,b as E,w as t,e,f as i,u as m,E as _,g as b,h as c,i as T,j as z,k as S,l as U,m as L,n as N}from"./index-U8SeVnrU.js";const F="/assets/icon-fcsSp2cz.png";j("counter",()=>{const u=p(4),l=k(()=>u.value*2);function n(){u.value++}return{count:u,doubleCount:l,increment:n}});const I=b("img",{src:F,style:{width:"100px"}},null,-1),q=B({__name:"LoginPage",setup(u){const l=p("hmheima"),n=p("Hmheima%123"),r=p(!1);function x(){setTimeout(()=>{window.location.href="/home"},7e3)}let y=()=>{function f(){v.post("https://api-harmony-teach.itheima.net/hm/login",{username:l.value,password:n.value}).then(o=>{N.push({path:"/home"});const a=o.data.data;V().storeLogin(a)}),c.alert("登录成功","提示",{confirmButtonText:"确定",type:"success"}).then(()=>{}).catch(()=>{})}l.value===""?c.alert("用户名不能为空","提示",{confirmButtonText:"确定",type:"warning"}).then(()=>{}).catch(()=>{}):n.value===""?c.alert("密码不能为空","提示",{confirmButtonText:"确定",type:"warning"}).then(()=>{}).catch(()=>{}):r.value===!1?c.alert("请阅读并同意用户协议和隐私政策","提示",{confirmButtonText:"确定",type:"warning"}).then(()=>{}).catch(()=>{}):l.value!==""&&n.value!==""&&r.value===!0&&f()};return(f,o)=>{const a=T,d=z,h=S,w=U,g=L;return C(),E(g,{style:{display:"flex","flex-direction":"column",gap:"20px"}},{default:t(()=>[e(a,{justify:"center"}),e(a,{justify:"center",style:{"margin-top":"130px"}},{default:t(()=>[I]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(d,{class:"max-w-300",size:"large"},{default:t(()=>[i("面试宝典")]),_:1})]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(d,{class:"mx--1 small Info",type:"info",size:"small"},{default:t(()=>[i("搞定企业面试真题，就用面试宝典")]),_:1})]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(h,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),style:{width:"240px","border-width":"0px"},placeholder:"username"},null,8,["modelValue"])]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(h,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=s=>n.value=s),style:{width:"240px","border-width":"0px"},placeholder:"password",type:"password"},null,8,["modelValue"])]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(w,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=s=>r.value=s),label:"已阅读并同意 《用户协议》 和 隐私政策",style:{width:"240px"},size:"large"},null,8,["modelValue"])]),_:1}),e(a,{justify:"center"},{default:t(()=>[e(m(_),{type:"primary",size:"large",style:{width:"240px"},onClick:m(y)},{default:t(()=>[i("登录")]),_:1},8,["onClick"])]),_:1}),e(m(_),{onClick:x},{default:t(()=>[i("switch")]),_:1})]),_:1})}}});export{q as default};