import React from 'react';
/*------- gallery.css : For Style ---------- */
import './gallery.css';
/*-------- Components ---------------------*/
import GalleryImage from '../GalleryImage/galleryimage';

const Gallery = ({data,parentMethod}) => {
    
    const Image = data.map((item,index) => {
        return(
            <GalleryImage data = { item } index = { index } parentMethod ={parentMethod} key = {index} />
        )
    })
    
    return(
        <div className="gallery">
            {Image}
        </div>
    )
}

export default Gallery;