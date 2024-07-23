import React from 'react'
import "./searchItem.css"
import { Link, useNavigate } from "react-router-dom";

const SearchItem = () => {

  const navigate=useNavigate();

  const handleClick = () => {
      navigate("/hotels/2")
  }
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/482325651.webp?k=1269a5720e573c1ab47dc7f60032f671461d8eaebaa8e4aa2443fab71cca6584&o=" alt="" className='siImg'/>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
         <span className='siDistance'>500m from center</span>
         <span className='siTaxiOp'>Free airport taxi</span>
         <span className='siSubtitle'>Studio Apartment with Air Conditioning</span>
         <span className='siFeatures'>Entire studio  1 bathroom  21m^2 full bed</span>
         <span className='siCancelOp'>Free cancellation</span>
         <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleClick}>See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
