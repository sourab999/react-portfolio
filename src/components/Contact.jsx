import React from 'react'
import { PaperPlaneRight } from 'phosphor-react'
export const Contact = () => {
  return (
    <div className='c-form1 '>
<form action='https://formspree.io/f/xgebkzvn' method='POST' className='c-form2'>
  
<div className="form-group">
    <label for="xampleFormControlInput1">Name</label>
    <input type="text" className="c-forma"  name="email"  placeholder="Name" autoComplete='off' required/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Email </label>
    <input type="email" className="c-forma" name="email"  placeholder="name@example.com" autoComplete='off' required/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="c-forma"  rows="3"></textarea>
  </div>

  <div className="form-group">

  {/* <div className='c-before' > */}
  <label for="xampleFormControlInput1"></label>

  <input className='c-for' type='submit' value="send message "  id='c-id2'
   />

  </div>
  {/* </div> */}

</form>


    </div>
  )
}
