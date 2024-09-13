"use strict";(self["webpackChunkthutz_bookings"]=self["webpackChunkthutz_bookings"]||[]).push([[619],{7619:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var s=l(6768),r=l(4232);const n={class:"container"},d=(0,s.Lk)("h2",{id:"userHeading",class:"display-4 mt-4 mb-4"},"Edit Users",-1),i={class:"table-responsive"},u={class:"table table-bordered"},a=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"User ID"),(0,s.Lk)("th",null,"Full Name"),(0,s.Lk)("th",null,"Email"),(0,s.Lk)("th",null,"Password"),(0,s.Lk)("th",null,"Role"),(0,s.Lk)("th",null,"Phone"),(0,s.Lk)("th",null,"Edit")])],-1),c={class:"d-flex gap-2"},k=["onClick"],o={class:"mt-5"},L=(0,s.Lk)("h2",{id:"productHeading",class:"display-4 mb-4"},"Edit Services",-1),v=(0,s.Lk)("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#addItem"},"Add Services",-1),h={class:"table-responsive"},b={class:"table table-bordered"},p=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Service ID"),(0,s.Lk)("th",null,"Provider"),(0,s.Lk)("th",null,"Service Name"),(0,s.Lk)("th",null,"Description"),(0,s.Lk)("th",null,"Price"),(0,s.Lk)("th",null,"Duration"),(0,s.Lk)("th",null,"Actions")])],-1),_={class:"d-flex gap-2"},g=["onClick"];function m(e,t,l,m,C,U){const S=(0,s.g2)("AddUser"),E=(0,s.g2)("updateUser"),f=(0,s.g2)("updateProduct");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("div",null,[d,(0,s.bF)(S,{user:e.user},null,8,["user"]),(0,s.Lk)("div",i,[(0,s.Lk)("table",u,[a,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(U.users,(e=>((0,s.uX)(),(0,s.CE)("tr",{key:e.user_id},[(0,s.Lk)("td",null,(0,r.v_)(e.user_id),1),(0,s.Lk)("td",null,(0,r.v_)(e.name),1),(0,s.Lk)("td",null,(0,r.v_)(e.email),1),(0,s.Lk)("td",null,(0,r.v_)(e.password),1),(0,s.Lk)("td",null,(0,r.v_)(e.role),1),(0,s.Lk)("td",null,(0,r.v_)(e.phone),1),(0,s.Lk)("td",c,[(0,s.bF)(E,{user:e},null,8,["user"]),(0,s.Lk)("button",{class:"btn btn-danger",onClick:t=>U.deleteUser(e.user_id)},"Delete User",8,k)])])))),128))])])])]),(0,s.Lk)("div",o,[L,v,(0,s.Lk)("div",h,[(0,s.Lk)("table",b,[p,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(U.services,(e=>((0,s.uX)(),(0,s.CE)("tr",{key:e.service_id},[(0,s.Lk)("td",null,(0,r.v_)(e.service_id),1),(0,s.Lk)("td",null,(0,r.v_)(e.provider_id),1),(0,s.Lk)("td",null,(0,r.v_)(e.service_name),1),(0,s.Lk)("td",null,(0,r.v_)(e.description),1),(0,s.Lk)("td",null,"R "+(0,r.v_)(e.price),1),(0,s.Lk)("td",null,(0,r.v_)(e.duration||"N/A"),1),(0,s.Lk)("td",_,[(0,s.bF)(f,{service:e},null,8,["service"]),(0,s.Lk)("button",{class:"btn btn-danger",onClick:t=>U.deleteService(e.service_id)},"Delete",8,g)])])))),128))])])])])])}var C={methods:{getUsers(){this.$store.dispatch("getUsers")},getServices(){this.$store.dispatch("getServices")},deleteUser(e){this.$store.dispatch("deleteUser",{id:e})},deleteService(e){this.$store.dispatch("deleteService",{id:e})}},computed:{users(){return this.$store.state.user},services(){return this.$store.state.services}},mounted(){this.getUsers(),this.getServices()}},U=l(1241);const S=(0,U.A)(C,[["render",m]]);var E=S}}]);
//# sourceMappingURL=619.d1ed44cf.js.map