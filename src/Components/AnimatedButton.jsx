import React from 'react';
import { Box } from '@mui/material';
const AnimatedButton = () => {
  return (
    <Box sx={{width:'160px',height:'64px',overflow:'hidden'}}>

      <video width={160} height={64}
            id="cc7e7f93-8bcd-bbf2-919f-7ef0e57918e3-video"
            autoPlay
            loop
            style={{
              backgroundImage:
                'url("https://uploads-ssl.webflow.com/6383b56a0b97f692d8d9bddb/63974c7ecb940a112a157e61_Visewealth Button MP4 (1)-poster-00001.jpg")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://uploads-ssl.webflow.com/6383b56a0b97f692d8d9bddb/63974c7ecb940a112a157e61_Visewealth Button MP4 (1)-transcode.mp4"
              data-wf-ignore="true"
            ></source>
            <source
              src="https://uploads-ssl.webflow.com/6383b56a0b97f692d8d9bddb/63974c7ecb940a112a157e61_Visewealth Button MP4 (1)-transcode.webm"
              data-wf-ignore="true"
            ></source>
          </video>

    </Box>

      

          
        
  );
};

export default AnimatedButton;
