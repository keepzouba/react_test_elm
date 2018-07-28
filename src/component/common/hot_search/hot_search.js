import React,{Component} from 'react'
import {connect} from 'react-redux'
import {HotSearchAction} from '../../../store/action/hotsearchAction'
import './hot_search.css'
class Hotsearch extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='Hotsearch'>
                <div className='title'>
                    <div>热门搜索</div>
                </div>
                <ul>

                </ul>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    hotsearch(){
        HotSearchAction(dispatch)
    }
})

export default connect(null,mapDispatchToProps)(Hotsearch)