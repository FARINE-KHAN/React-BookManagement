import React from "react";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { Register } from "./pages/Users/Register";
import{Login} from "./pages/Users/Login"
import {Home} from "./pages/main/Home"
import {PageNotFound} from "./pages/main/PageNotFound"

const router=createBrowserRouter([
  {
   path:"/"
  }
])
function App() {
  return(<>
  <RouterProvider>
  router={router}
  </RouterProvider>
  </>) ;
}

export default App;
