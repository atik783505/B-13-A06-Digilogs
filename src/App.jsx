
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products/Products'

function App() {
const productData = fetch('/data.json').then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>products comming</p>}>
      <Products productData={productData}></Products>
      </Suspense>
    </>
  )
}

export default App
