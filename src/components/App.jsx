import { Modalka } from './Modalka';
import { React, useState } from 'react';

export const App = () => {

   const [ images, setImages ] = useState([
      { preview: 'preview-1', large: 'large-1'},
      { preview: 'preview-2', large: 'large-2'},
      { preview: 'preview-3', large: 'large-3'}
    ]);

  const [ selectedImageUrl, setSelectedImageUrl ] = useState(null); 

    return (
  
    <div>  
        <List items={images} onSelect = {setSelectedImageUrl}/>
        {/* {selectedImageUrl && <Modal url = {selectedImageUrl}/>} */}
        {selectedImageUrl && <p>This is Modal</p>}
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
      return <div onClick ={()=>onSelect(item.large)}>{item.large}</div>
    }

 
