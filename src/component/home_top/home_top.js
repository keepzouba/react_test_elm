import React,{Component} from 'react'
import {connect} from "react-redux";
import {getCityAction} from '../../store/action/hometopAction'
import './home_top.css'
class Home_top extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div id='top'>
                <div>
                    <span onClick={this.goCollectgoods.bind(this)}>
                        {this.props.name}
                    </span>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let position=JSON.parse(sessionStorage.getItem('position'));
        if (position===null) {
            setTimeout(() => {
                this.props.option.history.push('/collectgoods')
            },2000)
        }else {
            this.props.getAddress(position)
        }
    }
    goCollectgoods(){
        this.props.option.history.push('/collectgoods')
    }
}
const mapStateToProps=(state)=>({
    name:state.hometopreducer.name
});
const mapDispatchToProps=(dispatch)=>({
    getAddress:(position)=>{
        getCityAction(dispatch,position)
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home_top)