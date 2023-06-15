import React from 'react'

export const Header = () => {
  return (
    <div >
 <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid h2 ">
    <a className="navbar-brand " href="#"><h1 className=' h-logo '><span className='a-color' >PORT</span>FOLIO</h1></a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon   "></span>
    </button>
    <div className="collapse navbar-collapse f-nam " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 f-nam ">
  
        <li className="nav-links h2   ">
          <a className="nav-link " aria-current="page" href="#home">Home</a>
        </li>
  
        <li className="nav-links h2   ">
          <a className="nav-link  " aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-links h2 ">
          <a className="nav-link  " aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav-links h2 ">
          <a className="nav-link " aria-current="page" href="#works">Works</a>
        </li>   <li className="nav-links h2  ">
          <a className="nav-link " aria-current="page" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}


