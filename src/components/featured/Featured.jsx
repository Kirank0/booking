import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
