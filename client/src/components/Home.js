import React from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.css';
import Livebidcarousel from './livebidcarousel'
const Home = () => {
  return (
    <div>
        <div className="first">
    <div className="boxx">
      <nav className="navbar navv">
        <ul>
          <li>
            <a className="active" href="#">Home</a>
          </li>
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <div className="dropdown lol">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Menu
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Home</a></li>
          <li><a className="dropdown-item" href="#">Live</a></li>
          <li><a className="dropdown-item" href="#">Contact us</a></li>
          <li><a className="dropdown-item" href="#">About</a></li>
        </ul>
      </div>
      
      <div className="dataCard">
        <div className="cards1">
          <h1>
            Build, Sell and <br />
            Earn
          </h1>
          <div className="buttt">
            <button type="button " className="btn btn-primary mx-[10px]">Login</button>
            <div className="emptyyy"></div>
          <button type="button " className="btn btn-primary mx-[10px]">Signup</button>
          </div>
        </div>
        <div className="cards2">
          <div className="imageCards2"></div>
          <div className="imageBackCol"></div>
        </div>
        <div className="image500"></div>
      </div>
    </div>
    <div className="bottomHome"> <Livebidcarousel/>
</div>

    <div className="lastSec">
      <div className="card" >
        <div className="extra1"></div>

        <div className="card-body">
          <h5 className="card-title">Cars</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" >
        <div className="extra2"></div>

        <div className="card-body">
          <h5 className="card-title">bicylce</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card">
        <div className="extra3"></div>

        <div className="card-body">
          <h5 className="card-title">Shoes</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" >
        <div className="extra4"></div>

        <div className="card-body">
          <h5 className="card-title">Motor Bike</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card">
        <div className="extra5"></div>

        <div className="card-body">
          <h5 className="card-title">Home</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" >
        <div className="extra6"></div>

        <div className="card-body">
          <h5 className="card-title">Books</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" >
        <div className="extra7"></div>

        {/* <div className="card-body">
          <h5 className="card-title">Paintings</h5>
          <p className="card-text">wanna take a quick ride</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div> */}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home
