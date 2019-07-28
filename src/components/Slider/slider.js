import React , { Component } from 'react';
/*------- slider.css : For Style ---------- */
import './slider.css';
/*-------- Components ---------------------*/
import SliderTemplate from '../SliderTemplate/slidertemplate';

class Slider extends Component {
    state = {
        data : this.props.data,
        dataItem : this.props.dataItem ,
        showSlider : this.props.showSlider,
    }

    nextDataItem = () => {
        const newIndex = this.state.data.indexOf(this.state.dataItem)+1 ;
        this.setState({
            dataItem : this.props.data[newIndex]
        })
    }

    prewDataItem = () => {
        const newIndex = this.state.data.indexOf(this.state.dataItem)-1 ;
        this.setState({
            dataItem : this.props.data[newIndex]
        })
    }

    componentWillReceiveProps(newProps){
        if(this.props.dataItem === newProps.dataItem){
            return;
        }else{
            this.setState({
                dataItem : newProps.dataItem
            })
        }
    }

    componentWillUpdate(newProps,newState){
        newState.showSlider = newProps.showSlider;
    }

    showSlider = (show) => {
       this.props.parentMethod(show)
    }
      
   render(){
    
        let { data , dataItem, showSlider } = this.state;
        let index = data.indexOf(dataItem);
        let divStyle ={}

        if(showSlider){
         divStyle ={
                display : 'block'
            }
        }else{
            divStyle ={
                display : 'none'
            }
        }
    
        
        return(
            <div className="slider"
                 style = {divStyle}
            >
                <div className="slider_background"></div>
                <div
                  className="close_button"
                >
                    <button
                    onClick = {() => this.showSlider(false)}
                    >X</button>
                
                </div>
                <div className="sliderButton">
                    <button 
                    onClick = { () => this.prewDataItem() }
                    disabled = { data.indexOf(dataItem) === 0 }
                    className = "buttonPrew"
                    >
                        P              
                    </button>
                    <button 
                    onClick = { () => this.nextDataItem() }
                    disabled = { data.indexOf(dataItem) === data.length-1}
                    className = "buttonNext"
                    >
                        N  
                    </button>
                </div>
                <SliderTemplate property = { dataItem } index = { index } />
            </div>
        )
   }
}

export default Slider;