import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Customer from '../components/customer/Customer';
import Items from '../components/items/Items';
import DirectSele from '../components/directSale/DirectSele';
import AddToCart from '../components/addToCart/addToCart';
import Branch from '../pages/branch/Branch';
import Brand from '../pages/brand/Brand';
import Category from '../pages/category/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
   children: [
    { path: '/', element: <Home /> },
    { path: '/customer', element: <Customer /> },
    { path: '/items', element: <Items /> },
    { path: '/direct-sale', element: <DirectSele /> },
    { path: '/add-to-cart', element: <AddToCart /> },
    { path: '/setup/branch', element: <Branch /> },
    { path: '/setup/brand', element: <Brand /> },
    { path: '/setup/category', element: <Category /> },
  ],
  },
]);

export default router;
