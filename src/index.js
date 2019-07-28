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
        fetch('https://picsum.photos/v2/list?page=1&limit=16')
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