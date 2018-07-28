import React,{Component} from 'react'
import FooterCom from '../common/footer/footer'
import Home_Top from '../home_top/home_top'
import Search from '../common/search/search'
import Option from '../option/option'
export default class HomeCom extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Home_Top option={this.props.option}/>
                <Search/>
                <Option/>
                <FooterCom/>
            </div>
        )
    }
}