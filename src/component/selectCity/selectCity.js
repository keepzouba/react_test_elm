import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCityListAction,getCityAction} from '../../store/action/CollectgoodsAction'
import BScroll from 'better-scroll'
import $ from 'jquery'
import './selectCity.css'
import SelectCityResult from '../selectCityResult/selectCityResult'
class SelectCity extends Component{
    constructor(){
        super()
        this.state= {
            lt: '<',
            citylist: [],
            cityshow:'none',
            item:[],
            citylistshow:'block',
            citysearchshow:'none'
        }

    }
    render(){
        this.filterCitylist = this.state.citylist.length==0?this.props.citylist:this.state.citylist;
        return(
            <div id='SelectCity'>
                <div id='SelectCity_top'>
                    <div className='SelectCity_title' onClick={this.goCollectgoods.bind(this)}>
                        <div>
                            {this.state.lt}
                        </div>
                        <div>
                            城市选择
                        </div>
                    </div>
                    <div className='SelectCity_search'>
                        <input type='text' placeholder='输入城市名、拼音或首字母查询' onChange={this.searchcity.bind(this)}/>
                    </div>
                </div>
                <div className='SelectCity_list'>
                    <ul style={{display:this.state.citylistshow}}>
                        <li className='nowposition' style={{display:this.state.cityshow}}>
                            <div>
                                当前定位
                            </div>
                            <div>
                                {
                                    this.filterCity(this.props.city)
                                }
                            </div>
                        </li>
                        {
                            this.filterCitylist.map((item,index)=>{
                                return <li key={index} id={item.idx}>
                                    <div>
                                        {item.idx}
                                    </div>
                                    <ul>
                                        {
                                            item.cities.map((item,index)=>{
                                                return <li
                                                    key={item.id}
                                                    onClick={this.getpositon.bind(this,item.latitude,item.longitude)}
                                                >
                                                    <div className='city'>
                                                        {item.name}
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                    <div id='SelectCityResult' style={{display:this.state.citysearchshow}}>
                        <ul>
                            {this.state.item.map((item,index)=>{
                                return <li key={index} onClick={this.getpositonFromSearch.bind(this,item.latitude,item.longitude)}>
                                    {item.name}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                /*
                * 跳楼部分
                * */
                <div className='SelectCity_lt' style={{display:this.state.citylistshow}}>
                    <ul>
                        {
                            this.filterCitylist.map((item,index)=>{
                                return <li
                                    onClick={this.tolz.bind(this,item.idx)}
                                    key={index}
                                >
                                    {item.idx}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll('.SelectCity_list',{
            probeType:3,
            click: true,
            taps: true
        });

        let position =JSON.parse(sessionStorage.getItem('position'))
        if(position!==null){
            this.props.getcity(position)
            this.setState({
                cityshow:'block'
            })
        }

        let citylist = JSON.parse(sessionStorage.getItem('citylist'));
        if(citylist===null){
            this.props.getcitylist()
        }else {
            this.setState({
                citylist:citylist
            })
        }
    }

    getpositon(latitude,longitude){
        console.log(latitude,longitude);
        let positon = {
            latitude,
            longitude
        }
        sessionStorage.setItem('position',JSON.stringify(positon))
        this.props.option.history.push('/collectgoods')
    }
    tolz(el){
        let dom = document.getElementById(el);
        this.scroll.scrollToElement(dom, 2000)
    }
    goCollectgoods(){
        this.props.option.history.push('/collectgoods')
    }
    filterCity(val){
        return val.replace(/市/,"")
    }
    searchcity(e){
        let val = e.target.value;
        let arr=[];
        if(val.length>0){
            if(/^[\u4e00-\u9fa5]+$/.test(val)){
                this.filterCitylist.map((item,index)=>{
                    item.cities.map((v,i)=>{
                        if(v.name.indexOf(val)!=-1){
                            arr.push(v)
                        }
                    })
                })
            }else{
                this.filterCitylist.map((item,index)=>{
                    item.cities.map((v,i)=>{
                        if(v.pinyin.indexOf(val)!=-1){
                            arr.push(v)
                        }
                    })
                })
            }
            console.log(arr);
            this.setState({
                item:arr,
                citylistshow:'none',
                citysearchshow:'block'
            })
        }else {
            this.setState({
                citylistshow:'block',
                citysearchshow:'none'
            })
        }
    }
    getpositonFromSearch(latitude,longitude){
        let positon = {
            latitude,
            longitude
        }
        sessionStorage.setItem('position',JSON.stringify(positon))
        this.props.option.history.push('/collectgoods')
    }
}
const mapDispatchToProps=(dispatch)=>({
    getcitylist:function () {
        getCityListAction(dispatch)
    },
    getcity:function (position) {
        getCityAction(dispatch,position)
    }
})
const mapStateToProps=(state)=>({
    citylist:state.CollectgoodsRedcer.citylist,
    city:state.CollectgoodsRedcer.city,
});
export default connect(mapStateToProps,mapDispatchToProps)(SelectCity)
//https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js  城市列表