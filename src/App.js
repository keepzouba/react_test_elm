import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import {Provider} from 'react-redux'

import store from "./store/store";
import HomeCom from './component/home/home'
import FindCom from './component/find/find'
import OrderCom from './component/order/order'
import MyCom from './component/my/my'
import SearchList from './component/common/searchList/searchList'
import SelectCity from './component/selectCity/selectCity'
import Collectgoods from './component/Collectgoods/Collectgoods'

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" render={()=>{
                                return <Redirect to="/home"/>
                            }}></Route>

                            <Route exact path='/home' render={(option)=>{
                                return <HomeCom option={option}/>
                            }}>
                            </Route>

                            <Route path='/find' render={()=>{
                                return <FindCom/>
                            }}>
                            </Route>

                            <Route path='/order' render={()=>{
                                return <OrderCom/>
                            }}>
                            </Route>

                            <Route path='/my' render={()=>{
                                return <MyCom/>
                            }}>
                            </Route>

                            <Route path='/searchlist' render={()=>{
                                return <SearchList/>
                            }}>
                            </Route>

                            <Route path='/seleccity' render={(option)=>{
                                return <SelectCity option={option}/>
                            }}>
                            </Route>

                            <Route path='/collectgoods' render={(option)=>{
                                return <Collectgoods option={option}/>
                            }}>
                            </Route>

                            <Route  render={()=>{
                                return <Redirect to='/home'/>
                            }}>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
    componentDidMount(){

    }
}

export default App;

// app.use('/restapi',httpProxyMiddleware({
//     target:'https://h5.ele.me',
//     changeOrigin:true
// }))