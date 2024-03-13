import './App.scss'
import ProducrCardLarge from './components/ProducrCardLarge/ProducrCardLarge'
import ProductCardSmall from './components/ProductCardSmall/ProductCardSmall'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Welcome from './pages/Welcome/Welcome'


function App() {

  return (
    <>
      <Welcome/>
      <ProducrCardLarge/>
      <ProductDetail/>
      <ProductCardSmall/>
    </>
  )
}

export default App
