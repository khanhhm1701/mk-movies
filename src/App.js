import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom"

import Home from '../src/pages/Home'
import Catalog from '../src/pages/Catalog'
import Detail from './pages/detail/Detail'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category/search/:keyword",
        element: <Catalog />,
      },
      {
        path: "/:category/:id",
        element: <Detail />
      },
      {
        path: "/:category",
        element: <Catalog />,
      }
    ]

  }
])



function App() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
