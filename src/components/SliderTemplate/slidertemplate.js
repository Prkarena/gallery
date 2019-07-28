import React from 'react';
/*------- slidertemplate.css : For Style ---------- */
import './slidertemplate.css';

const SliderTemplate = ({property,index}) => {
    const { download_url, author } = property;
    return(
        <div 
         id = {`image-${index}`}
         className = "image" 
         >
           <img src={download_url} alt={author} />
        </div>
    )
}

export default SliderTemplate;