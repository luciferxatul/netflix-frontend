import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./featured.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getRandomContent = async () => {
            try{
                const res = await axios.get(`/movies/random?type=${type}`, {
                headers: {
                    token:
                       "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                  },
                });
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);
    
    const toWatch = () => {
        navigate("/watch", {state:content});
    }
    
  return (
    <div className="featured">
        {type && (
            <div className='category'>
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                    
                    <option>Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="horror">Horror</option>
                    <option value="drama">Drama</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>                   
                    <option value="historical">Historical</option>                    
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>                    
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src={content.img} alt=""/>
        
        <div className='info'>
            <img src={content.imgTitle} alt=""></img>
            <span className='desc'>
                {content.desc}
            </span>
            <div className='buttons'>
                <button className='play' onClick={() => {toWatch()}}>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Featured