import React from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Contact from "./pages/contact/Contact";
import Cards from "./components/cards/Cards";

const Home = () => {
  return (
    <div>
      <Hero />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}></Route>
        <Route element={<Layout />}>
          <Route path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
