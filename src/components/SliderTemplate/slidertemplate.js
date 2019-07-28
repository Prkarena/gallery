/**
 * 
 * SliderTemplate : take one object and set it to slider 
 * 
 */
import React from 'react';
/*------- slidertemplate.css : For Style ---------- */
import './slidertemplate.css';

const SliderTemplate = ({property}) => {
    const { download_url, author } = property;
    return(
        <div 
         className = "image" 
         >
           <img src={download_url} className="responsive" alt={author} />
        </div>
    )
}

export default SliderTemplate;