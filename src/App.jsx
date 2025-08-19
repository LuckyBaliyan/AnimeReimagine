import { useState } from 'react'
import Hero from './components/Hero'
import useLenisScroll from './hooks/lenis/useLenis'
import About from './components/About';

function App() {

  useLenisScroll();

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Hero />
        <About/>
    </main>
  )
}

export default App
