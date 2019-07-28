/**
 * 
 * GalleryImage : recive props and return gallery image
 * download_url : image src from json object 
 * 
 */
import React , { Component } from 'react';
/*------- galleryimage.css : For Style ---------- */
import './galleryimage.css';

const GalleryImage = (props) => {
    /*------ set index using parent method for which slide to be shown on image click-----*/
    const  setDataItemIndex = () => {
        props.parentMethod(props.index);
    }

    return(
        <div className="galleryImage" 
            onClick = {setDataItemIndex}
        >
             <img src={props.data.download_url} alt={props.data.author} />
        </div>
    )

   
}

export default GalleryImage;