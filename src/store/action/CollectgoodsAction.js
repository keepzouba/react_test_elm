import axios from 'axios'
export const getSearchResult=(dispatch,val)=>{
    console.log(val.latitude);
    dispatch({
        type:'SEARCH_GOODS',
        payload:new Promise((resolve,reject)=>{
            let url ='/restapi/bgs/poi/search_poi_nearby_alipay';
            if(val.latitude==null){
                axios.get(url, {
                    params: {
                        keyword: val.val,
                        offset: 0,
                        limit: 20
                    }
                }).then(function (response) {
                    resolve(response.data)
                })
            }else {
                axios.get(url, {
                    params: {
                        keyword: val.val,
                        offset: 0,
                        limit: 20,
                        latitude:val.latitude,
                        longitude:val.longitude

                    }
                }).then(function (response) {
                    resolve(response.data)
                })
            }
        })
    })
}
export const getCityAction=(dispatch,positon)=>{
    dispatch({
        type:"GET_CITY",
        payload:new Promise((resolve,reject)=>{
            let url='/restapi/bgs/poi/reverse_geo_coding';
            axios.get(url,{
                params:{
                    latitude:positon.latitude,
                    longitude:positon.longitude
                }
            }).then(function (response) {
                resolve(response.data)
            })
        })
    })
}

export const getCityListAction=(dispatch)=>{
    dispatch({
        type:"GET_CITYLIST",
        payload:new Promise((resolve,reject)=>{
            let url='https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js';
            axios.get(url).then(function (response) {
                resolve(response.data)
                sessionStorage.setItem('citylist',JSON.stringify(response.data.cityList))
            })
        })
    })
}
//https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=&offset=0&limit=20
//https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=d&offset=0&limit=20&latitude=28.227779&longitude=112.938858
//https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=28.228272&longitude=112.938888
//https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js  城市列表