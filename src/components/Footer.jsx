import { FacebookLogo, GithubLogo, InstagramLogo } from 'phosphor-react'
import React from 'react'

export const Footer = () => {
  return (
<div className='f-footer'>
<div><p className='f-name'  >sourab yadav</p>
<p className="f-disc">A Passionate Web Developer
with good creativity skills
and prepared to work on
Realtime Projects...</p>
</div>
<div><p className='f-name' >Qick Links</p>


<li className="nav-links f-nam  ">
          <a className="nav-link active  " aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-links  f-nam  ">
          <a className="nav-link active  " aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-links f-nam ">
          <a className="nav-link active " aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav-links f-nam  ">
          <a className="nav-link active " aria-current="page" href="#works">Works</a>
        </li>   <li className="nav-links f-nam  ">
          <a className="nav-link active " aria-current="page" href="#contact">Contact</a>
        </li>

</div>
<div><p className='f-name'  >Get in touch </p>
<p className="f-disc" >you've found a better developer. </p>
<div  className='f-logo-flex' >
  {/* <div className='f-logo' >{InstagramLogo} </div>/ */}
  {/* <div  className='f-logo' >{FacebookLogo} </div> */}
  {/* <div  className='f-logo' >{GithubLogo} </div> */}
<img src='https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'/>
<img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'/>
<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png '/>


</div>


</div>


    </div>
  )
}
