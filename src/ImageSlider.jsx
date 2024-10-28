import React, { useEffect } from 'react'
import img1 from './assets/pexels-photo-1.jpeg'
import img2 from './assets/pexels-photo-2.jpeg'
import img3 from './assets/pexels-photo-3.webp'
import img4 from './assets/pexels-photo-4.jpeg'
import img5 from './assets/pexels-photo-5.webp'
import img6 from './assets/pexels-photo-5.jpg'
import img7 from './assets/pexels-photo-7.jpeg'
import img8 from './assets/pexels-photo-8.jpeg'
import img9 from './assets/pexels-photo-9.jpeg'

import './ImageSlider.css'



const ImageSlider = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.gallery');

    const handleWheelScroll = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaX;
      scrollContainer.style.scrollBehavior = 'auto';
    };

    // Add wheel event listener
    scrollContainer.addEventListener('wheel', handleWheelScroll);

    // Cleanup event listener on component unmount
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  const scrollNext = () => {
    const scrollContainer = document.querySelector('.gallery');
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
  };

  const scrollBack = () => {
    const scrollContainer = document.querySelector('.gallery');
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
  };
  return (
    
    <>
  {/* <h1 className="headline gray">Goodnight.</h1> */}
  <h1 style={{fontSize:'30px'}} className="headline gray">"You can be the brightest star in someone's darkest night."</h1>

  <div className='gallery-wrap'>
    <button className='btn' onClick={scrollBack}><i class="fa-solid fa-circle-chevron-left fa-xl mx-4"></i></button>
      <div className="flex gallery">
        <div>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
        </div>
      </div>
      <button className='btn' onClick={scrollNext}><i class="fa-solid fa-circle-chevron-right fa-xl mx-4"></i></button>
  </div>
    </>
  )
}

export default ImageSlider