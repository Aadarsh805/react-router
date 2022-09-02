import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
import Navbar from "./Navbar";
import OrderSummary from "./OrderSummary";
import NoMatch from "./NoMatch";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";
import Profile from "./Profile";
import { AuthProvider } from "./auth";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
const LazyAbout = React.lazy(() => import("./About"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route path="featured" element={<FeaturedProducts />} />
            <Route index element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
