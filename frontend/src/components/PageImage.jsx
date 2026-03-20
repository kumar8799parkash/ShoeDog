import React, { useEffect, useState } from 'react'
import configObject from '../config.js';

const PageImage = ({ category }) => {
  const [imageURL, setImageURL] = useState();

  const fetchImage = async () => {
    try {
      const res = await fetch(`${configObject.BACKEND_URL}/category/${category}`);
      const data = await res.json();
      if (!data) {
        console.log("data is not available in pageImage component!!");
      }
      //console.log(data.imageURL);
      setImageURL(data.imageURL);
    }
    catch (err) {
      console.log(`Error in pageImage component : ${err}`);
    }
  }

  useEffect(() => {
    fetchImage();
  }, [category])

  return (
    <>
      <div className="image-cont w-full h-auto mb-12">
        <img className='w-full' src={imageURL} alt="" />
      </div>
    </>
  )
}

export default PageImage
