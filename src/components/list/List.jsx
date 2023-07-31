import React, { useRef, useState } from 'react'
import "./list.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';


const List = () => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [isLeftMoved,setIsLeftMoved]=useState(false);
    const [isRightMoved,setIsRightMoved]=useState(true);
    const listRef =useRef();
    const handleClick=async(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x-50;
        if(direction ==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform=`translateX(${230+distance}px)`;
            console.log(listRef.current.getBoundingClientRect().width+distance+50);
            console.log(distance+50);
        }
        if(direction==="right" && slideNumber < 5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform=`translateX(${-230+distance}px)`;

        }
        setIsLeftMoved(slideNumber>1 || direction==="right");
        setIsRightMoved(slideNumber<4 || direction==="left");
    }

  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={async()=>await handleClick("left")} style={{display:!isLeftMoved &&"none"}} />
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
     
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={async()=>await handleClick("right")} style={{display:!isRightMoved &&"none"}} />
      </div>
    </div>
  )
}

export default List
