import { useState } from 'react'
import Hero from './components/Hero'
import useLenisScroll from './hooks/lenis/useLenis'
import About from './components/About';
import NavBar from './components/NavBar';
import Features from './components/Features';
import Story from './components/Story';

function App() {

  useLenisScroll();

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        <Hero />
        <About/>
        <Features/>
        <Story />
    </main>
  )
}

export default App
