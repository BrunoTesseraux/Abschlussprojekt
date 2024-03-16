import './App.scss'

import CategoryCard from './components/CategoryCard/CategoryCard'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Welcome from './pages/Welcome/Welcome'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile'
import Cart from './pages/Lists/Cart'
import Wishlist from './pages/Lists/Wishlist'
import OrderList from './pages/Lists/OrderList'
import Register from './pages/Registry/Register'
import SignIn from './pages/Registry/SignIn'
import SuccessNotification from './components/SuccessNotification/SuccessNotification'
import Filter from './components/Filter/Filter'
import CategoryList from './components/CategoryList/CategoryList'
import ProductListSmall from './pages/ProductListSmall/ProductListSmall'
import CategoryPage from './pages/CategoryPage/CategoryPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/register-success" element={<SuccessNotification />} />
      </Routes>

      {/* <Nav/> */}
      {/* <OrderList/> */}
      {/*<CategoryPage/>*/}
      {/* <Filter/> */}
      {/* <Cart/> */}
      {/* <ProductListSmall/> */}
      {/* <Profile/> */}
      {/* <EditProfile/> */}
      {/* <CategoryCard/> */}
      {/* <CategoryList/> */}
      {/* <ProductDetail/> */}
      {/* <Wishlist/> */}
    </Router>
  );
}

export default App;
