import { useState } from 'react';
import { Cross, LargeImg, CloseButton } from '../Modalka/Modalka.styled';

import Forest01   from '../../assets/forest01.png';
import Forest01s  from '../../assets/forest01s.png';
import Forest02   from '../../assets/forest02.png';
import Forest02s  from '../../assets/forest02s.png';
import Forest03   from '../../assets/forest03.png';
import Forest03s  from '../../assets/forest03s.png';

export const Modalka02 = () =>{

     const images = [
        { preview: Forest01s, large: Forest01 },
        { preview: Forest02s, large: Forest02 },
        { preview: Forest03s, large: Forest03 },
        ];

    //  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

    return (
        <>

        {/* <p>Modalka02</p> */}

        {/* <List items = {images} onSelect = {setSelectedImageUrl}/> */}
        <List items = {images}/>

        {/* {
        selectedImageUrl
        &&
        (<Modal url = {selectedImageUrl} onClose = {setSelectedImageUrl}/>)
        } */}

        </>
    );
};

  const List = ({ items }) =>{
        const [activeImage, setActiveImage] = useState(null);
        return (
        <div>
          {
            items.map( item =>(
            <ListItem 
            key =            {item.large}
            item =           {item}
            isModalOpen =    {item.large === activeImage}
            onOpen = {() =>  {setActiveImage(item.large)}}
            onClose = {() => {setActiveImage(false)}}
            />
            ))
          }
        </div> 
      );
    };


const ListItem = ({ item, isModalOpen, onOpen, onClose }) =>{
// const [ isModalOpen, setIsModalOpen ] = useState(false);

return  <>
        <div onClick={onOpen}>
        <img src={item.preview} alt="Forest" />
        
        </div>
        {
          isModalOpen
          &&
          <Modal url={item.large} onClose = {onClose}/> 
        }
        </>
    
}


const Modal = ({ url, onClose }) =>{
      return <LargeImg>
             <img src={url} alt="Forest" />
             <CloseButton onClick ={onClose}>
             <Cross/>
             </CloseButton>
             </LargeImg>
    }    
