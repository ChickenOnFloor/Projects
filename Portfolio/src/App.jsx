import Navbar from './components/Navbar';
import Hero from './pages/Hero';


import { ReactLenis, useLenis } from 'lenis/react'
import Stuff from './pages/Stuff';

function Component() {
  const lenis = useLenis(({ scroll }) => {
  })

  return (
    <ReactLenis root>
     <div className='w-full h-screen max-w-[1920px] relative'>
        <Navbar />
        <Hero />
        <Stuff />
      </div>
    </ReactLenis>
  )
}
export default function App() {
  return (
    Component()
  )
}