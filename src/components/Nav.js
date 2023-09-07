import React from 'react'

const Nav = () => {
  return (
    <div>
      <div style={{backgroundColor:'silver'}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-size">
        <div class="container-fluid">
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <h5>ABC HOLIDAYS</h5>
                </a>
                </li>
            </ul>
         </div>
         </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav