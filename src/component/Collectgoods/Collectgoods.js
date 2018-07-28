import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Collectgoods.css'
import CollectgoodsResult from '../CollectgoodsResult/CollectgoodsResult'
import {getSearchResult,getCityAction} from "../../store/action/CollectgoodsAction";
class Collectgoods extends Component{
    constructor(){
        super()
        this.state={
            show:'none',
            lt:'<',
        }
    }
    render(){
        console.log(this.props);
        return(
            <div id='Collectgoods'>
                <div>
                    <div className='Collectgoods_title' onClick={this.gohome.bind(this)}>
                        <div>
                            {this.state.lt}
                        </div>
                        <div>
                            选择收货地址
                        </div>
                    </div>
                    <div className='Collectgoods_search'>
                        <div>
                            <div onClick={this.goselectcity.bind(this)}>
                                {this.filterCity(this.props.city)}
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type='text' placeholder='请输入地址' ref={(input)=>{this.searchWord=input}}
                                       onChange={this.search.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <CollectgoodsResult
                    show={this.state.show}
                    item={this.props.item}
                    option={this.props.option}
                />
            </div>
        )
    }
    search(){
        this.setState({
            show:'block'
        })
        this.props.getsearchdata(this.searchWord)
    }
    filterCity(val){
        return val.replace(/市/,"")
    }
    gohome(){
        this.props.option.history.push('/home')
    }
    goselectcity(){
        this.props.option.history.push('seleccity')
    }
    componentDidMount(){
        let position =JSON.parse(sessionStorage.getItem('position'))
        if(position!==null){
            this.props.getCity(position)
        }
    }
}
const mapDispatchToProps=(dispatch)=>({
    getsearchdata:(val)=>{
        let position =JSON.parse(sessionStorage.getItem('position'));
        if(position===null){
            getSearchResult(dispatch,{val:val.value})
        }else {
            getSearchResult(dispatch,{val:val.value,latitude:position.latitude,longitude:position.longitude})
        }
    },
    getCity:(position)=>{
        getCityAction(dispatch,position)
    }
});
const mapStateToProps=(state)=>({
    item:state.CollectgoodsRedcer.item,
    city:state.CollectgoodsRedcer.city,
});
export default connect(mapStateToProps,mapDispatchToProps)(Collectgoods)
//https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js  城市列表