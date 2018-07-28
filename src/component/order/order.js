import React,{Component} from 'react'
import Footer from '../common/footer/footer'
import './order.css'
export default class OrderCom extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                Order
                <Footer></Footer>
            </div>
        )
    }
}