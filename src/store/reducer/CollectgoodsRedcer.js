const Collectgoodsdefault={
    item:[],
    city:'选择城市...',
    citylist:[]
}

export default (state=Collectgoodsdefault,aciton)=>{
    switch (aciton.type){
        case 'SEARCH_GOODS_PENDING':
            let newStateoff=JSON.parse(JSON.stringify(state));
            newStateoff.item=[];
            return newStateoff

        case 'SEARCH_GOODS_FULFILLED':
            let newStateon=JSON.parse(JSON.stringify(state));
            newStateon.item=aciton.payload;
            return newStateon

        case 'GET_CITY_PENDING':
            let newCitying=JSON.parse(JSON.stringify(state));
            newCitying.city='正在选择...';
            return newCitying


        case 'GET_CITY_FULFILLED':
            let newCity=JSON.parse(JSON.stringify(state));
            newCity.city=aciton.payload.city;
            return newCity

        case 'GET_CITYLIST_PENDING':
            let citylist = JSON.parse(JSON.stringify(state));
            return citylist
        case 'GET_CITYLIST_FULFILLED':
            let newcitylist = JSON.parse(JSON.stringify(state));
            newcitylist.citylist=aciton.payload.cityList;
            return newcitylist
        default:
            return state
    }
}