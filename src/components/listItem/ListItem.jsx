import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./listItem.scss"
import axios from 'axios';

function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        const getMovie = async ()=>{
            try{
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                    token:
                      "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                  },
                });
                setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    const toWatch =() =>{
        navigate("/watch", {state:movie});
    }
    
  return (
    <a onClick={()=>{toWatch()}}>
        <div 
            className='listItem'
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={movie.imgSm} alt=""/>
            {isHovered &&(
                <>
                    <video src={movie.trailer} autoPlay={true} loop/>
                    <div className='itemInfo'>
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpOffAltOutlined className="icon" />
                            <ThumbDownOffAltOutlined className="icon" />
                        </div> 
                        <div className='itemInfoTop'>
                            <span>{movie.duration}</span>
                            <span className='limit'>+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                         <div className='desc'>
                            {movie.desc}
                        </div>
                        <div className='genre'>{movie.genre}</div>
                    </div>
                </>  
            )}
        </div>
    </a>  
  );
}

export default ListItem