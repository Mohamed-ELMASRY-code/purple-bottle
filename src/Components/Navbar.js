import React from 'react'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 


const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
    <div class="d-flex mx-5">
      <a class="navbar-brand" href="#!"><span style={{color:"#A020F0"}}>Purple</span><span style={{color: "#fff"}}>Bottle</span></a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#!">Offer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Reference</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
            <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
