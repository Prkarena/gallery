/**
 * 
 * index.js
 * 1. index.css : for style
 * 2. SliderWithGallery : Component which takes json data and give's gallery with slider
 * 3. state : 
 *    3.1 data : for storing our data
 *    3.2 isLoaded : for chacking data is loaded or not
 * 4. fetch : fetch response from url and change states 
 * 
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*------- index.css : For Style ---------- */
import './css/index.css';
/*-------- Components ---------------------*/
import SliderWithGallery from './components/SliderWithGallery/sliderwithgallery';

class App extends Component {

    state = {
        data : [],
        isLoaded : false,
    }

    componentWillMount(){
        fetch('https://picsum.photos/v2/list?page=1&limit=30')
             .then(response => response.json())
             .then(json => {
                 this.setState({
                     data : json,
                     isLoaded : true
                 })
             })
    }

    render(){
        const { isLoaded , data} = this.state;
        /*---- data is loaded or not ------*/        
        if(!isLoaded){
            return<div>Loading....</div>
        }else{
            return(                  
                    <div>
                        <SliderWithGallery data = {data}  />
                    </div>                
            )
        }

  
    }
}

ReactDOM.render(<App />, document.getElementById('root'));