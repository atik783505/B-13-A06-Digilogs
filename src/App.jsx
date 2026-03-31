
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products/Products'
import { ToastContainer } from 'react-toastify'
import Stats from './components/stats/Stats'
import Footer from './components/footer/Footer'
import Workflow from './components/Workflow/Workflow'
import Steps from './components/steps/Steps'
import Pricing from './components/Pricing/Pricing'

function App() {
  const productData = fetch('/data.json').then(res => res.json())
  const [cartedProducts, setcartedPtoduct] = useState([])

  return (

    <>
      <Navbar cartedProducts={cartedProducts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<div className='text-center py-30'><span className="loading loading-bars loading-xl"></span></div>}>
        <Products cartedProducts={cartedProducts} setcartedPtoduct={setcartedPtoduct} productData={productData}></Products>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
