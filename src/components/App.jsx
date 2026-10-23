// import { Modalka         } from './Modalka';
import React, { useState } from 'react';

import { Cross, LargeImg, CloseButton } from './App.styled';


import Forest01   from '../assets/forest01.png';
import Forest01s  from '../assets/forest01s.png';
import Forest02   from '../assets/forest02.png';
import Forest02s  from '../assets/forest02s.png';
import Forest03   from '../assets/forest03.png';
import Forest03s  from '../assets/forest03s.png';

export const App = () => {

  //  const [ images, setImages ] = useState([
      const images = [
        { preview: Forest01s, large: Forest01 },
        { preview: Forest02s, large: Forest02 },
        { preview: Forest03s, large: Forest03 },
    ];

  const [ selectedImageUrl, setSelectedImageUrl ] = useState(null); 

    return (
  
    <div>  
        {/* <img src={Forest} alt="Forest" /> */}
        {/* <img src={ForestS} alt="Forest" /> */}
        <List items={images} onSelect = {setSelectedImageUrl}/>
        {selectedImageUrl
        &&
        <Modal url = {selectedImageUrl}
        onSelect = {setSelectedImageUrl}
        />
        }
        {/* {selectedImageUrl && <p>This is Modal</p>} */}

        
    </div>
  )
};

    const List = ({ items, onSelect }) =>{
      return (
        <div>
          {
            items.map( item =>(
              <ListItem key = {item.large} item = {item} onSelect={onSelect}/>
            ))
          }
        </div> 
      )
    }

    const ListItem = ({ item, onSelect }) =>{
      return <div onClick ={()=>onSelect(item.large)}>
             <img src={item.preview} alt="Forest" />
             </div>
    }

    const Modal = ({ url, onSelect }) =>{
      return <LargeImg>
             <img src={url} alt="Forest" />
             <CloseButton onClick ={()=>onSelect(null)}>
             <Cross/>
             </CloseButton>
             </LargeImg>
    }
    
