/* empty css               *//* empty css                *//* empty css                        */import{g as n}from"./utils-BabOjsD-.js";import{u as b}from"./clockInData-ChilEIJB.js";import{a as S,r as x,B as V,o as i,p as w,e as t,w as e,F as I,q as j,u as l,i as $,b as u,x as F,f as r,t as m,n as g,g as z,m as D,s as M,j as q}from"./index-U8SeVnrU.js";import{g as A}from"./req-bZRZhQjY.js";import"./userStore-CWKKMDdA.js";const P={class:"mine-wrap",style:{"background-color":"rgba(0,0,0,0.1)",padding:"0",margin:"0"}},R=z("p",{size:"large",style:{"font-weight":"bolder",width:"100%","text-align":"center"}}," 个人中心 ",-1),Z=S({__name:"MineComponent",setup(W){let h=b().clockIn,C=x(!0),v=x("logo.svg");v.value=h.avatar,console.info(`img:${h.avatar}`),C.value=!1;let f=x({}),N=p=>{p===0&&g.push({path:"/word"})},y=()=>{g.push({path:"/clock"})};V(async()=>{const p=await A();f.value=p,b().set(f.value)});let T=[{path:n("icon_my_history.png"),title:"历史记录"},{path:n("icon_my_favo.png"),title:"我的收藏"},{path:n("icon_my_zan.png"),title:"我的点赞"},{path:n("icon_my_time.png"),title:"累计学时"}],B=[{path:n("ic_mine_notes.png"),title:"前端常用词"},{path:n("ic_mine_ai.png"),title:"面通"},{path:n("ic_mine_invite.png"),title:"推荐分享"},{path:n("ic_mine_file.png"),title:"意见反馈"},{path:n("ic_mine_info.png"),title:"关于我们"},{path:n("ic_mine_setting.png"),title:"设置"}],E=p=>{p===3&&g.push({path:"/study"})};return(p,c)=>{const a=D,o=$,_=M,k=q;return i(),w("div",P,[t(o,{justify:"center",style:{width:"100%"}},{default:e(()=>[t(a,{span:24,style:{width:"100%"}},{default:e(()=>[R]),_:1})]),_:1}),t(o,{justify:"space-between",align:"middle"},{default:e(()=>[t(a,{span:10},{default:e(()=>[t(o,{justify:"start",gutter:40,align:"top",style:{height:"60px"}},{default:e(()=>[t(a,{span:5,offset:2},{default:e(()=>[l(C)===!1?(i(),u(_,{key:0,src:l(v),style:{width:"40px",height:"40px","border-radius":"20px"}},null,8,["src"])):F("",!0)]),_:1}),t(a,{span:16},{default:e(()=>[t(o,{style:{"font-weight":"bolder","font-size":"20px"}},{default:e(()=>[r(m(l(h).nickName),1)]),_:1}),t(o,{style:{color:"gray","font-size":"12px"},onClick:c[0]||(c[0]=s=>l(g).push({path:"/profile"}))},{default:e(()=>[r(" 编辑个人信息 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(a,{span:6},{default:e(()=>[z("div",{class:"img-wrap",style:{"{position":"relative }"},onClick:c[1]||(c[1]=(...s)=>l(y)&&l(y)(...s))},[t(_,{src:l(n)("ic_common_unclock.png"),fit:"fill",style:{}},null,8,["src"]),l(f).clockinNumbers===0?(i(),u(k,{key:0,style:{position:"absolute",top:"35%",left:"90%",transform:"translate(-50%,-50%)","font-size":"16px","font-weight":"bold"}},{default:e(()=>[r("打卡")]),_:1})):(i(),u(k,{key:1,style:{position:"absolute",top:"35%",left:"90%",transform:"translate(-50%,-50%)","font-size":"10px","font-weight":"normal"},onClick:l(y)},{default:e(()=>[r("连续打卡"+m(l(f).clockinTotal)+"天",1)]),_:1},8,["onClick"]))])]),_:1})]),_:1}),t(o,{justify:"space-around",align:"middle",style:{"background-color":"white"}},{default:e(()=>[(i(!0),w(I,null,j(l(T),(s,d)=>(i(),u(a,{span:4,key:d,onClick:L=>l(E)(d)},{default:e(()=>[t(o,null,{default:e(()=>[t(_,{src:s.path,style:{width:"50px",height:"50px"}},null,8,["src"])]),_:2},1024),t(o,{style:{height:"5px"}}),t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[r(m(s.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),t(o,{style:{height:"40px"}}),(i(!0),w(I,null,j(l(B),(s,d)=>(i(),u(o,{justify:"start",gutter:40,style:{width:"90%"},onClick:L=>l(N)(d)},{default:e(()=>[t(a,{span:2,offset:1},{default:e(()=>[t(_,{src:s.path,style:{height:"20px",width:"20px"}},null,8,["src"])]),_:2},1024),t(a,{span:12},{default:e(()=>[r(m(s.title),1)]),_:2},1024),t(o,{style:{height:"50px"}})]),_:2},1032,["onClick"]))),256))])}}});export{Z as default};