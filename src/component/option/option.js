import React,{Component} from 'react'
import $ from 'jquery'
import './option.css'
export default class Option extends Component{
    constructor(){
        super()
    }
    render(){
        this.pageNum = 0;
        return(
            <div id='Option'>
                <div>
                    <ul
                        onTouchStart={this.handleTouchStart.bind(this)}
                        onTouchMove={this.handleTouchMove.bind(this)}
                        onTouchEnd={this.handleTouchEnd.bind(this)}
                    >
                        <li>
                            11
                        </li>
                        <li>
                            22
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    handleTouchStart(e){
        this.startX=e.touches[0].clientX
    }
    handleTouchMove(e){
        this.endX=e.touches[0].clientX
        let width = $('#Option>div>ul>li').width();
        if(this.startX-this.endX>0){
                $("#Option>div>ul").css({
                    left:-(this.startX-this.endX+width*this.pageNum)+'px'
                })
            }else if(this.startX-this.endX<0){
                $("#Option>div>ul").css({
                    left:-(width*this.pageNum)-(this.startX-this.endX)+'px'
                })
            }
    }
    handleTouchEnd(e){
        let width = $('#Option>div>ul>li').width();
        let length = $('#Option>div>ul>li').length
        console.log(this.startX - this.endX - 30);
        if(this.startX-this.endX-30>0){
            this.pageNum++
            if(this.pageNum>=length){
                this.pageNum=length-1
            }

            $("#Option>div>ul").animate({
                left:-width*this.pageNum
            },1000,'swing')

        }else {
            $("#Option>div>ul").animate({
                left:0
            },500,'swing')
        }

        if(this.startX-this.endX+30<0){
            this.pageNum--;
            if(this.pageNum<=0){
                this.pageNum=0
            }
            $("#Option>div>ul").animate({
                left:width*this.pageNum
            },1000,'swing');
        }else {
            $("#Option>div>ul").animate({
                left:-width
            },500,'swing')
        }
    }

}