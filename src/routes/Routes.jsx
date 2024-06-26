import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Items from "../components/items/Items";
import DirectSele from "../components/directSale/DirectSele";
import AddToCart from "../components/addToCart/addToCart";
import Branch from "../pages/branch/Branch";
import Brand from "../pages/brand/Brand";
import Category from "../pages/category/Category";
import Unit from "../pages/unit/Unit";
import Size from "../pages/size/Size";
import Color from "../pages/color/Color";
import Product from "../pages/product/Product";
import Supplier from "../pages/supplier/Supplier";
import Customer from "../pages/customer/Customer";
import MangeStock from "../pages/stock/manage-stock/MangeStock";
import AddStock from "../pages/stock/add-stock/AddStock";
import Report from "../pages/report/Report";
import Variant from "../pages/variant/Variant";
import AddSale from "../pages/sale/add-sale/AddSale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/setup/customer/", element: <Customer /> },
      { path: "/items", element: <Items /> },
      { path: "/direct-sale", element: <DirectSele /> },
      { path: "/add-to-cart", element: <AddToCart /> },
      { path: "/setup/branch", element: <Branch /> },
      { path: "/setup/brand", element: <Brand /> },
      { path: "/setup/category", element: <Category /> },
      { path: "/setup/unit", element: <Unit /> },
      { path: "/setup/size", element: <Size /> },
      { path: "/setup/color", element: <Color /> },
      { path: "/setup/variant", element: <Variant /> },
      { path: "/setup/product", element: <Product /> },
      { path: "/setup/supplier", element: <Supplier /> },

      // stock  path
      { path: "/stock/add-stock", element: <AddStock /> },
      { path: "/stock/manage-stock", element: <MangeStock /> },
      { path: "/stock/report", element: <Report /> },

      // sale
      { path: "/sale/add-sale", element: <AddSale /> },
    ],
  },
]);

export default router;
