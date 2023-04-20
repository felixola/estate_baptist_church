import React from 'react';
import { Box } from '@mui/material';
import PropTypes from "prop-types";
import './YoutubeLive.css';


const YoutubeLive: React.FC<{embedId:string}>  = ({embedId}) => {
    return (
      <Box className="video-responsive" width='100%' >
      <iframe
        width='100%'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
    )
  }
  YoutubeLive.propTypes = {
      embedId: PropTypes.string.isRequired
    };

    export default YoutubeLive;