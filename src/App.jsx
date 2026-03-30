
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Rating from './components/homepage/rating/Rating'
import Navbar from './components/navbar/Navbar'
import ToolsCard from './components/homepage/toolscard/ToolsCard'
import { toast, ToastContainer } from 'react-toastify'
import StartedCards from './components/StartedCards/StartedCards'

const fetchToolsCard = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
 const allDataPromise = fetchToolsCard();
  const [cartCount, setCartCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]); 

  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setCartCount(prev => prev + 1);
  }

  const handleRemoveFromCart = (id) => {
    const updatedProducts = selectedProducts.filter(item => item.id !== id);
    setSelectedProducts(updatedProducts);
    setCartCount(updatedProducts.length);
    toast.error("Removed from cart!");
  }

  const handleResetCart = () => {
    setSelectedProducts([]);
    setCartCount(0);
    toast.success("Proceeding to checkout!", { position: "top-center" });
  }

  return (
    <>
    <header>
    <Navbar cartCount={cartCount} handleResetCart={handleResetCart}></Navbar>
    </header>
    <main className='pt-20'>
   <Banner></Banner>
   <Rating></Rating>
        
         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <ToolsCard 
            toolsCardData={allDataPromise} 
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart} 
            handleResetCart={handleResetCart} 
            cartCount={cartCount}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
          <StartedCards stepsDataPromise={allDataPromise} />
        </Suspense>

   {/*  */}

   <ToastContainer />
   </main>
 
    </>
  )
}

export default App
