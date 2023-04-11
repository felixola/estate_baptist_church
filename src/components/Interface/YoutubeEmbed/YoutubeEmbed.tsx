import React from 'react';
import PropTypes from "prop-types";
import { Box } from '@mui/material';
import './YoutubeEmbed.css';

const YoutubeEmbed: React.FC<{embedId:string}>  = ({embedId}) => {
  return (
    <Box className="video-responsive" width='100%'>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Box>
  )
}
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  

export default YoutubeEmbed;