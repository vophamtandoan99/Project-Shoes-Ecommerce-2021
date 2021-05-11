import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex)


const store= new Vuex.Store({
// modules:{

// nguyenlieu
// }
state : {
// nguyenlieu: []
orderFood:[
{
id: null,
count: 0,
name: ''
}
],
foodItems:[],
status: '',
token: localStorage.getItem('token') || '',
username : {},
admin:"",
},

getters : {
isLoggedIn: state => !!state.token,
authStatus: state => state.status,
},

actions : {

login({commit}, username){
return new Promise((resolve, reject) => {
commit('auth_request')
axios({url: 'http://127.0.0.1:8000/api/login', data: username, method: 'POST' })
.then(resp => {
    console.log(resp.data.code)
    if(resp.data.code == "100"){
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }else{
        alert("Đăng nhập thành công")
        console.log(resp.data.error)
        // const { status_code, ...infor } = resp.data;
        console.log(resp.data.data,"dATA");
            // for (let i = 0; i < resp.data.data.length; i++) {
            //   console.log(i);        
            // }
            resp.data.data.map((resItem)=>{
                console.log(resItem);
        
        
        
                localStorage.setItem('auth', JSON.stringify(resItem));
        
        
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ resItem.token
            })
    }
    

  

console.log(resp.data.token ,"TOKEN");
// const info = {};
// for (const key in infor) {
// const u = infor[key];
// info[key] = u;
// if(infor['admin'] && infor['superuser']){
// info.role = 'superuser'
// } else if (infor['admin'] && !infor['superuser']) {
// info.role = 'admin'
// } else if (!infor['admin'] && infor['superuser']) {
// info.role = 'superuser'
// } else {
// info.role = 'user'
// }
// };






commit('auth_success', resp.data.data[0].token, username)

resolve(resp)



})
.catch(err => {

commit('auth_error')
localStorage.removeItem('auth')
reject(err)
})
})
},
register({commit}, user){
return new Promise((resolve, reject) => {
commit('auth_request')
axios({url: 'http://127.0.0.1:8000/auth/register/', data: user, method: 'POST' })
.then(resp => {
    
const { status_code, ...infor } = resp.data;



const info = {};
//localStorage.setItem('auth', JSON.stringify(infor));
let token = JSON.parse(window.localStorage.getItem('auth'))
// const token = resp.data.token
// const user = resp.data.user
// localStorage.setItem('token', token)
// axios.defaults.headers.common['Authorization'] = token
// axios.defaults.headers.common['Authorization'] = 'Bearer '+token

axios.defaults.headers.common['Authorization'] = 'Bearer '+ token.object.token

commit('auth_success', token.object.token, resp.data.username)

resolve(resp)


})
.catch(err => {
commit('auth_error', err)
// localStorage.removeItem('auth')
reject(err)
})
})
},
logout({commit}){
return new Promise((resolve, reject) => {
commit('logout')
localStorage.removeItem('auth')
delete axios.defaults.headers.common['Authorization']
resolve()
})
},

},

mutations : {
// addnguyenlieu: (state, nguyenlieus) => {
// state.nguyenlieu.unshift(nguyenlieus);
// }
setFoodItemsById(state, items){
state.orderFood.push(items);
},
setFoodItems(state, items){
state.foodItems = items;
console.log(state.foodItems);
},
auth_request(state){
state.status = 'loading'
console.log(status);
},
auth_success(state, token, username){
state.status = 'success'
state.token = token
state.username = username
},
auth_error(state){
state.status = 'error'
},
logout(state){
state.status = ''
state.token = ''
},
},

})
// export default { namespaced: true, state, actions, mutations }
export default store



// const state = {
// user,
// nguyenlieu: []
// };

// const actions= {
// reGisterUser({commit,state},user){
// axios.post('http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id&start=100&rows=100',user).then(response =>{
// console.log(response);
// })
// },
// addnguyenlieu({commit}, nguyenlieu){
// commit('addNguyenlieu', nguyenlieu);
// }

// };
// const mutations= {
// addNguyenlieu: (state, nguyenlieu) => {
// state.nguyenlieu.unshift(nguyenlieu);
// }
// };