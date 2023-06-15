
import './App.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header}  from './components/Header'
import { Skills } from './components/Skills'
import { Works } from './components/Works'

function App() {
  return (
    <>
 <div>
<Header/>
<Banner/>


<p className='a-discribe'   >describing about me </p>
<p className='a-a' id='about'  ><span className='a-color' >About</span> me</p>
<About/>
<p className='a-discribe' >what i have learnt so far</p>
<p className='a-a' id="skills" ><span className='a-color'  >My</span> skills</p>

<Skills/>
<p className='a-discribe'>what projects i have done so far  </p>
<p className='a-a' id='works' ><span className='a-color'  >My</span> Works</p>
<Works/>

<p className='a-discribe' >Feel free to contact </p>
<p className='a-a' id='contact' ><span className='a-color' >Contact</span> me</p>
<Contact/>
<Footer/>
 </div>
    </>
  )
}

export default App
