import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import Homepage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";
//import <ProductDetailsPage

const router=createBrowserRouter([
  {path:"/",
element:<RootLayout/>,
errorElement:<ErrorPage/>,
children:[
  {path:"/",element: <Homepage/>},
  {path:"/products",element:<Products/>},
  {path:"/products/:productId",element:<ProductDetailsPage/>}
  
]

},
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
