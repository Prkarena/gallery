import React , { Component } from 'react';
/*------- slider.css : For Style ---------- */
import './sliderwithgallery.css';
/*-------- Components ---------------------*/
import SliderTemplate from '../SliderTemplate/slidertemplate';
import Gallery from '../Gallery/gallery';

class SliderWithGallery extends Component {
    
    state = {
        data : this.props.data,
        dataItem : this.props.data[0],
        showSlider : false,
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

    showSlider = (show) => {
        this.setState({
            showSlider : show,
        })
    }

    setIndex = (i) => {
        this.setState({
            dataItem : this.state.data[i],
        })
        this.showSlider(true)
     }
      
   render(){
    
        let { data , dataItem, showSlider } = this.state;
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

            <div className="sliderWithGallery">
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
                <SliderTemplate property = { dataItem } />
               </div>

               <Gallery data = { data } parentMethod = {this.setIndex} />


            </div>
            
        )
   }
}

export default SliderWithGallery;