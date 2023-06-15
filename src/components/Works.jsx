import React from 'react'
import one from '../Images/one.png'
import two from '../Images/two.png'
import th from '../Images/th.png'
import { Code, Eye } from 'phosphor-react'


export const Works = () => {
  return (<>
    <div className='d-works '>


    <div className='d-works3'   >
  <div className='d-works2'>
<img src={th} className='d-img3' />


<div className='d-disc'>

<div className='d-discb'>
<p>This website is simple landing page i made with the help of html,css and boostrap,this website is simple landing page here various  tours place and there travelling pacakage is mentioned.</p>
</div>
<div className='d-btn'>
  <a className='d-preview' href="https://647769b26afc2a3f17adc432--sparkly-conkies-39f0a2.netlify.app/"> live preview <Eye/>    </a>
  <a className='d-code' href="https://github.com/sourab999/visit" > source code <Code/>  </a>
</div>
</div>
</div>
</div>
  
  

<div className='d-works3'>
<div className='d-works2'>
{/* <div className='d-discb'> */}
  <img src={two} className='d-img3' />
  {/* </div> */}


<div className='d-disc'>
<div className='d-discb'>

<p>This website is  mini ecommerce hee we can add and remove products from the cart ther is also further single product page were we can know the description of the project here we used api to get all the projects in the home page </p>
</div>

<div className='d-btn'>
  <a className='d-preview' href="https://64771561889e5c09973bccaa--stellular-crepe-45b41c.netlify.app/" >live preview <Eye/> </a>
  <a href='https://github.com/sourab999/mini-ecommerce' className='d-code' >source code <Code/>  </a>
  </div>
</div>
</div>
</div>



<div className='d-works3'>
<div className='d-works2'>
  {/* <div className='d-works4'> */}
  <img src={one} className='d-img3' />


  {/* </div> */}

<div className='d-disc'>
{/* <div className='d-discb'> */}

<p>This website is used to search varios types of cocktails and there is single project page where the details of the cocktail is mentioned in this project we used cocktails Api.</p>
{/* </div> */}

<div className='d-btn'   >
  <a className='d-preview' href="https://64776ff43d47a64730bbcfbf--resilient-medovik-6afedf.netlify.app/" >live preview <Eye/>  </a>
  <a className='d-code' href="https://github.com/sourab999/react-cocktail">source code <Code/>  </a>
  </div>
  
</div>
</div>
</div>



    </div>
    </>)
}
