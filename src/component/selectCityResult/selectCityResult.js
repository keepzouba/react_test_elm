import React,{Component} from 'react'
import './selectCityResult.css'
export default class SelectCityResult extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='SelectCityResult'>
                <ul>
                    {this.props.item.map((item,index)=>{
                        return <li key={index}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}