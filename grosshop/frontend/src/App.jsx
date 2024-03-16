import "./App.scss";

import CategoryCard from "./components/CategoryCard/CategoryCard";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Welcome from "./pages/Welcome/Welcome";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import Cart from "./pages/Lists/Cart";
import Wishlist from "./pages/Lists/Wishlist";
import OrderList from "./pages/Lists/OrderList";
import Register from "./pages/Registry/Register";
import SignIn from "./pages/Registry/SignIn";
import SuccessNotification from "./components/SuccessNotification/SuccessNotification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/register-success" element={<SuccessNotification />} />
      </Routes>
      {/*  */}
      {/* <Nav/> */}
      {/* <OrderList/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      {/* <EditProfile/> */}
      {/* <CategoryCard/> */}
      {/* <ProductDetail/> */}
      {/* <Wishlist/> */}
    </Router>
  );
}

export default App;
