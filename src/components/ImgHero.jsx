import React from 'react';
import BackgroundHero from '@/components/icons/BackgroundHero';
import Mobiles from '@/images/image-mockups.png'


const ImgHero = () => {
  return (
    <div style={{ maxHeight: '28rem', overflow: 'hidden'}}>
      <BackgroundHero />
      <img src={Mobiles} alt="imagenes de celulares" style={{position:'absolute', top:0, width:'30rem', left:'50%'}}/>
    </div>
  );
};

export default ImgHero;
