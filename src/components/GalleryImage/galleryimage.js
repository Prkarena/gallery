import React , { Component } from 'react';
/*------- galleryimage.css : For Style ---------- */
import './galleryimage.css';


class GalleryImage extends Component   {

   

    setDataItemIndex = () => {
        this.props.parentMethod(this.props.index);
    }


render(){
    //console.log(this.props.index)
    return(
        <div className="galleryImage" 
            onClick = {this.setDataItemIndex}
        >
             <img src={this.props.data.download_url} alt={this.props.data.author} />
        </div>
    )
}
   
}

export default GalleryImage;