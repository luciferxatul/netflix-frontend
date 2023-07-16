import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  return (
    <div className='watch'>
      <Link to="/">
        <div className='back'>
            <ArrowBackOutlined/>
            Home
        </div>
      </Link>
        <video className='video' autoPlay progress controls src={location.state.video} />
        
    </div>
  )
}

