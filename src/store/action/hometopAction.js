import axios from 'axios'
export const getCityAction=(dispatch,positon)=>{
    console.log(positon);
    dispatch({
        type:'GET_ADDRESS',
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