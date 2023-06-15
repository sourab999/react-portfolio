import React from 'react'
import Ban from '../Images/banner-01.png'
import { Button } from 'bootstrap'
import { DownloadSimple } from 'phosphor-react'
export const Banner = () => {
  return (
    <div>
      <div className=''>
        <div className='b-flex'>
<div className='b-flexy'>
 <p className='b-welcome' >WELCOME!! </p>
 <p className='b-name' > Hello 	 &#x1F44B;  I'm Sourab </p>
 <p className='changecontent' ></p>
 <div className='d-discb'>
<p className='b-disc'> I'm junior software developer I've made many projects
Now I'm seeking for the job as a Frontend Developer... </p>
</div>
<div className='b-icon' >
<a className="b-hire " href="#contact">HIRE ME</a>
<a className='b-resume'  href='https://flowcv.com/resume/e6mk9l6e4d'>MY RESUME <DownloadSimple/>  </a>
{/* &#8594; */}
</div>
</div>

<div className="b-imgp"><img className='b-impa' src={Ban}/>   </div></div>
        </div>
      </div>
    // </div>
  )
}
