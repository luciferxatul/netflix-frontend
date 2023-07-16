import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem';
import "./list.scss";
const List = ({list}) => {

  const listRef = useRef()
  const [sliderCount, setSliderCount] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const handleClicked = (direction) => {

    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance)


      if (direction === "left" && sliderCount > 0){
        setSliderCount(sliderCount - 1);
        listRef.current.style.transform = `translateX(${distance + 230}px)`
      }

      if (direction === "right" && sliderCount < 10 - clickLimit){
        setSliderCount(sliderCount + 1);
        listRef.current.style.transform = `translateX(${distance - 230}px)`
      }
  }

  return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined className='sliderArrow left' 
              onClick={()=>handleClicked("left")} 
              style={{display: !isMoved && "none"}}
            /> 
            <div className='container' ref={listRef}>
              {list.content.map((item, i) => {
                return <ListItem item={item} index={i}/>
              })} 
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClicked("right")}/>
        </div>
    </div>
  )
}

export default List