import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import './footer.css'
export default class FooterCom extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='footer'>
                <div><NavLink to='/home'>首页</NavLink></div>
                <div><NavLink to='/find'>发现</NavLink></div>
                <div><NavLink to='/order'>订单</NavLink></div>
                <div><NavLink to='/my'>我的</NavLink></div>
            </div>
        )
    }
}