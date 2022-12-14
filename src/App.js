// IMPORT useState
import React, {useState} from 'react';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from './imageData'

export default function App() {
 // USE useState TO CREATE  [bigImage, setBigImage] 
 // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
 

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

const handleClick = (url)=>{setBigImage(url)}

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
const images = imagesArr.map((image, index) => {
  return(
    <img src={image.img} alt={image.alt} className={image.className} key={index}
    onClick={() => handleClick(image.img)} /> )
});


  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
         
        </div>
        <img src={bigImage} id='bigimage' alt='bigImage'/> 
      </div>
    </div>
  );
}
