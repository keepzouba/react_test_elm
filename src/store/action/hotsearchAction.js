export const HotSearchAction=(dispatch)=>{

    dispatch({
        type:'HOTSEARCH',
        payload:new Promise((resolve,reject)=>{
            //https://h5.ele.me/
            // restapi/shopping/v3/hot_search_words
            // latitude=28.228272
            // longitude=112.938888
        })
    })
}