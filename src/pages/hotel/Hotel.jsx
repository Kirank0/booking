import React from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar" /* one double dot for going one level up i.e home to pages similarly the second */
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState, useEffect } from 'react'

const Hotel=()=> {

  const [slideInd, setSlideInd]=useState(0);
  const [open, setOpen]=useState(false);

  const photos=[
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover/252219_1516798033.jpg"
    },
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover-small/78800_1525741641.jpg"
    },
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover-small/8264561_1685241028.jpg"
    },
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover/74731_1516797846.jpg"
    },
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover-small/2469476_1691465543.jpg"
    },
    {
      src : "https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover/252219_1516798033.jpg"
    }
  ];

  const n=photos.length;

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='hotelContainer'>
       {open && <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>setSlideInd((slideInd-1+n)%n)}/>
        <div className='sliderWrapper'>
        <img src={photos[slideInd].src} alt="" className="sliderImg"/>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>setSlideInd((slideInd+1)%n)}/>
       </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span> Elton St 125 New york</span>
          </div>
          <span className='hotelDistance'>Excellent location 500m from center</span>
          <span className='hotelPriceHighlight'>Book a stay over $114 at this property and get a free airport taxi</span>
          <div className='hotelImages'>
             {photos.map((photo,i) => {
               return (
                <div className='hotelImgWrapper' key={photo.src}>
                  <img onClick={()=>{setSlideInd(i); setOpen(true)}} src={photo.src} alt="" className='hotelImg' />
                </div>
               );
             })}
          </div> 
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
            <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
              <p className='hotelDesc'>
              OYO Flagship Raj Residency is situated in Bangalore, 1.8 km from Forum Mall, Koramangala and 3.5 km from Brigade Road. With free WiFi, this 4-star hotel offers room service. Chinnaswamy Stadium is 4.7 km away and Kanteerava Indoor Stadium is 4.9 km from the hotel.

At the hotel rooms come with air conditioning and a TV.

Bull Temple is 5 km from OYO Flagship Raj Residency, while Visvesvaraya Industrial and Technological Museum is 5.4 km from the property. The nearest airport is Kempegowda International Airport, 36 km from the accommodation.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1 className=''>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an excellent loaction score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div> 
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel;
