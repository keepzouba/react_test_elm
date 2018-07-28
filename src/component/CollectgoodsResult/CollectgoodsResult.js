import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCityAction} from '../../store/action/hometopAction'
import BScroll from 'better-scroll'
import './CollectgoodsResult.css'
class CollectgoodsResult extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='CollectgoodsResult' style={{display:this.props.show}}>
                <div className='wrapper'>
                    <ul className='content'>
                        {
                            this.props.item.map((item,index)=>{
                                return <li
                                    key={index}
                                    onClick={this.props.saveCity.bind(this,item.latitude,item.longitude)}

                                >
                                    <div>
                                        <div>
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                {item.address}
                                            </div>
                                        </div>
                                        <div>
                                            {item.distance}
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    saveCity:function (latitude,longitude) {
        console.log(this);
        let positon = {
            latitude,
            longitude
        }
        sessionStorage.setItem('position',JSON.stringify(positon))
        this.props.option.history.push('/home')
    }
})
export default connect(null,mapDispatchToProps)(CollectgoodsResult)