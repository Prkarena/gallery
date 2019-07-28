import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*------- index.css : For Style ---------- */
import './css/index.css';
/*-------- Components ---------------------*/
import Slider from './components/Slider/slider';
import Gallery from './components/Gallery/gallery';

class App extends Component {

    state = {
        data : [],
        dataItem : {},
        isLoaded : false,
        showSlider : false,
    }

    componentWillMount(){
        fetch('https://picsum.photos/v2/list?page=1&limit=16')
             .then(response => response.json())
             .then(json => {
                 this.setState({
                     data : json,
                     isLoaded : true,
                     dataItem : json[0]
                 })
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
        const { isLoaded , data , dataItem ,showSlider} = this.state;        
        if(!isLoaded){
            return<div>Loading....</div>
        }else{
            return(                  
                    <div>
                        <Slider data = { data }  parentMethod = { this.showSlider } dataItem = {dataItem} showSlider = {showSlider} />
                        <Gallery data = { data } parentMethod = {this.setIndex} />
                    </div>                
            )
        }

        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;