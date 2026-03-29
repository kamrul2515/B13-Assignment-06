
import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Rating from './components/homepage/rating/Rating'
import Navbar from './components/navbar/Navbar'
import ToolsCard from './components/toolscard/ToolsCard'

const fetchToolsCard = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
 const toolsCardData = fetchToolsCard();
  return (
    <>
    <header>
    <Navbar></Navbar>
    </header>
    <main className='pt-20'>
   <Banner></Banner>
   <Rating></Rating>
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <ToolsCard toolsCardData={toolsCardData}></ToolsCard>
   </Suspense>
   </main>
 
    </>
  )
}

export default App
