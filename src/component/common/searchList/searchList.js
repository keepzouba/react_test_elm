import React,{Component} from 'react'
import Hotsearch from '../hot_search/hot_search'
import './searchList.css'
export default class SearchList extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='searchList'>
                <div>
                    <input type='text' placeholder='输入商家、商品名称'/>
                    <span>搜索</span>
                </div>
                <Hotsearch/>
            </div>
        )
    }
}