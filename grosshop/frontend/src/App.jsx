import "./App.scss";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Welcome from "./pages/Welcome/Welcome";
import Nav from "./components/Nav/Nav";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import Cart from "./pages/Lists/Cart";
import Wishlist from "./pages/Lists/Wishlist";
import OrderList from "./pages/Lists/OrderList";
import Register from "./pages/Registry/Register";
import SignIn from "./pages/Registry/SignIn";
import SuccessNotification from "./components/SuccessNotification/SuccessNotification";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { useState } from "react";
import Home from "./pages/Home/Home";
import { UserContextProvider } from "./contextes/UserContext";
import Test from "./components/Test/Test";

function App() {
  const [login, setLogin] = useState(null);

  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<SignIn login={login} onLogin={setLogin} />} />
          <Route path="/signup" element={<Register onLogin={setLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register-success" element={<SuccessNotification />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edituser" element={<EditProfile />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/categorypage/:category" element={<CategoryPage />} />
          <Route path="/productdetail/:productId" element={<ProductDetail />} />
        </Routes>
      </UserContextProvider>
      {login ? <Nav /> : null}
    </Router>
  );
}

export default App;
