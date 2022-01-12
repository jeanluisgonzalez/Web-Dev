import React, { useState } from 'react';
import { createClient } from 'pexels';
import styled from 'styled-components';


const Image =styled.img`
    
`;
const Pexels = () => {
    const [url,setUrl]= useState("https://thumbs.dreamstime.com/b/fashion-model-shopping-bag-isolated-white-background-full-bags-length-portrait-young-woman-smile-44465036.jpg");
    
    const client = createClient("563492ad6f917000010000019baa6ca87ed74a199f1471ea7283e13d");
    client.photos.curated({ per_page: 1 }).then(photos => {
        const {photos:[{src:{ original: originalImg}}]}=photos;
        setUrl(originalImg);
    });
    
    return (<Image src={url}/>);
}

export default Pexels;
