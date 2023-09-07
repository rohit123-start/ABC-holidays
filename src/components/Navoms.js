import React from 'react'
import { Link } from 'react-router-dom'

const Navoms = () => {
  return (
    <div style={{backgroundColor:'silver'}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-size">
        <div class="container-fluid">
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/oms">Oms</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/account">Account</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/visa">Visa</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/flight">Flight</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/hotel">Hotel</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/sightseeing">Sightseeing</a>
                </li>
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/transfer">Transfer</a>
                </li>
            </ul>
            </div>
    </div>
    </nav>
    </div>
  )
}

export default Navoms