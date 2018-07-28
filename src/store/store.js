import {createStore,combineReducers,applyMiddleware} from "redux";


import HotSearchreducer from './reducer/HotSearchreducer'
import CollectgoodsRedcer from './reducer/CollectgoodsRedcer'
import hometopreducer from './reducer/hometopreducer'


import reduxpromisemiddleware from "redux-promise-middleware";


let reducer = combineReducers({
    CollectgoodsRedcer,
    hometopreducer,
    HotSearchreducer
})
const store = createStore(reducer,applyMiddleware(reduxpromisemiddleware()));
export default store;