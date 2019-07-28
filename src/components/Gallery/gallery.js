/**
 * 
 * Gallery : get data from props > call GalleryImage Component for each items
 * GalleryImage : takes one object and parentMethod from props and return images 
 * 
 */

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
            <div className="gallery_images">
             {Image}
            </div>
           
        </div>
    )
}

export default Gallery;