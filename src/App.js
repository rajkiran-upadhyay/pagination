
import { useEffect, useState } from 'react';
import './App.css';
import Prod from './Prod';

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()
    if (data && data.products) {
      setProducts(data.products)
      // console.log(data)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <Prod products={products} />
  );
}
export default App;