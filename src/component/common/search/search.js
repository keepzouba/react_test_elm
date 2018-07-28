import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './search.css'
export default class Search extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='search'>
                <div>
                    <NavLink to='/searchlist'>
                        <span>搜索饿了么商家、商品名称</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}