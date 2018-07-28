import React,{Component} from 'react'
import Footer from '../common/footer/footer'
import './my.css'
export default class MyCom extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                My
                <Footer></Footer>
            </div>
        )
    }
}