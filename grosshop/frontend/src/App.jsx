import './App.scss'
import ProducrCardLarge from './components/ProducrCardLarge/ProducrCardLarge'
import ProductCardSmall from './components/ProductCardSmall/ProductCardSmall'
import CategoryCard from './components/CategoryCard/CategoryCard'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Welcome from './pages/Welcome/Welcome'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import OrderCard from './components/OrderCard/OrderCard'


function App() {

  return (
    <Router>
      <Welcome/>
      <Nav/>
      <OrderCard/>
      <CategoryCard/>
      <ProducrCardLarge/>
      <ProductCardSmall/>
      <ProductDetail/>
    </Router>
  )
}

export default App
